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

// Взгляните на следующий код:

// let str = "Привет";
// str.test = 5;
// console.log(str.test);    // Uncaught TypeError: Cannot create property 'test' on string 'Привет'

// Как вы думаете, это сработает? Что выведется на экран?


/*--- 5.2  Числа ---*/

// let billion = 1_000_000_000;
// console.log(billion);           // 1000000000
// let billion2 = 1e9;
// console.log(billion2);          // 1000000000
// let ms = 1e-6;
// console.log(ms);                // 0.000001

// let a = 0b1111111;              // 255 - двоичная (бинарная) запись
// let b = 0o377;                  // 255 - восьмеричная
// let c = 0xff;                   // 255 - шестнадцатеричная

// let num = 255;
// console.log(num.toString(16));  // ff
// console.log(num.toString(2));   // 1111111
// console.log(num.toString(8));   // 377

// console.log(123456..toString(36));    // 2n9c

// console.log(parseInt('100px'));       // 100
// console.log(parseFloat('12.5em'));    // 12.5
// console.log(parseInt('a123'));        // NaN
// console.log(parseInt('2n9c', 36));     // 123456

// 5.2.1 Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
// P.S. Есть «подводный камень» при работе с типами.

// let a = +prompt('Enter number', '');
// let b = +prompt('Enter number', '');
// console.log(a + b);

// 5.2.2 Как правильно округлить 6.35?

// console.log((6.35*10).toFixed(20));     // 63.50000000000000000000
// console.log(Math.round(6.35*10)/10);    // 6.4


// 5.2.3 Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

// function readNumber() {
//   let num;

//   do {
//     num = prompt("Введите число", 0);
//   } while ( !isFinite(num) );

//   if (num === null || num === '') return null;

//   return +num;
// };

// console.log(`Число: ${readNumber()}`);

// 5.2.4 Этот цикл – бесконечный. Он никогда не завершится, почему?
// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }

// let i = 0;
// while (i < 11) {
//   i += 0.2;
//   if (i > 9.8 && i < 10.2) console.log(i);
// }


// 5.2.5 Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

// function random(min, max) {
//   return min + Math.random() * (max - min);
// };
// console.log(random(1, 5));
// console.log(random(1, 5));
// console.log(random(1, 5));

// 5.2.6 Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
// Любое число из интервала min..max должно появляться с одинаковой вероятностью.

// function randomInteger(min, max) {
//   let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// };
// console.log(randomInteger(1, 3));


/*--- 5.3 Строки ---*/

// 5.3.1 Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// function ucFirst(str) {
//   if (!str) return str;
//   return str[0].toUpperCase() + str.slice(1);
// }
// console.log(ucFirst('вася'));

// 5.3.2 Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:

// function checkSpam(str) {
//   let lowerStr = str.toLowerCase();
//   return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// };
// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('innocent rabbit'));

// 5.3.3 Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// function truncate(str, maxlength) {
//   if (str.length < maxlength) return str;
//   return str.slice(0, maxlength - 1) + '…'
// };
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

// function truncate(str, maxlength) {
//   return (str.length > maxlength) ?
//     str.slice(0, maxlength - 1) + '…' : str;
// };
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

// 5.3.4 Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// function extractCurrencyValue(str) {
//   if (!str) return alert('Неверный формат ввода');
//   return +str.slice(1);
// };
// console.log(extractCurrencyValue('$120'));


/*--- 5.4 Массивы ---*/

// 5.4.1 Что выведет следующий код?
// let fruits = ["Яблоки", "Груша", "Апельсин"];
// let shoppingCart = fruits;
// shoppingCart.push("Банан");
// console.log(fruits.length);             // 4
// console.log(shoppingCart.length);       // 4

// 5.4.2 Давайте произведём 5 операций с массивом.
// - Создайте массив styles с элементами «Джаз» и «Блюз».
// - Добавьте «Рок-н-ролл» в конец.
// - Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// - Удалите первый элемент массива и покажите его.
// - Вставьте Рэп и Регги в начало массива.

// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// console.log(styles);
// styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
// console.log(styles);
// styles.shift();
// console.log(styles);
// styles.unshift('Рэп', 'Регги');
// console.log(styles);

// 5.4.3 Каков результат? Почему?

// let arr = ["a", "b"];
// arr.push(function() {
//   console.log(this);        // ['a', 'b', ƒ]
// });
// console.log(arr[2]());      // undefined

// 5.4.4 Напишите функцию sumInput(), которая:
// - Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// - Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// - Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

