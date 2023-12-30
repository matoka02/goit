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


/*--- 1.9 Размеры и прокрутка элементов ---*/

// 1.9.1 Свойство elem.scrollTop содержит размер прокрученной области при отсчёте сверху. А как подсчитать размер прокрутки снизу (назовём его scrollBottom)?
// Напишите соответствующее выражение для произвольного элемента elem.
// P.S. Проверьте: если прокрутки нет вообще или элемент полностью прокручен - оно должно давать 0.

// let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

// 1.9.2 Напишите код, который возвращает ширину стандартной полосы прокрутки.
// Для Windows она обычно колеблется от 12px до 20px. Если браузер не выделяет место под полосу прокрутки (так тоже бывает, она может быть прозрачной над текстом), тогда значение может быть 0px.
// P.S. Ваш код должен работать в любом HTML-документе, независимо от его содержимого.

// let div = document.createElement('div');

// div.style.overflow = 'scroll';
// div.style.width = '50px';
// div.style.height = '50px';

// document.body.append(div);
// let scrollWidth = div.offsetWidth - div.clientWidth;
// div.remove();
// console.log(scrollWidth);         // 17

// 1.9.3 Исходный документ выглядит так:
// Каковы координаты центра поля?
// Вычислите их и используйте, чтобы поместить мяч в центр поля:
// Элемент должен позиционироваться за счёт JavaScript, а не CSS.
// Код должен работать с любым размером мяча (10, 20, 30 пикселей) и любым размером поля без привязки к исходным значениям.
// P.S. Да, центрирование можно сделать при помощи чистого CSS, но задача именно на JavaScript. Далее будут другие темы и более сложные ситуации, когда JavaScript будет уже точно необходим, это - своего рода «разминка».

// ball.offsetWidth=0 до того, как изображение загрузилось!
// исправим это, установив ширину:
// ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px';
// ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px';

// 1.9.4 В чём отличие между getComputedStyle(elem).width и elem.clientWidth?
// Укажите хотя бы 3 отличия, лучше - больше.

// Отличия:
// - clientWidth возвращает число, а getComputedStyle(elem).width – строку с px на конце.
// - getComputedStyle не всегда даст ширину, он может вернуть, к примеру, "auto" для строчного элемента.
// - clientWidth соответствует внутренней области элемента, включая внутренние отступы padding, а CSS-ширина (при стандартном значении box-sizing) соответствует внутренней области без внутренних отступов padding.
// - Если есть полоса прокрутки, и для неё зарезервировано место, то некоторые браузеры вычитают его из CSS-ширины (т.к. оно больше недоступно для содержимого), а некоторые - нет. Свойство clientWidth всегда ведёт себя одинаково: оно всегда обозначает размер за вычетом прокрутки, т.е. реально доступный для содержимого.


/*--- 1.10 Размеры и прокрутка окна ---*/

// высота/ширина окна (без прокрутки)
// console.log(document.documentElement.clientHeight);       // 695
// console.log(document.documentElement.clientWidth);        // 1079
// высота/ширина окна + прокрутка
// console.log(window.innerHeight);       // 695
// console.log(window.innerWidth);        // 1062
// полная высота
// let scrollHeight = Math.max(
// document.body.scrollHeight, document.documentElement.scrollHeight,
// document.body.offsetHeight, document.documentElement.offsetHeight,
// document.body.clientHeight, document.documentElement.clientHeight
// );
// console.log(scrollHeight);            // 2708
// текущая прокрутка
// console.log(window.pageXOffset);      // 0
// console.log(window.pageYOffset);      // 0
// прокрутка страницы относительно её текущего положения
// window.scrollBy(0, 10);
// прокрутка страницы на абсолютные координаты
// window.scrollTo(0, 0);
// прокрутка элемента к верху страницы
// elem.scrollIntoView(true);
// прокрутка элемента к низу страницы
// elem.scrollIntoView(false);
// запрет прокрутки
// document.body.style.overflow = "hidden";
// отмена запрета
// document.body.style.overflow = "";


/*--- 1.11 Координаты ---*/

// 1.11.1 В ифрейме ниже располагается документ с зелёным «полем».
// Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками.
// В документе уже реализована функциональность, когда при клике на любом месте показываются соответствующие координаты.
// Ваш код должен при помощи DOM получить четыре пары координат:
// - верхний левый, внешний угол (это просто).
// - нижний правый, внешний угол (тоже просто).
// - верхний левый, внутренний угол (чуть сложнее).
// - нижний правый, внутренний угол (есть несколько способов, выберите один).
// Координаты, вычисленные вами, должны совпадать с теми, которые возвращаются по клику мыши.
// P.S. Код должен работать, если у элемента другие размеры или есть рамка, без привязки к конкретным числам.

// let fieldCoords = field.getBoundingClientRect();
// let answer = [
//   [ // 1
//     fieldCoords.left,
//     fieldCoords.top
//   ],
//   [ // 2
//     fieldCoords.right,
//     fieldCoords.bottom
//   ],
//   [ // 3
//     fieldCoords.left + field.clientLeft,
//     fieldCoords.top + field.clientTop
//   ],
//   [ // 4
//     fieldCoords.left + field.clientLeft + field.clientWidth,
//     fieldCoords.top + field.clientTop + field.clientHeight
//   ]
// ];
// console.log(answer.join(' '));

