"use strict";

// <!-- Лекция 19.10.2022 -->

// // DOM

// const elem = document.querySelector('.js-elem');
// console.log(elem);
// console.dir(elem);

// const items = document.querySelectorAll('.js-item');
// const ul = document.querySelector('ul');
// const li = document.createElement('li');
// ul.append(li);                          // может добавить несколько дочерних элементов
// ul.appendChild(li);                     // может добавить только 1 дочерний элемент

// const arr = [];
// for (let i = 0; i < 3; i++) {
//     const li = document.createElement('li');
//     arr.push(li);
// }
// ul.append(...arr);
// console.log(items);
// console.log(ul);
// console.log(li);

// // рефакторинг, старый синтаксис
// const refs = {
//     staticItems: document.querySelectorAll('.js-item'),
//     dynamicItems: document.getElementsByClassName('js-item'),
//     ul: document.querySelector('ul'),
// }
// console.log(refs.dynamicItems.length);              // 5
// console.log(refs.dynamicItems[refs.dynamicItems.length - 1]);

// const arr = [];

// for (let i = 0; i < 3; i++) {
//     const li = document.createElement('li');
//     // // добавление изображения
//     // const img = document.createElement('img');
//     // li.append(img);

//     const div = document.createElement('div');
//     const a = document.createElement('a');

//     div.append(a);
//     li.append(div);
//     li.classList.add('js-item');
//     li.textContent = Number(refs.ul.lastElementChild.textContent) + i + 1;
//     arr.push(li);
// }
// refs.ul.append(...arr);

// console.log('staticItems:', refs.staticItems);
// console.log('dynamicItems:', refs.dynamicItems);
// console.log(refs.dynamicItems.length);              // 8
// console.log(refs.dynamicItems[refs.dynamicItems.length - 1]);


// // рефакторинг, новый синтаксис
// const refs = {
//     staticItems: document.querySelectorAll('.js-item'),
//     dynamicItems: document.getElementsByClassName('js-item'),
//     ul: document.querySelector('ul'),
// }

// const arr = [];
// for (let i = 1; i <= 3; i += 1) {
//     // можно добавить несколько вложенных элементов
//     // const markup = `<li class="js-item"><img src="" alt=""><div><a href=""></a></div></li>`;

//     // добавление новых элементов с новой нумерацией
//     // const markup = `<li class="js-item">${i}</li>`;

//     // добавление новых элементов с продолжением старой нумерации
//     const markup = `<li class="js-item">${Number(refs.ul.lastElementChild.textContent) +i}</li>`;
//     arr.push(markup);
// }
// refs.ul.insertAdjacentHTML("beforeend", arr.join(''));
// console.log(arr);


// // Свойства и атрибуты

// const refs = {
//     text: document.querySelector('h1'),
//     input: document.querySelector('input')
// }

// // console.log(refs.text.textContent);
// // console.log(refs.input.value);                  // пусто
// // refs.input.value = refs.text.textContent;
// // console.log(refs.input.value);                  // Hello world

// console.dir(refs.text.dataset.id);                 // 1
// console.log(refs.text.getAttribute('data-id'));    // 1
// refs.input.value = refs.text.textContent


// // Поиск вложенного элемента

// const refs = {
//     staticItems: document.querySelectorAll('.js-item'),
//     dynamicItems: document.getElementsByClassName('js-item'),
//     ul: document.querySelector('ul'),
// };

// // // 1. поиск в первом элементе
// // console.dir(refs.ul.firstElementChild);                 // li.js-item
// // console.dir(refs.ul.firstElementChild.children[0].textContent); // Hello world

// // 2. поиск в любом элементе
// [...refs.ul.firstElementChild.children].forEach(item => {
//     // console.dir(item);
//     if (item.firstElementChild ? item.firstElementChild.tagName === 'H1': false) {
//         console.log(item.firstElementChild.textContent);
//     }
// });


// // 1. Магазин машин

const refs = {
    staticItems: document.querySelectorAll('.js-item'),
    dynamicItems: document.getElementsByClassName('js-item'),
    ul: document.querySelector('ul'),
}

const cars = [{
    id: 1,
    car: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
},
{
    id: 2,
    car: 'Audi',
    type: 'QT',
    price: 40000,
    img: 'https://images.unsplash.com/photo-1623776025811-fd139155a39b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80',
},
{
    id: 3,
    car: 'BMW',
    type: '5 siries',
    price: 9000,
    img: 'https://images.unsplash.com/photo-1562965795-16cb921c6c2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=825&q=80',
},
{
    id: 4,
    car: 'Honda',
    type: 'Accord',
    number: '+380958752729',
    price: 20000,
    img: 'https://images.unsplash.com/photo-1468679950062-7f9630082231?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
},
{
    id: 5,
    car: 'Volvo',
    type: 'X6',
    price: 7000,
    img: 'https://images.unsplash.com/photo-1516834474-48c0abc2a902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80',
},
];

const listRef = document.querySelector('.js-list');

// const markup = cars.map(({ car, type, price, img, id }) =>
// `<li data-id="${id}">
// <img src="${img}" alt="${type}" width='300'>
// <h2>Марка: ${car}</h2>
// <h2>Модель: ${type}</h2>
// <p>Цена: ${price}</p>
// </li>`).join('');

// замер времени обработки, начало записи
// console.time('reduce');

// рефакторинг
const markup = cars.reduce((acc, { car, type, price, img, id }) =>
acc + `<li data-id="${id}">
<img src="${img}" alt="${type}">
<h2>Марка: ${car}</h2>
<h2>Модель: ${type}</h2>
<p>Цена: ${price}</p>
</li>`, '');

// определение стилей CSS
// listRef.style.listStyle = 'none';           // list-style: none;
// listRef.style.display = 'flex';             // display: flex;
// listRef.style.flexWrap = 'wrap';            // flex-wrap: wrap;

// замер времени обработки, конец записи
// console.timeEnd('reduce');                  // reduce: 0.18701171875 ms

// console.log(markup);

listRef.insertAdjacentHTML('beforeend', markup);

const items = document.querySelectorAll('li');
items.forEach(item => item.style.width='300px')
console.log(items);

// поиск по id
refs.ul.insertAdjacentHTML('beforeend', markup);
refs.ul.addEventListener('click', (e) => {
    if (e.target.closest('li')) {
        // console.log(e.target);
        const id = e.target.closest('li').dataset.id
        const currentCar = cars.find(({id: cardId}) => cardId === Number(id));
        console.log(currentCar);
    }
})

