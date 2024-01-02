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
//     draw(progress) {
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
//   for (let a = 0, b = 1; 1; a += b, b /= 2) {
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
// };