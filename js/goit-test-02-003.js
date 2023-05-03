"use strict"

// console.log([1,2,3] === [1,2,3]);   //false: сравнение разных ячеек памяти. Проводить можно с простыми данными (не с массивом)


// const arr = [1, 2, 3];
// arr.push(4, 5, 6);
// // arr.push(5);
// // arr.push(6);
// console.log(arr);


// const arr = [7, 3, 8, 9, 2];
// console.log(arr.slice(3));   //9,2 - режет после элемента №3 и до конца


// const arr = [7, 3, 8, 9, 2, 3];
// const idx = arr.indexOf(3);                 //1  - индекс элемента, у которого значение 3 и он есть в массиве. После первого совпадения поиск прекратится.
// const nextIdx = arr.indexOf(3, idx + 1);    //5 - поиск продолжился после первого нахождения до второго нахождения.
// const unknownIdx = arr.indexOf(4);          //-1 - элемента нет в массиве, вовращается невозможное значение
// console.log(idx);
// console.log(nextIdx);
// console.log(unknownIdx);


// // https//developer.mozilla.org/en-US/docs/Glossary/Mutable
// const clients = ["Mango", "Poly", "Ajax"];
// const string = "script";
// // Иммутабельные/неизменные данные
// string[0] = "q";
// console.log(string);
// // Мутабельные/изменяемые данные
// clients.splice(1, 1);
// console.log(clients);


// // По ссылке
// const arr = [1, 2, 3];
// const arr1 = arr;

// arr.splice(1, 0, 999);
// console.log('arr', arr);
// console.log("arr1", arr1);
// arr1.splice(-1, 1);
// console.log('arr', arr);
// console.log("arr1", arr1);


// // По значению
// примитивные: string, number, buleuan, null, underfined
// сложные: object, array
// let a = 10;
// let b = a;
// a = 15;
// console.log('a', a);    //15
// console.log("b", b);    //10
// b = 999;
// console.log('a', a);    //15
// console.log("b", b);    //999


// // Операции с массивом
// [] - это литерал массива
// const genres = ['Jazz', 'Blues'];
// genres.push("Rock'n'roll");                 //push - добавление в конце
// console.log(genres);
// const firstEl = genres[0];
// console.log(firstEl);
// const lastEl = genres[genres.length - 1];
// console.log(lastEl);
// const deleteFirstEl = genres.shift();       //shift - удаление в начале
// console.log(deleteFirstEl);
// console.log(genres);
// genres.unshift("Country", "Reggae");        //unsift - добавление в начале
// console.log(genres);
// genres.splice(0, 0, "Country", "Reggae");      //slice - можно удалять, добавлять и одновременно эти 2 операции
// (0,                     // индекс для вставки
// 0,                      // ничего не удаляем
// "Country", "Reggae")    // данные для вставки
// console.log(genres);


// // Вычисление площади треугольника
// const values = `8 11`;
// const arr = values.split(' ');
// // console.log(arr);
// // const firstValue = arr[0];
// // console.log(Number(firstValue) );
// // console.log(+firstValue);               // знак + преобразовывает в число
// const firstValue = Number(arr[0]);
// const lastValue = Number(arr[arr.length - 1]);
// const total = firstValue * lastValue;
// console.log(typeof firstValue);
// console.log(typeof lastValue);
// console.log(total);

// // Вычисления, если в массиве строка - появление числа NaN
// const values = `asd 11`;
// const arr = values.split(' ');
// const firstValue = (arr[0]);
// const lastValue = Number(arr[arr.length - 1]);
// console.log(isNaN(firstValue));
// // if(isNaN(firstValue));
// console.log(typeof firstValue);
// console.log(typeof lastValue);


// // Перебор массива
// const fruits = ["apple", "grape", "peach", "banana", "lemon"];

// for (let i = 0, num = 1 ; i < fruits.length; i+=1, num+=1) {
//     // console.log(fruits[i]);
//     // console.log(`Номер по порядку ${i + 1}`, fruits[i]);
//     console.log(`Номер по порядку ${num}`, fruits[i]);
// }


// // Массивы и циклы
// const names = 'Jacob,William,Solomon,Kate';
// const phones = '89001234567,89001112233,890055566377,89099912233';

// const arrNames = names.split(',');
// const arrPhones = phones.split(',');
// console.log(arrNames);
// console.log(arrPhones);

// for (let i = 0; i < arrNames.length, i < arrPhones.length; i += 1) {
//     console.log(`Имя: ${arrNames[i]} номер телефона: ${arrPhones[i]}`);
// }


// // Массивы и строки
// const string = 'Welcome to the future';
// const words = string.split(' ');

// // методы SHIFT+POP
// console.log(words);
// words.shift();
// console.log(words);
// words.pop();
// console.log(words);
// const str = words.join(' ');
// console.log(str);

// // метод SLICE
// console.log(words);
// console.log(words.slice(1, 3).join(' '));
// console.log(words);

// // метод SPLICE
// console.log(words);
// words.splice(0, 1);
// words.splice(words.length -1, 1);
// // words.splice(words.splice(-1, 1));
// // words.splice(-1, 1);
// console.log(words);


// // Массивы и строки

// const string = "Welcome to the future";
// // const arr = string.split('');
// // const rev = arr.reverse();
// // const result = rev.join('');
// const result = string.split('').reverse().join('');  // цепочка вызовов
// console.log(result);


// // Поиск элемента

// const numbers = [101, 78, 12, 76, 5, 11, 9];

// let min = numbers[0];

// for (const number of numbers) {
//     if (number < min) {
//         min = number;        
//     }    
// }
// console.log(min);    //5