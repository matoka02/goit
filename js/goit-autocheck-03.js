"use strict"

// // autocheck-03-01/41
// // Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:
// // - imgUrl - фотография, значение "https://via.placeholder.com/640x480";
// // - descr - описание, значение "Spacious apartment in the city center";
// // - rating - рейтинг, значение 4;
// // - price - цена, значение 2153;
// // - tags - метаинформация, массив ["premium", "promoted", "top"].

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };
// console.log(apartment);

// // autocheck-03-02/41
// // Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:
// // - name - имя владельца, значение "Henry";
// // - phone - телефон, значение "982-126-1588";
// // - email - почта, значение "henry.carter@aptmail.com".

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };
// console.log(apartment);
// console.log(apartment.owner);


// // autocheck-03-03/41
// // Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.
// // - aptRating - рейтинг;
// // - aptDescr - описание;
// // - aptPrice - цена;
// // - aptTags - теги.

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// console.log(apartment);
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);


// // autocheck-03-04/41
// // Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.
// // - ownerName - имя владельца;
// // - ownerPhone - телефон владельца;
// // - ownerEmail - почта владельца;
// // - numberOfTags - количество элементов массива в свойстве tags;
// // - firstTag - первый элемент массива в свойстве tags;
// // - lastTag - последний элемент массива в свойстве tags.

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };
// const owner = apartment.owner;
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length-1];
// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);


// // autocheck-03-05/41
// // Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».
// // - aptRating - рейтинг;
// // - aptDescr - описание;
// // - aptPrice - цена;
// // - aptTags - теги.

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);


// // autocheck-03-06/41
// // Дополни код обновив значения свойств объекта apartment:
// // - цену в свойстве price на 5000;
// // - рейтинг квартиры в свойстве rating на 4.7;
// // - имя владельца во вложенном свойстве name на "Henry Sibola";
// // - массив тегов в свойстве tags добавив в конец строку "trusted".

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");
// console.log(apartment);
// console.log(apartment.price);
// console.log(apartment.rating);
// console.log(apartment.owner.name);
// console.log(apartment.tags);


// // autocheck-03-07/41
// // Добавь объекту apartment несколько новых свойств:
// // - area - площадь в квадратных метрах, число 60;
// // - rooms - количество комнат, число 3;
// // - location - местоположение квартиры, обьект со следующими вложенными свойствами;
// // - country - страна, строка "Jamaica";
// // - city - город, строка "Kingston".

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//     country: "Jamaica",
//     city: "Kingston",
// };
// console.log(apartment);
// console.log(apartment.area);
// console.log(apartment.rooms);
// console.log(apartment.location);


// // autocheck-03-08/41
// // Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со значениями из переменных с аналогичными именами. Обязательно используй синтаксис коротких свойств.

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//     name,
//     price,
//     image,
//     tags,
// };
// console.log(product);


// // autocheck-03-09/41
// // Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password, имена которых хранятся в переменных emailInputName и passwordInputName.
// // Значением свойства email должна быть строка "henry.carter@aptmail.com", а значением свойства password - строка "jqueryismyjam".

// const emailInputName = "email";
// const passwordInputName = "password";
// const credentials = {
//     [emailInputName]: "henry.carter@aptmail.com",
//     [passwordInputName]: "jqueryismyjam",
// };
// console.log(credentials);


// // autocheck-03-10/41
// // Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.

// const apartment = {
//     descr: "Spacious apartment in the city center",
//         rating: 4,
//         price: 2153,
// };

// мой вариант №1
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

// // мой вариант №2
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// for (const key in keys) {
//     console.log(keys);
//     break;
// };
// for (const value in values) {
//     console.log(values);
//     break;
// };

// // еще вариант: выводится ключ(1)-значение(1), выводится ключ(2)-значение(2), выводится ключ(3)-значение(3)
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
//     console.log(key);
//     console.log(apartment[key]);
// };

// // решение в автопроверке
// const apartment = {
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
// };
// const keys = ['descr', 'rating', 'price'];
// const values = ['Spacious apartment in the city center', 4, 2153];
// // Change code below this line
// for (const key in apartment){
//     console.log(key);
//     console.log(apartment[key]);
// }


// // autocheck-03-11/41
// // Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.
// // - Объявлена переменная advert.
// // - Значение переменной advert это объект.
// // - Объявлена переменная apartment.
// // - Значение переменной apartment это объект.
// // - Объявлена переменная keys.
// // - Значение переменной keys это массив ["descr", "rating", "price"].
// // - Объявлена переменная values.
// // - Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153].

