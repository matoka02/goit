"use strict";


// <!-- Лекция 21.10.2022 -->

// // 1. Событие submit

// const cars = [
// {
//     id: 1,
//     car: 'Honda',
//     type: 'Civic',
//     price: 12000,
//     img: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
// },
// {
//     id: 2,
//     car: 'Audi',
//     type: 'QT',
//     price: 40000,
//     img: 'https://images.unsplash.com/photo-1623776025811-fd139155a39b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80',
// },
// {
//     id: 3,
//     car: 'BMW',
//     type: '5 siries',
//     price: 9000,
//     img: 'https://images.unsplash.com/photo-1562965795-16cb921c6c2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=825&q=80',
// },
// {
//     id: 4,
//     car: 'Honda',
//     type: 'Accord',
//     number: '+380958752729',
//     price: 20000,
//     img: 'https://images.unsplash.com/photo-1468679950062-7f9630082231?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
// },
// {
//     id: 5,
//     car: 'Volvo',
//     type: 'X6',
//     price: 7000,
//     img: 'https://images.unsplash.com/photo-1516834474-48c0abc2a902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80',
// },
// ];

// // 1. слушатели
// const list = document.querySelector('.js-list');
// // console.log(list);
// const form = document.querySelector('.js-search');

// // 2. событие
// form.addEventListener('submit', onSearch);

// // 3. функция на событие
// function onSearch(evt) {
//     // 3.1 сброс прослушивания, чтобы не перезагрузилась страница
//     evt.preventDefault();
//     // console.log(evt.currentTarget);         // <form action="submit" class="js-search">…</form>
//     // console.dir(evt.currentTarget);         // form.js-search
//     // console.log('olala', evt.currentTarget.elements.searchQuery);       // < input type = "text" name = "searchQuery" >
//     // console.log('olala', evt.currentTarget.elements.searchKey);         // < select name = "searchKey" >​…​</select >

//     // 3.2 деструктуризация элементов evt.currentTarget
//     const { searchQuery, searchKey } = evt.currentTarget.elements;
//     // const (elements: { searchQuery, searchKey }) = evt.currentTarget.elements;
//     // console.log(searchQuery);               // < input type = "text" name = "searchQuery" ></input>
//     // console.log(searchKey);                 // < select name = "searchKey" >​…​</select >

//     // 3.3 получение значений
//     console.log(searchQuery.value);               // Honda
//     console.log(searchKey.value);                 // car

//     // // 3.4 фильтрация: метод filter и сравнение
//     // const currentCars = cars.filter(item => item[searchKey.value].toLowerCase() === searchQuery.value.trim().toLowerCase());
//     // 3.4 фильтрация: метод filter и совпадение частичное
//     const currentCars = cars.filter(item => item[searchKey.value].toLowerCase().includes(searchQuery.value.trim().toLowerCase()));
//     console.log(currentCars);

//     // 3.5 проверка, если ли р-ты
//     if (currentCars.length) {               // длина массива будет передана числом > булевое значение > true
//         list.innerHTML = createMarkup(currentCars);
//     } else {
//         list.innerHTML = `<img src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg.webp" alt="404-error-page" width='300px'></img>`;
//     }

//     // 3.6 перезагрузка страницы с отфильтрованными данными
//     // list.innerHTML = createMarkup(currentCars);
// };

// // 4. функция создание элементов li
// function createMarkup(arr) {
//     return arr.map(({ car, type, price, img, id }) =>
//         `<li data-id="${id}">
//         <img src="${img}" alt="${type}" width='300px'>
//         <h2>Марка: ${car}</h2>
//         <h2>Модель: ${type}</h2>
//         <p>Цена: ${price}</p>
//         </li>`).join('');
//     // console.log(markup);
// };

// // 5. загрузка li в ul
// list.insertAdjacentHTML('beforeend', createMarkup(cars));


// // 2. Событие input

// // 1. слушатели
// const input = document.querySelector('.js-input');
// const title = document.querySelector('.js-title');
// // console.log(input);

// // // 2.1 событие на input - реакция на каждый символ в поле
// // input.addEventListener('input', onSearchInput);
// // 2.2 событие на change - реакция после того, как курсор покинул поле ("шума" меньше)
// input.addEventListener('change', onSearchChange);

// // // 3 функция на событие
// function onSearch(evt) {
//     console.dir(evt.currentTarget.value);
//     title.textContent = evt.currentTarget.value;
// };

// function onSearchChange(evt) {
//     alert('Вернись в input!')
// };


// // 3. Событие click

// // 1. слушатель
// const clickMe = document.querySelector('.js-click');

// // 2.событие
// clickMe.addEventListener('click', onClickMe);

// // 3.счетчик
// let counter = 1;

// // 4. функция на событие
// function onClickMe(evt) {
//     // 4.1 работает счетчик
//     const changeValue = 50 * counter;
//     counter += 1;
//     // 4.2 обращение к стилям
//     evt.currentTarget.style.margin += `${changeValue}px ${changeValue}px`;
//     // 4.3 отключение повтора, без условий
//     document.addEventListener('keydown', onKey, {once: true});
// };


// // 4. События keys

// // 1. слушатель
// document.addEventListener('keydown', onKey);

// // 2. функция на событие
// function onKey(evt) {
//     // // 2.1 считает текущую раскладку
//     // console.log(evt.key);           // й,ц,у,к,е,н,х,ъ
//     // // 2.2 считает запрограмированное значение клавиши
//     // console.log(evt.code);          // KeyQ, KeyW, KeyE, KeyR, KeyT, KeyY, Bracket Left, Bracket Right

//     // 2.3 привязка к клавише
//     if (evt.code === 'Escape') {
//         // alert('Escape');
//         document.body.classList.toggle('test');
//     // 2.4 отключение повтора с условием
//         document.addEventListener('keydown', onKey);
//     }
// };


// // 5. События mouse

// // 1. слушатель
// document.addEventListener('mousemove', onMouse);

// // 2. функция на событие
// function onMouse(evt) {
//     console.log(evt.clientX);
//     console.log(evt.clientY);
// };


// // 6. Модальное окно

// // 1. слушатели
// const refs = {
//     openModalBtn: document.querySelector('[data-action="open-modal"]'),
//     closeModalBtn: document.querySelector('[data-action="close-modal"]'),
//     backdrop: document.querySelector('.js-backdrop'),
// };

// // 2. события
// refs.openModalBtn.addEventListener('click', onOpenModal);
// refs.closeModalBtn.addEventListener('click', onCloseModal);
// refs.backdrop.addEventListener('click', onBackdropClick);

// // 3. функции по событиям

// // 3.1 открытие
// function onOpenModal() {
//     window.addEventListener('keydown', onEscKeyPress);
//     document.body.classList.add('show-modal');
// };
// // 3.2 закрытие
// function onCloseModal() {
//     window.removeEventListener('keydown', onEscKeyPress);
//     document.body.classList.remove('show-modal');
// };
// // 3.3 считывание места клика в backdrop
// function onBackdropClick(event) {
//     console.log('Клик по backdrop');
//     console.log(event.currentTarget);
//     console.log(event.target);

//     if (event.currentTarget === event.target){
//         console.log('Клик точно в backdrop');
//         onCloseModal();
//     };
// };
// // 3.4 считывание клика по Escape
// function onEscKeyPress(event) {
//     const ESC_KEY_PRESS = 'Escape';
//     const isEscKey = event.code === ESC_KEY_PRESS;

//     if (isEscKey) {
//         onCloseModal
//     };
// };