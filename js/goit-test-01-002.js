"use strict"

// Операторы
// console.log(10 >= '7'); //true: строка преобразовалась в число
// console.log('2' > '12'); //true: 2 строки сравниваются по символам Юникода
// console.log('2' < '12'); //false: см.коммент віше
// console.log('4' == 4); //true: строка преобразовалась в число
// console.log('5' === 5); //false: при строгом сравнении не выполнилось преобразование, строка не равна числу
// console.log('false' === false); //false: при строгом сравнении не выполнилось преобразование, строка не равна булю
// console.log(1 == true); //true: число перевелось в буль
// console.log(1 === true); //false: при строгом сравнении не выполнилось преобразование, число не равно булю
// console.log('0' == false); //true: строка не пустая, перевелась в буль
// console.log('0' === false); //false: при строгом сравнении не выполнилось преобразование, строка не перевелась в буль
// console.log('Papaya' < 'papaya'); //true: в Юникоде у строчной буквы код больше
// console.log('Papaya' === 'papaya'); //false: при строгом сравнении не выполнилось преобразование
// console.log(undefined == null); //true
// console.log(undefined === null); //false: при строгом сравнении не выполнилось преобразование


// const value = prompt("Яка офіційна назва JavaScript?").toLocaleLowerCase()
// // console.log(value);
// const ecma = 'ECMAScript'
// // console.log(ecma.toLocaleLowerCase());
// if (value === 'ECMAScript'){
//     alert("Вірно!")
// } else {
//     alert("Не знаєте? ECMAScript!")
// }


// Проверка ввода чисел
// const value = Number(prompt('Enter number'))
// // console.log(value);
// // console.log(typeof value);
// if (value > 0) {
//     console.log("Це позитивне число!");
// } else if (value === 0) {
//     console.log("Це нуль!");
// } else if (value < 0) {
//     console.log("Це від'ємне число!");
// } else {
//     console.log("Ви ввели не значення");
// }


// Проверка ввода чисел
// const value = Number(prompt('Enter number'))
// if (value > 0) {
//     console.log("Це позитивне число!");
//     }
// if (value === 0) {
//     console.log("Це нуль!");
//     }
// if (value < 0) {
//     console.log("Це від'ємне число!");
//     }
// if(isNaN(value)) {
//     console.log("Ви ввели не значення");
//     }


// Проверка написания адреса сайта
// let link = 'https://somesite.com/about';
// console.log(link.slice(link.length - 1) === '/'); //выполнена проверка последнего символа
// console.log(link.length); //кол-во символов
// console.log(link[0]); //символ №0
// console.log(link.endsWith('/')); //проверка окончания
// if (link.endsWith('/')) { //3 варианта добавления символа /
//     // link = `${link}/`
//     // link = link + '/'
//     link += '/'
// }
// console.log(link);



// Вычисление дедлайна IF
// const days = Number(prompt('Enter days'));
// // console.log(days);
// if (days === 0) {
//     console.log("Сьогодні");
// } else if (days === 1) {
//     console.log("Завтра");
// } else if (days === 2) {
//     console.log("Післязавтра");
// } else {
//     console.log("Дата в майбутньому");
// }

// Вычисление дедлайна SWITCH
// const days = Number(prompt('Enter days'));
// switch (days) {
//     case 0:
//         console.log("Сьогодні");
//         break;
//     case 1:
//         console.log("Завтра");
//         break;
//     case 2:
//         console.log("Післязавтра");
//         break;
//     default:
//         console.log("Дата в майбутньому");
//         break;
// }

// // Перебор чисел, кратных 5, в диапазоне 20-100
// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//     // / оператор деления
//     // % оператор остатка от деления
//     if (i % 5 === 0) {
//         console.log(i);
//     }
    
// }

//Светофор
// const color = prompt('Enter color').toLowerCase();

// switch (color) {
//     case 'red':
//         alert('Stop!!!')
//         break;
//     case 'yellow':
//         alert('Ready')
//         break;
//     case 'red':
//         alert('Go || Run')
//         break;    
//     default:
//         alert('Be careful!')
//         break;
// }

// console.log(color);
