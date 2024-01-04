'use strict';


/*--- 1.1 Открытие окон и методы window ---*/

// let newWin = window.open("about:blank", "hello", "width=200,height=200");
// newWin.document.write("Hello, world!");

// let newWindow = open('/', 'example', 'width=300,height=300')
// newWindow.focus();
// alert(newWindow.location.href); // (*) about:blank, загрузка ещё не началась
// newWindow.onload = function() {
//   let html = `<div style="font-size:30px">Добро пожаловать!</div>`;
//   newWindow.document.body.insertAdjacentHTML('afterbegin', html);
// };

// let newWindow = open('/', 'example', 'width=300,height=300');
// newWindow.onload = function() {
//   newWindow.close();
//   alert(newWindow.closed); // true
// };


/*--- 1.2 Общение между окнами ---*/

// let oldDoc = iframe.contentDocument;
// iframe.onload = function () {
//   let newDoc = iframe.contentDocument;
//   // загруженный document - не тот, который был в iframe при создании изначально!
//   console.log(oldDoc == newDoc); // false
// };

// let oldDoc = iframe.contentDocument;
// // каждый 100 мс проверяем, не изменился ли документ
// let timer = setInterval(() => {
//   let newDoc = iframe.contentDocument;
//   if (newDoc == oldDoc) return;
//   console.log("New document is here!");
//   clearInterval(timer); // отключим setInterval, он нам больше не нужен
// }, 100);

// console.log(iframe.contentWindow == frames[0]);       // true
// console.log(iframe.contentWindow == frames.win);       // true


/*--- 2.1 ArrayBuffer, бинарные массивы ---*/

// let buffer = new ArrayBuffer(16);
// console.log(buffer.byteLength);                 // 16

// let view=new Uint32Array(buffer);
// console.log(Uint32Array.BYTES_PER_ELEMENT);     // 4
// console.log(view.length);                       // 4
// console.log(view.byteLength);                   // 16

// view[0] = 123456;
// for (const num of view) {
//   console.log(num);
// };

// 2.1.1 Соедините типизированные массивы
// Дан массив из типизированных массивов Uint8Array. Напишите функцию concat(arrays), которая объединяет эти массивы в один типизированный массив и возвращает его.

// function concat(arrays) {
//   // находим общую длину переданных массивов
//   let totalLength = arrays.reduce((acc, value) => acc + value.length, 0);

//   let result = new Uint8Array(totalLength);

//   if (!arrays.length) return result;

//   // копируем каждый из массивов в result
//   // следующий массив копируется сразу после предыдущего
//   let offset = 0;
//   for(let array of arrays) {
//     result.set(array, offset);
//     offset += array.length;
//   }

//   return result;
// };


/*--- 2.4 File и FileReader ---*/

// См. html


/*--- 3.1 Fetch ---*/

// 3.1.1 Получите данные о пользователях GitHub
// Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub, запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.
// Информация о пользователе GitHub с логином USERNAME доступна по ссылке: https://api.github.com/users/USERNAME.
// В песочнице есть тестовый пример.
// Важные детали:
// - На каждого пользователя должен приходиться один запрос fetch.
// - Запросы не должны ожидать завершения друг друга. Надо, чтобы данные приходили как можно быстрее.
// - Если какой-то запрос завершается ошибкой или оказалось, что данных о запрашиваемом пользователе нет, то функция должна возвращать null в массиве результатов.

// describe("getUsers", function () {
//   it("gets users from GitHub", async function () {
//     let users = await getUsers(['iliakan', 'remy', 'no.such.users']);
//     assert.equal(users[0].login, 'iliakan');
//     assert.equal(users[1].login, 'remy');
//     assert.equal(users[2], null);
//   });
// });

// async function getUsers(names) {
//   let jobs = [];

//   for (let name of names) {
//     let job = fetch(`https://api.github.com/users/${name}`).then(
//       successResponse => {
//         if (successResponse.status != 200) {
//           return null;
//         } else {
//           return successResponse.json();
//         }
//       },
//       failResponse => {
//         return null;
//       }
//     );
//     jobs.push(job);
//   }

//   let results = await Promise.all(jobs);
//   console.log(results);

//   // (3) [{…}, {…}, null]
//   // 0:{login: 'matoka02', id: 120492521, node_id: 'U_kgDOBy6R6Q', avatar_url: 'https://avatars.githubusercontent.com/u/120492521?v=4', gravatar_id: '', …}
//   // 1:{login: 'tessaNAM', id: 142529764, node_id: 'U_kgDOCH7U5A', avatar_url: 'https://avatars.githubusercontent.com/u/142529764?v=4', gravatar_id: '', …}
//   // 2:null
//   // length:3
//   // [[Prototype]]:Array(0)

//   return results;
// };


/*--- 3.3 Fetch: ход загрузки ---*/

// // Шаг 1: начинаем загрузку fetch, получаем поток для чтения
// let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100');
// const reader = response.body.getReader();

// // Шаг 2: получаем длину содержимого ответа
// const contentLength = +response.headers.get('Content-Length');

// // Шаг 3: считываем данные:
// let receivedLength = 0; // количество байт, полученных на данный момент
// let chunks = []; // массив полученных двоичных фрагментов (составляющих тело ответа)
// while(true) {
//   const {done, value} = await reader.read();
//   if (done) break;
//   chunks.push(value);
//   receivedLength += value.length;
//   console.log(`Получено ${receivedLength} из ${contentLength}`)
// };

// // Шаг 4: соединим фрагменты в общий типизированный массив Uint8Array
// let chunksAll = new Uint8Array(receivedLength); // (4.1)
// let position = 0;
// for(let chunk of chunks) {
//   chunksAll.set(chunk, position); // (4.2)
//   position += chunk.length;
// };

// // Шаг 5: декодируем Uint8Array обратно в строку
// let result = new TextDecoder("utf-8").decode(chunksAll);

// // Готово!
// let commits = JSON.parse(result);
// console.log(commits[0].author.login);           // iliakan


/*--- 3.5 Fetch: запросы на другие сайты ---*/

// 3.5.1 Почему нам нужен Origin?
// Как вы, вероятно, знаете, существует HTTP-заголовок Referer, который обычно содержит адрес страницы, инициировавшей сетевой запрос.
// Например, при запросе (fetch) http://google.com с http://javascript.info/some/url заголовки выглядят так:
// Accept: */*
// Accept-Charset: utf-8
// Accept-Encoding: gzip,deflate,sdch
// Connection: keep-alive
// Host: google.com
// Origin: http://javascript.info
// Referer: http://javascript.info/some/url
// Как вы можете видеть, присутствуют и Referer, и Origin.
// Вопросы:
// - Почему нужен Origin, если Referer содержит даже больше информации?
// - Возможно ли отсутствие Referer или Origin, или это неправильно?


/*--- 3.7 Объекты URL ---*/

// let url1 = new URL('https://javascript.info/profile/admin');
// let url2 = new URL('/profile/admin', 'https://javascript.info');
// let url3 = new URL('tester', url1);
// console.log(url1.protocol);       // https:
// console.log(url1.host);           // javascript.info
// console.log(url1.pathname);       // /profile/admin
// console.log(url2);
// console.log(url3);

