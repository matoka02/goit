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


/*--- 5.8 WeakMap и WeakSet ---*/

// 5.8.1 Есть массив сообщений:
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

// 5.8.2 Есть массив сообщений такой же, как и в предыдущем задании.
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


/*--- 5.9 Object.keys, values, entries ---*/

// 5.9.1 Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// function sumSalaries(salaries) {
//   let sum = 0;
//   for (const salary of Object.values(salaries)) {
//     sum += salary;
//   };
//   return sum;
// };

// console.log(sumSalaries(salaries));

// 5.9.2 Напишите функцию count(obj), которая возвращает количество свойств объекта:
// Постарайтесь сделать код как можно короче.
// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».

// let user = {
//   name: 'John',
//   age: 30
// };

// function count(obj) {
//   return Object.keys(obj).length;
// };

// console.log(count(user));


/*--- 5.10 Деструктурирующее присваивание ---*/

// 5.10.1 У нас есть объект:
// Напишите деструктурирующее присваивание, которое:
// - свойство name присвоит в переменную name.
// - свойство years присвоит в переменную age.
// - свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример переменных после вашего присваивания:

// let user = {
//   name: "John",
//   years: 30
// };

// let { name, years: age, isAdmin = false } = user;

// console.log(name);
// console.log(age);
// console.log(isAdmin);

// 5.10.2 У нас есть объект salaries с зарплатами:
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// function topSalary(salaries) {

//   let max = 0;
//   let maxName = null;

//   for(const [name, salary] of Object.entries(salaries)) {
//     if (max < salary) {
//       max = salary;
//       maxName = name;
//     }
//   }

//   return maxName;
// };


/*--- 5.11 Дата и время ---*/

// let date = new Date();
// console.log(date.getHours());             // текущий часовой пояс
// console.log(date.getUTCHours());          // Гринвич
// console.log(date.getTimezoneOffset());    // разница в минутах между UTC и местным часовым поясом

// 5.11.1 Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
// Для вывода используйте alert.

// let d = new Date(2012, 1, 20, 3, 12);
// console.log(d);

// 5.11.2 Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// let date = new Date(2014, 0, 3);
// function getWeekDay(date) {
//   let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//   return days[date.getDay()];
// };
// console.log(getWeekDay(date));

// 5.11.3 В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

// let date = new Date(2012, 0, 3);

// function getLocalDay(date) {
//   let day = date.getDay();
//   if (day == 0) {
//     day = 7
//   };
//   return day;
// }

// console.log(getLocalDay(date));

// 5.11.4 Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
// Функция должна надёжно работать при значении days=365 и больших значениях:
// P.S. Функция не должна изменять переданный ей объект date.

// function getDateAgo(date, days) {
//   let dateCopy = new Date(date);
//   dateCopy.setDate(date.getDate() - days);
//   return dateCopy.getDate();
// };

// let date = new Date(2015, 0, 2);

// console.log(getDateAgo(date, 1));
// console.log(getDateAgo(date, 15));
// console.log(getDateAgo(date, 365));

// 5.11.5 Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
// Параметры:
// - year – год из четырёх цифр, например, 2012.
// - month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

// function getLastDayOfMonth(year, month) {
//   let date = new Date(year, month + 1, 0);
//   return date.getDate();
// };

// console.log(getLastDayOfMonth(2012, 0));
// console.log(getLastDayOfMonth(2012, 1));
// console.log(getLastDayOfMonth(2013, 1));


// 5.11.6 Сколько сегодня прошло секунд?
// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

// function getSecondsToday() {
//   let now = new Date();

//   // создаём объект с текущими днём/месяцем/годом
//   let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

//   let diff = now - today; // разница в миллисекундах
//   return Math.round(diff / 1000); // получаем секунды
// };

// console.log(getSecondsToday());

// 5.11.7 Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
// Например, если сейчас 23:00, то:
// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

// function getSecondsToTomorrow() {
//   let now = new Date();

//   // завтрашняя дата
//   let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

//   let diff = tomorrow - now; // разница в миллисекундах
//   return Math.round(diff / 1000); // получаем секунды
// };

// console.log(getSecondsToTomorrow());

