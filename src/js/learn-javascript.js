"use strict";


/*--- 2.1 Основы ---*/

// alert ('Я JavaScript!');

// alert (3 +
// 1
// + 2);                               //6


// Ключевые слова

// Зарезервированные ключевые слова в ECMAScript 2015
// break
// case
// class
// catch
// const
// continue
// debugger
// default
// delete
// do
// else
// export
// extends
// finally
// for
// function
// if
// import
// in
// instanceof
// let
// new
// return
// super
// switch
// this
// throw
// try
// typeof
// var
// void
// while
// with
// yield

// Ключевые слова, зарезервированные на будущее
// Следующие ключевые слова зарезервированы на будущее ECMAScript спецификацией. За ними сейчас не стоит никакой функциональности, но она может появиться в будущих версиях, поэтому эти ключевые слова не могут быть использованы, как идентификаторы. Эти ключевые слова не могут быть использованы даже в strict или non-strict режимах.

// enum
// await

// Следующие ключевые слова зарезервированы для кода, который выполняется в strict режиме:

// implements
// package
// protected
// static
// interface
// private
// public

// Зарезервированные ключевые слова в более старых версиях
// Перечисленные ниже ключевые слова зарезервированы для старых версий ECMAScript спецификаций (ECMAScript от 1 по 3).

// abstract
// boolean
// byte
// char
// double
// final
// float
// goto
// int
// long
// native
// short
// synchronized
// transient
// volatile

// К тому же, литералы null, true, и false зарезервированы в ECMAScript для их обычной функциональности.


/*--- 2.4 Переменные ---*/

// let admin, name;
// name = 'Jhon';
// admin = name;
// alert(admin);

// const BIRTHDAY = '18.04.1982';
// const age = someCode(BIRTHDAY);

// let name = "Ilya";
// alert( `hello ${1}` );                  // hello 1
// alert( `hello ${"name"}` );             // hello name
// alert( `hello ${name}` );               // hello Ilya

// let userName = prompt("Ввведите свое имя", "");     //покажет введенный пользователем текст
// alert(userName);

// let userName = confirm("Ввведите свое имя", "");    //приводит вопрос к true/false
// alert(userName);


/*--- 2.8 Операторы ---*/

// let a = 1, b = 1;
// let c = ++a;                            // префиксная форма инкремента
// let d = b++;                            // постфиксная форма инкремента
// console.log(a);                         // 2
// console.log(b);                         // 2
// console.log(c);                         // 2
// console.log(d);                         // 1

// Результат присваивания
// let a = 2;
// let x = 1 + (a *= 2);
// console.log(a);                            // 4
// console.log(x);                            // 5

// Преобразование типов
// console.log("" + 1 + 0);                      // 10 - сшивание
// console.log("" - 1 + 0);                      // -1
// console.log(true + false);                    // 1+0=1
// console.log(6 / "3");                         // 6/3=2
// console.log("2" * "3");                       // 2*3=6
// console.log(4 + 5 + "px");                    // (4+5)px=9px
// console.log("$" + 4 + 5);                     // $45 - сшивание
// console.log("4" - 2);                         // 4-2=2
// console.log("4px" - 2);                       // NaN
// console.log("  -9  " + 5);                    // "-9-5 " - сшивание
// console.log("  -9  " - 5);                    // -9-5=-14
// console.log(null + 1);                        // 0+1=1
// console.log(undefined + 1);                   // NaN+1=NaN
// console.log(" \t \n" - 2);                    // 0-2=-2, пробельные символы, такие как \t и \n, по краям строки игнорируются при преобразовании в число


// Исправьте сложение

// let a = prompt("Первое число?", 1);             // prompt вернет значение строкой
// let b = prompt("Второе число?", 2);
// alert(a + b);                                   // 12

// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);
// alert(a + b);                                   // 3

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
// alert(+a + +b);                                 // 3


/*--- 2.9 Операторы сравнения ---*/

