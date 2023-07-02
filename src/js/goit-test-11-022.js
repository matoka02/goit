"use strict";


// <!-- Лекция 26.11.2022 -->

// 1. Примеры асинхронных функций

// async function foo(){
//     return 'hello'
// };
// // console.log(foo);           // async ƒ foo() {}
// // console.log(foo());         // Promise {<fulfilled>: hello}   
// foo()
// .then(data => console.log('data', data))    // hello - все ответы от асинхронной функции придут в then
// .catch(err => console.log('err', err));

// 2. Примеры асинхронных функций

// async function foo(){
//     const notAwait = fetch('https://swapi.dev/api/people/1/');
//     // первый ответ
//     console.log('notAwait', notAwait);      // notAwait Promise {<pending>}
//     // третий ответ
//     const withAwait = await fetch('https://swapi.dev/api/people/1/');
//     console.log('withAwait', withAwait);    // withAwait Response {type: 'cors', url: 'https://swapi.dev/api/people/1/', redirected: false, status: 200, ok: true, …}

//     // const data = await resp.json();
//     // console.log(data);              // {name: 'Luke Skywalker', height: '172', mass: '77', hair_color: 'blond', skin_color: 'fair', …}

//     return 'hello';
// };
// // второй ответ(серия)
// console.log('foo()', foo());        // Promise {<pending>}
// for (let i = 0; i < 20; i+=1) {
//     console.log('value', i);    
// }

// 3. Пример асинхронной функции, если данные обрабатываются внутри функции

// const list = document.querySelector('.list');

// async function foo() {
//     try {
//         const resp = await fetch('https://swapi.dev/api/people/1/'); //
//         if (!resp.ok) {
//             throw new Error('RESP NOT OK!')
//         }
//         const data = await resp.json();

//         list.insertAdjacentHTML('beforeend', `<li>
//         <h1>${data.name}</h1>
//         <h2>${data.gender}</h2>
//         </li>`);

//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }
// foo();


// // 4. Пример асинхронной функции, если данные нужно передать из функции наружу

// const list = document.querySelector('.list');

// async function foo() {
//         const resp = await fetch('https://swapi.dev/api/people/1/'); //
//         if (!resp.ok) {
//             throw new Error('RESP NOT OK!')
//         }
//         const data = await resp.json();
//         return data;
// }
// foo()
// .then(data => {
//     console.log(data);
//     list.insertAdjacentHTML('beforeend', `<li>
//     <h1>${data.name}</h1>
//     <h2>${data.gender}</h2>
//     </li>`);
// })
// .catch(err => console.log(err));


// 5. Пример асинхронной функции с параллельной обработкой

const list = document.querySelector('.list');

// // 5.1 отработаются только успешные промисы
// async function foo() {
//     const arr = [1,2,3,4,5];
//     const resps = await arr.map(async hero => await fetch(`https://swapi.dev/api/people/${hero}/`));
//     console.log(resps);     // (5) [Promise, Promise, Promise, Promise, Promise]
//     const data = await Promise.all(resps);
//     console.log(data);      // (5) [Response, Response, Response, Response, Response]
//     data.forEach(item => console.log(item))
//     return data;
// }
// foo();

// 5.2 отработаются все промисы
async function foo() {
    const arr = [1,2,3,4,5];
    const resps = await arr.map(async hero => await fetch(`https://swapi.dev/api/people/${hero}/`));
    console.log(resps);     // (5) [Promise, Promise, Promise, Promise, Promise]
    const data = await Promise.allSettled(resps);
    console.log(data);      // (5) {status: 'fulfilled', value: Response}
    data.forEach(item => console.log(item))
    return data;
}
foo();

// 5.3 отработает любой успешный промис, но только 1
async function foo() {
    const arr = [1,2,3,4,5];
    const resps = await arr.map(async hero => await fetch(`https://swapi.dev/api/people/${hero}/`));
    console.log(resps);     // (5) [Promise, Promise, Promise, Promise, Promise]
    const data = await Promise.race(resps);
    console.log(data);      // Response {type: 'cors', url: 'https://swapi.dev/api/people/1/', redirected: false, status: 200, ok: true, …}
    // data.forEach(item => console.log(item))
    return data;
}
foo();