// 5.11.8 Напишите функцию formatDate(date), форматирующую date по следующему принципу:
// - Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// - В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// - В противном случае, если меньше часа, вывести "m мин. назад".
// - В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

// 1-й вариант
// function formatDate(date) {
//   let diff = new Date() - date; // разница в миллисекундах

//   if (diff < 1000) { // меньше 1 секунды
//     return 'прямо сейчас';
//   }

//   let sec = Math.floor(diff / 1000); // преобразовать разницу в секунды

//   if (sec < 60) {
//     return sec + ' сек. назад';
//   }

//   let min = Math.floor(diff / 60000); // преобразовать разницу в минуты
//   if (min < 60) {
//     return min + ' мин. назад';
//   }

//   // отформатировать дату
//   // добавить ведущие нули к единственной цифре дню/месяцу/часам/минутам
//   let d = date;
//   d = [
//     '0' + d.getDate(),
//     '0' + (d.getMonth() + 1),
//     '' + d.getFullYear(),
//     '0' + d.getHours(),
//     '0' + d.getMinutes()
//   ].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

//   // соединить компоненты в дату
//   return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
// };

// console.log(formatDate(new Date(new Date - 1)));
// console.log(formatDate(new Date(new Date - 30 * 1000)));
// console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));

// 2-й вариант
// function formatDate(date) {
//   let dayOfMonth = date.getDate();
//   let month = date.getMonth() + 1;
//   let year = date.getFullYear();
//   let hour = date.getHours();
//   let minutes = date.getMinutes();
//   let diffMs = new Date() - date;
//   let diffSec = Math.round(diffMs / 1000);
//   let diffMin = diffSec / 60;
//   let diffHour = diffMin / 60;

//   // форматирование
//   year = year.toString().slice(-2);
//   month = month < 10 ? '0' + month : month;
//   dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
//   hour = hour < 10 ? '0' + hour : hour;
//   minutes = minutes < 10 ? '0' + minutes : minutes;

//   if (diffSec < 1) {
//     return 'прямо сейчас';
//   } else if (diffMin < 1) {
//     return `${diffSec} сек. назад`
//   } else if (diffHour < 1) {
//     return `${diffMin} мин. назад`
//   } else {
//     return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
//   }
// };

// console.log(formatDate(new Date(new Date - 1)));
// console.log(formatDate(new Date(new Date - 30 * 1000)));
// console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));


/*--- 5.12 Формат JSON, метод toJSON ---*/

// 5.12.1 Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

// let user = {
//   name: "Василий Иванович",
//   age: 35
// };

// let newUser=JSON.parse(JSON.stringify(user));

// console.log(newUser);

// 5.12.2 В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они возникают, из сериализации по его имени.
// Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, свойства с этим именем во вложенных объектах. Поэтому можно проверять свойство по значению.
// Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Совещание",
//   occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//   place: room
// };

// room.occupiedBy = meetup;
// meetup.self = meetup;

// console.log(JSON.stringify(meetup, function replacer(key, value) {
//   return (key != "" && value == meetup) ? undefined : value;
// }));


/*--- 6.1 Рекурсия и стек ---*/

// 6.1.1 Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// Например:
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:
// - С использованием цикла.
// - Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// - С использованием формулы арифметической прогрессии.
// Пример работы вашей функции:
// function sumTo(n) { /*... ваш код ... */ }
// alert( sumTo(100) ); // 5050
// P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?
// P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?

// console.time();
// function sumTo(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// };
// console.log(sumTo(100));
// console.timeEnd();                    // default: 0.093994140625 ms

// console.time();
// function sumTo2(n) {
//   if (n == 1) return 1;
//   return n + sumTo2(n - 1);
// };
// console.log(sumTo2(100));
// console.timeEnd();                    // default: 0.041015625 ms

// console.time();
// function sumTo3(n) {
//   return n * (n + 1) / 2;
// };
// console.log(sumTo3(100));
// console.timeEnd();                    // default: 0.02197265625 ms

// 6.1.2 Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
// Определение факториала можно записать как:
// n! = n * (n - 1) * (n - 2) * ...*1
// Примеры значений для разных n:
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
// alert( factorial(5) ); // 120
// P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6

// // 1-й вариант
// function factorial(n) {
//   return (n != 1) ? n * factorial(n - 1) : 1;
// };
// console.log(factorial(5));