// 1.11.2 Создайте функцию positionAt(anchor, position, elem), которая позиционирует элемент elem в зависимости от значения свойства position рядом с элементом anchor.
// Аргумент position - строка с одним из 3 значений:
// - "top" - расположить elem прямо над anchor
// - "right" - расположить elem непосредственно справа от anchor
// - "bottom" - расположить elem прямо под anchor
// Она используется внутри функции showNote(anchor, position, html), которая уже есть в исходном коде задачи. Она создаёт и показывает элемент-«заметку» с текстом html на заданной позиции position рядом с элементом anchor.

/**
 * Позиционирует элемент elem относительно элемента anchor в соответствии со значением position.
 * @param {Node} anchor     элемент, около которого позиционируется другой элемент
 * @param {string} position одно из: top/right/bottom
 * @param {Node} elem       элемент, который позиционируется
 * Оба элемента elem и anchor должны присутствовать в документе
*/
// function positionAt(anchor, position, elem) {

//   let anchorCoords = anchor.getBoundingClientRect();

//   switch (position) {
//     case "top":
//       elem.style.left = anchorCoords.left + "px";
//       elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
//       break;

//     case "right":
//       elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
//       elem.style.top = anchorCoords.top + "px";
//       break;

//     case "bottom":
//       elem.style.left = anchorCoords.left + "px";
//       elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
//       break;
//   }
// };

/**
 * Показывает заметку с заданным содержимым на заданной позиции
 * относительно элемента anchor.
*/
// function showNote(anchor, position, html) {

//   let note = document.createElement('div');
//   note.className = "note";
//   note.innerHTML = html;
//   document.body.append(note);

//   positionAt(anchor, position, note);
// }

// // проверка
// let blockquote = document.querySelector('blockquote');

// showNote(blockquote, "top", "note above");
// showNote(blockquote, "right", "note at the right");
// showNote(blockquote, "bottom", "note below");

// 1.11.3 Измените код решения предыдущего задания так, чтобы элемент заметки использовал свойство position:absolute вместо position:fixed.
// Это предотвратит расхождение элементов при прокрутке страницы.
// Используйте решение предыдущего задания для начала. Чтобы проверить решение в условиях с прокруткой, добавьте стиль элементу <body style="height: 2000px">.

// function getCoords(elem) {
//   let box = elem.getBoundingClientRect();
//   return {
//     top: box.top + pageYOffset,
//     left: box.left + pageXOffset
//   };
// };

// function positionAt(anchor, position, elem) {
//   let anchorCoords = getCoords(anchor);
//   switch (position) {
//     case "top":
//       elem.style.left = anchorCoords.left + "px";
//       elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
//       break;
//     case "right":
//       elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
//       elem.style.top = anchorCoords.top + "px";
//       break;
//     case "bottom":
//       elem.style.left = anchorCoords.left + "px";
//       elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
//       break;
//   }
// };

// function showNote(anchor, position, html) {
//   let note = document.createElement('div');
//   note.className = "note";
//   note.innerHTML = html;
//   document.body.append(note);
//   positionAt(anchor, position, note);
// };

// // проверка
// let blockquote = document.querySelector('blockquote');

// showNote(blockquote, "top", "note above");
// showNote(blockquote, "right", "note at the right");
// showNote(blockquote, "bottom", "note below");

// 1.11.4 Усовершенствуйте решение предыдущего задания Покажите заметку около элемента (абсолютное позиционирование): научите функцию positionAt(anchor, position, elem) вставлять elem внутрь anchor.
// Новые значения для аргумента position:
// - top-out, right-out, bottom-out - работают так же, как раньше, они вставляют elem сверху/справа/снизу anchor.
// - top-in, right-in, bottom-in - вставляют elem внутрь anchor: прикливают его к верхнему/правому/нижнему краю.
// Например:
// //показывает заметку поверх цитаты
// positionAt(blockquote, "top-out", note);
// // показывает заметку внутри цитаты вблизи верхнего края элемента
// positionAt(blockquote, "top-in", note);
// Результат:
// Для начала возьмите решение задания Покажите заметку около элемента (абсолютное позиционирование).

// function getCoords(elem) {
//   let box = elem.getBoundingClientRect();
//   return {
//     top: box.top + pageYOffset,
//     left: box.left + pageXOffset
//   };
// };

// function showNote(anchor, position, html) {
//   let note = document.createElement('div');
//   note.className = "note";
//   note.innerHTML = html;
//   document.body.append(note);
//   positionAt(anchor, position, note);
// };

