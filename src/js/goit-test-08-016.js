"use strict";


// <!-- Лекция 04.11.2022 -->

const session = document.querySelector('.session');
const local = document.querySelector('.local');
const remove = document.querySelector('.remove');

session.addEventListener('click', onSession);
const arr = [1,2,3,4];

function onSession() {
    // sessionStorage.setItem('session', 'hello session');
    // sessionStorage.setItem('session', arr);
    // localStorage.getItem('local');
    // console.log(typeof localStorage.getItem('local'));
    // console.log(localStorage.getItem('local'));

    // const data = localStorage.getItem('local');
    // const resp = JSON.parse(data);
    // console.log(resp);

    const data = JSON.parse(localStorage.getItem('local')) || [];
    console.log(data);
    data.forEach(element => {
        console.log(element);
    });
};

local.addEventListener('click', onLocal);

function onLocal() {
    // localStorage.setItem('local', 'hello local');
    // localStorage.setItem('local', arr);

    localStorage.setItem('local', JSON.stringify(arr));    
    localStorage.setItem('local-01', JSON.stringify(arr));    
    localStorage.setItem('local-02', JSON.stringify(arr));    
};

remove.addEventListener('click', onRemove);  

function onRemove() {
    // localStorage.removeItem('local');       // удалание 1 ключа  
    localStorage.clear()                    // удаление всех ключей
}


// // 1. Игра крестики-нолики

// const content = document.querySelector('.content');
// const restart = document.querySelector('.js-restart');

// content.insertAdjacentHTML('beforeend', createMarkup());
// content.addEventListener('click', onClick);
// restart.addEventListener('click', onRestart);

// let player = 'X';

// const win = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9],
//     [1, 5, 9],
//     [3, 5, 7],
// ];

// function createMarkup() {
//     let markup = '';
//     for (let i = 1; i <= 9; i += 1) {
//         markup += `<div class="item" data-id="${i}"></div>`;
//     };    
//     return markup;
// };

// function onClick(evt) {
//     if (!evt.target.textContent) {
//         evt.target.textContent = player;
//         player = player === 'X' ? 'O' : 'X';
//     } else {
//         alert('Change!')
//     };
// };

// function onRestart() {
//     player = 'X';
//     content.innerHTML = createMarkup();
// };