// console.log(5 > 4);                                 // true
// console.log("ананас" > "яблоко");                   // false: я>а
// console.log("2" > "12");                            // true: 2>1
// console.log(undefined == null);                     // true: специальный случай. Значения null и undefined равны только друг другу при нестрогом сравнении.
// console.log(undefined === null);                    // false: строгое сравнение разных типов
// console.log(null == "\n0\n");                       // false: null равен только undefined
// console.log(null === +"\n0\n");                     // false: строгое сравнение разных типов


/*--- 2.10 Условное ветвление: if, '?' ---*/

// if (строка с нулём)

// if ("0") {                                             // строка не пустая
//     console.log('Привет');
// };

// Название JavaScript

// let value = prompt('Какое "официальное" название JavaScript?', '');
// if (value == 'ECMAScript') {
//     console.log('Верно!');
// } else {
//     console.log('Не знаете? ECMAScript!');
// };

// Покажите знак числа

// let number = prompt('Введите число', 0);
// if (number > 0 ) {
//     console.log(1);
// } else if (number < 0) {
//     console.log(-1);
// } else {
//     console.log(0);
// };

// Перепишите 'if' в '?'

// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Много';
// }
// result = (a + b < 4) ? 'Мало' : 'Много';

// Перепишите 'if..else' в '?'

// let message;
// if (login == 'Сотрудник') {
//     message = 'Привет';
// } else if (login == 'Директор') {
//     message = 'Здравствуйте';
// } else if (login == '') {
//     message = 'Нет логина';
// } else {
//     message = '';
// }
// let message = (login == 'Сотрудник') ? 'Привет' :
//     (login == 'Директор') ? 'Здравствуйте' :
//         (login == '') ? 'Нет логина' :
//             '';


/*--- 2.11 Логические операторы ---*/

// Что выведет alert (ИЛИ)?
// console.log(null || 2 || undefined);                 // 2
// console.log(alert(1) || 2 || alert(3));              // 1, 2

// Что выведет alert (И)?
// console.log(1 && null && 2);                         // null
// console.log(alert(1) && alert(2));                   // 1, underfined

// Что выведет этот код?
// console.log(null || 2 && 3 || 4 );                      // 3. Приоритет оператора && выше, чем ||, поэтому он выполнится первым.

// Проверка значения из диапазона
// let age = prompt('Введите число', '');
// if (age => 14 && age <= 90) {
//     console.log(age);
// } else {
//     console.log('ALERT');
// };

// Проверка значения вне диапазона
// let age = prompt('Введите число', '');
// if (!(age => 14 && age <= 90)) {
//     console.log(age);
// } else {
//     console.log('ALERT');
// };

// let age = prompt('Введите число', '');
// if (age < 14 || age > 90) {
//     console.log(age);
// } else {
//     console.log('ALERT');
// };

// Вопрос об "if"
// if (-1 || 0) console.log('first');                     // true
// if (-1 && 0) console.log('second');                    // false
// if (null || -1 && 1) console.log('third');             // true, null || 1

// Проверка логина
// let userName = prompt('Кто там?', '');

// if (userName === 'Админ') {
//     let password = prompt('Пароль?', '');

//     if (password === 'Я главный') {
//         console.log('Здравствуйте!');
//     } else if (pass === '' || pass === null) {
//         console.log('Отменено');
//     } else {
//         console.log('Неверный пароль');
//     };

// } else if (userName === '' || userName === null) {
//     console.log('Отменено');
// } else {
//     console.log("Я вас не знаю");
// }

// Проверка логина:

// "use strict";

// let getAnswerUserLogin = prompt("Введите логин");
// const login = String("ROOT")
// const password = String("ROOT");

// while (true) {

// if ( getAnswerUserLogin == login ) {

//     let getAnswerUserPassword = prompt("Введите пароль");

//     if ( getAnswerUserPassword == password ) {
//         alert("Вы успешно вошли в аккаунт!")
//         break;
//     }
//     else if ( getAnswerUserPassword != password ) {
//         alert("Пароль не подходит");
//     }
//     else {
//         alert("ERROR");
//         break;
//     }
// }