// function positionAt(anchor, position, elem) {
//   let anchorCoords = getCoords(anchor);
//   switch (position) {
//     case "top-out":
//       elem.style.left = anchorCoords.left + "px";
//       elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
//       break;
//     case "right-out":
//       elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
//       elem.style.top = anchorCoords.top + "px";
//       break;
//     case "bottom-out":
//       elem.style.left = anchorCoords.left + "px";
//       elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
//       break;
//     case "top-in":
//       elem.style.left = anchorCoords.left + "px";
//       elem.style.top = anchorCoords.top + "px";
//       break;
//     case "right-in":
//       elem.style.width = '150px';
//       elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
//       elem.style.top = anchorCoords.top + "px";
//       break;
//     case "bottom-in":
//       elem.style.left = anchorCoords.left + "px";
//       elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
//       break;
//   }
// };

// let blockquote = document.querySelector('blockquote');

// showNote(blockquote, "top-in", "note top-in");
// showNote(blockquote, "top-out", "note top-out");
// showNote(blockquote, "right-out", "note right-out");
// showNote(blockquote, "bottom-in", "note bottom-in");


/*--- 2.1 Введение в браузерные события ---*/

// 2.1.1 Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

// document.getElementById('hider').onclick = function () {
//   document.getElementById('text').hidden = true;
// };

// 2.1.2 Создайте кнопку, которая будет скрывать себя по нажатию.
// См. html

// 2.1.3 В переменной button находится кнопка. Изначально на ней нет обработчиков.
// Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?

// button.addEventListener("click", () => console.log('1'));
// button.removeEventListener("click", () => console.log('1'));
// button.onclick = () => console.log(2);

// 2.1.4 Пусть мяч перемещается при клике на поле, туда, куда был клик, вот так:
// Требования:
// - Центр мяча должен совпадать с местом нажатия мыши (если это возможно без пересечения краёв поля);
// - CSS-анимация желательна, но не обязательна;
// - Мяч ни в коем случае не должен пересекать границы поля;
// - При прокрутке страницы ничего не должно ломаться;
// Заметки:
// - Код должен уметь работать с различными размерами мяча и поля, не привязываться к каким-либо фиксированным значениям.
// - Используйте свойства event.clientX/event.clientY для определения координат мыши при клике.

// field.onclick = function(evt) {
//   // координаты поля относительно окна браузера
//   let fieldCoords = this.getBoundingClientRect();
//   // мяч имеет абсолютное позиционирование (position:absolute), поле - относительное (position:relative)
//   // таким образом, координаты мяча рассчитываются относительно внутреннего, верхнего левого угла поля
//   let ballCoords = {
//     top: evt.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
//     left: evt.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
//   };
//   // запрещаем пересекать верхнюю границу поля
//   if (ballCoords.top < 0) ballCoords.top = 0;
//   // запрещаем пересекать левую границу поля
//   if (ballCoords.left < 0) ballCoords.left = 0;
//   // запрещаем пересекать правую границу поля
//   if (ballCoords.left + ball.clientWidth > field.clientWidth) {
//     ballCoords.left = field.clientWidth - ball.clientWidth;
//   };
//   // запрещаем пересекать нижнюю границу поля
//   if (ballCoords.top + ball.clientHeight > field.clientHeight) {
//     ballCoords.top = field.clientHeight - ball.clientHeight;
//   };
//   ball.style.left = ballCoords.left + 'px';
//   ball.style.top = ballCoords.top + 'px';
// };

// 2.1.5 Создать меню, которое по нажатию открывается либо закрывается:
// P.S. HTML/CSS исходного документа можно и нужно менять.

// let menuElem = document.getElementById('sweeties');
// let titleElem = menuElem.querySelector('.title');

// titleElem.onclick = function () {
//   menuElem.classList.toggle('open');
// };

// 2.1.6 Есть список сообщений.
// При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.
// Результат должен выглядеть, как показано здесь:

// let panes = document.querySelectorAll('.pane');

// for(let pane of panes) {
//   pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
//   // кнопка становится первым потомком плитки (pane)
//   pane.firstChild.onclick = () => pane.remove();
// };

// 2.1.7 Создайте «Карусель» - ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// В дальнейшем к ней можно будет добавить анимацию, динамическую подгрузку и другие возможности.
// P.S. В этой задаче разработка структуры HTML/CSS составляет 90% решения.

/* этот код помечает картинки, для удобства разработки */
// let i = 1;
// for(let li of carousel.querySelectorAll('li')) {
//   li.style.position = 'relative';
//   li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
//   i++;
// };

// /* конфигурация */
// let width = 130; // ширина картинки
// let count = 3; // видимое количество изображений

// let list = carousel.querySelector('ul');
// let listElems = carousel.querySelectorAll('li');

// let position = 0; // положение ленты прокрутки

// carousel.querySelector('.prev').onclick = function() {
//   // сдвиг влево
//   position += width * count;
//   // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
//   position = Math.min(position, 0)
//   list.style.marginLeft = position + 'px';
// };

// carousel.querySelector('.next').onclick = function() {
//   // сдвиг вправо
//   position -= width * count;
//   // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
//   position = Math.max(position, -width * (listElems.length - count));
//   list.style.marginLeft = position + 'px';
// };


/*--- 2.3 Делегирование событий ---*/

// 2.3.1 Дан список сообщений с кнопками для удаления [x]. Заставьте кнопки работать.
// В результате должно работать вот так:
// P.S. Используйте делегирование событий. Должен быть лишь один обработчик на элементе-контейнере для всего.

