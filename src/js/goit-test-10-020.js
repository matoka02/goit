"use strict";

// <!-- Лекция 20.11.2022 -->


// // 1. Пагинация страниц

// // 1.1 слушатели
// const list = document.querySelector('.list');
// const load = document.querySelector('.load');
// let page = 1;
// // 1.2 обработчик события
// load.addEventListener('click', onLoad)

// // 1.3 запрос на сервер
// function ringsApi(page = 1) {
//     const options = {
//         headers: {
//             Authorization: 'Bearer XJlq9OFMcHAy8pAQK7xj'
//         }
//     };
//     const BASE_URL = 'https://the-one-api.dev/v2/character';
//     return fetch(`${BASE_URL}?limit=300&page=${page}`, options).then(resp => {
//         if (!resp.ok) {
//             throw new Error()
//         }
//         return resp.json()
//     })
// };

// // 1.4 получение ответа сервера
// ringsApi().then(data => {
//     list.insertAdjacentHTML('beforeend', createMarkup(data.docs))
// }).catch(err => console.log(err));

// // 1.5 рендеринг страницы
// function createMarkup(arr) {
//     return arr.map(({
//         name,
//         race
//     }) => `<li>
//     <h2>${name}</h2>
//     <span>${race}</span>
//     </li>`).join('')
// };

// // 1.6 пагинация
// function onLoad() {
//     page += 1;
//     ringsApi(page).then(data => {
//         list.insertAdjacentHTML('beforeend', createMarkup(data.docs));
//         if (data.page === data.pages) {
//             load.setAttribute('hidden', true)
//         }
//     }).catch(err => console.log(err))
// };


// // 2. Infinity scroll

// нужен пустой div.js-guard после списка

const list = document.querySelector('.list');
const guard = document.querySelector('.js-guard');

let page = 1;

const options = {
    root: null,     // весь вьюпорт
    rootMargin: '300px',
    threshold: 1.0
};
const observer = new IntersectionObserver(onLoad, options);

function onLoad(entries, observer) {
    entries.forEach(entry => {
        // isIntersecting:false - это первая страница, пока скролл не попадет в область видимости. тогда true
        if (entry.isIntersecting) {
            // console.log('I see');
            page += 1;
            ringsApi(page).then(data =>{
                list.insertAdjacentHTML('beforeend', createMarkup(data.docs));
                if (data.page === data.pages) {
                    observer.unobserve(guard)
                }
            });
        }
    });
    console.log(entries);
};

// // посмотреть, как скролл отрабатывает
// let counter = 0;
// document.addEventListener('scroll', () =>{
//     counter+=1;
//     console.log('counter', counter);
// });

function ringsApi(page = 1) {
    const options = {
        headers: {
            Authorization: 'Bearer XJlq9OFMcHAy8pAQK7xj'
        }
    };
    const BASE_URL = 'https://the-one-api.dev/v2/character';
    return fetch(`${BASE_URL}?limit=300&page=${page}`, options).then(resp => {
        if (!resp.ok) {
            throw new Error()
        }
        return resp.json()
    })
};

function createMarkup(arr) {
    return arr.map(({
        name,
        race
    }) => `<li>
    <h2>${name}</h2>
    <span>${race}</span>
    </li>`).join('')
};


ringsApi().then(data => {
    // list.insertAdjacentHTML('beforeend', createMarkup(data.docs));
    observer.observe(guard);
}).catch(err => console.log(err));