// // 2-й вариант
// function factorial2(n) {
//   return n ? n * factorial(n - 1) : 1;
// };
// console.log(factorial2(5));

// 6.1.3 Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.
// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
// Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.
// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
// Пример работы:
// function fib(n) { /* ваш код */ }
// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757
// P.S. Все запуски функций из примера выше должны работать быстро. Вызов fib(77) должен занимать не более доли секунды.

// console.time();
// function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// };
// console.timeEnd();

// console.time();
// function fib2(n) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// };
// console.log(fib2(77));
// console.timeEnd();

// 6.1.4 Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
// Напишите функцию printList(list), которая выводит элементы списка по одному.
// Сделайте два варианта решения: используя цикл и через рекурсию.
// Как лучше: с рекурсией или без?

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// console.time();
// function printList(list) {
//   let tmp = list;

//   while (tmp) {
//     console.log(tmp.value);
//     tmp = tmp.next;
//   }

// };
// printList(list);
// console.timeEnd();

// console.time();
// function printList2(list) {

//   console.log(list.value); // выводим текущий элемент

//   if (list.next) {
//     printList(list.next); // делаем то же самое для остальной части списка
//   };

// };

// printList2(list);
// console.timeEnd();

// 6.1.5 Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
// Сделайте два решения: с использованием цикла и через рекурсию.

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// console.time();
// function printReverseList(list) {
//   if (list.next) {
//     printReverseList(list.next);
//   }
//   console.log(list.value);
// };
// printReverseList(list);
// console.timeEnd();

// console.time();
// function printReverseList2(list) {
//   let arr = [];
//   let tmp = list;

//   while (tmp) {
//     arr.push(tmp.value);
//     tmp = tmp.next;
//   }

//   for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
//   }
// }

// printReverseList2(list);
// console.timeEnd();


/*--- 6.3 Область видимости переменных, замыкание ---*/

// 6.3.1 Функция sayHi использует имя внешней переменной. Какое значение будет использоваться при выполнении функции?
// Такие ситуации встречаются как при разработке для браузера, так и для сервера. Функция может быть назначена на выполнение позже, чем она была создана, например, после действия пользователя или сетевого запроса.
// Итак, вопрос: учитывает ли она последние изменения?

// let name = "John";

// function sayHi() {
//   console.log("Hi, " + name);
// };

// name = "Pete";

// sayHi(); // что будет показано: "John" или "Pete"?

// 6.3.2 Приведенная ниже функция makeWorker создает другую функцию и возвращает ее. Эта новая функция может быть вызвана из другого места.
// Будет ли она иметь доступ к внешним переменным из места своего создания, или из места вызова, или из обоих мест?
// Какое значение будет показано? «Pete» или «John»?

// function makeWorker() {
//   let name = "Pete";

//   return function() {
//     console.log(name);
//   };
// };

// let name = "John";

// // создаём функцию
// let work = makeWorker();

// // вызываем её
// work(); // что будет показано?

// 6.3.3 Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.
// Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?

// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++;
//   };
// };

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log(counter());
// console.log(counter());

// console.log(counter2());
// console.log(counter2());

// 6.3.4 Здесь объект счётчика создан с помощью функции-конструктора.
// Будет ли он работать? Что покажет?

// function Counter() {
//   let count = 0;

//   this.up = function() {
//     return ++count;
//   };
//   this.down = function() {
//     return --count;
//   };
// };

// let counter = new Counter();

// console.log(counter.up());            // 1
// console.log(counter.up());            // 2
// console.log(counter.down());          // 1

// 6.3.5 Посмотрите на код. Какой будет результат у вызова на последней строке?

// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     console.log(`${phrase}, ${user}`);
//   }
// }

// sayHi();            // Uncaught ReferenceError: sayHi is not defined

// 6.3.6 Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// Да, именно таким образом, используя двойные круглые скобки (не опечатка).

// function sum(a) {
//   return function(b) {
//     return a + b; // берёт "a" из внешнего лексического окружения
//   };
// };

// console.log(sum(1)(2));           // 3
// console.log(sum(5)(-1));          // 4

// 6.3.7 Что выведет данный код?
// P.S. В этой задаче есть подвох. Решение не очевидно.

