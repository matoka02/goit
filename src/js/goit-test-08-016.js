"use strict";


// <!-- Лекция 04.11.2022 -->


// // 1. SessionStorage и LocalStorage

// const session = document.querySelector('.session');
// const local = document.querySelector('.local');
// const remove = document.querySelector('.remove');

// session.addEventListener('click', onSession);
// const arr = [1,2,3,4];

// function onSession() {
//     // sessionStorage.setItem('session', 'hello session');
//     // sessionStorage.setItem('session', arr);
//     // localStorage.getItem('local');
//     // console.log(typeof localStorage.getItem('local'));
//     // console.log(localStorage.getItem('local'));

//     // const data = localStorage.getItem('local');
//     // const resp = JSON.parse(data);
//     // console.log(resp);

//     const data = JSON.parse(localStorage.getItem('local')) || [];
//     console.log(data);
//     data.forEach(element => {
//         console.log(element);
//     });
// };

// local.addEventListener('click', onLocal);

// function onLocal() {
//     // localStorage.setItem('local', 'hello local');
//     // localStorage.setItem('local', arr);

//     localStorage.setItem('local', JSON.stringify(arr));    
//     localStorage.setItem('local-01', JSON.stringify(arr));    
//     localStorage.setItem('local-02', JSON.stringify(arr));    
// };

// remove.addEventListener('click', onRemove);  

// function onRemove() {
//     // localStorage.removeItem('local');       // удалание 1 ключа  
//     localStorage.clear();                     // удаление всех ключей
// };


// // 2. Безопасная передача

// try {
//     console.log(a);
// } catch (error) {
//     console.log(error);
// };

// console.log('hello world');


// // 3. Рефакторинг SessionStorage и LocalStorage

// const session = document.querySelector('.session');
// const local = document.querySelector('.local');
// const remove = document.querySelector('.remove');

// session.addEventListener('click', onSession);
// const arr = [1,2,3,4];

// function onSession() {

//     try {
//         // const data = JSON.parse(localStorage.getItem('local')) || [];
//         const data = JSON.parse(localStorage.getItem('local'));
//         if (data.length <2) {
//             // регистрация ошибки и передача ее в catch
//             throw new Error('Array is empty');
//         }    
//         console.log(data);
//         data.forEach(element => {
//             console.log(element);
//         });
//     }   catch (error) {
//             console.log(error);
//     }   finally{
//         console.log('hello world');
//     } 

// };

// local.addEventListener('click', onLocal);

// function onLocal() {
//     localStorage.setItem('local', 'arr');    
//     localStorage.setItem('local-01', JSON.stringify(arr));    
//     localStorage.setItem('local-02', JSON.stringify(arr));    
// };

// remove.addEventListener('click', onRemove);  

// function onRemove() {
//     localStorage.removeItem('local'); 
// };  


// // 3. Игра крестики-нолики

const content = document.querySelector('.content');
const restart = document.querySelector('.js-restart');

content.insertAdjacentHTML('beforeend', createMarkup());
content.addEventListener('click', onClick);
restart.addEventListener('click', onRestart);

let player = 'X';

const stepX = [];
const stepO = [];

const win = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

function createMarkup() {
    let markup = '';
    for (let i = 1; i <= 9; i += 1) {
        markup += `<div class="item" data-id="${i}"></div>`;
    };    
    return markup;
};

function onClick(evt) {
    if (!evt.target.textContent) {
        evt.target.textContent = player; 
        // console.dir(evt.target);
        const id = Number(evt.target.dataset.id);  

        if (player === "X") {
            stepX.push(id);
            console.log(isWinner(stepX)); 
            isWinner(stepX);            
        } else{
            stepO.push(id)
        }; 

        console.log('stepX', stepX);
        console.log('stepO', stepO);
        player = player === 'X' ? 'O' : 'X';
    } else {
        alert('Change!')
    };
};

function isWinner(arr) {
    return win.some( item => 
        // console.log(item);
        item.every( id => 
            // console.log(id);
            arr.includes(id)
            )        
    );
};

function onRestart() {
    player = 'X';
    content.innerHTML = createMarkup();
};