// let url = new URL('https://google.com/search');
// url.searchParams.set('q', 'test me!'); // добавим параметр, содержащий пробел и !
// console.log(url.href); // https://google.com/search?q=test+me%21
// url.searchParams.set('tbs', 'qdr:y'); // параметр с двоеточием :
// // параметры автоматически кодируются
// console.log(url.href); // https://google.com/search?query=test+me%21&tbs=qdr%3Ay
// // перебрать параметры (в исходном виде)
// for(let [name, value] of url.searchParams) {
//   console.log(`${name}=${value}`); // q=test me!, далее tbs=qdr:y
// };


/*--- 3.10 Длинные опросы ---*/

// Примерный код клиентской функции subscribe, которая реализует длинные опросы:

// async function subscribe() {
//   let response = await fetch("/subscribe");

//   if (response.status == 502) {
//     // Статус 502 - это таймаут соединения;
//     // возможен, когда соединение ожидало слишком долго
//     // и сервер (или промежуточный прокси) закрыл его
//     // давайте восстановим связь
//     await subscribe();
//   } else if (response.status != 200) {
//     // Какая-то ошибка, покажем её
//     showMessage(response.statusText);
//     // Подключимся снова через секунду.
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     await subscribe();
//   } else {
//     // Получим и покажем сообщение
//     let message = await response.text();
//     showMessage(message);
//     // И снова вызовем subscribe() для получения следующего сообщения
//     await subscribe();
//   }
// };

// subscribe();


/*--- 3.11 WebSocket ---*/

// let socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");

// socket.onopen = function(e) {
//   console.log("[open] Соединение установлено");
//   console.log("Отправляем данные на сервер");
//   socket.send("Меня зовут Тесса");
// };

// socket.onmessage = function(evt) {
//   console.log(`[message] Данные получены с сервера: ${evt.data}`);
// };

// socket.onclose = function(evt) {
//   if (evt.wasClean) {
//     console.log(`[close] Соединение закрыто чисто, код=${evt.code} причина=${evt.reason}`);
//   } else {
//     // например, сервер убил процесс или сеть недоступна
//     // обычно в этом случае event.code 1006
//     console.log('[close] Соединение прервано');
//   }
// };

// socket.onerror = function(error) {
//   console.log(`[error]`);
// };


/*--- 4.1 Куки, document.cookie ---*/

// function getCookie(name) {
//   let matches = document.cookie.match(new RegExp(
//     "(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + "=([^;]*)"
//   ));
//   return matches ? decodeURIComponent(matches[1]) : undefined;
// };

// function setCookie(name, value, options = {}) {

//   options = {
//     path: '/',
//     // при необходимости добавьте другие значения по умолчанию
//     ...options
//   };

//   if (options.expires instanceof Date) {
//     options.expires = options.expires.toUTCString();
//   };

//   let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

//   for (let optionKey in options) {
//     updatedCookie += "; " + optionKey;
//     let optionValue = options[optionKey];
//     if (optionValue !== true) {
//       updatedCookie += "=" + optionValue;
//     }
//   };

//   document.cookie = updatedCookie;
// };


// function deleteCookie(name) {
//   setCookie(name, "", {
//     'max-age': -1
//   })
// };


/*--- 4.2 LocalStorage, sessionStorage ---*/

// localStorage.setItem('test', 1);
// console.log(localStorage.getItem('test'));      // 1
// console.log(localStorage);                      // Storage {test: '1', loglevel: 'INFO', length: 2}
// delete localStorage.test;
// console.log(localStorage);                      // Storage {loglevel: 'INFO', length: 1}

// // перебор ключей
// for(let i=0; i<localStorage.length; i++) {
//   let key = localStorage.key(i);
//   console.log(`${key}: ${localStorage.getItem(key)}`);
// };

// for(let key in localStorage) {
//   console.log(key); // покажет getItem, setItem и другие встроенные свойства
// };

// for(let key in localStorage) {
//   if (!localStorage.hasOwnProperty(key)) {
//     continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
//   }
//   console.log(`${key}: ${localStorage.getItem(key)}`);
// };

// let keys = Object.keys(localStorage);
// for(let key of keys) {
//   console.log(`${key}: ${localStorage.getItem(key)}`);
// };

// 4.2.1 Автосохранение поля формы
// Создайте поле textarea, значение которого будет автоматически сохраняться при каждом его изменении.
// Когда пользователь закроет страницу и потом откроет её заново он должен увидеть последнее введённое значение.

// 1-й вариант 
// area.value = localStorage.getItem('area');
// area.oninput = () => {
//   localStorage.setItem('area', area.value)
// };

// 2-й вариант 
// let area = document.getElementById('area');
// let areaText = localStorage.getItem('areaText');
// area.value = (areaText) ? areaText : '';

// function saveElemText(elem) {
//   if (elem.value) localStorage.setItem(elem.id + 'Text', elem.value)
//   else localStorage.removeItem(elem.id + 'Text');
// };

// let saveTimer = null;

// area.oninput = function () {
//   clearTimeout(saveTimer);
//   // Сохранить, если перерыв после последнего ввода был более 1250 мс
//   saveTimer = setTimeout(saveElemText, 1250, this);
// };

// // Сохранить при закрытии браузера/страницы
// // (таймер перерыва может не успеть сработать)
// window.onunload = () => saveElemText(area);


/*--- 5.2 CSS-анимации ---*/

// 5.2.1 Анимировать самолёт (CSS)
// Реализуйте анимацию, как в примере ниже (клик на самолёт):
// - При нажатии картинка изменяет размеры с 40x24px до 400x240px (увеличивается в 10 раз).
// - Время анимации 3 секунды.
// - По окончании анимации вывести сообщение: «Анимация закончилась!».
// - Если во время анимации будут дополнительные клики по картинке - они не должны ничего «сломать».

// let ended = false;

// flyjet.onclick = function () {
//   flyjet.addEventListener('transitionend', function () {
//     if (!ended) {
//       ended = true;
//       alert('Анимация закончилась!');
//     }
//   });
//   flyjet.classList.add('growing');
// };

// 5.2.2 Анимировать самолёт с перелётом (CSS)
// Модифицируйте решение предыдущей задачи Анимировать самолёт (CSS) , чтобы в процессе анимации изображение выросло больше своего стандартного размера 400x240px («выпрыгнуло»), а затем вернулось к нему.
// Должно получиться, как в примере ниже (клик на самолёт):
// В качестве исходного кода возьмите решение прошлой задачи.

// flyjet.onclick = function() {
//   flyjet.classList.add('growing');
// };

// 5.2.3 Анимированный круг
// Напишите функцию showCircle(cx, cy, radius), которая будет рисовать постепенно растущий круг.
// - cx,cy - координаты центра круга относительно окна браузера,
// - radius - радиус круга.
// Нажмите на кнопку ниже, чтобы увидеть как это должно выглядеть:
// В исходном коде уже указаны правильные CSS-стили круга, таким образам задача заключается в том, чтобы сделать правильную анимацию.

// см. html

// 5.2.4 Анимация круга с помощью колбэка
// В задаче Анимированный круг показывается анимированный растущий круг.
// Теперь предположим, что нам нужен не просто круг, а чтобы в нём было ещё и сообщение. Сообщение должно появиться после завершения анимации (круг полностью вырос), в противном случае это будет выглядеть некрасиво.
// В решении задачи функция showCircle(cx, cy, radius) рисует окружность, но не даёт возможности отследить, когда она будет готова.
// В аргументы добавьте колбэк: showCircle(cx, cy, radius, callback) который будет вызываться по завершении анимации. Колбэк в качестве аргумента должен получить круг <div>.
// Вот пример:
// showCircle(150, 150, 100, div => {
//   div.classList.add('message-ball');
//   div.append("Hello, world!");
// });
// За основу возьмите решение задачи Анимированный круг.