// container.onclick = function (evt) {
//   if (evt.target.className != 'remove-button') return;
//   let pane = evt.target.closest('.pane');
//   pane.remove();
// };

// 2.3.2 Создайте дерево, которое по клику на заголовок скрывает-показывает потомков:
// Требования:
// - Использовать только один обработчик событий (применить делегирование)
// - Клик вне текста заголовка (на пустом месте) ничего делать не должен.

// // поместить все текстовые узлы в элемент <span>
// // он занимает только то место, которое необходимо для текста
// for (let li of tree.querySelectorAll('li')) {
//   let span = document.createElement('span');
//   li.prepend(span);
//   span.append(span.nextSibling); // поместить текстовый узел внутрь элемента <span>
// };

// //  ловим клики на всём дереве
// tree.onclick = function (evt) {
//   if (evt.target.tagName != 'SPAN') return;
//   let childrenContainer = evt.target.parentNode.querySelector('ul');
//   if (!childrenContainer) return; // нет детей
//   childrenContainer.hidden = !childrenContainer.hidden;
// };

// 2.3.3 Сделать таблицу сортируемой: при клике на элемент <th> строки таблицы должны сортироваться по соответствующему столбцу.
// Каждый элемент <th> имеет атрибут data-type:
// <table id="grid">
//   <thead>
//     <tr>
//       <th data-type="number">Возраст</th>
//       <th data-type="string">Имя</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>5</td>
//       <td>Вася</td>
//     </tr>
//     <tr>
//       <td>10</td>
//       <td>Петя</td>
//     </tr>
//     ...
//   </tbody>
// </table>
// В примере выше первый столбец содержит числа, а второй - строки. Функция сортировки должна это учитывать, ведь числа сортируются иначе, чем строки.
// Сортировка должна поддерживать только типы "string" и "number".
// P.S. Таблица может быть большой, с любым числом строк и столбцов.

// grid.onclick = function(evt) {
//   if (evt.target.tagName != 'TH') return;

//   let th = evt.target;
//   // если ячейка TH, тогда сортировать
//   // cellIndex - это номер ячейки th:
//   //   0 для первого столбца
//   //   1 для второго и т.д.
//   sortGrid(th.cellIndex, th.dataset.type);
// };

// function sortGrid(colNum, type) {
//   let tbody = grid.querySelector('tbody');
//   let rowsArray = Array.from(tbody.rows);
//   // compare(a, b) сравнивает две строки, нужен для сортировки
//   let compare;
//   switch (type) {
//     case 'number':
//       compare = function(rowA, rowB) {
//         return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
//       };
//       break;
//     case 'string':
//       compare = function(rowA, rowB) {
//         return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
//       };
//       break;
//   }

//   // сортировка
//   rowsArray.sort(compare);
//   tbody.append(...rowsArray);
// };

// 2.3.4 Напишите JS-код, реализующий поведение «подсказка».
// При наведении мыши на элемент с атрибутом data-tooltip, над ним должна показываться подсказка и скрываться при переходе на другой элемент.
// Пример HTML с подсказками:
// <button data-tooltip="эта подсказка длиннее, чем элемент">Короткая кнопка</button>
// <button data-tooltip="HTML<br>подсказка">Ещё кнопка</button>
// Результат в ифрейме с документом:
// В этой задаче мы полагаем, что во всех элементах с атрибутом data-tooltip - только текст. То есть, в них нет вложенных тегов (пока).
// Детали оформления:
// - Отступ от подсказки до элемента с data-tooltip должен быть 5px по высоте.
// - Подсказка должна быть, по возможности, посередине элемента.
// - Подсказка не должна вылезать за границы экрана, в том числе если страница частично прокручена, если нельзя показать сверху - показывать снизу элемента.
// - Текст подсказки брать из значения атрибута data-tooltip. Это может быть произвольный HTML.
// Для решения вам понадобятся два события:
// - mouseover срабатывает, когда указатель мыши заходит на элемент.
// - mouseout срабатывает, когда указатель мыши уходит с элемента.
// Примените делегирование событий: установите оба обработчика на элемент document, чтобы отслеживать «заход» и «уход» курсора на элементы с атрибутом data-tooltip и управлять подсказками с их же помощью.
// После реализации поведения - люди, даже не знакомые с JavaScript смогут добавлять подсказки к элементам.
// P.S. В один момент может быть показана только одна подсказка.

// let tooltipElem;

// document.onmouseover = function (evt) {
//   let target = evt.target;
//   // если у нас есть подсказка...
//   let tooltipHtml = target.dataset.tooltip;
//   if (!tooltipHtml) return;
//   // ...создадим элемент для подсказки
//   tooltipElem = document.createElement('div');
//   tooltipElem.className = 'tooltip';
//   tooltipElem.innerHTML = tooltipHtml;
//   document.body.append(tooltipElem);
//   // спозиционируем его сверху от аннотируемого элемента (top-center)
//   let coords = target.getBoundingClientRect();
//   let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
//   if (left < 0) left = 0; // не заезжать за левый край окна
//   let top = coords.top - tooltipElem.offsetHeight - 5;
//   if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
//     top = coords.top + target.offsetHeight + 5;
//   };
//   tooltipElem.style.left = left + 'px';
//   tooltipElem.style.top = top + 'px';
// };