// let x = 1;

// function func() {
//   console.log(x); // Uncaught ReferenceError: Cannot access 'x' before initialization

//   let x = 2;
// }

// func();

// 6.3.8 У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.
// Сделайте набор «готовых к употреблению» фильтров:
// - inBetween(a, b) – между a и b (включительно).
// - inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:
// - arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// - arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива

// function inBetween(a, b) {
//   return function(x) {
//     return x >= a && x <= b;
//   };
// };

// function inArray(arr) {
//   return function(x) {
//     return arr.includes(x);
//   };
// };

// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.filter(inBetween(3,6)));
// console.log(arr.filter(inArray([1,2,10])));

// 6.3.9 У нас есть массив объектов, который нужно отсортировать:
// Обычный способ был бы таким:

// // по имени (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// // по возрасту (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// Можем ли мы сделать его короче, например вот таким?

// users.sort(byField('name'));
// users.sort(byField('age'));
// То есть чтобы вместо функции мы просто писали byField(fieldName).
// Напишите функцию byField, которая может быть использована для этого.


// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// function byField(fieldName){
//   return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
// };

// users.sort(byField('name'));
// users.sort(byField('age'));

// 6.3.10 Следующий код создаёт массив из стрелков (shooters).
// Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…
// Почему у всех стрелков одинаковые номера?

// Почините код, чтобы он работал как задумано.

// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//     let j = i;
//     let shooter = function() { // функция shooter
//       console.log(j); // должна выводить порядковый номер
//     };
//     shooters.push(shooter); // и добавлять стрелка в массив
//     i++;
//   }

//   // ...а в конце вернуть массив из всех стрелков
//   return shooters;
// }

// let army = makeArmy();

// // все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
// army[0](); // 10 от стрелка с порядковым номером 0
// army[1](); // 10 от стрелка с порядковым номером 1
// army[2](); // 10 ...и т.д.


/*--- 6.5 Объект функции, NFE ---*/

// 6.5.1 Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:
// - counter() должен возвращать следующее значение (как и раньше).
// - counter.set(value) должен устанавливать счётчику значение value.
// - counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.
// P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.

// function makeCounter() {
//   let count = 0;

//   function counter() {
//     return count++;
//   }

//   counter.set = value => count = value;

//   counter.decrease = () => count--;

//   return counter;
// };

// 6.5.2 Напишите функцию sum, которая бы работала следующим образом:
// P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции.

// function sum(a) {

//   let currentSum = a;

//   function f(b) {
//     currentSum += b;
//     return f;
//   }

//   f.toString = function() {
//     return currentSum;
//   };

//   return f;
// };

// console.log(sum(1)(2));
// console.log(sum(5)(-1)(2));
// console.log(sum(6)(-1)(-2)(-3));
// console.log(sum(0)(1)(2)(3)(4)(5));


/*--- 6.8 Планирование: setTimeout и setInterval ---*/

// let start = Date.now();
// let times = [];

// setTimeout(function run() {
//   times.push(Date.now() - start); // запоминаем задержку от предыдущего вызова

//   if (start + 100 < Date.now()) console.log(times); // показываем задержку через 100 мс
//   else setTimeout(run); // если нужно ещё запланировать
// });

// 6.8.1 Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
// Сделайте два варианта решения.
// - Используя setInterval.
// - Используя рекурсивный setTimeout.

// function printNumbers(from, to) {
//   let current = from;

//   let timerId = setInterval(function() {
//     console.log(current);
//     if (current == to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }, 1000);
// };

// // использование:
// printNumbers(5, 10);

// function printNumbers2(from, to) {
//   let current = from;

//   setTimeout(function go() {
//     console.log(current);
//     if (current < to) {
//       setTimeout(go, 1000);
//     }
//     current++;
//   }, 1000);
// };

// // использование:
// printNumbers2(5, 10);

// function printNumbers3(from, to) {
//   let current = from;

//   function go() {
//     console.log(current);
//     if (current == to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }

//   go();
//   let timerId = setInterval(go, 1000);
// };

// printNumbers3(5, 10);

// 6.8.2 Когда будет выполнена запланированная функция?
// - После цикла.
// - Перед циклом.
// - В начале цикла.
// Что покажет alert?