// см. html


/*--- 5.3 JavaScript-анимации ---*/

// 5.3.1 Анимируйте прыгающий мячик
// Создайте прыгающий мячик. Кликните, чтобы посмотреть, как это должно выглядеть:

// function makeEaseOut(timing) {
//   return function (timeFraction) {
//     return 1 - timing(1 - timeFraction);
//   }
// };

// function bounce(timeFraction) {
//   for (let a = 0, b = 1; 1; a += b, b /= 2) {
//     if (timeFraction >= (7 - 4 * a) / 11) {
//       return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
//     }
//   }
// };

// ball.onclick = function () {
//   let to = field.clientHeight - ball.clientHeight;
//   animate({
//     duration: 2000,
//     timing: makeEaseOut(bounce),
//     draw(p//   for (let a = 0, b = 1; 1; a += b, b /= 2) {
//     if (timeFraction >= (7 - 4 * a) / 11) {
//       return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
//     }
//   }
// };

// function quad(timeFraction) {
//   return Math.pow(timeFraction, 2);
// };

// ball.onclick = function() {
//   let height = field.clientHeight - ball.clientHeight;
//   let width = 100;
//   // анимация top (прыжки)
//   animate({
//     duration: 2000,
//     timing: makeEaseOut(bounce),
//     draw: function(progress) {
//       ball.style.top = height * progress + 'px'
//     }
//   });
//   // анимация left (движение вправо)
//   animate({
//     duration: 2000,
//     timing: makeEaseOut(quad),
//     draw: function(progress) {
//       ball.style.left = width * progress + "px"
//     }
//   });
// };rogress) {
//       ball.style.top = to * progress + 'px'
//     }
//   });
// };

// 5.3.2 Анимируйте мячик, прыгающий вправо
// Сделайте отскок мяча вправо. Как в примере:
// Напишите код для анимации. Расстояние слева 100px.
// Возьмите решение предыдущей задачи Анимируйте прыгающий мячик за основу.

// function makeEaseOut(timing) {
//   return function(timeFraction) {
//     return 1 - timing(1 - timeFraction);
//   }
// };

// function bounce(timeFraction) {


/*--- 6.2 Пользовательские элементы (Custom Elements) ---*/

// 6.2.1 Элемент "живой таймер"
// У нас уже есть элемент <time-formatted>, показывающий красиво отформатированное время.
// Создайте элемент <live-timer>, показывающий текущее время:
// - Внутри он должен использовать <time-formatted>, не дублировать его функциональность.
// - Должен тикать (обновляться) каждую секунду.
// - На каждом тике должно генерироваться пользовательское событие с именем tick, содержащее текущую дату в event.detail (смотрите главу Генерация пользовательских событий).
// Использование:
// <live-timer id="elem"></live-timer>
// <script>
//   elem.addEventListener('tick', event => console.log(event.detail));
// </script>

// Пожалуйста, обратите внимание:
// (1) Мы останавливаем таймер setInterval, когда элемент удаляется из документа. Это важно, иначе он продолжит тикать, даже если больше не нужен. И браузер не сможет очистить память от этого элемента.
// (2) Мы можем получить доступ к текущей дате через свойство elem.date. Все методы и свойства класса, естественно, являются методами и свойствами элемента.
// См. html


/*--- 7.1 Введение: шаблоны и флаги ---*/

// let str = "Любо, братцы, любо!";
// console.log(str.match(/любо/gi));       // ['Любо', 'любо']
// let result = str.match(/любо/i);
// console.log(result[0]);                 // Любо
// console.log(result.length);             // 1
// console.log(result.index);              // 0
// console.log(result.input);              // Любо, братцы, любо!

// let matches = "JavaScript".match(/HTML/) || [];
// if (!matches.length) {
//   console.log("Совпадений нет");        // Совпадений нет
// };

// console.log('We will, we will'.replace(/we/i, 'I'));    // I will, we will
// console.log('We will, we will'.replace(/we/ig, 'I'));   // I will, I will
// console.log('Люблю HTML'.replace(/HTML/, '$& и JavaScript'));   // Люблю HTML и JavaScript

// let str = 'Я ЛюБлЮ JavaScript';
// let regexp = /люблю/i;
// console.log(regexp.test(str));        // true


/*--- 7.2 Символьные классы ---*/

// let str = "+7(903)-123-45-67";
// let regexp = /\d/g;
// console.log(str.match(regexp));             // ['7', '9', '0', '3', '1', '2', '3', '4', '5', '6', '7']
// console.log(str.match(regexp).join(''));    // 79031234567
// console.log(str.replace(/\D/g, ''));        // 79031234567

// console.log('A\nB'.match(/A.B/));           // null
// console.log('A\nB'.match(/A.B/s));          // ['A\nB', index: 0, input: 'A\nB', groups: undefined]

// console.log('1 - 5'.match(/\d-\d/));        // null
// console.log('1 - 5'.match(/\d - \d/));      // ['1 - 5', index: 0, input: '1 - 5', groups: undefined]
// console.log('1 - 5'.match(/\d\s-\s\d/));    // ['1 - 5', index: 0, input: '1 - 5', groups: undefined]


/*--- 7.3 Юникод: флаг "u" и класс \p{...} ---*/

// let str = 'A ბ ㄱ';
// console.log(str.match(/\p{L}/g));             // null
// console.log(str.match(/\p{L}/gu));            // ['A', 'ბ', 'ㄱ']


/*--- 7.4 Якоря: начало строки ^ и конец $ ---*/

// let str1 = 'Mary had a little lamb';
// console.log(/^Mary/.test(str1));                // true
// console.log(/lamb$/.test(str1));                // true

// let goodInput = '12:34';
// let badInput = '12:345';
// let regexp = /^\d\d:\d\d$/;
// console.log(regexp.test(goodInput));            // true
// console.log(regexp.test(badInput));             // false

// 7.4.1 Регулярное выражение ^$
// Какая строка подойдёт под шаблон ^$?

// let newString = '';
// console.log(/^/.test(newString));
// console.log(/$/.test(newString));


/*--- 7.5 Многострочный режим якорей ^ $, флаг "m" ---*/

// let str = `1е место: Винни
// 2е место: Пятачок
// 3е место: Слонопотам`;
// console.log(str.match(/^\d/gm));              // ['1', '2', '3']

// let str2 = `Винни: 1
// Пятачок: 2
// Слонопотам: 3`;
// console.log(str2.match(/\d$/gm));             // ['1', '2', '3']
// console.log(str2.match(/\d\n/g));             // ['1\n', '2\n']


/*--- 7.6 Граница слова: \b ---*/

// let str = 'Hello, Java!';
// console.log(str.match(/\bHello\b/));             // varia.js:603 ['Hello', index: 0, input: 'Hello, Java!', groups: undefined]
// console.log(str.match(/\bJava\b/));              // ['Java', index: 7, input: 'Hello, Java!', groups: undefined]
// console.log(str.match(/\bHell\b/));              // null
// console.log(str.match(/\bJava!\b/));             // null

// 7.6.1 Найдите время
// Время имеет формат: часы:минуты. И часы, и минуты имеют две цифры, например, 09:00.
// Введите регулярное выражение, чтобы найти время в строке: Завтрак в 09:00 в комнате 123:456.
// P.S. В этой задаче пока нет необходимости проверять правильность времени, поэтому 25:99 также может быть верным результатом.
// P.P.S. Регулярное выражение не должно находить 123:456.