// else if (getAnswerUserLogin != login) {
//     alert("Нет такого аккаунта!")
//     getAnswerUserLogin = prompt("Введите логин");
// }

// else if ( getAnswerUserLogin == false ) {
//     alert("Вы вышли с формы авторизации")
//     break;
// }

//     else {
//     alert("ERROR")
// }

// }


/*--- 2.13 Циклы while и for ---*/

// Последнее значение цикла
// let i = 3;
// while (i) {
//     alert(i--);                       // 3,2,1
// }

// Какие значения выведет цикл while?
// Префиксный вариант ++i:
// let i = 0;
// while (++i < 5) alert(i);                // 1,2,3,4 - увеличение->сравнение->alert
// Постфиксный вариант i++
// let i = 0;
// while (i++ < 5) alert( i );              // 1,2,3,4,5 - сравнение->увеличение->alert

// Какие значения выведет цикл for?
// Постфиксная форма:
// for (let i = 0; i < 5; i++) alert( i );     // 0,1,2,3,4 - присваивание->сравнение->увеличение->alert
// Префиксная форма:
// for (let i = 0; i < 5; ++i) alert( i );     // 0,1,2,3,4 - присваивание->сравнение->увеличение->alert

// Выведите чётные числа от 2 до 10
// for (let i = 2; i < 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// Замените for на while
// for (let i = 0; i < 3; i++) {
//     console.log( `number ${i}!` );          // 0,1,2
// }
// let i = 0;
// while (i < 3) {
//     console.log(`number ${i}!`);            // 0,1,2
//     i++;
// }

// Повторять цикл, пока ввод неверен
// 1 вариант
// let num;
// do {
//     num = prompt("Введите число больше 100?", 0);
// } while(num <= 100 && num);
// 2 вариант
// while (1) {
//     let res = prompt('введите больше 100');
//     if (res > 100 || res === null) break;
// }

// Вывести простые числа
// for (let num = 0; num < 10; num++) {
//     if ( num % num == 0 ) {
//             console.log(num);                   // выведет все числа от 1 до 10
//     }
// }
// let n = 10;
// nextPrime:
// for (let i = 2; i <= n; i++) {                  // Для всех i...
//     for (let j = 2; j < i; j++) {               // проверить, делится ли число..
//         if ( i % j == 0) continue nextPrime;    // не подходит, берём следующее
//     }
//     console.log(i);                             // 2,3,5,7
// }


/*--- 2.14 Конструкция "switch" ---*/

// Напишите "if", аналогичный "switch"
// switch (browser) {
//     case 'Edge':
//         alert( "You've got the Edge!" );
//         break;

//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         alert( 'Okay we support these browsers too' );
//         break;

//     default:
//         alert( 'We hope that this page looks ok!' );
// }

// let browser = prompt("Your brawser", 0);
// if (browser === 'Edge') {                                   // можно использовать нестрогое сравнение ==
//     console.log("You've got the Edge!");
// } else if (browser === 'Chrome'
//     || browser === 'Firefox'
//     || browser === 'Safari'
//     || browser === 'Opera') {
//     console.log('Okay we support these browsers too');
// } else if (browser ==='0') {                                // это условие добавлено от себя, т.к. при 0=true и сработает предыдущее условие
//     console.log('We hope that this page looks ok!');
// } else {
//     console.log('We hope that this page looks ok!');
// };

// Переписать условия "if" на "switch"
// const number = +prompt('Введите число между 0 и 3', '');
// if (number === 0) {
//     alert('Вы ввели число 0');
// }
// if (number === 1) {
//     alert('Вы ввели число 1');
// }
// if (number === 2 || number === 3) {
//     alert('Вы ввели число 2, а может и 3');
// }

// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
//     case 0:
//         console.log('Вы ввели число 0');
//         break;
//     case 1:
//         console.log('Вы ввели число 1');
//         break;
//     case 2:
//     case 3:
//         console.log('Вы ввели число 2, а может и 3');
//         break;

