"use strict"

// // autocheck-02-01/32
// // Запиши условие в инструкции if так, чтобы функция работала правильно.

// function checkAge(age) {
//     let message;

//     if (age >= 18) {
//         console.log("You are an adult");
//         return;
//     }

//     console.log("You are a minor");

//     return message;
// }
// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

// //Решение в автопроверке:

// function checkAge(age) {

//     if (age >= 18) {
//         return "You are an adult";
//     }

//     return "You are a minor";
// }


// // autocheck-02-02/32
// // Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.
// // Проведи рефакторинг кода функции checkPassword используя паттерн «ранний возврат»:
// // - удали переменную message
// // - удали else
// // - код должен работать так же, как и до оптимизации

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";

//     if (password === ADMIN_PASSWORD) {
//         console.log("Welcome!");
//         return;
//     }

//     console.log("Access denied, wrong password!");

//     return ADMIN_PASSWORD;
// }
// checkPassword("mangohackzor");
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");


// // autocheck-02-03/32
// // Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.
// // - available - доступное количество товаров на складе
// // - ordered - количество единиц товара в заказе
// // Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

// function checkStorage(available, ordered) {
//     let message;

//     if (ordered === 0) {
//         console.log("Your order is empty!");
//         return;
//     } if (ordered > available) {
//         console.log("Your order is too large, not enough goods in stock!");
//         return;
//     }

//     console.log("The order is accepted, our manager will contact you");

//     return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);


// // autocheck-02-04/32
// // Объяви переменную fruits и присвой ей массив фруктов - строк "apple", "plum", "pear" и "orange".

// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits);


// // autocheck-02-05/32
// // Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.
// // Имя переменной	    Значение переменной
// // ______________       ___________________
// // firstElement	        первый элемент массива
// // secondElement	        второй элемент массива
// // lastElement	        последний элемент массива

// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length -1];
// // const lastElement = fruits[3];           //тоже можно
// console.log(fruits);
// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);


// // autocheck-02-06/32
// // Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".

// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[fruits.length -1] = "banana";
// // fruits[3] = "banana";                     //тоже можно
// console.log(fruits);


// // autocheck-02-07/32
// // Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.

// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

// // autocheck-02-08/32
// // Объяви две переменные:

// // Имя переменной	    Ожидаемое значение
// // ______________       __________________
// // lastElementIndex	    Индекс последнего элемента масcива fruits через длина_массива - 1
// // lastElement	        Значение последнего элемента массива

// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length-1;
// const lastElement = fruits[fruits.length - 1];
// // const lastElement = fruits[lastElementIndex];   //тоже можно
// console.log(lastElementIndex);
// console.log(lastElement);


// // autocheck-02-09/32
// // Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

// function getExtremeElements(array) {
//     let array1 = [array[0], array[array.length - 1]];
//     console.log(array1);
//     return;
// }
// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["Earth", "Mars", "Venus"]);
// getExtremeElements(["apple", "peach", "pear", "banana"]);

// // //Решение в автопроверке:

// function getExtremeElements(array) {
// return [array[0], array[array.length - 1]];
// }


// // autocheck-02-10/32
// // Дополни код функции splitMessage(message, delimiter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimiter - массив строк.

// // 1 вариант
// function splitMessage(message, delimiter) {
//     console.log(message.split(delimiter));
// }

// // 2 вариант
// function splitMessage(message, delimiter) {
//     let words;
//     words = message.split(delimiter);
//     console.log(words);
//     return words;
// }
// splitMessage("Mango hurries to the train", " ");
// splitMessage("Mango", "");
// splitMessage("best_for_week", "_");


// // autocheck-02-11/32
// // Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.
// // Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).
// // Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.


// // Мой вариант
// function calculateEngravingPrice(message, pricePerWord) {
//     let work;
//     work = message.split(" ").length * pricePerWord;
//     console.log(work);
//     return work;
// }

// // Решение в автопроверке
// function calculateEngravingPrice(message, pricePerWord) {
//     const quantityWords = message.split(' ');
//     const totalPrice = pricePerWord * quantityWords.length;
//     return totalPrice;
// }

// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);
// calculateEngravingPrice("Web-development is creative work", 20);