// let str = 'Завтрак в 09:00 в комнате 123:456.';
// console.log(str.match(/\b\d\d:\d\d\b/));


/*--- 7.7 Экранирование, специальные символы ---*/

// let regexp = new RegExp('\d\.\d');
// console.log('Глава 5.1'.match(regexp));           // null

// let regStr = '\\d\\.\\d';
// console.log(regStr);                              // \d\.\d
// let regexp2 = new RegExp(regStr);
// console.log('Глава 5.1'.match(regexp2));          // ['5.1', index: 6, input: 'Глава 5.1', groups: undefined]


/*--- 7.8 Наборы и диапазоны [...] ---*/

// console.log('Exception 0xAF'.match(/x[0-9A-F][0-9A-F]/g));    // ['xAF']

// let regexp = /[\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]/gu;
// let str = `Hi 你好 12`;
// console.log(str.match(regexp));                               // ['H', 'i', '你', '好', '1', '2']

// console.log('alice15@gmail.com'.match(/[^\d\sA-Z]/gi));       // ['@', '.']

// 7.8.1 Java[^script]
// У нас есть регулярное выражение /Java[^script]/.
// Найдёт ли оно что-нибудь в строке Java? А в строке JavaScript?

// console.log('Java'.match(/Java[^script]/));         // null
// console.log('JavaScript'.match(/Java[^script]/));   // ['JavaS', index: 0, input: 'JavaScript', groups: undefined]

// 7.8.2 Найдите время как hh:mm или hh-mm
// Время может быть в формате часы:минуты или часы-минуты. И часы, и минуты имеют две цифры: 09:00 или 21-30.
// Напишите регулярное выражение, чтобы найти время:
// let regexp = /your regexp/g;
// alert( "Завтрак в 09:00. Ужин в 21-30".match(regexp) ); // 09:00, 21-30
// P.S. В этой задаче мы предполагаем, что время всегда правильное, нет необходимости отфильтровывать плохие строки, такие как «45:67». Позже мы разберёмся с этим.

// let str = 'Завтрак в 09:00. Ужин в 21-30';
// let regexp = /\d\d[-:]\d\d/g;
// console.log(str.match(regexp));                       // ['09:00', '21-30']


/*--- 7.9 Квантификаторы +, *, ? и {n} ---*/

// let str = '+7(903)-123-45-67';
// let numbers = str.match(/\d{1,}/g);
// console.log(numbers);                           // ['7', '903', '123', '45', '67']

// let str1 = '+7(903)-123-45-67';
// console.log(str1.match(/\d+/g));                 // ['7', '903', '123', '45', '67']

// let str2 = 'Следует писать color или colour?';
// console.log(str2.match(/colou?r/g));            // ['color', 'colour']

// let str3 = '100 10 1';
// console.log(str3.match(/\d0*/g));               // ['100', '10', '1']
// console.log(str3.match(/\d0+/g));               // ['100', '10']

// // Регулярное выражение для десятичных дробей (чисел с плавающей точкой): \d+\.\d+
// let str4 = '0 1 12.345 7890';
// console.log(str4.match(/\d+\.\d+/g));           // ['12.345']

// // Регулярное выражение для «открывающего HTML-тега без атрибутов», например, <span> или <p>.
// let str5 = '<body> ... </body>';
// console.log(str5.match(/<[a-z]+>/gi));          // ['<body>']
// console.log(str5.match(/<[a-z][a-z0-9]*>/i));   // ['<body>', index: 0, input: '<body> ... </body>', groups: undefined]

// // Регулярное выражение для «открывающего или закрывающего HTML-тега без атрибутов»: /<\/?[a-z][a-z0-9]*>/i
// let str6 = '<h1>Привет!</h1>';
// console.log(str6.match(/<\/?[a-z][a-z0-9]*>/gi));    // ['<h1>', '</h1>']

// 7.8.1 Как найти многоточие "..." ?
// Напишите регулярное выражение, которое ищет многоточие (3 и более точек подряд).
// Проверьте его:

// let str = 'Привет!... Как дела?.....';
// let regexp = /\.{3,}/g;
// console.log(str.match(regexp));                   // ['...', '.....']

// 7.8.2 Регулярное выражение для HTML-цветов
// Напишите регулярное выражение, которое ищет HTML-цвета в формате #ABCDEF: первым идёт символ #, и потом - 6 шестнадцатеричных символов.
// Пример использования:
// let regexp = /...ваше выражение.../
// let str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";
// alert( str.match(regexp) )  // #121212,#AA00ef
// P.S. В рамках этого задания не нужно искать цвета, записанные в иных форматах типа #123 или rgb(1,2,3).

// let str = 'color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2';
// let regexp = /#[a-f0-9]{6}\b/gi;
// console.log(str.match(regexp));                   // ['#121212', '#AA00ef']


/*--- 7.10 Жадные и ленивые квантификаторы ---*/

// let str = 'a "witch" and her "broom" is one';
// let regexp = /".+"/g;
// console.log(str.match(regexp));                     // ['"witch" and her "broom"']
// let regexp2 = /".+?"/g;
// console.log(str.match(regexp2));                    // ['"witch"', '"broom"']
// let regexp3 = /"[^"]+"/g;
// console.log(str.match(regexp3));                    // ['"witch"', '"broom"']

// 7.10.1 Совпадение для /d+? d+?/
// Какое здесь будет совпадение?
// "123 456".match(/\d+? \d+?/g) ); // ?

// let str = '123 456';
// let regexp = /\d+? \d+?/g;
// console.log(str.match(regexp));                     // ['123 4']

// 7.10.2 Поиск HTML-комментариев
// Найти все HTML-комментарии в тексте:
// let regexp = /ваше регулярное выражение/g;
// let str = `... <!-- My -- comment
//  test --> ..  <!----> ..
// `;
// alert( str.match(regexp) ); // '<!-- My -- comment \n test -->', '<!---->'

// let regexp = /<!--.*?-->/gs;
// let str = `... <!-- My -- comment 
//   test --> ..  <!----> ..
// `;
// console.log(str.match(regexp));             // ['\x3C!-- My -- comment \n  test -->', '\x3C!---->']

// 7.10.3 Поиск HTML-тегов
// Создайте регулярное выражение, чтобы найти все (открывающие и закрывающие) HTML-теги с их атрибутами.
// Пример использования:
// let regexp = /ваше регулярное выражение/g;
// let str = '<> <a href="/"> <input type="radio" checked> <b>';
// alert( str.match(regexp) ); // '<a href="/">', '<input type="radio" checked>', '<b>'
// В этой задаче мы предполагаем, что теги выглядят как <...что угодно...>, и внутри тегов не может быть символов < и > (первый встреченный > закрывает тег).

// let regexp = /<[^<>]+>/g;
// let str = '<> <a href="/"> <input type="radio" checked> <b>';
// console.log(str.match(regexp));               // ['<a href="/">', '<input type="radio" checked>', '<b>']


/*--- 7.11 Скобочные группы ---*/

// let str1 = 'site.com my.site.com';
// let regexp1 = /(\w+\.)+\w+/g;
// console.log(str1.match(regexp1));             // ['site.com', 'my.site.com']

// let str2 = 'my@mail.com @ his@site.com.uk';
// let regexp2 = /[-.\w]+@([\w-]+\.)+[\w-]+/g;
// console.log(str2.match(regexp2));             // ['my@mail.com', 'his@site.com.uk']

