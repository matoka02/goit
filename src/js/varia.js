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

// 2.1.1 Дан массив из типизированных массивов Uint8Array. Напишите функцию concat(arrays), которая объединяет эти массивы в один типизированный массив и возвращает его.

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

// 3.1.1 Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub, запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.
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

// 3.5.1 Как вы, вероятно, знаете, существует HTTP-заголовок Referer, который обычно содержит адрес страницы, инициировавшей сетевой запрос.
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

// 4.2.1 Создайте поле textarea, значение которого будет автоматически сохраняться при каждом его изменении.
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

// 5.2.1 Реализуйте анимацию, как в примере ниже (клик на самолёт):
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

// 5.2.2 Модифицируйте решение предыдущей задачи Анимировать самолёт (CSS) , чтобы в процессе анимации изображение выросло больше своего стандартного размера 400x240px («выпрыгнуло»), а затем вернулось к нему.
// Должно получиться, как в примере ниже (клик на самолёт):
// В качестве исходного кода возьмите решение прошлой задачи.

// flyjet.onclick = function() {
//   flyjet.classList.add('growing');
// };

// 5.2.3 Напишите функцию showCircle(cx, cy, radius), которая будет рисовать постепенно растущий круг.
// - cx,cy - координаты центра круга относительно окна браузера,
// - radius - радиус круга.
// Нажмите на кнопку ниже, чтобы увидеть как это должно выглядеть:
// В исходном коде уже указаны правильные CSS-стили круга, таким образам задача заключается в том, чтобы сделать правильную анимацию.

// см. html

// 5.2.4 В задаче Анимированный круг показывается анимированный растущий круг.
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

// 5.3.1 Создайте прыгающий мячик. Кликните, чтобы посмотреть, как это должно выглядеть:

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

// 5.3.2 Сделайте отскок мяча вправо. Как в примере:
// Напишите код для анимации. Расстояние слева 100px.
// Возьмите решение предыдущей задачи Анимируйте прыгающий мячик за основу.

// function makeEaseOut(timing) {
//   return function(timeFraction) {
//     return 1 - timing(1 - timeFraction);
//   }
// };

// function bounce(timeFraction) {


/*--- 6.2 Пользовательские элементы (Custom Elements) ---*/

// 6.2.1 У нас уже есть элемент <time-formatted>, показывающий красиво отформатированное время.
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

// 7.4.1 Какая строка подойдёт под шаблон ^$?

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

// 7.6.1 Время имеет формат: часы:минуты. И часы, и минуты имеют две цифры, например, 09:00.
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

// 7.8.1 У нас есть регулярное выражение /Java[^script]/.
// Найдёт ли оно что-нибудь в строке Java? А в строке JavaScript?

// console.log('Java'.match(/Java[^script]/));         // null
// console.log('JavaScript'.match(/Java[^script]/));   // ['JavaS', index: 0, input: 'JavaScript', groups: undefined]

// 7.8.2 Время может быть в формате часы:минуты или часы-минуты. И часы, и минуты имеют две цифры: 09:00 или 21-30.
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

// 7.8.1 Напишите регулярное выражение, которое ищет многоточие (3 и более точек подряд).
// Проверьте его:

// let str = 'Привет!... Как дела?.....';
// let regexp = /\.{3,}/g;
// console.log(str.match(regexp));                   // ['...', '.....']

// 7.8.2 Напишите регулярное выражение, которое ищет HTML-цвета в формате #ABCDEF: первым идёт символ #, и потом - 6 шестнадцатеричных символов.
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

// 7.10.1 Какое здесь будет совпадение?
// "123 456".match(/\d+? \d+?/g) ); // ?

// let str = '123 456';
// let regexp = /\d+? \d+?/g;
// console.log(str.match(regexp));                     // ['123 4']

// 7.10.2 Найти все HTML-комментарии в тексте:
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

// 7.10.3 Создайте регулярное выражение, чтобы найти все (открывающие и закрывающие) HTML-теги с их атрибутами.
// Пример использования:
// let regexp = /ваше регулярное выражение/g;
// let str = '<> <a href="/"> <input type="radio" checked> <b>';
// alert( str.match(regexp) ); // '<a href="/">', '<input type="radio" checked>', '<b>'
// В этой задаче мы предполагаем, что теги выглядят как <...что угодно...>, и внутри тегов не может быть символов < и > (первый встреченный > закрывает тег).

// let regexp = /<[^<>]+>/g;
// let str = '<> <a href="/"> <input type="radio" checked> <b>';
// console.log(str.match(regexp));               // ['<a href="/">', '<input type="radio" checked>', '<b>']


/*--- 7.11 Скобочные группы ---*/

let str1 = 'site.com my.site.com';
let regexp1 = /(\w+\.)+\w+/g;
console.log(str1.match(regexp1));             // ['site.com', 'my.site.com']

let str2 = 'my@mail.com @ his@site.com.uk';
let regexp2 = /[-.\w]+@([\w-]+\.)+[\w-]+/g;
console.log(str2.match(regexp2));             // ['my@mail.com', 'his@site.com.uk']

let str3 = '<h1>Hello, world!</h1>';
let regexp3 = /<(.*?)>/;
let tag = str3.match(regexp3)
console.log(tag[0]);                         // <h1>
console.log(tag[1]);                         // h1

let str4 = '<span class="my">';
let regexp4 = /<(([a-z]+)\s*([^>]*))>/;
let result = str4.match(regexp4);
console.log(result[0]);                         // <span class="my">
console.log(result[1]);                         // span class="my"
console.log(result[2]);                         // span
console.log(result[3]);                         // class="my"

let str5 = '<h1> <h2>';
let regexp5 = /<(.*?)>/g;
let tags = str5.match(regexp5)
console.log(tags);                           // ['<h1>', '<h2>']
    
let results1 = '<h1> <h2>'.matchAll(/<(.*?)>/gi);
console.log(results1);                        // RegExpStringIterator {}
console.log(results1[0]);                     // undefined
results = Array.from(results);
console.log(results1[0]);                     // ['<h1>', 'h1', index: 0, input: '<h1> <h2>', groups: undefined]
console.log(results1[1]);                     // ['<h2>', 'h2', index: 5, input: '<h1> <h2>', groups: undefined]














//
//
// 
// 7.10 Жадные и ленивые квантификаторы
// 7.11 Скобочные группы
// 7.12 Обратные ссылки в шаблоне: \N и \k<имя>
// 7.13 Альтернация (или) |
// 7.14 Опережающие и ретроспективные проверки
// 7.15 Катастрофический возврат
// 7.16 Поиск на заданной позиции, флаг "y"
// 7.17 Методы RegExp и String