//     default:
//         break;
// }


/*--- 2.15 Функции. Function Declaration ---*/

// Обязателен ли "else"?
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
// ...
//         return confirm('Родители разрешили?');
//   }
// }
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     }
// ...
//         return confirm('Родители разрешили?');
// }
// Оба варианта функций работают одинаково, отличий нет.

// Перепишите функцию, используя оператор '?' или '||'
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Родители разрешили?');
//     }
// }

// 1 вариант
// function checkAge(age) {
//     return (age > 18) ?
// true                             // заменено на вывод в консоль
//     console.log(age) :
//     confirm('Родители разрешили?')
// }
// checkAge(16)

// 2 вариант
// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
// }
// checkAge(16)

// Функция min(a, b)

// function min(a,b) {
//     if (a < b) {
//         console.log(a);
//         return a;
//     } else {
//         console.log(b);
//         return b;
//     }
// };
// min(2, 5);
// min(3, -1);
// min(3, -1);

// function min(a, b) {
//     console.log(a < b ? a : b);
//     return a < b ? a : b;
// };
// min(2, 5);
// min(3, -1);
// min(3, -1);

// Функция pow(x,n)

// нет проверки натуральности числа
// function pow(x,n) {
// let x = prompt('Введите x');
// let n = prompt('Введите n');
//     console.log(x **n);
//     return x **n
// };
// pow(3, 2);
// pow(3, 3);
// pow(1, 100);

// вариант с полными проверками
// function pow(x, n) {
//     let result = x;

//     for (let i = 1; i < n; i++) {
//         result *= x;        
//     }
//     return result;
// }

// let x = prompt('Введите x', '');
// let n = prompt('Введите n', '');

// if (n<1) {
//     console.log(`Степень ${n} не поддерживается, используйте натуральное число`);
// } else {
//     console.log( pow (x, n));
// }


/*--- 2.17 Стрелочные функции, основы ---*/

// Замените код Function Expression стрелочной функцией:

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   };

//   ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.") 
//   );

//   console.log(ask());

// вариант решения
//   let ask = (question, yes, no) => confirm(question) ? yes() : no();

// let quastion = ("Вы согласны?") ?
// () => alert("Вы согласились.") :
// () => alert("Вы отменили выполнение.")

// ask()


/*--- 3.2 Советы по стилю кода ---*/

// Вот пример файла .eslintrc:

// {
//   "extends": "eslint:recommended",
//   "env": {
//     "browser": true,
//     "node": true,
//     "es6": true
//   },
//   "rules": {
//     "no-console": 0,
//     "indent": ["warning", 2]
//   }
// }


// Какие недостатки вы видите в стиле написания кода этого примера?

// function pow(x,n)
// {
//   let result=1;
//   for(let i=0;i<n;i++) {result*=x;}
//   return result;
// }

// let x=prompt("x?",''), n=prompt("n?",'')
// if (n<=0)
// {
//   alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
// }
// else
// {
//   alert(pow(x,n))
// }

// рефакторинг
/**
 * Returns x raised to the n-th power
 * @param {*} x A number that can be raised to a power.
 * @param {*} n The degree must be a natural number.
 * @returns {number} x raised to the nth power.
 */
// function pow(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) { 
//     result *= x; 
//   }
//   return result;
// }

// let x = prompt("x?", ''); 
// let n = prompt("n?", '');

// if (n <= 0) {
//   alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
// } else {
//   alert(pow(x, n))
// }


/*--- 4.1 Объекты ---*/

// let user=new Object();    // конструктор объекта
// let user2={};             // литерал объекта

// 4.1.1 Напишите код, выполнив задание из каждого пункта отдельной строкой:
// - Создайте пустой объект user.
// - Добавьте свойство name со значением John.
// - Добавьте свойство surname со значением Smith.
// - Измените значение свойства name на Pete.
// - Удалите свойство name из объекта.

