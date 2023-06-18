"use strict";


// <!-- Лекция 26.10.2022 -->

// // 1. Магазин инструмента

// const instruments = [{
//     id: 1,
//     name: 'Hammer',
//     price: 150,
//     img: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
// },
// {
//     id: 2,
//     name: 'Perforator',
//     price: 3000,
//     img: 'https://images.unsplash.com/photo-1623776025811-fd139155a39b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80',
// },
// {
//     id: 3,
//     name: 'Level',
//     price: 2000,
//     img: 'https://images.unsplash.com/photo-1562965795-16cb921c6c2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=825&q=80',
// },
// ];

// const basket = [];
// const favorite = [];

// const list = document.querySelector('.list');

// const markup = instruments.map(({ id, name, price, img }) => `<li data-id="${id}">
// <img src="${img}" alt="${name}" width="200px">
// <h2>${name}</h2>
// <p>${price}</p>
// <div>
// <button class="js-add">Buy</button>
// <button class="js-favorite">Add to Basket</button>
// <button class="js-delete" disabled>Delete</button>
// </div>
// </li>`).join('');

// // console.log(markup);

// list.insertAdjacentHTML('beforeend', markup);

// list.addEventListener('click', onClick);

// function onClick(evt) {
//     // console.log('currentTarget', evt.currentTarget);        // выведет ul
//     // console.log('target', evt.target);              // выведет элемент, по которому был клик

//     if (evt.target.classList.contains('js-add')) {
//         const currentIdx = Number(evt.target.closest('li').dataset.id);
//         // console.log(currentIdx);
//         const currentProduct = { ...instruments.find(({ id }) => id === currentIdx) };
//         // console.log(currentProduct);

//         const inBasket = basket.find(({ id }) => id === currentIdx);
//         // console.log(inBasket);

//         if (!inBasket) {
//             currentProduct.qty = 1;
//             basket.push(currentProduct);
//             // console.log(basket);
//             evt.target.parentElement.lastElementChild.removeAttribute('disabled');
//         } else {
//             inBasket.qty += 1;
//         };
//         // console.log(basket);
//         // console.log(instruments);
//     };


//     if (evt.target.classList.contains('js-favorite')) {
//         const currentIdx = Number(evt.target.closest('li').dataset.id);
//         // console.log(currentIdx);
//         const currentProduct = { ...instruments.find(({ id }) => id === currentIdx) };
//         // console.log(currentProduct);

//         const inFavorite = favorite.find(({ id }) => id === currentIdx);
//         // console.log(inFavorite);

//         if (!inFavorite) {
//             currentProduct.qty = 1;
//             favorite.push(currentProduct);
//             // console.log(favorite);
//             // evt.target.parentElement.lastElementChild.removeAttribute('disabled');
//         } else {
//             inFavorite.qty += 1;
//         };
//         console.log(favorite);
//         // console.log(instruments);
//     };


//     if (evt.target.classList.contains('js-delete')) {
//         const currentIdx = Number(evt.target.closest('li').dataset.id);
//         const idxInBasket = basket.findIndex(({ id }) => id === currentIdx);
//         // console.log(idxInBasket);
//         basket.splice(idxInBasket, 1);
//         evt.target.setAttribute('disabled', true);
//         console.log(basket);
//     };
// };


// // 2. Игра крестики-нолики

const content = document.querySelector('.content');
const restart = document.querySelector('.js-restart');

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

content.insertAdjacentHTML('beforeend', createMarkup());

content.addEventListener('click', onClick);
restart.addEventListener('click', onRestart);

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