// let str3 = '<h1>Hello, world!</h1>';
// let regexp3 = /<(.*?)>/;
// let tag = str3.match(regexp3)
// console.log(tag[0]);                         // <h1>
// console.log(tag[1]);                         // h1

// let str4 = '<span class="my">';
// let regexp4 = /<(([a-z]+)\s*([^>]*))>/;
// let result = str4.match(regexp4);
// console.log(result[0]);                         // <span class="my">
// console.log(result[1]);                         // span class="my"
// console.log(result[2]);                         // span
// console.log(result[3]);                         // class="my"

// let str5 = '<h1> <h2>';
// let regexp5 = /<(.*?)>/g;
// let tags = str5.match(regexp5)
// console.log(tags);                           // ['<h1>', '<h2>']

// let results1 = '<h1> <h2>'.matchAll(/<(.*?)>/gi);
// console.log(results1);                        // RegExpStringIterator {}
// console.log(results1[0]);                     // undefined
// results1 = Array.from(results1);
// console.log(results1[0]);                     // ['<h1>', 'h1', index: 0, input: '<h1> <h2>', groups: undefined]
// console.log(results1[1]);                     // ['<h2>', 'h2', index: 5, input: '<h1> <h2>', groups: undefined]

// let results2 = '<h1> <h2>'.matchAll(/<(.*?)>/gi);
// for (const result of results2) {
//   console.log(result);
// };

// let [ta1, tag2] = '<h1> <h2>'.matchAll(/<(.*?)>/gi);

// let str = "2019-10-30 2020-01-01";
// let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;
// let results = str.matchAll(dateRegexp);
// // дата в формате «год-месяц-день»
// for(let result of results) {
//   let {year, month, day} = result.groups;
//   console.log(`${day}.${month}.${year}`);
// };
// // дата в формате «день.месяц.год»
// console.log(str.replace(dateRegexp, '$<day>.$<month>.$<year>'));

// 7.11.1 Проверьте MAC-адрес
// MAC-адрес сетевого интерфейса состоит из 6-ти двузначных шестнадцатеричных чисел, разделённых двоеточиями.
// Например: '01:32:54:67:89:AB'.
// Напишите регулярное выражение, которое проверит, является ли строка MAC-адресом.
// Использование:
// let regexp = /ваш regexp/;
// alert( regexp.test('01:32:54:67:89:AB') ); // true
// alert( regexp.test('0132546789AB') ); // false (нет двоеточий)
// alert( regexp.test('01:32:54:67:89') ); // false (5 чисел, должно быть 6)
// alert( regexp.test('01:32:54:67:89:ZZ') ) // false (ZZ в конце строки)

// let regexp = /^[0-9a-f]{2}(:[0-9a-f]{2}){5}$/i;
// console.log(regexp.test('01:32:54:67:89:AB'));      // true
// console.log(regexp.test('0132546789AB'));           // false
// console.log(regexp.test('01:32:54:67:89'));         // false
// console.log(regexp.test('01:32:54:67:89:ZZ'));      // false

// 7.11.2 Найти цвет в формате #abc или #abcdef
// Напишите регулярное выражение, которое соответствует цветам в формате #abc или #abcdef. То есть: # и за ним 3 или 6 шестнадцатеричных цифр.
// Пример использования:
// let regexp = /ваш шаблон/g;
// let str = "color: #3f3; background-color: #AA00ef; and: #abcd";
// alert( str.match(regexp) ); // #3f3 #AA00ef
// P.S. Это должно быть ровно 3 или 6 шестнадцатеричных цифр. При этом значения с 4-мя цифрами типа #abcd не должны совпадать в результат.

// let regexp = /#([a-f0-9]{3}){1,2}\b/gi;
// let str = "color: #3f3; background-color: #AA00ef; and: #abcd";
// console.log(str.match(regexp));               // ['#3f3', '#AA00ef']

// 7.11.3 Найти все числа
// Напишите регулярное выражение, которое ищет любые десятичные числа, включая целочисленные, с плавающей точкой и отрицательные.
// Пример использования:
// let regexp = /ваш шаблон/g;
// let str = "-1.5 0 2 -123.4.";
// alert( str.match(regexp) ); // -1.5, 0, 2, -123.4

// let regexp = /-?\d+(\.\d+)?/g;
// let str = "-1.5 0 2 -123.4.";
// console.log(str.match(regexp));             // ['-1.5', '0', '2', '-123.4']

// 7.11.4 Разобрать выражение
// Арифметическое выражение включает два числа и оператор между ними. Например:
// 1 + 2
// 1.2 * 3.4
// -3 / -6
// -2 - 2
// Оператором может быть: "+", "-", "*" или "/".
// В выражении могут быть пробелы в начале, в конце или между частями выражения.
// Создайте функцию parse(expr), которая принимает выражение и возвращает массив из трёх элементов:
// - Первое число.
// - Оператор.
// - Второе число.
// Например:
// let [a, op, b] = parse("1.2 * 3.4");
// alert(a); // 1.2
// alert(op); // *
// alert(b); // 3.4

// let regexp = /(-?\d+(\.\d+)?)\s*([-+*\/])\s*(-?\d+(\.\d+)?)/;
// console.log('1.2 + 12'.match(regexp));

// function parse(expr) {
//   let regexp = /(-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)/;
//   let result = expr.match(regexp);
//   if (!result) return [];
//   result.shift();
//   return result;
// };

// console.log(parse('-1.23 * 3.45'));         // ['-1.23', '*', '3.45', index: 0, input: '-1.23 * 3.45', groups: undefined]


/*--- 7.12 Обратные ссылки в шаблоне: \N и \k<имя> ---*/

// let str = `He said: "She's the one!".`;
// let regexp = /(['"])(.*?)\1/g;
// console.log(str.match(regexp));               // [`"She's the one!"`]
// let namedRegexp = /(?<quote>['"])(.*?)\k<quote>/g;
// console.log(str.match(namedRegexp));          // [`"She's the one!"`]


/*--- 7.13 Альтернация (или) | ---*/

// let regexp = /html|css|java(script)?/gi;
// let str = "Сначала появился язык Java, затем HTML, потом JavaScript";
// console.log(str.match(regexp));                 // ['Java', 'HTML', 'JavaScript']

// let timedRegexp = /([01]\d|2[0-3]):[0-5]\d/g;
// console.log("00:00 10:10 23:59 25:99 1:2".match(timedRegexp)); // ['00:00', '10:10', '23:59']

// 7.13.1 Найдите языки программирования
// Существует много языков программирования, например, Java, JavaScript, PHP, C, C++.
// Напишите регулярное выражение, которое найдёт их все в строке Java JavaScript PHP C++ C:
// let regexp = /ваше регулярное выражение/флаги;
// alert("Java JavaScript PHP C++ C".match(regexp)); // Java JavaScript PHP C++ C

// let regexp = /Java(Script)?|C(\+\+)?|PHP/g;
// let str = "Java, JavaScript, PHP, C, C++";
// console.log(str.match(regexp));             // ['Java', 'JavaScript', 'PHP', 'C', 'C++']