// document.onmouseout = function (evt) {
//   if (tooltipElem) {
//     tooltipElem.remove();
//     tooltipElem = null;
//   }
// };


/*--- 2.4 Действия браузера по умолчанию ---*/

// 2.4.1 Почему в коде ниже return false не работает?
// <script>
//   function handler() {
//     alert( "..." );
//     return false;
//   }
// </script>
// <a href="https://w3.org" onclick="handler()">браузер откроет w3.org</a>
// Браузер переходит по указанной ссылке, но нам этого не нужно.
// Как поправить?

// См. html  

// 2.4.2 Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том, действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке.
// Так это должно работать:
// Детали:
// - Содержимое #contents может быть загружено динамически и присвоено при помощи innerHTML. Так что найти все ссылки и поставить на них обработчики нельзя. Используйте делегирование.
// - Содержимое может иметь вложенные теги, в том числе внутри ссылок, например, <a href=".."><i>...</i></a>.

// contents.onclick = function(evt) {
//   function handleLink(href) {
//     let isLeaving = confirm(`Leave for ${href}?`);
//     if (!isLeaving) return false;
//   };
//   let target = evt.target.closest('a');
//   if (target && contents.contains(target)) {
//     return handleLink(target.getAttribute('href'));
//   };
// };

// 2.4.3 Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.
// Например:
// P.S. Используйте делегирование.

// thumbs.onclick = function(evt) {
//   let thumbnail = evt.target.closest('a');
//   if (!thumbnail) return;
//   showThumbnail(thumbnail.href, thumbnail.title);
//   evt.preventDefault();
// };
// function showThumbnail(href, title) {
//   largeImg.src = href;
//   largeImg.alt = title;
// };


/*--- 3.1 Основы событий мыши ---*/

// 3.1.1 Создайте список, в котором элементы могут быть выделены, как в файловых менеджерах.
// При клике на элемент списка выделяется только этот элемент (добавляется класс .selected), отменяется выделение остальных элементов.
// Если клик сделан вместе с Ctrl (Cmd для Mac), то выделение переключается на элементе, но остальные элементы при этом не изменяются.
// P.S. В этом задании все элементы списка содержат только текст. Без вложенных тегов.
// P.P.S. Предотвратите стандартное для браузера выделение текста при кликах.

// ul.onclick = function(evt) {
//   if (evt.target.tagName != "LI") return;

//   if (evt.ctrlKey || evt.metaKey) {
//     toggleSelect(evt.target);
//   } else {
//     singleSelect(evt.target);
//   }
// };

// // предотвращает ненужное выделение элементов списка при клике
// ul.onmousedown = function() {
//   return false;
// };

// function toggleSelect(li) {
//   li.classList.toggle('selected');
// };

// function singleSelect(li) {
//   let selected = ul.querySelectorAll('.selected');
//   for(let elem of selected) {
//     elem.classList.remove('selected');
//   };
//   li.classList.add('selected');
// };


/*--- 3.2 Движение мыши: mouseover/out, mouseenter/leave ---*/

// 3.2.1 Напишите JavaScript код, который показывает подсказку над элементом с атрибутом data-tooltip. Значение атрибута должно становиться текстом подсказки.
// Это похоже на задачу Поведение "подсказка", но здесь элементы с подсказками могут быть вложены друг в друга. Показываться должна подсказка на самом глубоко вложенном элементе.
// Только одна подсказка может быть показана в любой момент времени.
// Например:
// <div data-tooltip="Здесь - домашний интерьер" id="house">
//   <div data-tooltip="Здесь - крыша" id="roof"></div>
//   ...
//   <a href="https://ru.wikipedia.org/wiki/%D0%A2%D1%80%D0%B8_%D0%BF%D0%BE%D1%80%D0%BE%D1%81%D1%91%D0%BD%D0%BA%D0%B0" data-tooltip="Читать далее…">Наведи курсор на меня</a>
// </div>

// let tooltip;

// document.onmouseover = function (evt) {
//   // важно: быстро движущийся курсор может прыгнуть сразу к дочернему элементу, пропустив родительский
//   // так что событие mouseover произойдёт сразу на дочернем элементе.

//   let anchorElem = evt.target.closest('[data-tooltip]');
//   if (!anchorElem) return;
//   // показываем подсказку и запоминаем её
//   tooltip = showTooltip(anchorElem, anchorElem.dataset.tooltip);
// };

// document.onmouseout = function () {
//   // возможно такое, что произошло событие mouseout, но мы всё ещё внутри элемента
//   // (оно было где-то внутри и всплыло)
//   // но в этом случае сразу же последует событие mouseover,
//   // то есть подсказка исчезнет и потом снова покажется
//   //
//   // к счастью, этого не будет видно,
//   // так как оба события происходят почти одновременно
//   if (tooltip) {
//     tooltip.remove();
//     tooltip = false;
//   }
// };