// const keys = [];
// const values = [];
// const advert = {
//     service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {

//     if (apartment.hasOwnProperty(key)) {
//         // keys.push(key);
//         // values.push(apartment[key]);
//         console.log(key);
//         console.log(apartment[key]);
//     };

// }


// // autocheck-03-12/41
// // Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.

// // решение в автопроверке
// function countProps(object) {
//     let propCount = 0;

//     // 1. перебор ключей объекта object
//     for (const key in object) {

//     // 2. проверка наличия собственных свойств объекта
//         if (object.hasOwnProperty(key)) {
//             propCount += 1;
//             console.log(propCount);
//         };

//     };

//     return propCount;
// };

// // мой вариант
// function countProps(object) {
//     let propCount = 0;
//     let keys = Object.keys(object);

//     for (const key of keys) {
//         propCount += 1;
//         console.log(propCount);

//     };

//     return propCount;
// }

// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }0);


// // autocheck-03-13/41
// // Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.
// // - Объявлена переменная apartment.
// // - Значение переменной apartment это объект.
// // - Объявлена переменная keys.
// // - Значение переменной keys это массив ["descr", "rating", "price"].
// // - Значение переменной keys получено с помощью метода Object.keys().
// // - Объявлена переменная values.
// // - Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153].
// // - Значение переменной values получено с помощью цикла for...of.

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
//     for (const key of keys) {
//     // Ключ
//     // console.log(key);
//     // Значение свойства
//     // console.log(apartment[key]);
        
//         values.push(apartment[key]);
//         console.log(values);
//     };


// // autocheck-03-14/41
// // Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, но необязательно, цикл for...of.
// // - Объявлена функция countProps(object)
// // - Вызов countProps({}) возвращает 0
// // - Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
// // - Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
// // - Функция подсчитывает только собственные свойства объекта
// // - Функция использует метод Object.keys() и, возможно, цикл for...of

// // мой вариант, выведет массив из количества ключей
// function countProps(object) {
//     let propCount = 0;

//     let keys = Object.keys(object);

//     for (const key of keys) {
//         propCount += 1;
//         console.log(propCount);

//     };
//     console.log(keys);

//     return propCount;
// };

// // еще вариант, сразу посчитает количество ключей
// function countProps(object) {
//     let propCount = 0;

//     let keys = Object.keys(object).length;

//     console.log(keys);

//     return propCount;
// }
// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });


// // autocheck-03-15/41
// // Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств. Используй методы Object.keys() и Object.values().
// // - Объявлена переменная apartment
// // - Значение переменной apartment это объект
// // - Объявлена переменная keys
// // - Значение переменной keys это массив ["descr", "rating", "price"]
// // - Объявлена переменная values
// // - Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153]
// // - Для получения массива ключей объекта apartment используется Object.keys()
// // - Для получения массива значений объекта apartment используется Object.values()

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

// values.push(apartment[key]);

// // autocheck-03-16/41
// // Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата.Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.Используй переменную totalSalary для хранения общей суммы зарплаты.

// function countTotalSalary(salaries) {
//     let totalSalary = 0;

//     // 1. массив значений
//     const values = Object.values(salaries);
//     // console.log(values);

//     // 2. перебор
//     for (const value of values) {
    
//     // 3. вычисление
//         totalSalary += value;
//     };

//     console.log(totalSalary);

//     return totalSalary;
// };
// countTotalSalary({});
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });


// // autocheck-03-17/41
// // Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for ( let color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//     console.log(hexColors);
//     console.log(rgbColors);
// };