// let i = 0;

// setTimeout(() => console.log(i), 100); // ?

// // предположим, что время выполнения этой функции >100 мс
// for(let j = 0; j < 100000000; j++) {
//   i++;
// };


/*--- 6.9 Декораторы и переадресация вызова, call/apply ---*/

// 6.9.1 Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.
// Каждый вызов должен сохраняться как массив аргументов.
// P.S.: Этот декоратор иногда полезен для юнит-тестирования. Его расширенная форма – sinon.spy – содержится в библиотеке Sinon.JS.

// function work(a, b) {
//   console.log(a + b); // произвольная функция или метод
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   console.log('call:' + args.join()); // "call:1,2", "call:4,5"
// };

// function spy(func) {

//   function wrapper(...args) {
//     // мы используем ...args вместо arguments для хранения "реального" массива в wrapper.calls
//     wrapper.calls.push(args);
//     return func.apply(this, args);
//   }

//   wrapper.calls = [];

//   return wrapper;
// };

// 6.9.2 Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:
// Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».
// В приведённом выше коде f – функция с одним аргументом, но ваше решение должно передавать все аргументы и контекст this.

// function f(x) {
//   console.log(x);
// }

// // создаём обёртки
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// function delay(f, ms) {

//   return function(...args) {
//     let savedThis = this; // сохраняем this в промежуточную переменную
//     setTimeout(function() {
//       f.apply(savedThis, args); // используем её
//     }, ms);
//   };

// };

// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс

// 6.9.3 Задача — реализовать декоратор debounce.
// Подсказка: это всего лишь несколько строк, если вдуматься :)

// function debounce(func, ms) {
//   let timeout;
//   return function() {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(this, arguments), ms);
//   };
// };

// 6.9.4 Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку.
// При многократном вызове он передает вызов f не чаще одного раза в ms миллисекунд.

// function throttle(func, ms) {

//   let isThrottled = false,
//     savedArgs,
//     savedThis;

//   function wrapper() {

//     if (isThrottled) { // (2)
//       savedArgs = arguments;
//       savedThis = this;
//       return;
//     }

//     func.apply(this, arguments); // (1)

//     isThrottled = true;

//     setTimeout(function() {
//       isThrottled = false; // (3)
//       if (savedArgs) {
//         wrapper.apply(savedThis, savedArgs);
//         savedArgs = savedThis = null;
//       }
//     }, ms);
//   }

//   return wrapper;
// };


/*--- 6.10 Привязка контекста к функции ---*/

// 6.10.1 Что выведет функция?

// function f() {
//   console.log(this);          // null
// };
// let user = {
//   g: f.bind(null)
// };
// user.g();

// 6.10.2 Можем ли мы изменить this дополнительным связыванием?
// Что выведет этот код?

// function f() {
//   console.log(this.name);       // Вася
// };
// f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );
// f();

// 6.10.3 В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.

// function sayHi() {
//   console.log(this.name);       
// };
// sayHi.test = 5;

// let bound = sayHi.bind({
//   name: "Вася"
// });

// console.log( bound.test );        // undefined 

// 6.10.4 Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?
// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// };

// let user = {
//   name: 'Вася',
//   loginOk() {
//     console.log(`${this.name} logged in`);
//   },
//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },
// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// 6.10.5 Это задание является немного усложнённым вариантом одного из предыдущих – Исправьте функцию, теряющую "this".
// Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).
// Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?
// Ваши изменения должны затрагивать только выделенный фрагмент кода.

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'John',

//   login(result) {
//     console.log( this.name + (result ? ' logged in' : ' failed to log in') );
//   }
// };

// askPassword(() => user.login(true), () => user.login(false));
// askPassword(user.login.bind(user, true), user.login.bind(user, false));


/*--- 8.1 Прототипное наследование ---*/

// 8.1.1 В приведённом ниже коде создаются и изменяются два объекта.
// Какие значения показываются в процессе выполнения кода?

// let animal = {
//   jumps: null
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true
// };
// console.log(rabbit.jumps);        // true
// delete rabbit.jumps;
// console.log(rabbit.jumps);        // null
// delete animal.jumps;
// console.log(rabbit.jumps);        // undefined

// 8.1.2 Задача состоит из двух частей.
// У нас есть объекты. 
// С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
// Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.

// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 3,
//   __proto__: head,
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table,
// };

// let pockets = {
//   money: 2000,
//   __proto__: bed,
// };

// console.log(pockets.pen);           // 3
// console.log(bed.glasses);           // 1

// 8.1.3 Объект rabbit наследует от объекта animal.
// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

// let animal = {
//   eat() {
//     this.full = true;
//   }
// };

// let rabbit = {
//   __proto__: animal
// };

// rabbit.eat();

// 8.1.4 У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

// 1-й вариант
// let hamster = {
//   stomach: [],

//   eat(food) {
//     // this.stomach.push(food);
//     this.stomach = [food]
//   }
// };

// let speedy = {
//   __proto__: hamster
// };

// let lazy = {
//   __proto__: hamster
// };

// speedy.eat('apple');
// console.log(speedy.stomach);
// console.log(lazy.stomach);

// 2-й вариант
// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//   }
// };

// let speedy = {
//   __proto__: hamster,
//   stomach: []
// };

// let lazy = {
//   __proto__: hamster,
//   stomach: []
// };

// // Шустрый хомяк нашёл еду
// speedy.eat('apple');
// console.log(speedy.stomach);    // apple
// // console.log(lazy.stomach); 

// // Живот ленивого хомяка пуст
// console.log(lazy.stomach);      // <ничего>


/*--- 8.2 F.prototype ---*/

// 8.2.1 В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.
// Сначала у нас есть такой код:

// function Rabbit() { }
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();
// console.log(rabbit.eats);       // true
// Rabbit.prototype = {};
// console.log(rabbit.eats);       // true
// Rabbit.prototype.eats = false;
// console.log(rabbit.eats);       // false
// delete rabbit.eats;
// console.log(rabbit.eats);       // true
// delete Rabbit.prototype.eats;
// console.log(rabbit.eats);       // undefined

// 8.2.2 Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.
// Можем ли мы сделать так?
// let obj2 = new obj.constructor();
// Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. И пример функции-конструктора, с которой такой код поведёт себя неправильно.

// function User(name) {
//   this.name = name;
// }
// User.prototype = {}; // (*)

// let user = new User('John');
// let user2 = new user.constructor('Pete');

// console.log( user2.name ); // undefined


/*--- 8.3 Встроенные прототипы ---*/

// 8.3.1 Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.
// После этого должен работать такой код:

// Function.prototype.defer = function(ms) {
//   setTimeout(this, ms);
// };

// function f() {
//   console.log('Hello');
// };

// f.defer(1000);

// 8.3.2 Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
// Например, должно работать так:
// Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.

// Function.prototype.defer = function (ms) {
//   let f = this;
//   return function (...args) {
//     setTimeout(() => f.apply(this, args), ms);
//   }
// };

// // check it
// function f(a, b) {
//   console.log(a + b);
// };

// f.defer(1000)(1, 2); // выведет 3 через 1 секунду.


/*--- 8.4 Методы прототипов, объекты без свойства __proto__ ---*/

// 8.4.1 Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ/значение.
// Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой. Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.
// Вот так это должно работать:

// let dictionary = Object.create(null, {
//   toString: { // определяем свойство toString
//     value() { // значение -- это функция
//       return Object.keys(this).join();
//     }
//   }
// });

// dictionary.apple = "Apple";
// dictionary.__proto__ = "test";

// // apple и __proto__ выведены в цикле
// for(let key in dictionary) {
//   console.log(key); // "apple", затем "__proto__"
// }

// // список свойств, разделённых запятой, выведен с помощью toString
// console.log(dictionary); // "apple,__proto__"

// 8.4.2 Давайте создадим новый объект rabbit:
// Все эти вызовы делают одно и тоже или нет?

// function Rabbit(name) {
//   this.name = name;
// }
// Rabbit.prototype.sayHi = function() {
//   console.log(this.name);
// };

// let rabbit = new Rabbit("Rabbit");


// rabbit.sayHi();                         // Rabbit
// Rabbit.prototype.sayHi();               // undefined
// Object.getPrototypeOf(rabbit).sayHi();  // undefined
// rabbit.__proto__.sayHi();               // undefined


/*--- 9.1 Класс: базовый синтаксис ---*/