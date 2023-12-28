'use strict';


/*--- 1.1 Браузерное окружение, спецификации ---*/

// console.log(window.innerHeight);          // 694
// console.log(window.innerWidth);           // 310
// console.log(window.location);             // Location {ancestorOrigins: DOMStringList, href: 'http://127.0.0.1:5500/src/DOM.html', origin: 'http://127.0.0.1:5500', protocol: 'http:', host: '127.0.0.1:5500', …}
// console.log(typeof document);             // object



/*--- 1.3 Навигация по DOM-элементам ---*/

// 1.3.1 Для страницы:
{/* <html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html> */}
// Напишите код, как получить…
// элемент <div>?
// <ul>?
// второй <li> (с именем Пит)?

// console.log(document.body.firstElementChild); // <a href="./index.html">Go back</a>
// console.log(document.body.children[1]);       // <div>Пользователи:</div>
// console.log(document.body.childNodes[5]);     // <div>Пользователи:</div>
// console.log(document.body.children[2]);       // <ul>…</ul>
// console.log(document.body.childNodes[7]);     // <ul>…</ul>
// console.log(document.body.lastElementChild.lastElementChild);   // null - т.к. считает скрипт
// console.log(document.body.childNodes[7].lastElementChild);     // <li>…</li>

// 1.3.2 Если elem – произвольный узел DOM-элемента…
// Правда, что elem.lastChild.nextSibling всегда равен null?
// Правда, что elem.children[0].previousSibling всегда равен null ?

// 1.3.3 Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
// Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:
// //  в переменной td находится DOM-элемент для тега <td>
// td.style.backgroundColor = 'red';

// let table = document.body.children[1];
// console.log(table);

// for (let i = 0; i < table.rows.length; i++) {
//   let row = table.rows[i];
//   row.cells[i].style.backgroundColor = 'red';
// };


/*--- 1.4 Поиск: getElement*, querySelector* ---*/

// 1.4.1 Как найти?…
// - Таблицу с id="age-table".
// - Все элементы label внутри этой таблицы (их три).
// - Первый td в этой таблице (со словом «Age»).
// - Форму form с именем name="search".
// - Первый input в этой форме.
// - Последний input в этой форме.
// Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика.

// let table = document.getElementById('age-table');
// console.log(table);             // <table id="age-table">…</table>
// let labelArray = table.getElementsByTagName('label');
// let labelArray2 = document.querySelectorAll('#age-table label');
// console.log(labelArray);        // HTMLCollection(3) [label, label, label]
// console.log(labelArray2);       // NodeList(3) [label, label, label]
// let firstTd = table.rows[0].cells[0];
// let firstTd2 = table.getElementsByTagName('td')[0];
// let firstTd3 = table.querySelector('td');
// console.log(firstTd);           // <td>Age:</td>
// console.log(firstTd2);          // <td>Age:</td>
// console.log(firstTd3);          // <td>Age:</td>
// let form = document.getElementsByName('search')[0];
// let form2 = document.querySelector('form[name="search"]');
// console.log(form);              // <form name="search">…</form>
// console.log(form2);             // <form name="search">…</form>
// let firstInput = form.getElementsByTagName('input')[0];
// let firstInput2 = form.querySelector('input');
// console.log(firstInput);        // <input type="text" name="search">
// console.log(firstInput2);       // <input type="text" name="search">
// let inputs = form.querySelectorAll('input');
// let lastInput = inputs[inputs.length - 1];
// console.log(lastInput);         // <input type="submit" value="Search!">


/*--- 1.5 Свойства узлов: тип, тег и содержимое ---*/

// 1.5.1 У нас есть дерево, структурированное как вложенные списки ul/li.
// Напишите код, который выведет каждый элемент списка <li>:
// Какой в нём текст (без поддерева) ?
// Какое число потомков - всех вложенных <li> (включая глубоко вложенные) ?

// for (const li of document.querySelectorAll('li')) {
//   let title = li.firstChild.data;
//   title = title.trim();
//   let count = li.getElementsByTagName('li').length;
//   console.log(`${title}: ${count}`);
// };

// 1.5.2 Что выведет этот код?
// <html>
// <body>
//   <script>
//     console.log(document.body.lastChild.nodeType);
//   </script>
// </body>
// </html>

// 1.5.3 Что выведет этот код?
{/* <script>
  let body = document.body;
  body.innerHTML = "<!--" + body.tagName + "-->";
  alert( body.firstChild.data ); // что выведет?
</script> */}

// let body = document.body;
// body.innerHTML = "<!--" + body.tagName + "-->";
// console.log(body.firstChild.data);              // BODY

// 1.5.4 Объектом какого класса является document?
// Какое место он занимает в DOM-иерархии?
// Наследует ли он от Node или от Element, или может от HTMLElement?