// function sumInput() {
//   let numbers = [];
//   while (true) {
//     let value = prompt("Введите число", 0);
//     if (value === "" || value === null || !isFinite(value)) break;
//     numbers.push(+value);
//   }

//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// };
// console.log(sumInput());

// 5.4.5 На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:
// // Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.

// function getMaxSubSum(arr) {
//   let maxSum = 0; // если элементов не будет - возвращаем 0

//   for (let i = 0; i < arr.length; i++) {
//     let sumFixedStart = 0;
//     for (let j = i; j < arr.length; j++) {
//       sumFixedStart += arr[j];
//       maxSum = Math.max(maxSum, sumFixedStart);
//     }
//   };

//   return maxSum;
// };

// function getMaxSubSum(arr) {
//   let maxSum = 0;
//   let partialSum = 0;

//   for (let item of arr) {                   // для каждого элемента массива
//     partialSum += item;                     // добавляем значение элемента к partialSum
//     maxSum = Math.max(maxSum, partialSum);  // запоминаем максимум на данный момент
//     if (partialSum < 0) partialSum = 0;     // ноль если отрицательное
//   }

//   return maxSum;
// };

// console.log(getMaxSubSum([-1, 2, 3, -9]));        // 5
// console.log(getMaxSubSum([-1, 2, 3, -9, 11]));    // 11
// console.log(getMaxSubSum([-2, -1, 1, 2]));        // 3
// console.log(getMaxSubSum([100, -9, 2, -3, 5]));   // 100
// console.log(getMaxSubSum([1, 2, 3]));             // 6
// console.log(getMaxSubSum([-1, -2, -3]));          // 0


/*--- 5.5 Методы массивов ---*/

// 5.5.1 Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

// function camelize(str) {
//   return str
//   .split('-')
//   .map((word, idx) => idx == 0 ? word : word[0].toUpperCase() + word.slice(1))
//   .join('');
// };
// console.log(camelize('background-color'));
// console.log(camelize('list-style-image'));
// console.log(camelize('-webkit-transition'));

// 5.5.2 Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
// Функция должна возвращать новый массив и не изменять исходный.

// function filterRange(arr, a, b) {
//   return arr.filter(item => (a <= item && item <= b));
// };
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log(filtered);
// console.log(arr);

// 5.5.3 Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.

// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];
//     if (val < a || val > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);

// 5.5.4 Сортировать в порядке по убыванию
// важность: 4
// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// console.log(arr);

// 5.5.5 У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

// function copySorted(arr) {
//   return arr.slice().sort();
// }
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// console.log(arr);
// console.log(sorted);

// 5.5.6 Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.
// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
// Например, давайте добавим умножение *, деление / и возведение в степень **:
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.

// function Calculator() {

//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b
//   };

//   this.calculate = function (str) {

//     let split = str.split(' '),
//       a = +split[0],
//       op = split[1],
//       b = +split[2]

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[op](a, b);
//   }

//   this.addMethod = function (name, func) {
//     this.methods[name] = func;
//   };
// };


// 5.5.7 У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item=>item.name);
// console.log(names);

// 5.5.8 У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
// Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка.

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id,
// }));

// console.log(usersMapped[0].id);
// console.log(usersMapped[0].fullName);

// 5.5.9 Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

// function sortByAge(arr) {
//   arr.sort((a, b) => a.age > b.age ? 1 : -1);
// };

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// sortByAge(arr);

// console.log(arr[0].name);
// console.log(arr[1].name);
// console.log(arr[2].name);

// 5.5.10 Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:
// Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.

// 1-й вариант
// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }
// let arr = [1, 2, 3];
// shuffle(arr);
// console.log(arr);

// 2-й вариант
// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// };

// // подсчёт вероятности для всех возможных вариантов
// let count = {
//   '123': 0,
//   '132': 0,
//   '213': 0,
//   '231': 0,
//   '321': 0,
//   '312': 0
// };

// for (let i = 0; i < 1000000; i++) {
//   let array = [1, 2, 3];
//   shuffle(array);
//   count[array.join('')]++;
// }

// // показать количество всех возможных вариантов
// for (let key in count) {
//   console.log(`${key}: ${count[key]}`);;
// }

// 3-й вариант (тасование Фишера-Йетса)
// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// // подсчёт вероятности для всех возможных вариантов
// let count = {
//   '123': 0,
//   '132': 0,
//   '213': 0,
//   '231': 0,
//   '321': 0,
//   '312': 0
// };

// for (let i = 0; i < 1000000; i++) {
//   let array = [1, 2, 3];
//   shuffle(array);
//   count[array.join('')]++;
// }