// const user = new Object();
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;
// console.log(user);

// 4.1.2 Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// Должно работать так:
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

// function isEmpty(schedule) {
//   for (const key in schedule) {
//     // console.log(schedule);
//     return false;
//     }
//     return true;
//   };

// 4.1.3 Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
// const user = {
//   name: "John"
// };
// это будет работать?
// user.name = "Pete";

// 4.1.4 У нас есть объект, в котором хранятся зарплаты нашей команды:
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

// let sum = 0;
// for (const key in salaries) {
//   sum += salaries[key];
// };
// console.log(sum);

// 4.1.5 Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj) {
//   for (const key in obj) {
//     if (typeof obj[key]==='number') {
//       obj[key]*=2
//     }
//   };
// };

// multiplyNumeric(menu);
// console.log(menu);


/*--- 4.2 Копирование объектов и ссылки ---*/

// 4.2.1 Здесь функция makeUser возвращает объект.
// Каким будет результат при обращении к свойству объекта ref? Почему?

// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// }
// let user = makeUser();
// console.log(user.ref.name);     // Uncaught TypeError: Cannot read properties of undefined (reading 'name')

// 4.2.2 Создайте объект calculator (калькулятор) с тремя методами:
// - read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
// - sum() (суммировать) возвращает сумму сохранённых значений.
// - mul() (умножить) перемножает сохранённые значения и возвращает результат.

// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
//   read() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   }
// };
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// 4.2.3 У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     alert( this.step );
//   }
// };
// Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
// ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
// Такой подход широко используется в библиотеках JavaScript.

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     console.log(this.step);
//     return this;
//   }
// };

// ladder.up().up().down().showStep().down().showStep();


/*--- 4.3 Конструктор, оператор "new" ---*/

// 4.3.1 Возможно ли создать функции A и B, чтобы new A() == new B()?
// function A() { ... }
// function B() { ... }
// let a = new A();
// let b = new B();
// alert( a == b ); // true
// Если да – приведите пример вашего кода.

// let obj = {};
// function A() { return obj; }
// function B() { return obj; }
// console.log(new A() === new B());     //true

// 4.3.2 Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
// - read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// - sum() возвращает сумму этих свойств.
// - mul() возвращает произведение этих свойств.
// Например:
// let calculator = new Calculator();
// calculator.read();
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// function Calculator() {

//   this.read = function () {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   };

//   this.sum = function () {
//     return this.a + this.b;
//   };

//   this.mul = function () {
//     return this.a * this.b;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// console.log('Sum=' + calculator.sum());
// console.log('Mul=' + calculator.mul());

// 4.3.3 Создайте функцию-конструктор Accumulator(startingValue).
// Объект, который она создаёт, должен уметь следующее:
// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

// function Accumulator(startingValue) {
//   this.value = startingValue;

//   this.read = function() {
//     this.value += +prompt('Сколько нужно добавить?', 0);
//   };

// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// console.log(accumulator.value);


/*--- 4.5 Преобразование объектов в примитивы ---*/

// let user = {
//   name: "John",
//   money: 1000,

//   [Symbol.toPrimitive](hint) {
//     console.log(`hint: ${hint}`);
//     return hint == "string" ? `{name: "${this.name}"}` : this.money;
//   }
// };
// console.log(user);        // {name: 'John', money: 1000, Symbol(Symbol.toPrimitive): ƒ}
// console.log(+user);       // 1000
// console.log(user + 500);  // 1500

// let user = {
//   name: "John",
//   money: 1000,

//   // для хинта равного "string"
//   toString() {
//     return `{name: "${this.name}"}`;
//   },

//   // для хинта равного "number" или "default"
//   valueOf() {
//     return this.money;
//   }

// };
// console.log(user);        // {name: 'John', money: 1000, Symbol(Symbol.toPrimitive): ƒ}
// console.log(+user);       // 1000
// console.log(user + 500);  // 1500


/*--- 5.1 Типы данных ---*/