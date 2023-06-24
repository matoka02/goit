"use strict";

// <!-- Лекция 11.11.2022 -->


// // 1. Асинхронный код,
// https://handlebarsjs.com/guide/
// Мікро процеси мають більший пріорітет
// Мікро процеси
// Observer
// Promise



// Макро процеси
// setTimeout
// setInterval
// setimmediate
// requestAnimationFrame

// // макропроцесс => call Steck => webAPI call Steck, если синхронный код и микропроцессы выполнены
// setTimeout(()=>{'setTimeout'});
// // микропроцесс => call Steck => webAPI => call Steck, если синхронный код выполнен
// Promise.resolve().then(()=>{console.log('Promise');});
// // синхронный код => call Steck 
// console.log('object');

// const promise = new Promise((res, rej)=>{
//     const random = Math.random();

//     if (random>0.5) {
//         res(20);
//     } else{
//         rej('Error!');
//     }
// });
// // console.log(promise);           // Promise {<rejected>: 10}

// // promise.then((res)=>{console.log(res);},(err)=>{console.log(err);});                          // Error

// // promise
// // .then((res)=>{
// //     //
// //     //
// //     //
// //     //
// //     //
// //     //
// //     console.log(res);                       // 20
// // }).catch(err => console.log(err))          // Error
// // .finally(()=>{
// //     //
// // })

// promise
// .then((res) => {
//     return res * 2                        // 40           
// })
// .then((data) => data / 18  )                    // 40/18=2.222                    
// .then((data) => { console.log(data)})            // underfined                    
// .catch(err => console.log(err))          
// .finally(()=>{
//     //
// })


// // 2.Запрос к бекенду 
// // https://swapi.dev/api/

// console.log('Before');
// const promise = fetch('https://swapi.dev/api/people/5');
// // console.log(promise);
// promise.then(res => res.json())
// // .then(data => console.log(data))        //{name: 'Leia Organa', height: '150', mass: '49', hair_color: 'brown', skin_color: 'light', …}
// .then(data => {
//     foo(data);
//     console.log(data);                                      
// })
// .catch(err => console.log(err))
// .finally(() => console.log('After all'));
// console.log('After');

// function foo(obj) {
//     console.log('in function', obj);        //in function {name: 'Leia Organa', height: '150', mass: '49', hair_color: 'brown', skin_color: 'light', …}
// };


// // 3. Методы Promise

// setTimeout(()=>{'setTimeout'});

// Promise.resolve().then(()=>{console.log('Promise');});

// console.log('object');


// // 4. Примаер Репеты

const isSuccess = Math.random() > 0.9;
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isSuccess) {
            resolve('Success! Value passed to resolve function');
        } else {
            reject('Error! Error passed to reject function');
        }
    }, 0);
});
promise
    .then(
        value => {
            console.log('onResolve call inside promise.then()');
            console.log(value); // "Success! Value passed to resolve function"
            return '1 yes';
        },
        error => {
            console.log('onReject call inside promise.then()');
            console.log(error); // "Error! Error passed to reject function"
            throw new Error('1 no')
        }
    )
    .then(
        x => {
            console.log(x);
            return '2 yes';
        },
        error => {
            console.log(error);
            return ('2  no')
        }
    )
    .then(
        y => {
            console.log(y);
            console.log('3 yes');
        },
        error => {
            console.log(error);
            console.log('3 no');
        }
    );


// // 5. Подключение стилей из библиотеки

// В терминале прописать
// npm install --save-dev parcel-transformer-hbs

// Добавить в файл parcelrc
//  "transformers": {
//     "*.hbs": [
//         "parcel-transformer-hbs"
//       ]
//     }
