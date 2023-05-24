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


// // autocheck-04-13/48
// // Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.
// // Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

// function changeEven(numbers, value) {

//     const pureChangeEven = [];

//     numbers.forEach((element) => {
//         if (element % 2 === 0) {
//             element = element + value;
//             pureChangeEven.push(element);
//         } else {
//             pureChangeEven.push(element);
//         }
//     });

//     console.log(pureChangeEven);
//     return pureChangeEven;
// };
// changeEven([1, 2, 3, 4, 5], 10);
// changeEven([2, 8, 3, 7, 4, 6], 10);
// changeEven([17, 24, 68, 31, 42], 100);
// changeEven([44, 13, 81, 92, 36, 54], 100);
// changeEven([19,16,12,9,20,10,8,21,17,7,5], 11);


// // autocheck-04-14/48
// // Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);


// // autocheck-04-15/48
// // Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из всех объектов массива books.

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     {
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         rating: 7.94
//     },
//     {
//         title: "Enemy of God",
//         author: "Bernard Cornwell",
//         rating: 8.67
//     },
// ];

// const titles = books.map(book => book.title);
// console.log(titles);
//  // (5) ['The Last Kingdom', 'Beside Still Waters', 'The Dream of a Ridiculous Man', 'Redder Than Blood', 'Enemy of God']


// // autocheck-04-16/48
// // Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         genres: ["adventure", "history"],
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         genres: ["fiction"],
//     },
//     {
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         genres: ["horror", "mysticism"],
//     },
// ];

// const genres = books.flatMap(book => book.genres);
// console.log(genres);
//  // (5) ['adventure', 'history', 'fiction', 'horror', 'mysticism']


// // autocheck-04-17/48
// // Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// // мой вариант
// // const getUserNames = users.map(user => user.name);
// // console.log(getUserNames);
// // (7) ['Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony']

// // мой вариант
// // const getUserNames = users.flatMap(user => user.name);
// // console.log(getUserNames);
// // (7) ['Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony']

// // Решение в автопроверке
// const getUserNames = users => users.map(user => user.name);


// // autocheck-04-18/48
// // Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// // // мой вариант
// // const getUserEmails = users.map(user => user.email);
// // console.log(getUserNames);                      // (7) ['moorehensley@indexia.com', 'sharlenebush@tubesys.com', 'rossvazquez@xinware.com', 'elmahead@omatom.com', 'careybarr@nurali.com', 'blackburndotson@furnigeer.com', 'shereeanthony@kog.com']

// // // Решение в автопроверке
// const getUserEmails = users => users.map(user => user.email);


// // autocheck-04-19/48
// // Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(evenNumbers);
// console.log(oddNumbers);


// // autocheck-04-20/48
// // Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// const allGenres = books.flatMap(book => book.genres);
// console.log(allGenres);
// // (7) ['adventure', 'history', 'fiction', 'mysticism', 'horror', 'mysticism', 'adventure']
// const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);
// console.log(uniqueGenres);
// // (5) ['adventure', 'history', 'fiction', 'mysticism', 'horror']


// // autocheck-04-21/48
// // Используя метод filter() дополни код так, чтобы:
// // - В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
// // - В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) которое совпадает со значением в переменной AUTHOR.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94 },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(topRatedBooks);
// console.log(booksByAuthor);


// // autocheck-04-22/48
// // Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// // // массив со всеми значениями eyeColor
// // const getEyeColor = users.flatMap(user => user.eyeColor);
// // console.log(getEyeColor);

// // // мой вариант - выведет объект с массивами, где eyeColor: 'brown'
// const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color).map(user => ({ eyeColor: user.eyeColor }));
// console.log(getUsersWithEyeColor(users, 'brown'));
// // (2) [{…}, {…}]
// // 0: { eyeColor: 'brown' }
// // 1: { eyeColor: 'brown' }
// // length: 2
// // [[Prototype]]: Array(0)

// // мой вариант - выведет массив name, где есть eyeColor: 'brown'
// const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color).map(user => user.name);
// console.log(getUsersWithEyeColor(users, 'brown'));

// // решение в автопроверке - выведет объект с массивами, со всеми ключами-значениями, где у кого-то есть совпадение по 'brown'
// const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);
// console.log(getUsersWithEyeColor(users, 'brown'));
// // (2) [{…}, {…}]
// // 0: {name: 'Blackburn Dotson', email: 'blackburndotson@furnigeer.com', eyeColor: 'brown', friends: Array(2), isActive: false, …}
// // 1: {name: 'Sheree Anthony', email: 'shereeanthony@kog.com', eyeColor: 'brown', friends: Array(2), isActive: true, …}
// // length: 2
// // [[Prototype]]: Array(0)


// // autocheck-04-23/48
// // Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// // Мой вариант решения, нужно объявить переменные minAge и maxAge
// // const minAge = 20;
// // const maxAge = 30;
// // const getUsersWithAge = users.filter(
// //     ({age}) => age >= minAge && age < maxAge
// // );
// // console.log(getUsersWithAge);

// // Решение в автопроверке
// const getUsersWithAge = (users, minAge, maxAge) => users.filter(
//     ({age}) => age >= minAge && age < maxAge
// );


// // autocheck-04-24/48
// // Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ];

// // // Мой вариант решения с методом includes, выведет те массивы, в которых есть совпадения
// const getUsersWithFriend = (users, friendName) => users.filter(({friends}) => friends.includes(friendName));

// // // Еще вариант решения, выведет массив из name, в которых было совпадение
// // const getUsersWithFriend = (users, friendName) => {
// //     return users.filter(
// //         user => user.friends.indexOf(friendName) !== -1
// //     ).map(user => user.name);
// // };

// console.log(getUsersWithFriend(users, "Briana Decker"));
// console.log(getUsersWithFriend(users, "Goldie Gentry"));
// console.log(getUsersWithFriend(users, "Adrian Cross"));


// // autocheck-04-25/48
// // Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ];

// // Мой вариант, разбит на 2 этапа:
// const allFriends = users.flatMap(user => user.friends);
// const getFriends = allFriends.filter((friend, index, array) => array.indexOf(friend) === index);
// Мой вариант, в одну строку
// const getFriends = users.flatMap(user => user.friends).filter((friend, index, array) => array.indexOf(friend) === index);
// console.log(getFriends);

// // Решение в автопроверке
// const getFriends = (users) => users.flatMap(user => user.friends).filter((friend, index, array) => array.indexOf(friend) === index);
// console.log(getFriends(users));

// // 3 вариант: forOf+forOf+if
// function getFriends(users) {
//   // Результирующий массив
//   let a = [];
//   // Перебираем пользователей
//   for(let user of users) {
//     // Перебираем друзей пользователя user
//     for( let name of user.friends) {
//       // Ищем друга в массиве a
//       let index = a.findIndex( v => v === name );
//       // Если не нашли, то index === -1
//       if (index === -1) {
//         // Добавляем нового друга в массив
//         a.push(name);
//       }
//     }
//   }
//   return a;
// }

// // 4 вариант: forEach+includes
// function getFriends(users) {
//   let a = [];
//   users.forEach( u => u.friends.forEach( f => { if (!a.includes(f)) a.push(f); }) );
//   return a;
// }

// // 5 вариант: Set+forOf
// function getFriends(users) {
//   let s = new Set();
//   for(let u of users) {
//     // Пытаемся всех друзей очередного пользователя добавить в набор
//     // повторяющиеся будут проигнорированы
//     s = new Set([...s, ...u.friends]);
//   }
//   // Преобразуем набор в массив
//   return Array.from(s);
// }

// console.log(getFriends(users));

// // 6 вариант: .reduce()+if
// function getFriends(arr) {
//   return arr.reduce((acc, item) => {
//     item.friends.forEach(friend => {
//       if (!acc.includes(friend)) acc.push(friend);
//     })
//     return acc;
//   }, []);
// }

// console.log(getFriends(users))

// // 7 вариант: Set+map+flat
// function getFriends(users) {
//   return [...new Set(users.map(user => user.friends).flat())]
// }
// console.log(getFriends(users));

// // 8 вариант: forEach+filter+indexOf
// function getFriends(arr) {
//   let b =[];
//     //Собираем все friends в один array.
//   arr.forEach((element)=>{
//     b = [...b, ...element.friends];
//   });
//   //Производим удаление одинаковых элементов.
//   let newArray = b.filter((item, pos) => b.indexOf(item) === pos);
//   return newArray;
// }
// console.log(getFriends(users));


// // autocheck-04-26/48
// // Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ];



// const getActiveUsers = users.filter((isActive) => !isActive || 1);
// console.log(getActiveUsers);

// // // Мой вариант решения с методом includes, выведет те массивы, в которых есть совпадения
// const getUsersWithFriend = (users, friendName) => users.filter(({friends}) => friends.includes(friendName));