// // autocheck-02-12/32
// // Дополни код функции makeStringFromArray(array, delimiter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimiter - строку.

// // Мой вариант
// function makeStringFromArray(array, delimiter) {
//     console.log(array.join(delimiter));
//     return;
// }

// // Решение в автопроверке
// function makeStringFromArray(array, delimeter) {
//     let string;
//     string = array.join(delimeter);
//     console.log(string);
//     return string;
// }

// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
// makeStringFromArray(["M", "a", "n", "g", "o"], "");
// makeStringFromArray(["top", "picks", "for", "you"], "_");


// // autocheck-02-13/32
// // Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адресов.
// // Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. В результате адрес получится более приятным для восприятия: mysite.com/posts/arrays-for-begginers.
// // Внимание!
// // Slug это всегда строка в нижнем регистре, слова которой разделены тире.
// // Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.
// // - Значением параметра title будут строки, слова которых разделены только пробелами
// // - Все символы slug должны быть в нижнем регистре
// // - Все слова slug должна быть разделены тире

// function slugify(title) {
//     let slug;
//     slug = title.toLowerCase().split(" ").join("-");
//     console.log(slug);
//     return slug;
// }
// slugify("Arrays for begginers");
// slugify("English for developer");
// slugify("Ten secrets of JavaScript");
// slugify("How to become a JUNIOR developer in TWO WEEKS");


// // autocheck-02-14/32
// // Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.
// // - firstTwoEls - массив из первых двух элементов
// // - nonExtremeEls - массив из всех элементов кроме первого и последнего
// // - lastThreeEls - массив из трёх последних элементов

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length -1);
// // const lastThreeEls = fruits.slice(2, fruits.length - 0);  //тоже можно
// const lastThreeEls = fruits.slice(-3);
// console.log(fruits);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);


// // autocheck-02-15/32
// // Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat(newClients);
// console.log(allClients);


// // autocheck-02-16/32
// // Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.
// // Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком.

// function makeArray(firstArray, secondArray, maxLength) {
//     const makeArray = firstArray.concat(secondArray);
//         if (makeArray.length <= maxLength) {
//             console.log(makeArray);
//             return;
//         } else {
//             console.log(makeArray.slice(0, maxLength));
//             return;
//     }
//     return;
// }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);


// // autocheck-02-17/32
// // Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i +=1) {
//     console.log(i);
    
// }

// // autocheck-02-18/32
// // Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// function calculateTotal(number) {
//     let total = 0;

//     for (let i = 0; i < number; i +=1) {
//         total += i;
//         // console.log(total);     //выведет все промежуточные операции сложения
//     }
    
//     console.log(total);            //выведет итоговую операцию сложения
    
//     return;
// }
// calculateTotal(1);                  //0
// calculateTotal(3);                  //3
// calculateTotal(7);                  //21
// calculateTotal(18);                 //153
// calculateTotal(24);                 //276


// // autocheck-02-19/32
// // Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

// const fruits = ["apple", "plum", "pear", "orange"];
// for (let i = 0; i < fruits.length; i += 1) {
//     const fruit = fruits[i];
//     console.log(fruit);
// }


// // autocheck-02-20/32
// // Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

// function calculateTotalPrice(order) {
//     let total = 0;

//     for (let i = 0; i < order.length; i += 1) {
//         total += order[i];
//     }

//     console.log(total);
//     return;
// }
// calculateTotalPrice([12, 85, 37, 4]);           //138
// calculateTotalPrice([164, 48, 291]);            //503
// calculateTotalPrice([412, 371, 94, 63, 176]);   //1116


// // autocheck-02-21/32
// // Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// function findLongestWord(string) {
//     const array = string.split(" ");
//     let longestWord = array[0];
//     for (let i = 1; i <= array.length-1; i += 1) {
//         if (array[i].length > longestWord.length) {
//             longestWord = array[i];
//         };
//     }
//     console.log(longestWord);
//     return;
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("Google do a roll");
// findLongestWord("May the force be with you");


// // autocheck-02-22/32
// // Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     for (let i = min; i <= max; i +=1) {
//         numbers.push(i);
//     }
//     console.log(numbers);
//     return;
// }
// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);


