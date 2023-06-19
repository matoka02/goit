"use strict";


// <!-- Лекция 04.11.2022 -->

// // 1. Игра крестики-нолики
const content = document.querySelector('.content');
const restart = document.querySelector('.js-restart');

content.insertAdjacentHTML('beforeend', createMarkup());
content.addEventListener('click', onClick);
restart.addEventListener('click', onRestart);

let player = 'X';

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
        player = player === 'X' ? 'O' : 'X';
    } else {
        alert('Change!')
    };
};

function onRestart() {
    player = 'X';
    content.innerHTML = createMarkup();
};