// function showTooltip(anchorElem, html) {
//   let tooltipElem = document.createElement('div');
//   tooltipElem.className = 'tooltip';
//   tooltipElem.innerHTML = html;
//   document.body.append(tooltipElem);

//   let coords = anchorElem.getBoundingClientRect();

//   // позиционируем подсказку над центром элемента
//   let left = coords.left + (anchorElem.offsetWidth - tooltipElem.offsetWidth) / 2;
//   if (left < 0) left = 0;

//   let top = coords.top - tooltipElem.offsetHeight - 5;
//   if (top < 0) {
//     top = coords.top + anchorElem.offsetHeight + 5;
//   };

//   tooltipElem.style.left = left + 'px';
//   tooltipElem.style.top = top + 'px';

//   return tooltipElem;
// };

// 3.2.2 Напишите функцию, которая показывает подсказку над элементом только в случае, когда пользователь передвигает мышь на него, но не через него.
// Другими словами, если пользователь подвинул курсор на элементе и остановился - показывать подсказку. А если он просто быстро провёл курсором по элементу, то не надо ничего показывать. Кому понравится лишнее мелькание?
// Технически, мы можем измерять скорость прохода курсора мыши над элементом, и если она низкая, то можно посчитать, что пользователь остановил курсор над элементом, и показать ему подсказку. А если скорость высокая, то тогда не показывать.
// Создайте для этого универсальный объект new HoverIntent(options).
// Его настройки options:
// - elem - отслеживаемый элемент.
// - over - функция, вызываемая, при заходе на элемент, считаем что заход - это когда курсор медленно двигается или остановился над элементом.
// - out - функция, вызываемая при уходе курсора с элемента (если был заход).
// Пример использования такого объекта для показа подсказки:
// // пример подсказки
// let tooltip = document.createElement('div');
// tooltip.className = "tooltip";
// tooltip.innerHTML = "Tooltip";
// // объект будет отслеживать движение мыши и вызывать функции over/out
// new HoverIntent({
//   elem,
//   over() {
//     tooltip.style.left = elem.getBoundingClientRect().left + 'px';
//     tooltip.style.top = elem.getBoundingClientRect().bottom + 5 + 'px';
//     document.body.append(tooltip);
//   },
//   out() {
//     tooltip.remove();
//   }
// });
// Если двигать курсор над «часами» быстро, то ничего не произойдёт, а если вы замедлите движение курсора над элементом или остановите его, то будет показана подсказка.
// Обратите внимание: подсказка не должна пропадать (мигать), когда курсор переходит между дочерними элементами часов.

// 'use strict';

// // 3.2.2.1 Универсальный объект new HoverIntent(options)
// class HoverIntent {

//   constructor({
//     sensitivity = 0.1, // скорость ниже 0.1px/ms значит "курсор на элементе"
//     interval = 100,    // измеряем скорость каждые 100ms
//     elem,
//     over,
//     out
//   }) {
//     this.sensitivity = sensitivity;
//     this.interval = interval;
//     this.elem = elem;
//     this.over = over;
//     this.out = out;

//     // убедитесь, что "this" сохраняет своё значение для обработчиков.
//     this.onMouseMove = this.onMouseMove.bind(this);
//     this.onMouseOver = this.onMouseOver.bind(this);
//     this.onMouseOut = this.onMouseOut.bind(this);

//     // и в функции, измеряющей время (вызываемой из setInterval)
//     this.trackSpeed = this.trackSpeed.bind(this);

//     elem.addEventListener("mouseover", this.onMouseOver);
//     elem.addEventListener("mouseout", this.onMouseOut);
//   };

//   onMouseOver(evt) {

//     if (this.isOverElement) {
//       // Игнорируем событие над элементом,
//       // так как мы уже измеряем скорость
//       return;
//     }

//     this.isOverElement = true;

//     // после каждого движения измеряем дистанцию
//     // между предыдущими и текущими координатами курсора
//     // если скорость меньше sensivity, то она считается медленной

//     this.prevX = evt.pageX;
//     this.prevY = evt.pageY;
//     this.prevTime = Date.now();

//     elem.addEventListener('mousemove', this.onMouseMove);
//     this.checkSpeedInterval = setInterval(this.trackSpeed, this.interval);
//   };

//   onMouseOut(evt) {
//     // если ушли с элемента
//     if (!evt.relatedTarget || !elem.contains(evt.relatedTarget)) {
//       this.isOverElement = false;
//       this.elem.removeEventListener('mousemove', this.onMouseMove);
//       clearInterval(this.checkSpeedInterval);
//       if (this.isHover) {
//         // если была остановка движения на элементе
//         this.out.call(this.elem, evt);
//         this.isHover = false;
//       }
//     }
//   };

//   onMouseMove(evt) {
//     this.lastX = evt.pageX;
//     this.lastY = evt.pageY;
//     this.lastTime = Date.now();
//   };

//   trackSpeed() {

//     let speed;

//     if (!this.lastTime || this.lastTime == this.prevTime) {
//       // курсор не двигался
//       speed = 0;
//     } else {
//       speed = Math.sqrt(
//         Math.pow(this.prevX - this.lastX, 2) +
//         Math.pow(this.prevY - this.lastY, 2)
//       ) / (this.lastTime - this.prevTime);
//     }

