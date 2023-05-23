"use strict";


// // autocheck-04-1/48
// // Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.

// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza();         // выведет р-т выполнения функции: "Your pizza is being prepared, please wait."
// const pointer = makePizza;          // выведет тело функции: ƒ makePizza() {return "Your pizza is being prepared, please wait.";}
// console.log(result);
// console.log(pointer);


// // autocheck-04-2/48
// // Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и возвращала ее вызов. Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.

// function deliverPizza(pizzaName) {
//     console.log(`Delivering ${pizzaName} pizza.`);
//     return `Delivering ${pizzaName} pizza.`;
// };
// function makePizza(pizzaName) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
// };
// // higher order function
// // имя функции с (параметр, колбэк)
// function makeMessage(pizzaName, callback) {
//     console.log(callback(pizzaName));
// // возвращение колбэка с (параметр):
// // - если (makePizza)-- > выполнение функции makePizza;
// // - если (deliverPizza)-- > выполнение функции deliverPizza;
//     return callback(pizzaName);
// };

// makeMessage("Royal Grand", makePizza);
// makeMessage("Ultracheese", deliverPizza);


// // autocheck-04-3/48
// // Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName), которая логирует строку "Eating pizza <имя пиццы>".

// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
// }
// // инлайн колбэк-функция
// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
// });
// // инлайн колбэк-функция
// makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}.`);
// });


// // autocheck-04-4/48
// Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.
// - Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
// - Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.

// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {
//         if (this.pizzas.includes(pizzaName)) {
//             console.log(onSuccess(pizzaName));
//             return onSuccess(pizzaName);
//         }
//         console.log(onError(`There is no pizza with a name ${pizzaName} in the assortment.`));
//         return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//     },
// };
// // Callback for onSuccess
// function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }
// // Callback for onError
// function onOrderError(error) {
//     return `Error! ${error}`;
// }
// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);


// // autocheck-04-5/48
// // Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.
// // Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line

//     orderedItems.forEach((el) => {
//         totalPrice += el;
//     });
//     console.log(totalPrice);
//     // Change code above this line
//     return totalPrice;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);


// // autocheck-04-6/48
// // Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.
// // Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function filterArray(numbers, value) {
    
//     const filteredNumbers = [];

//     numbers.forEach((el, idx) => {

//         if (numbers[idx] > value) {
//             filteredNumbers.push(el)
//         }
//     });

//     console.log(filteredNumbers);
//     return filteredNumbers;
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);
// filterArray([22,21,18,7,15,22,5,18,15,18,22,11,15,21,17,21,23,17], 15);


// // autocheck-04-7/48
// // Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.
// // Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];

//     firstArray.forEach((el, idx) => {
//         if (secondArray.includes(firstArray[idx])) {
//             commonElements.push(firstArray[idx])
//         }
//     });
    
//     console.log(commonElements);

//     return commonElements;
// }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);
// getCommonElements([5,17,24,20,12,17,19,20,19,12,15,20,20,6,12,21,21,20,8], [24,15,17,8,20,22,12,12,11,9,7,11,23,15,16,5,8,19,16]);


// // autocheck-04-8/48
// // Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.

// const calculateTotalPrice = (quantity, pricePerItem) => {

//     console.log(quantity * pricePerItem);
//     return quantity * pricePerItem;
// };
// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);


// // autocheck-04-9/48
// // Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.

// const calculateTotalPrice = (quantity, pricePerItem) =>
//     quantity * pricePerItem;

// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(7, 15);


// // autocheck-04-10/48
// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.
// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;

//     orderedItems.forEach( (item) => {
//         totalPrice += item;
//     });
//     console.log(totalPrice);
//     return totalPrice;
// };
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice([10,7,14,5,5,6,22,22,23,7,9]);


// // autocheck-04-11/48
// // Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach( (number) => {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });

//     console.log(filteredNumbers);
//     return filteredNumbers;
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);
// filterArray([15,16,21,13,12,5,20,21,12,16], 15);


// // autocheck-04-12/48
// // Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];

//     firstArray.forEach( (element) => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });
//     console.log(commonElements);
//     return commonElements;
// }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);
// getCommonElements([15,18,22,8,5,14,18,14,8,17,9,22,13,7,13,8,18,23,9,22], [16,5,14,10,21,21,23,24,18,19,14,19,9,19,21,23,23,22,21,20]);