// // autocheck-03-18/41
// // Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта.Функция ищет объект продукта с таким именем(свойство name) в массиве products и возвращает его цену(свойство price).Если продукт с таким названием не найден, функция должна возвращать null.

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     for (let product of products) {
        
//         if (product.name === productName) {
//             console.log(product.price);
//             return product.price;
//         };
//     };
//         return null;
// };
// getProductPrice("Radar");
// getProductPrice("Grip");
// getProductPrice("Scanner");
// getProductPrice("Droid");
// getProductPrice("Engine");


// // autocheck-03-19/41
// // Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];


// // решение в автопроверке
// function getProductPrice(propName) {

//     // 1. объявлен массив без значений
//     const propValue = [];

//     // 2. перебор массива products
//     for (const product of products) {

//     // 3. проверка наличия собственных значений
//         if (product.hasOwnProperty(propName)) {

//     // 4. наполняем массив этими значениями
//                 propValue.push(product[propName]);
//                 console.log(propValue);
//         };

//     };
//         return propValue;
// };

// // еще вариант решения
// // function getProductPrice(propName) {
    
// //     let result = [];
// //     for (const product of products) {
// //         if (propName === 'name') {
// //             result.push(product.name);
// //             console.log(result);
// //         };
// //         if (propName === 'quantity') {
// //             result.push(product.quantity);
// //             console.log(result);
// //         };
// //         if (propName === 'price') {
// //             result.push(product.price);
// //             console.log(result);
// //         };
// //     };
// //     return result;
// // };

// getProductPrice("name");
// getProductPrice("quantity");
// getProductPrice("price");
// getProductPrice("category");



// // autocheck-03-20/41
// // Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {

//     for (let product of products) {
//         if (product.name === productName) {
//             console.log(product.price * product.quantity);
//             return product.price * product.quantity;
//         };
//     };

//     console.log(0);
//     return 0;
// };
// calculateTotalPrice("Blaster");
// calculateTotalPrice("Radar");
// calculateTotalPrice("Droid");
// calculateTotalPrice("Grip");
// calculateTotalPrice("Scanner");


// // autocheck-03-21/41
// // Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня (meanTemperature). Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };

// const { yesterday, today, tomorrow } = highTemperatures;
// console.log(highTemperatures);

// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);


// // autocheck-03-22/41
// // В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды. Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для icon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };

// const { yesterday,
//     today,
//     tomorrow,
//     icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// console.log(highTemperatures);              // не выводит значение icon
// console.log(icon);                          // выводит значение icon

// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);


// // autocheck-03-23/41
// // Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };

// const {
//     yesterday: highYesterday,
//     today: highToday,
//     tomorrow: highTomorrow,
//     icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// console.log(highTemperatures);

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


// // autocheck-03-24/41
// // Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {hex, rgb} of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
//     console.log(hexColors);
//     console.log(rgbColors);
// };


// // autocheck-03-25/41
// // Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками. Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const forecast = {
//     today: {
//         low: 28,
//         high: 32,
//         icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//         low: 27,
//         high: 31,
//     },
// };

// const {
//     today: {
//         low: lowToday,
//         high: highToday,
//         icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg" },
//     tomorrow: {
//         low: lowTomorrow,
//         high: highTomorrow,
//         icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}
// } = forecast;
// console.log(lowToday);
// console.log(highTomorrow);
// console.log(tomorrowIcon);


// // autocheck-03-26/41
// // Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.
// // {
// //   today: { low: 10, high: 20 },
// //   tomorrow: { low: 20, high: 30 }
// // }
// // Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast.

// function calculateMeanTemperature(forecast) {
// const {
//     today: {
//         low: todayLow,
//         high: todayHigh
//         },
//     tomorrow: {
//         low: tomorrowLow,
//         high: tomorrowHigh,
//         }
//     } = forecast;

//     console.log((todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4);

//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} });
// calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} });


// // autocheck-03-27/41
// // В переменной scores хранится массив результатов тестирования. Используя распыление и методы Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.

// const scores = [89, 64, 42, 17, 93, 51, 26];

// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(bestScore);                         //93
// console.log(worstScore);                        //17


// // autocheck-03-28/41
// // В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп. Используя распыление дополни код так, чтобы:
// // - В переменной allScores хранился массив всех результатов от первой до третьей группы.
// // - В переменной bestScore был самый высокий общий балл.
// // - В переменной worstScore был самый низкий общий балл.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(bestScore);                         //97
// console.log(worstScore);                        //14


// // autocheck-03-29/41
// // В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые хранятся в переменной defaultSettings. Во время создания теста, все или часть настроек можно переопределить, они хранятся в переменной overrideSettings.
// // Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить переопределённые настройки.Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.

// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
// };
// const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
// };

// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);                         //{theme: 'light', public: false, withPassword: true, minNumberOfQuestions: 10, timePerQuestion: 30}


// // autocheck-03-30/41
// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.
// - text - текст задачи.
// - category - категория задачи.
// - priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.
// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.

// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";
//     // Change code below this line

//     // Change code above this line
// }
// makeTask({ category: "General", priority: "Normal", completed: false });
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });
// makeTask({ category: "Finance", text: "Take interest" });
// makeTask({ priority: "Low", text: "Choose shampoo" });
// makeTask({ text: "Buy bread" });
