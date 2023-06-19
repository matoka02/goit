"use strict"


// // Arguments - переменная, которая создаст псевдо-массив
// function foo() {
//     console.log(arguments);
// }
// foo(5, "Mango", true);


// // Области видимости
// let a = 10;

// if (true) {
//     let a = 5;                      //если не объявить, а=10
//     console.log('in local', a);     //локальная область видимости, находится в {}
// }

// console.log('in global', a);        //глобальная область видимости


// const a = 10;

// if (true) {
//     let a = 5;
//     a = 20;
//     // console.log(a);
// }

// console.log(a);                     //10


// let a = 10;

// if (true) {
//     let a = 100;
//     a = 1;
//     if (true) {
//         a = 15;
//         // let a = 25;
//         console.log('local 2:', a);         //15
//     }
//     console.log('local:', a);               //15
// }

// console.log('local 1:', a);                 //10


// const numbers = [1, 2, 3, 4, 5, 6, 7];
// let total = 0;

// for (const number of numbers) {
//     total += number;
// }

// console.log(total);                             //28


// // Function expression
// // Вызывается только после объявления

// const world = 'world';
// const hello = 'Hello';
// // foo(world, hello);                             // это ошибка!
// const foo = function(hello, world) {
//     console.log(hello, world);
// }
// foo(world, hello);


// // Function declaretion

// const world = 'world';
// const hello = 'Hello';
// boo(hello, world);                                  // не ошибка
// function boo(hello, world) {
//     console.log(hello, world);
// }
// boo(hello, world);                                  // так тоже можно


// // Arguments
// // Посчитать сумму всех чисел

// function getSum() {
//     console.log(arguments);
//     // for (const argument of arguments) {
//     //     const element = array[index];
//     //     console.log(argument);
//     // }
//     const arr = Array.from(arguments);          //превращение псевдо-массива в массив, не обязательно
//     const arr2 = [...arguments];                //превращение псевдо-массива в массив, не обязательно
//     console.log(arr);
//     let total = 0;
//     for (let i = 0; i < arguments.length; i+=1) {
//         // console.log(arguments[i]);
//         total += arguments[i];
//     }
//     return total;
// }

// console.log(getSum(1, 2, 3, 4, 5, 6, 7, 8));
// console.log(getSum(44, 5, 14, 3));


// // Стек вызовов

// function foo() {
//     console.log('start foo');
// };

// function boo() {
//     console.log('start boo');
//     foo();
//     console.log('end boo');
// };
// boo();


// // Проверка наличия в массиве

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// function addCourses(name) {
//     if (!courses.includes(name)) {
//         courses.push(name);
//         return;
//     }
//     return 'У вас уже есть данный курс';
// }
// addCourses('Express');
// console.log(courses);
// const result = addCourses('CSS');
// console.log('result:', result);


// // Удалить из массива

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// function removeCourse(name) {
//     if (courses.includes(name)) {
//         const idx = courses.indexOf(name);
//         courses.splice(idx, 1);
//         return `Курс ${name} успешно удален`;
//     }
//     return `Курс с таким названием не найден`;
// }
// console.log(removeCourse('React'));
// console.log(courses);
// console.log(removeCourse('Vue'));


// // Обновление курса

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express'];

// function updateCourse(oldName, newName) {
//     console.time('foo');                      // функция подсчета времени обработки в браузере
//     if (courses.includes(oldName)) {
//         const idx = courses.indexOf(oldName);
//         // courses.splice(idx, 1, newName);   //замена .splice, дольше отрабатывает
//         courses[idx] = newName;               //замена по индексу
//         return`Курс ${oldName} заменен на ${newName}`;
//     }
//     console.timeEnd('foo');                   // функция подсчета времени обработки в браузере
//     return `Курс с таким названием не найден`;
// }

// console.log(courses);
// console.log(updateCourse('Express', 'NestJS'));
// console.log(updateCourse('Angular', 'NestJS'));

// // VAR

// Объявление переменной автоматически выносится вверх, в начало файла, а фактическое место написания - всего лишь место присвоения значения

// console.log(a);                     //undefined
// var a = 10;

// console.log(b);                     //Uncaught ReferenceError: Cannot access 'b' before initialization
// let b = 5;

// Можно несколько раз присваивать значение, в расчетах примет участие только последнее значение

// var a = 10;
// var a = 4;
// var a = 2.5;
// console.log(a);                         //2.5

// let b = 10;
// let b = 4;                              //Cannot redeclare block-scoped variable 'b'.

// Игнорирует локальную область видимости. Не находится, только если применена внутри функции

// if (true) {
//     var c = 10;
// }
// console.log(c);

// function foo() {
//     var c = 7;
// }
// console.log(c);