// // autocheck-02-23/32
// // Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

// function filterArray(numbers, value) {
//     const newArray = [];
//     for (const number of numbers) {
//         if(number > value)
//         newArray.push(number);
//     }
//     console.log(newArray);
//     return;
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);


// // autocheck-02-24/32
// // Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.
// // Дополни код функции так, что если:
// // - фрукт есть в массиве, то функция возвращает true;
// // - фрукта нет в массиве, то функция возвращает false.

// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
//     console.log(fruits.includes(fruit));
//     return;
// }
// checkFruit("plum");
// checkFruit("mandarin");
// checkFruit("pear");
// checkFruit("Pear");
// checkFruit("apple");


// // autocheck-02-25/32
// // Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.
// // Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.
// // Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.


// function getCommonElements(array1, array2) {
//     let array = [];

//     for (let i = 0; i < array1.length; i += 1) {
//         let arr = array1[i];
//         if (array2.includes(arr)) {
//             array.push(array1[i]);
//         }
        
//     }
//     console.log(array);
//     return;
// }

// Решение в автопроверке
// function getCommonElements(array1, array2) {
//     const arr = [];
//     for (let i = 0; i <= array1.length; i += 1) {
//         if (array2.includes(array1[i])) {
//             arr.push(array1[i]);
//         };
//     }
//     console.log(arr);
//     return;
// }

// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);


// // autocheck-02-26/32
// // Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// function calculateTotalPrice(order) {
//     let total = 0;

//     for (let i of order) {
//         total += i;
//     }

//     console.log(total);
//     return;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice([]);


// // autocheck-02-27/32
// // Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     for (const number of numbers) {
//         if(number > value)
//         filteredNumbers.push(number);
//     }
//     console.log(filteredNumbers);
//     return;
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);


// // autocheck-02-28/32
// // Вместо того, чтобы возвращать результат деления, операция по модулю (%) возвращает целочисленный остаток от деления двух чисел - делимого и делителя.
// // Дополни выражения остатка от деления так, чтобы код проходил тесты.
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;
// console.log(a);         //0
// console.log(b);         //1
// console.log(c);         //3
// console.log(d);         //5
// console.log(e);         //2


// // autocheck-02-29/32
// // Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).

// function getEvenNumbers(start, end) {
//     const arr = [];
//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0 ) {
//             arr.push(i);
//         };
//     }
//     console.log(arr);
//     return;
// }
// getEvenNumbers(2, 5);
// getEvenNumbers(3, 11);
// getEvenNumbers(6, 12);
// getEvenNumbers(8, 8);
// getEvenNumbers(7, 7);


// // autocheck-02-30/32
// // Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i <= end; i += 1) {
//     if (i % 5 === 0) {
//         number = i;
//         console.log(i);                     //10
//         break;
//     }
//     return;
// }


// // autocheck-02-31/32
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:
// - возвращала первое число от start до end, которое делится на divisor без остатка
// - не использовала оператор break
// - не использовала переменную number

// function findNumber(start, end, divisor) {
//     let number;

//     for (let i = start; i < end; i += 1) {
//         if (i % divisor === 0) {
//         console.log(i);
//         return;
//         };
//     }
// }
// findNumber(2, 6, 5);
// findNumber(8, 17, 3);
// findNumber(6, 9, 4);
// findNumber(16, 35, 7);


// // autocheck-02-32/32
// // Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.
// // При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// // Мой вариант
// // function includes(array, value) {
// //     let result = array.indexOf(value);
// //     if (result != -1) {
// //         console.log(true);
// //         return;
// //     } else {
// //         console.log(false);
// //         return;
// //     }
// // }

// // Решение в автопроверке
// function includes(array, value) {
//     let result = array.indexOf(value);

//     for (let i = 0; i <= array.length; i += 1) {
//         if (result != -1) {
//             console.log(true);
//             break;
//         };
//         console.log(false);
//         return;
//     }
// }
// includes([1, 2, 3, 4, 5], 3);
// includes([1, 2, 3, 4, 5], 17);
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus");
// includes(["apple", "plum", "pear", "orange"], "plum");
// includes(["apple", "plum", "pear", "orange"], "kiwi");