// 7.13.2 Найдите пары BB-кодов
// BB-код имеет вид [tag]...[/tag], где tag - это один из: b, url или quote.
// Например:
// [b]текст[/b]
// [url]http://ya.ru[/url]
// BB-коды могут быть вложенными. Но сам в себя тег не может быть вложен, например:
// Возможно:
// [url] [b]http://ya.ru[/b] [/url]
// [quote] [b]текст[/b] [/quote]
// Не может быть:
// [b][b]текст[/b][/b]
// Теги могут содержать переносы строк, это допустимо:
// [quote]
//   [b]текст[/b]
// [/quote]
// Создайте регулярное выражение для поиска всех BB-кодов и их содержимого.
// Например:
// let regexp = /ваше регулярное выражение/флаги;
// let str = "..[url]http://ya.ru[/url]..";
// alert( str.match(regexp) ); // [url]http://ya.ru[/url]
// Если теги вложены, то нужно искать самый внешний тег (при желании можно продолжить поиск в его содержимом):
// let regexp = /ваше регулярное выражение/флаги;
// let str = "..[url][b]http://ya.ru[/b][/url]..";
// alert( str.match(regexp) ); // [url][b]http://ya.ru[/b][/url]

// let regexp = /\[(b|url|quote)].*?\[\/\1]/gs;
// let str = `
//   [b]привет![/b]
//   [quote]
//     [url]http://ya.ru[/url]
//   [/quote]
// `;
// console.log(str.match(regexp));           // ['[b]привет![/b]', '[quote]\n    [url]http://ya.ru[/url]\n  [/quote]']

// 7.13.3 Найдите строки в кавычках
// Создайте регулярное выражение для поиска строк в двойных кавычках "...".
// Важно, что строки должны поддерживать экранирование с помощью обратного слеша, по аналогии со строками JavaScript. Например, кавычки могут быть вставлены как \", новая строка как \n, а сам обратный слеш как \\.
// let str = "Как вот \"здесь\".";
// В частности, обратите внимание: двойная кавычка после обратного слеша \" не оканчивает строку.
// Поэтому мы должны искать от одной кавычки до другой, игнорируя встречающиеся экранированные кавычки.
// В этом и состоит основная сложность задачи, которая без этого условия была бы элементарной.
// Примеры подходящих строк:
// .. "test me" ..
// .. "Скажи \"Привет\"!" ... (строка с экранированными кавычками)
// .. "\\" ..  (внутри двойной слеш)
// .. "\\ \"" ..  (внутри двойной слеш и экранированная кавычка)
// В JavaScript приходится удваивать обратные слеши, чтобы добавлять их в строку, как здесь:
// let str = ' .. "test me" .. "Скажи \\"Привет\\"!" .. "\\\\ \\"" .. ';
// // эта строка в памяти:
// alert(str); //  .. "test me" .. "Скажи \"Привет\"!" .. "\\ \"" ..

// let regexp = /"(\\.|[^"\\])*"/g;
// let str = ' .. "test me" .. "Скажи \\"Привет\\"!" .. "\\\\ \\"" .. ';
// console.log(str.match(regexp));                 // ['"test me"', '"Скажи \\"Привет\\"!"', '"\\\\ \\""']

// 7.13.4 Найдите весь тег
// Напишите регулярное выражение, которое ищет тег <style...>. Оно должно искать весь тег: он может как не иметь атрибутов <style>, так и иметь несколько <style type="..." id="...">.
// …Но регулярное выражение не должно находить <styler>!
// Например:
// let regexp = /ваше регулярное выражение/g;
// alert( '<style> <styler> <style test="...">'.match(regexp) ); // <style>, <style test="...">

// let regexp = /<style(>|\s.*?>)/g;
// let str = '<style> <styler> <style test="...">';
// console.log(str.match(regexp));                 // ['<style>', '<style test="...">']


/*--- 7.14 Опережающие и ретроспективные проверки ---*/

// let str = '1 индейка стоит 30€';
// let str2 = '2 индейки стоят 60€';
// // опережающая проверка
// let regexp = /\d+(?=€)/;
// console.log(str.match(regexp));                   // ['30', index: 16, input: '1 индейка стоит 30€', groups: undefined]
// let regexpLookahead = /\d+(?=\s)(?=.*30)/;
// console.log(str.match(regexpLookahead));          // ['1', index: 0, input: '1 индейка стоит 30€', groups: undefined]
// // негативная опережающая проверка
// let regexpNegativeLookahead = /\d+(?!€)/;
// console.log(str2.match(regexpNegativeLookahead));  // ['2', index: 0, input: '2 индейки стоят $60', groups: undefined]

// let str3 = '1 индейка стоит $30';
// let str4 = '2 индейки стоят $60';
// // ретроспективная проверка
// let regexpLookbehind = /(?<=\$)\d+/;
// console.log(str3.match(regexpLookbehind));                   // ['30', index: 17, input: '1 индейка стоит $30', groups: undefined]
// // негативная ретроспективная проверка
// let regexpNegativeLookbehind = /(?<!\$)\d+/;
// console.log(str4.match(regexpNegativeLookbehind));           // ['2', index: 0, input: '2 индейки стоят $60', groups: undefined]

// 7.14.1 Найдите неотрицательные целые
// Есть строка с целыми числами.
// Создайте регулярное выражение, которое ищет только неотрицательные числа. Ноль разрешён.
// Пример использования:
// let regexp = /ваше регулярное выражение/g;
// let str = "0 12 -5 123 -18";
// alert( str.match(regexp) ); // 0, 12, 123

// let regexp = /(?<![-\d])\d+/g;
// let str = "0 12 -5 123 -18";
// console.log(str.match(regexp));         // ['0', '12', '123']

// 7.14.2 Вставьте после фрагмента
// У нас есть строка с HTML-документом.
// Напишите регулярное выражение которое вставляет <h1>Hello</h1> сразу же после тега <body>. У тега могут быть атрибуты.
// Например:
// let regexp = /ваше регулярное выражение/;
// let str = `
// <html>
//   <body style="height: 200px">
//   ...
//   </body>
// </html>
// `;
// str = str.replace(regexp, `<h1>Hello</h1>`);
// После этого значение str:
// <html>
//   <body style="height: 200px"><h1>Hello</h1>
//   ...
//   </body>
// </html>

// let str = '...<body style="...">...';
// str = str.replace(/<body.*?>/, '$&<h1>Hello</h1>');
// console.log(str);         // ...<body style="..."><h1>Hello</h1>...


/*--- 7.15 Катастрофический возврат ---*/

// let str = 'An input string that takes a long time or even makes this regexp to hang!';
// // затормозит процесс
// // let regexp1 = /^(\w+\s?)*$/;
// // console.log(regexp1.test(str));
// // уменьшение количества возможных комбинаций
// console.time();
// let regexp2 = /^(\w+\s)*\w*$/;
// console.log(regexp2.test(str));
// console.timeEnd();
// // опережающая проверка
// console.time();
// let regexp3 = /^((?=(\w+))\2\s?)*$/;
// console.log(regexp3.test(str));
// console.timeEnd();
// // опережающая проверка - рефакторинг
// console.time();
// let regexp4 = /^((?=(?<word>\w+))\k<word>\s?)*$/;
// console.log(regexp4.test(str));
// console.timeEnd();


/*--- 7.16 Поиск на заданной позиции, флаг "y" ---*/

// let str = 'let varName';
// let regexp = /\w+/g;
// let result;
// while (result = regexp.exec(str)) {
//   console.log(`Найдено ${result[0]} на позиции ${result.index}`);
// };

// let str1 = 'let varName = "value"';
// let regexp1 = /\w+/g; // без флага g свойство lastIndex игнорируется
// regexp.lastIndex = 4;
// let word1 = regexp1.exec(str1);
// console.log(word1);              // ['varName', index: 4, input: 'let varName = "value"', groups: undefined]

