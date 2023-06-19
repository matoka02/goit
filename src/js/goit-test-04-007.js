"use strict";

// <!-- Лекция 26.09.2022 -->

// Пример работы callback
// function add(a, b) {
//     return a + b;
// }

// console.log(add(1, 2));                         // 1+2=3
// console.log(add);                               // выведет тело функции add

// const arr = [3, 10];

// function foo(arr, callback) {
//     const first = arr[0];
//     const second = arr[1];
//     const result = callback(first, second);
//     console.log(result);                        // 3+10=13
// };

// foo(arr, add);


// // Добавление id и вывод суммы
// function createProduct(partialProduct, callback) {          // 1. идет к callback(obj)
//     const obj = {
//         id: Date.now(),
//         ...partialProduct
//     }
//     callback(obj);                                          // 2. считывает параметры в logProduct
// };

// function logProduct(product) {
//     console.log(product);
// };

// function logTotalPrice(product) {
//     console.log(product.price * product.quantity);
//     return product.price * product.quantity;
// };

// createProduct({
//     name: 'strawberry',
//     price: 30,
//     quantity: 3
// }, logProduct);                                             // 3. идет к logProduct(product)

// createProduct({
//     name: 'lemon',
//     price: 20,
//     quantity: 5
// }, logProduct );

// createProduct({
//     name: 'strawberry',
//     price: 30,
//     quantity: 3
// }, logTotalPrice);

// createProduct({
//     name: 'lemon',
//     price: 20,
//     quantity: 5
// }, logTotalPrice );


// // Операции с банковским счетом

// const TRANSACTION_LIMIT = 1000;

// const account = {
//     username: 'Jacob',
//     balance: 2400,
//     withdraw(amount, onSuccess, onError) {
//         if (amount > this.balance) {
//             onError('Мало средств');
//         } else if (amount > TRANSACTION_LIMIT) {
//             onError('Превышен лимит');
//         } else {
//             this.balance -= amount;
//             onSuccess(`Списано ${amount}, остаток ${this.balance}`);
//         };
//     },
//     deposit(amount, onSuccess, onError) {
//         if (amount <= 0) {
//             onError('Значение должно быть больше 0');
//         } else if (amount > TRANSACTION_LIMIT) {
//             onError('Превышен лимит');
//         } else {
//             this.balance += amount;
//             onSuccess(`Внесено ${amount}, остаток ${this.balance}`);
//         };
//     },
// };

// function handleSuccess(message) {
//     console.log(`Success! ${message}`);
// };

// function handleError(message) {
//     console.log(`Error! ${message}`);
// };

// account.withdraw(2400, handleSuccess, handleError);
// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);

// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);


// // Создание нового массива

// function each(array, callback) {
//     for (const element of array) {
//         console.log(callback(element));
//     }
// }

// each( [64, 49, 36, 25, 16], function (value) {
//     return value * 2;
// });

// console.log(
    // each( [64, 49, 36, 25, 16], function (value) {
    //     return value - 10;
    // })
// );

// console.log(
    // each( [64, 49, 36, 25, 16], function (value) {
    //     return Math.sqrt(value);
    // })
// );

// console.log(
    // each( [1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    //     return Math.ceil(value);
    // })
// );

// console.log(
//     each( [1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//         return Math.floor(value);
//     })
// );


// Стрелочные функции
// // - анонимные функции - function declaration
// foo();
// function (value) {
//     return value * 2;
// }
// // - вызывется только после оглашения - function expression
// const boo = function (value) {
//     return value * 2;
// };
// boo();
// // - стрелочная arrow function
// const boo = (value) => {
    
// };


// // Добавление id и вывод суммы. Рефакторинг

// // function createProduct(partialProduct, callback) {
// //     const obj = {
// //         id: Date.now(),
// //         ...partialProduct
// //     }
// //     callback(obj);
// // };

// // function logProduct(product) {
// //     console.log(product);
// // };

// // function logTotalPrice(product) {
// //     console.log(product.price * product.quantity);
// //     return product.price * product.quantity;
// // };

// const createProduct = (partialProduct, callback) => {
//     const obj = {
//         id: Date.now(),
//         ...partialProduct
//     }
//     callback(obj);
// };

// const logProduct = (product) => console.log(product);

// const logTotalPrice = (product) => console.log(product.price * product.quantity);

// createProduct({
//     name: 'strawberry',
//     price: 30,
//     quantity: 3
// }, logProduct);


// createProduct({
//     name: 'strawberry',
//     price: 30,
//     quantity: 3
// }, logTotalPrice);



// // Создание нового массива. Рефакторинг

// const each = (array, callback) => {
//     const newArr = [];
//     for (const el of array) {
//         newArr.push(callback(el));
//     }
//     return newArr;
// };

// console.log(
//     each( [64, 49, 36, 25, 16], value => value * 2)
// );

// console.log(
//     each( [64, 49, 36, 25, 16], value => (value - 10))
// );

// console.log(
//     each( [64, 49, 36, 25, 16], value => Math.sqrt(value))
// );

// console.log(
//     each( [1.5, 2.1, 16.4, 9.7, 11.3],  value => Math.ceil(value))
// );

// console.log(
//     each( [1.5, 2.1, 16.4, 9.7, 11.3],  value => Math.floor(value))
// );


// // Метод forEach. Рефакторинг

// const logItems = items => {
//     // console.log(items);

//     items.forEach((item, idx, arr) => console.log(`${idx + 1 } - ${item}`));

//     // for (let i = 0; i < items.length; i += 1) {
//     //     console.log(`${i + 1 } - ${items[i]}`);
//     // };
// };
// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['strawberry', 'grape', 'peach', 'banana', 'lemon',]);


// // Перебор ключей и значений - метод forEach

// const printContactsInfo = ({ names, phones }) => {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');

//     // // for (index) может принимать 2 и больше условия, а также выполняет команды break и continue
//     // for (let i = 0; i < nameList.length, i < phoneList.length; i += 1) {
//     //     console.log(`${nameList[i]}: ${phoneList[i]}`);
//     // }

//     // forEach принимает только 1 условие и его невозможно прервать
//     nameList.forEach((el, idx) => {
//         console.log(`${el}: ${phoneList[idx]}`);
//     })
// };
// printContactsInfo({
//     names: 'Jacob,William,Solomon,Anna,Artem',                              //Artem: undefined
//     phones: '89001234567,89001112233,89005556677,890055566300'
//     }
// );


// // Метод forEach. Рефакторинг

// // function calculateAverage(...args) {
// //     let total = 0;
// //     for (let i = 0; i < args.length; i+=1) {
// //         total += args[i];
// //     };
// //     return total / args.length;
// // };

// const calculateAverage = (...args) => {
//     let total = 0;
//     console.log(args);
//     args.forEach(el => total += el );
//     return total / args.length;
// };
// console.log(calculateAverage(1,2,3,4));                 // 2.5
// console.log(calculateAverage(14,8,2));                  // 8
// console.log(calculateAverage(27,43,2,8,36));            // 23.2