// console.log(document);                    // #document
// console.log(document.constructor.name);   // HTMLDocument
// console.log(HTMLDocument.prototype.constructor === HTMLDocument);                         // true
// console.log(HTMLDocument.prototype.constructor.name);                                     // HTMLDocument
// console.log(HTMLDocument.prototype.__proto__.constructor.name);                           // Document
// console.log(HTMLDocument.prototype.__proto__.__proto__.constructor.name);                 // Node
// console.dir(document);                    // #document (развернуть в объекте свойство __proto__)


/*--- 1.6 Атрибуты и свойства ---*/

// 1.6.1 Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.
// <!DOCTYPE html>
// <html>
// <body>
//   <div data-widget-name="menu">Choose the genre</div>
//   <script>
//     /* your code */
//   </script>
// </body>
// </html>

// let elem = document.querySelector('[data-widget-name]');
// console.log(elem.dataset.widgetName);
// console.log(elem.getAttribute('data-widget-name'));

// 1.6.2 Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.
// Ссылка является внешней, если:
// Её href содержит ://
// Но не начинается с http://internal.com.

// 1-й вариант
// let links = document.querySelectorAll('a');
// for (const link of links) {
//   let href = link.getAttribute('href');
//   if (!href) continue;
//   if (!href.includes('://')) continue;
//   if (href.startsWith('http://internal.com')) continue;
//   link.style.color = 'orange';
// };

// 2-й вариант
// let selector = 'a[href*="://"]:not([href^="http://internal.com"])';
// let links2 = document.querySelectorAll(selector);
// links2.forEach(link => link.style.color = '#be264c');


/*--- 1.7 Изменение документа ---*/

// 1.7.1 У нас есть пустой DOM-элемент elem и строка text.
// Какие из этих 3-х команд работают одинаково?
// - elem.append(document.createTextNode(text))
// - elem.innerHTML = text
// - elem.textContent = text

// let text = '<b>text</b>';

// elem1.append(document.createTextNode(text));
// elem2.innerHTML = text;
// elem3.textContent = text;
// console.log(elem1, elem2, elem3);

// 1.7.2 Создайте функцию clear(elem), которая удаляет всё содержимое из elem.
// <ol id="elem">
//   <li>Привет</li>
//   <li>Мир</li>
// </ol>

// function clear(elem) {
//   while (elem.firstChild) {
//     elem.firstChild.remove();
//   }
// };
// clear(elem);

// // рефакторинг
// function clear(elem) {
//   elem.innerHTML = '';
// };
// clear(elem);

// 1.7.3 В примере ниже вызов table.remove() удаляет таблицу из документа.
// Но если вы запустите его, вы увидите, что текст "aaa" все еще виден.
// Почему так происходит?
// <table id="table">
//   aaa
//   <tr>
//     <td>Тест</td>
//   </tr>
// </table>
// почему в документе остался текст "ааа"?

// console.log(table);
// table.remove();

// 1.7.4 Напишите интерфейс для создания списка.
// Для каждого пункта:
// - Запрашивайте содержимое пункта у пользователя с помощью prompt.
// - Создавайте элемент <li> и добавляйте его к <ul>.
// - Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
// Все элементы должны создаваться динамически.
// Если пользователь вводит HTML-теги, они должны обрабатываться как текст.

// let ul = document.createElement('ul');
// document.body.append(ul);

// while (true) {
//   let data = prompt('Введите текст для элемента списка', '');
//   if (!data) {
//     break
//   };
//   let li = document.createElement('li');
//   li.textContent = data;
//   ul.append(li);
// };


// 1.7.5 Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.
// Например:
// let data = {
//   "Рыбы": {
//     "форель": {},
//     "лосось": {}
//   },
//   "Деревья": {
//     "Огромные": {
//       "секвойя": {},
//       "дуб": {}
//     },
//     "Цветковые": {
//       "яблоня": {},
//       "магнолия": {}
//     }
//   }
// };
// Синтаксис:
// let container = document.getElementById('container');
// createTree(container, data); // создаёт дерево в контейнере
// Результат (дерево):
// Выберите один из двух способов решения этой задачи:
// - Создать строку, а затем присвоить через container.innerHTML.
// - Создавать узлы через методы DOM.
// Если получится - сделайте оба.
// P.S. Желательно, чтобы в дереве не было лишних элементов, в частности - пустых <ul></ul> на нижнем уровне.

// 1-й вариант
// function createTree(container, obj) {
//   container.innerHTML = createTreeText(obj);
// };

// function createTreeText(obj) {
//   let li = '';
//   let ul;
//   for (const key in obj) {
//     li += '<li>' + key + createTreeText(obj[key]) + '</li>';
//   };
//   if (li) {
//     ul = '<ul>' + li + '</ul>';
//   };
//   return ul || '';
// };

// createTree(container, data);

// 2-й вариант
// function createTree(container, obj) {
//   container.append(createTreeDom(obj));
// }