// let str2 = 'let varName = "value"';
// let regexp2 = /\w+/g;
// regexp2.lastIndex = 3;
// let word2 = regexp2.exec(str2);
// console.log(word2[0]);                // varName
// console.log(word2.index);             // 4

// let str3 = 'let varName = "value"';
// let regexp3 = /\w+/y;
// regexp3.lastIndex = 3;
// console.log(regexp3.exec(str3));        // null (на позиции 3 пробел, а не слово)
// regexp3.lastIndex = 4;
// console.log(regexp3.exec(str3));        // varName (слово на позиции 4)


/*--- 7.17 Методы RegExp и String ---*/

// str.match(regexp)
// let str = 'I love JavaScript';
// let result = str.match(/Java(Script)/);
// console.log(result[0]);                   // JavaScript
// console.log(result[1]);                   // Script
// console.log(result.length);               // 2
// console.log(result.index);                // 7
// console.log(result.input);                // I love JavaScript
// let result2 = str.match(/Java(Script)/g);
// console.log(result2[0]);                  // JavaScript
// console.log(result2.length);              // 1
// let result3 = str.match(/HTML/);
// console.log(result3[0]);                  // null
// console.log(result3.length);              // Cannot read properties of null (reading '0')

// str.matchAll(regexp)
// let str = '<h1>Hello, world!</h1>';
// let regexp = /<(.*?)>/g;
// let matchAll = str.matchAll(regexp);
// console.log(matchAll);                  // [object RegExp String Iterator], не массив, а перебираемый объект
// matchAll = Array.from(matchAll);        // теперь массив
// let firstMatch = matchAll[0];
// console.log(firstMatch[0]);             // <h1>
// console.log(firstMatch[1]);             // h1
// console.log(firstMatch.index);          // 0
// console.log(firstMatch.input);          // <h1>Hello, world!</h1>

// str.split(regexp|substr, limit)
// let str = '12-34-56';
// let regexp = /,\s*/;
// let arr = str.split(regexp);
// console.log(arr);
// console.log(str.split('-'));              // ['12', '34', '56']
// console.log(str.split(regexp));

// str.search(regexp)
// let str = 'I love JavaScript';
// let regexp = /Java.+/;
// console.log(str.search(regexp));            // 7

// str.replace(str|regexp, str|func)
// let str = '12-34-56';
// console.log(str.replace('-', ':'));                    // 12:34-56
// console.log(str.replace(/-/g, ':'));                   // 12:34:56
// let str1 = 'John Smith';
// console.log(str1.replace(/(\w+) (\w+)/i, '$2, $1'));  // Smith, John
// let str2 = 'html and css';
// let result2 = str2.replace(/html|css/gi, str => str.toUpperCase());
// console.log(result2);                                 // HTML and CSS
// let str3 = 'John Smith';
// let result3 = str3.replace(/(\w+) (\w+)/, (match, name, surname) => `${surname}, ${name}`);
// console.log(result3);                                 // Smith, John
// let result4 = str3.replace(/(\w+) (\w+)/, (...match) => `${match[2]}, ${match[1]}`);
// console.log(result4);                                 // Smith, John
// let result5 = str3.replace(/(?<name>\w+) (?<surname>\w+)/, (...match) => {
//   let groups = match.pop();
//   return `${groups.surname}, ${groups.name}`;
// });
// console.log(result5);                                 // Smith, John

// regexp.exec(str)
// let str = 'Больше о JavaScript на https://javascript.info';
// let regexp = /javascript/ig;
// let result;
// while (result = regexp.exec(str)) {
//   console.log(`Найдено ${result[0]} на позиции ${result.index}`);
//   // Найдено JavaScript на позиции 9, затем
//   // Найдено javascript на позиции 31
// };
// let str1 = 'Hello, world!';
// let regexp1 = /\w+/g; // без флага g свойство lastIndex игнорируется
// regexp1.lastIndex = 5; // ищем с 5-й позиции (т.е с запятой и далее)
// console.log(regexp1.exec(str1));                  // ['world', index: 7, input: 'Hello, world!', groups: undefined]
// let regexp2 = /\w+/y;
// regexp2.lastIndex = 5; // ищем ровно на 5-й позиции
// console.log(regexp2.exec(str1));                  // null

// regexp.test(str)
// let str = 'I love JavaScript';
// let regexp = /love/gi;
// regexp.lastIndex = 10;
// console.log(regexp.test(str));                      // false
// let regexp1 = /love/gi;
// console.log(regexp1.test(str));                     // true


/*--- 8.4 Свойство float ---*/

// 8.4.1 Разница inline-block и float
// Галерея изображений состоит из картинок в рамках с подписями (возможно, с другой дополнительной информацией).
// Пример галереи:
// Технически вывод такой галереи можно реализовать при помощи списка UL/LI, где:
// - каждый LI имеет display:inline-block
// - каждый LI имеет float:left
// Какие различия между этими подходами? Какой вариант выбрали бы вы?

// См. css

// 8.4.2 Дерево с многострочными узлами
// Сделайте дерево при помощи семантической вёрстки и CSS-спрайта с иконками (есть готовый).
// Выглядеть должно так (не кликабельно):
// - Поддержка многострочных названий узлов
// - Над иконкой курсор становится указателем.
// Исходный документ содержит список UL/LI и ссылку на картинку.
// P.S. Достаточно сделать HTML/CSS-структуру, действия добавим позже.

// См. css

// 8.4.3 Постраничная навигация (CSS)
// Оформите навигацию, центрированную внутри DIV'а:
// Требования:
// - Левая стрелка - слева, правая - справа, список страниц - по центру.
// - Список страниц центрирован вертикально.
// - Текст сверху и снизу ни на что не наползает.
// - Курсор при наведении на стрелку или элемент списка становится стрелкой pointer.
// P.S. Без использования таблиц.

// См. css

// 8.4.4 Добавить рамку, сохранив ширину
// Есть две колонки 30%/70%:
// <style>
//   .left {
//     float:left;
//     width:30%;
//     background: #aef;
//   }
//   .right {
//     float:right;
//     width:70%;
//     background: tan;
//   }
// </style>
// <div class="left">
//  Левая<br>Колонка
// </div>
// <div class="right">
//  Правая<br>Колонка<br>...
// </div>
// Добавьте к правой колонке рамку border-left и отступ padding-left.
// Двухколоночная вёрстка при этом не должна сломаться!
// Желательно не трогать свойство width ни слева ни справа и не создавать дополнительных элементов.

// См. css


/*--- 8.5 Свойство position ---*/

// 8.5.1 Модальное окно
// Создайте при помощи HTML/CSS «модальное окно», то есть DIV, который полностью перекрывает документ и находится над ним.
// При этом все элементы управления на документе перестают работать, т.к. клики попадают в DIV.
// В примере ниже DIV'у дополнительно поставлен цвет фона и прозрачность, чтобы было видно перекрытие:
// Браузеры: все основные, IE8+. Должно работать при прокрутке окна (проверьте).

// См. css


/*--- 8.6 Центрирование горизонтальное и вертикальное ---*/

// 8.6.1 Поместите мяч в центр поля (CSS)
// Поместите мяч в центр поля при помощи CSS.
// Исходный код:
// Используйте CSS, чтобы поместить мяч в центр:
// - CSS для центрирования может использовать размеры мяча.
// - CSS для центрирования не должен опираться на конкретный размер поля.

// См. css