//     if (speed < this.sensitivity) {
//       clearInterval(this.checkSpeedInterval);
//       this.isHover = true;
//       this.over.call(this.elem);
//     } else {
//       // скорость высокая, запоминаем новые координаты
//       this.prevX = this.lastX;
//       this.prevY = this.lastY;
//       this.prevTime = this.lastTime;
//     }
//   };

//   destroy() {
//     elem.removeEventListener('mousemove', this.onMouseMove);
//     elem.removeEventListener('mouseover', this.onMouseOver);
//     elem.removeEventListener('mouseout', this.onMouseOut);
//   };

// };

// // 3.2.2.2 Тесты dispatchEvent
// describe("hoverIntent", function() {

//   function mouse(eventType, x, y, options) {
//     let eventOptions = Object.assign({
//       bubbles: true,
//       clientX: x,
//       clientY: y,
//       pageX: x,
//       pageY: y,
//       target: elem
//     }, options || {});

//     elem.dispatchEvent(new MouseEvent(eventType, eventOptions));
//   };

//   let isOver;
//   let hoverIntent;

//   before(function() {
//     this.clock = sinon.useFakeTimers();
//   });

//   after(function() {
//     this.clock.restore();
//   });

//   beforeEach(function() {
//     isOver = false;

//     hoverIntent = new HoverIntent({
//       elem: elem,
//       over: function() {
//         isOver = true;
//       },
//       out: function() {
//         isOver = false;
//       }
//     });
//   })

//   afterEach(function() {
//     if (hoverIntent) {
//       hoverIntent.destroy();
//     }
//   })

//   it("mouseover -> immediately no tooltip", function() {
//     mouse('mouseover', 10, 10);
//     assert.isFalse(isOver);
//   });

//   it("mouseover -> pause shows tooltip", function() {
//     mouse('mouseover', 10, 10);
//     this.clock.tick(100);
//     assert.isTrue(isOver);
//   });

//   it("mouseover -> fast mouseout no tooltip", function() {
//     mouse('mouseover', 10, 10);
//     setTimeout(
//       () => mouse('mouseout', 300, 300, { relatedTarget: document.body}),
//       30
//     );
//     this.clock.tick(100);
//     assert.isFalse(isOver);
//   });


//   it("mouseover -> slow move -> tooltips", function() {
//     mouse('mouseover', 10, 10);
//     for(let i=10; i<200; i+= 10) {
//       setTimeout(
//         () => mouse('mousemove', i/5, 10),
//         i
//       );
//     }
//     this.clock.tick(200);
//     assert.isTrue(isOver);
//   });

//   it("mouseover -> fast move -> no tooltip", function() {
//     mouse('mouseover', 10, 10);
//     for(let i=10; i<200; i+= 10) {
//       setTimeout(
//         () => mouse('mousemove', i, 10),
//         i
//       );
//     }
//     this.clock.tick(200);
//     assert.isFalse(isOver);
//   });

// });

// // 3.2.2.3 для демо
// setTimeout(function() {
//   new HoverIntent({
//     elem,
//     over() {
//       tooltip.style.left = elem.getBoundingClientRect().left + 5 + 'px';
//       tooltip.style.top = elem.getBoundingClientRect().bottom + 5 + 'px';
//       tooltip.hidden = false;
//     },
//     out() {
//       tooltip.hidden = true;
//     }
//   });
// }, 2000);


/*--- 3.3 Drag'n'Drop с событиями мыши ---*/

// 3.3.1 Создайте слайдер:
// Захватите мышкой синий бегунок и двигайте его.
// Важные детали:
// - Слайдер должен нормально работать при резком движении мыши влево или вправо за пределы полосы. При этом бегунок должен останавливаться чётко в нужном конце полосы.
// - При нажатом бегунке мышь может выходить за пределы полосы слайдера, но слайдер пусть всё равно работает (это удобно для пользователя).

// let thumb = slider.querySelector('.thumb');

// thumb.onmousedown = function (evt) {
//   // предотвратить запуск выделения (действие браузера)
//   evt.preventDefault(); 
//   // shiftY здесь не нужен, слайдер двигается только по горизонтали
//   let shiftX = evt.clientX - thumb.getBoundingClientRect().left;
//   document.addEventListener('mousemove', onMouseMove);
//   document.addEventListener('mouseup', onMouseUp);

//   function onMouseMove(evt) {
//     let newLeft = evt.clientX - shiftX - slider.getBoundingClientRect().left;
//     // курсор вышел из слайдера => оставить бегунок в его границах.
//     if (newLeft < 0) {
//       newLeft = 0;
//     };
//     let rightEdge = slider.offsetWidth - thumb.offsetWidth;
//     if (newLeft > rightEdge) {
//       newLeft = rightEdge;
//     };
//     thumb.style.left = newLeft + 'px';
//   };

//   function onMouseUp() {
//     document.removeEventListener('mouseup', onMouseUp);
//     document.removeEventListener('mousemove', onMouseMove);
//   }