// // показать количество всех возможных вариантов
// for (let key in count) {
//   console.log(`${key}: ${count[key]}`);;
// };

// 5.5.11 Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

// function getAverageAge(users) {
//   return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// };
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// console.log(getAverageAge(arr));

// 5.5.12 Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// function unique(arr) {
//   let result = [];

//   for (let str of arr) {
//     if (!result.includes(str)) {
//       result.push(str);
//     }
//   }

//   return result;
// };

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// console.log(unique(strings));

// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.

// 5.5.13 Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.
// Такая функция очень удобна при работе с данными, которые приходят с сервера.
// В этой задаче мы предполагаем, что id уникален. Не может быть двух элементов массива с одинаковым id.
// Используйте метод .reduce в решении.

// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];

// let usersById = groupById(users);

// function groupById(array) {
//   return array.reduce((obj, value) => {
//     obj[value.id] = value;
//     return obj;
//   }, {})
// };

// console.log(usersById);


/*--- 5.7 Map и Set ---*/

// 5.7.1 Допустим, у нас есть массив arr.
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
// P.S. Здесь мы используем строки, но значения могут быть любого типа.
// P.P.S. Используйте Set для хранения уникальных значений.

// function unique(arr) {
//   return Array.from(new Set(arr));
// };

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// console.log(unique(values));

// 5.7.2 Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

// 1-й вариант
// function aclean(arr) {
//   let map = new Map();

//   for (let word of arr) {
//     // разбиваем слово на буквы, сортируем и объединяем снова в строку
//     let sorted = word.toLowerCase().split("").sort().join(""); // (*)
//     map.set(sorted, word);
//   }

//   return Array.from(map.values());
// };

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log(aclean(arr));

// 2-й вариант
// function aclean(arr) {
//   let obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     let sorted = arr[i].toLowerCase().split("").sort().join("");
//     obj[sorted] = arr[i];
//   }

//   return Object.values(obj);
// };
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log(aclean(arr));

// 5.7.3 Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
// Но это не выходит:
// let map = new Map();
// map.set("name", "John");
// let keys = map.keys();

// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
// keys.push("more");
// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?

// let map = new Map();
// map.set("name", "John");
// let keys = Array.from(map.keys());
// keys.push("more");
// console.log(keys);


/*--- 5.9 WeakMap и WeakSet ---*/

// 5.9.1 Есть массив сообщений:
// У вас есть к ним доступ, но управление этим массивом происходит где-то ещё. Добавляются новые сообщения и удаляются старые, и вы не знаете в какой момент это может произойти.
// Имея такую вводную информацию, решите, какую структуру данных вы могли бы использовать для ответа на вопрос «было ли сообщение прочитано?». Структура должна быть подходящей, чтобы можно было однозначно сказать, было ли прочитано это сообщение для каждого объекта сообщения.
// P.S. Когда сообщение удаляется из массива messages, оно должно также исчезать из структуры данных.
// P.P.S. Нам не следует модифицировать сами объекты сообщений, добавлять туда свойства. Если сообщения принадлежат какому-то другому коду, то это может привести к плохим последствиям.

// let messages = [
//   {text: "Hello", from: "John"},
//   {text: "How goes?", from: "John"},
//   {text: "See you soon", from: "Alice"}
// ];

// let readMessages = new WeakSet();

// // Два сообщения были прочитаны
// readMessages.add(messages[0]);
// readMessages.add(messages[1]);
// // readMessages содержит 2 элемента

// // ...давайте снова прочитаем первое сообщение!
// readMessages.add(messages[0]);
// // readMessages до сих пор содержит 2 элемента

// // Вопрос: было ли сообщение message[0] прочитано?
// console.log("Read message 0: " + readMessages.has(messages[0])); // true

// messages.shift();

// 5.9.2 Есть массив сообщений такой же, как и в предыдущем задании.
// Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения информации о том, когда сообщение было прочитано?
// В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет». Теперь же нам нужно сохранить дату, и она должна исчезнуть из памяти при удалении «сборщиком мусора» сообщения.
// P.S. Даты в JavaScript можно хранить как объекты встроенного класса Date, которые мы разберём позднее.

// let messages = [
//   {text: "Hello", from: "John"},
//   {text: "How goes?", from: "John"},
//   {text: "See you soon", from: "Alice"}
// ];

// let readMap = new WeakMap();

// readMap.set(messages[0], new Date(2017, 1, 1));


/*--- 5.10 Object.keys, values, entries ---*/