// function createTreeDom(obj) {
//   // если нет дочерних элементов, то вызов возвращает undefined
//   // и элемент <ul> не будет создан
//   if (!Object.keys(obj).length) return;
//   let ul = document.createElement('ul');

//   for (let key in obj) {
//     let li = document.createElement('li');
//     li.innerHTML = key;
//     let childrenUl = createTreeDom(obj[key]);
//     if (childrenUl) {
//       li.append(childrenUl);
//     };
//     ul.append(li);
//   };

//   return ul;
// };

// let container = document.getElementById('container');
// createTree(container, data);

// 1.7.6 Есть дерево, организованное в виде вложенных списков ul/li.

// Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей - пропускайте.
// Результат:

// let lis = document.getElementsByTagName('li');

// for (const li of lis) {
//   let descendantsCount = li.getElementsByTagName('li').length;
//   if (!descendantsCount) continue;

//   li.firstChild.data += ' [' + descendantsCount + ']';
// };

// 1.7.7 Напишите функцию createCalendar(elem, year, month).
// Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem.
// Календарь должен быть таблицей, где неделя - это <tr>, а день - это <td>. У таблицы должен быть заголовок с названиями дней недели, каждый день - <th>, первым днём недели должен быть понедельник.
// Например, createCalendar(cal, 2012, 9) сгенерирует в cal следующий календарь:
// P.S. В этой задаче достаточно сгенерировать календарь, кликабельным его делать не нужно.

// function createCalendar(elem, year, month) {
//   let mon = month - 1;
//   let d = new Date(year, mon);
//   let table = `<table><tr><th>mon</th><th>tue</th><th>wed</th><th>th</th><th>fr</th><th>sat</th><th>sun</th></tr><tr>`;

//   for (let i = 0; i < getDay(d); i++) {
//     table += '<td></td>';
//   };

//   while (d.getMonth() == mon) {
//     table += '<td>' + d.getDate() + '</td>';
//     if (getDay(d) % 7 == 6) {
//       table += '<tr></tr>';
//     };
//     d.setDate(d.getDate() + 1);
//   };

//   if (getDay(d) != 0) {
//     for (let i = getDay(d); i < 7; i++) {
//       table += '<td></td>';
//     }
//   };

//   table += '</td></table>';
//   elem.innerHTML = table;
// };

// function getDay(date) {
//   let day = date.getDay();
//   if (day == 0) day = 7;
//   return day - 1;
// };

// createCalendar(calendar, 2023, 12);

// 1.7.8 Создайте цветные часы как в примере ниже:
// Для стилизации используйте HTML/CSS, JavaScript должен только обновлять время в элементах.

// Скрипт написан в html

// 1.7.9 Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:
// <ul id="ul">
//   <li id="one">1</li>
//   <li id="two">4</li>
// </ul>

// one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');

// 1.7.10 Вот таблица:
// <table>
// <thead>
//   <tr>
//     <th>Name</th><th>Surname</th><th>Age</th>
//   </tr>
// </thead>
// <tbody>
//   <tr>
//     <td>John</td><td>Smith</td><td>10</td>
//   </tr>
//   <tr>
//     <td>Pete</td><td>Brown</td><td>15</td>
//   </tr>
//   <tr>
//     <td>Ann</td><td>Lee</td><td>5</td>
//   </tr>
//   <tr>
//     <td>...</td><td>...</td><td>...</td>
//   </tr>
// </tbody>
// </table>
// В ней может быть больше строк.
// Напишите код для сортировки по столбцу "name".

// let sortedRows = Array.from(table.rows)
//   .slice(1)
//   .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

// table.tBodies[0].append(...sortedRows);


/*--- 1.8 Стили и классы ---*/

// 1.8.1 Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым. Уведомление должно автоматически исчезнуть через 1,5 секунды.
// Пример объекта options:
// // показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
// showNotification({
//   top: 10, // 10px от верхней границы окна (по умолчанию 0px)
//   right: 10, // 10px от правого края окна (по умолчанию 0px)
//   html: "Hello!", // HTML-уведомление
//   className: "welcome" // дополнительный класс для div (необязательно)
// });
// // Используйте CSS-позиционирование для отображения элемента в заданных координатах. Исходный документ имеет необходимые стили.

// function showNotification({ top = 0, right = 0, className, html }) {

//   let notification = document.createElement('div');
//   notification.className = "notification";
//   if (className) {
//     notification.classList.add(className);
//   };

//   notification.style.top = top + 'px';
//   notification.style.right = right + 'px';

//   notification.innerHTML = html;
//   document.body.append(notification);

//   setTimeout(() => notification.remove(), 1500);
// };

// // test it
// let i = 1;
// setInterval(() => {
//   showNotification({
//     top: 10,
//     right: 10,
//     html: 'Hello ' + i++,
//     className: "welcome"
//   });
// }, 2000);


/*--- 1.9 Размеры и прокрутка элементов9 ---*/