// };

// thumb.ondragstart = function () {
//   return false;
// };

// 3.3.2 В этой задаче вы можете проверить своё понимание сразу нескольких аспектов Drag’n’Drop и DOM.
// Сделайте так, чтобы элементы с классом draggable можно было переносить мышкой. Как мяч в этой главе.
// Требования к реализации:
// - Используйте делегирование событий для отслеживания начала перетаскивания: только один обработчик событий mousedown на документе.
// - Если элементы подносят к верхней/нижней границе окна - оно должно прокручиваться вверх/вниз, чтобы позволить дальнейшее перетаскивание.
// - Горизонтальная прокрутка отсутствует (чуть-чуть упрощает задачу, её просто добавить).
// - Элемент при переносе, даже при резких движениях мышкой, не должен даже частично попасть вне окна.
// Демо слишком велико для размещения здесь, перейдите по ссылке ниже.
// https://ru.js.cx/task/drag-heroes/solution/

// let isDragging = false;

// document.addEventListener('mousedown', function (evt) {

//   let dragElement = evt.target.closest('.draggable');
//   if (!dragElement) return;
//   evt.preventDefault();
//   dragElement.ondragstart = function () {
//     return false;
//   };

//   let coords, shiftX, shiftY;
//   startDrag(dragElement, evt.clientX, evt.clientY);

//   function onMouseUp(event) {
//     finishDrag();
//   };

//   function onMouseMove(event) {
//     moveAt(event.clientX, event.clientY);
//   };

//   // в начале перемещения элемента:
//   //   запоминаем место клика по элементу (shiftX, shiftY),
//   //   переключаем позиционирование элемента (position:fixed) и двигаем элемент
//   function startDrag(element, clientX, clientY) {
//     if (isDragging) {
//       return;
//     };
//     isDragging = true;

//     document.addEventListener('mousemove', onMouseMove);
//     element.addEventListener('mouseup', onMouseUp);

//     shiftX = clientX - element.getBoundingClientRect().left;
//     shiftY = clientY - element.getBoundingClientRect().top;

//     element.style.position = 'fixed';

//     moveAt(clientX, clientY);
//   };

//   // переключаемся обратно на абсолютные координаты
//   // чтобы закрепить элемент относительно документа
//   function finishDrag() {
//     if (!isDragging) {
//       return;
//     };
//     isDragging = false;

//     dragElement.style.top = parseInt(dragElement.style.top) + pageYOffset + 'px';
//     dragElement.style.position = 'absolute';

//     document.removeEventListener('mousemove', onMouseMove);
//     dragElement.removeEventListener('mouseup', onMouseUp);
//   };

//   function moveAt(clientX, clientY) {
//     // вычисляем новые координаты (относительно окна)
//     let newX = clientX - shiftX;
//     let newY = clientY - shiftY;
//     // проверяем, не переходят ли новые координаты за нижний край окна:
//     // сначала вычисляем гипотетический новый нижний край окна
//     let newBottom = newY + dragElement.offsetHeight;
//     // затем, если новый край окна выходит за пределы документа, прокручиваем страницу
//     if (newBottom > document.documentElement.clientHeight) {
//       // координата нижнего края документа относительно окна
//       let docBottom = document.documentElement.getBoundingClientRect().bottom;
//       // простой скролл документа на 10px вниз имеет проблему -
//       // он может прокручивать документ за его пределы,
//       // поэтому используем Math.min(расстояние до конца, 10)
//       let scrollY = Math.min(docBottom - newBottom, 10);
//       // вычисления могут быть не совсем точны - случаются ошибки при округлении,
//       // которые приводят к отрицательному значению прокрутки. отфильтруем их:
//       if (scrollY < 0) scrollY = 0;
//       window.scrollBy(0, scrollY);
//       // быстрое перемещение мыши может поместить курсор за пределы документа вниз
//       // если это произошло -
//       // ограничиваем новое значение Y максимально возможным исходя из размера документа:
//       newY = Math.min(newY, document.documentElement.clientHeight - dragElement.offsetHeight);
//     };
//     // проверяем, не переходят ли новые координаты за верхний край окна (по схожему алгоритму)
//     if (newY < 0) {
//       // прокручиваем окно вверх
//       let scrollY = Math.min(-newY, 10);
//       if (scrollY < 0) scrollY = 0; // проверяем ошибки точности
//       window.scrollBy(0, -scrollY);
//       // быстрое перемещение мыши может поместить курсор за пределы документа вверх
//       newY = Math.max(newY, 0); // newY не может быть меньше нуля
//     };
//     // ограничим newX размерами окна
//     // согласно условию, горизонтальная прокрутка отсутствует, поэтому это не сложно:
//     if (newX < 0) newX = 0;
//     if (newX > document.documentElement.clientWidth - dragElement.offsetWidth) {
//       newX = document.documentElement.clientWidth - dragElement.offsetWidth;
//     };

//     dragElement.style.left = newX + 'px';
//     dragElement.style.top = newY + 'px';
//   }
// });

/*--- 3.4 Клавиатура: keydown и keyup ---*/