// 8.6.2 Форма + модальное окно
// Создайте при помощи HTML/CSS форму для логина в модальном окне.
// Требования:
// - Кнопки окна вне формы не работают (даже на левый край нажать нельзя).
// - Полупрозрачный голубой «экран» отстоит от границ на 20px.
// - Форма центрирована вертикально и горизонтально, её размеры фиксированы.
// - Посетитель может менять размер окна браузера, геометрия должна сохраняться.
// - Не ломается при прокрутке.
// Браузеры: все основные, IE8+.

// См. css

// 8.6.3 vertical-align + table-cell + position = ?
// В коде ниже используется вертикальное центрирование при помощи table-cell + vertical-align.
// Почему оно не работает? Нажмите на просмотр, чтобы увидеть (стрелка должна быть в центре по вертикали).
// <style>
//   .arrow {
//     position: absolute;
//     height: 60px;
//     border: 1px solid black;
//     font-size: 28px;
//     display: table-cell;
//     vertical-align: middle;
//   }
// </style>
// <div class="arrow">«</div>
// Как починить центрирование при помощи CSS? Свойства position/height менять нельзя.

// См. css


/*--- 8.11 Свойство margin ---*/

// 8.11.1 Нерабочие margin?
// В примере ниже находится блок .block фиксированной высоты, а в нём - прямоугольник .spacer.
// При помощи margin-left: 20% и margin-right: 20%, прямоугольник центрирован в родителе по горизонтали. Это работает.
// Далее делается попытка при помощи свойств height: 80%, margin-top: 10% и margin-bottom: 10% расположить прямоугольник в центре по вертикали, чтобы сам элемент занимал 80% высоты родителя, а сверху и снизу был одинаковый отступ.
// Однако, как видите, это не получается. Почему? Как поправить?
// <style>
//   .block {
//     height: 150px;
//     border: 1px solid #CCC;
//     background: #eee;
//   }
//   .spacer {
//     margin-left: 20%;
//     margin-right: 20%;
//     height: 80%;
//     margin-top: 10%;
//     margin-bottom: 10%;
//     border: 1px solid black;
//     background: #FFF;
//   }
// </style>
// <div class="block">
//   <div class="spacer"></div>
// </div>

// См. css

// 8.11.2 Расположить текст внутри INPUT
// Создайте <input type="password"> с цветной подсказкой внутри (должен правильно выглядеть, не обязан работать):
// В дальнейшем мы сможем при помощи JavaScript сделать, чтобы текст при клике пропадал. Получится красивая подсказка.
// P.S. Обратите внимание: type="password"! То есть, просто value использовать нельзя, будут звёздочки. Кроме того, подсказка, которую вы реализуете, может быть как угодно стилизована.
// P.P.S. Вокруг INPUT с подсказкой не должно быть лишних отступов, блоки до и после продолжают идти в обычном потоке.

// См. css


/*--- 8.15 Знаете ли вы селекторы? ---*/

// 8.15.1 Выберите элементы селектором
// HTML-документ:
// <input type="checkbox">
// <input type="checkbox" checked>
// <input type="text" id="message">
// <h3 id="widget-title">Сообщения:</h3>
// <ul id="messages">
//   <li id="message-1">Сообщение 1</li>
//   <li id="message-2">Сообщение 2</li>
//   <li id="message-3" data-action="delete">Сообщение 3</li>
//   <li id="message-4" data-action="edit do-not-delete">Сообщение 4</li>
//   <li id="message-5" data-action="edit delete">Сообщение 5</li>
//   <li><a href="#">...</a></li>
// </ul>
// <a href="http://site.com/list.zip">Ссылка на архив</a>
// <a href="http://site.com/list.pdf">..И на PDF</a>
// Задания:
// 1) Выбрать input типа checkbox.
// 2) Выбрать input типа checkbox, НЕ отмеченный.
// 3) Найти все элементы с id=message или message-*.
// 4) Найти все элементы с id=message-*.
// 5) Найти все ссылки с расширением href="...zip".
// 6) Найти все элементы с атрибутом data-action, содержащим delete в списке (через пробел).
// 7) Найти все элементы, у которых ЕСТЬ атрибут data-action, но он НЕ содержит delete в списке (через пробел).
// 8) Выбрать все чётные элементы списка #messages.
// 9) Выбрать один элемент сразу за заголовком h3#widget-title на том же уровне вложенности.
// 10) Выбрать все ссылки, следующие за заголовком h3#widget-title на том же уровне вложенности.
// 11) Выбрать ссылку внутри последнего элемента списка #messages.

// let elem1 = document.querySelectorAll('input[type="checkbox"]');
// console.log(`8.15.1.1: ${elem1.length}`);    // 2
// let elem2 = document.querySelectorAll('input[type="checkbox"]:not(:checked)');
// console.log(`8.15.1.2: ${elem2.length}`);    // 1
// let elem3 = document.querySelectorAll('[id|="message"]');
// console.log(`8.15.1.3: ${elem3.length}`);    // 6
// let elem4 = document.querySelectorAll('[id^="message-"]');
// console.log(`8.15.1.4: ${elem4.length}`);    // 5
// let elem5 = document.querySelectorAll('a[href$=".zip"]');
// console.log(`8.15.1.5: ${elem5.length}`);    // 1
// let elem6 = document.querySelectorAll('[data-action~="delete"]');
// console.log(`8.15.1.6: ${elem6.length}`);    // 2
// let elem7 = document.querySelectorAll('[data-action]:not([data-action~="delete"])');
// console.log(`8.15.1.7: ${elem7.length}`);    // 1
// let elem8 = document.querySelectorAll('#messages li:nth-child(2n)');
// console.log(`8.15.1.8: ${elem8.length}`);    // 3
// let elem9 = document.querySelectorAll('h3#widget-title + *');
// console.log(`8.15.1.9: ${elem9.length}`);    // 1
// let elem10 = document.querySelectorAll('h3#widget-title ~ a');
// console.log(`8.15.1.10: ${elem10.length}`);    // 2
// let elem11= document.querySelectorAll('#messages li:last-child a');
// console.log(`8.15.1.11: ${elem11.length}`);    // 1

// 8.15.2 Отступ между элементами, размер одна строка
// Есть список UL/LI.

// Текст вверху без отступа от списка.
// <ul>
//   <li>Маша</li>
//   <li>Паша</li>
//   <li>Даша</li>
//   <li>Женя</li>
//   <li>Саша</li>
//   <li>Гоша</li>
// </ul>
// Текст внизу без отступа от списка.
// Размеры шрифта и строки заданы стилем:
// body {
//   font: 14px/1.5 serif;
// }
// Сделайте, чтобы между элементами был вертикальный отступ.
// - Размер отступа: ровно 1 строка.
// - Нужно добавить только одно правило CSS с одним псевдоселектором, можно использовать CSS3.
// - Не должно быть лишних отступов сверху и снизу списка.

// См. css

// 8.15.3 Отступ между парами, размером со строку
// Есть список UL/LI.
// Текст вверху без отступа от списка.
// <ul>
//   <li>Маша</li>
//   <li>Паша</li>
//   <li>Даша</li>
//   <li>Женя</li>
//   <li>Саша</li>
//   <li>Гоша</li>
// </ul>
// Текст внизу без отступа от списка.
// Размеры шрифта и строки заданы стилем:
// body {
//   font: 14px/1.5 serif;
// }
// Сделайте, чтобы между каждой парой элементов был вертикальный отступ.
// - Размер отступа: ровно 1 строка.
// - Нужно добавить только одно правило CSS, можно использовать CSS3.
// - Не должно быть лишних отступов сверху и снизу списка.

// См. css