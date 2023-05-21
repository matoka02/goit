"use strict";

// <!-- Лекция 23.09.2022 -->

// const user = {
//     email: "mango@mail.com",
//     age: 20
// };
// const { email: userEmail } = user;
// // console.log(email);                             //Uncaught ReferenceError: email is not defined
// console.log(userEmail);                         //mango@mail.com


// const firstObject = { A:1, B:2 };
// const secondObject = { A:3, C:4 };
// const thirdObject = {
//     A: 5,
//     ...firstObject,
//     ...secondObject,
//     C: 6
// };
// console.log(thirdObject);                           //{A: 3, B: 2, C: 6}


// function foo(a, b, c, ...args) {
//     console.log(args);                                 // массив [4, 5]
// };
// foo(1,2,3,4,5);


// // Деструктуризация

// // Вычисление индекса массы тела
// function calcBMI(weight, height) {
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));
//     return Number((numericWeight / numericHeight **2).toFixed(1));
// };
// console.log(calcBMI({
//         weight: '88,3',
//         height: '1.75'
// }));

// console.log(calcBMI('88,3', '1.75'));
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

// // Перебор ключей и значений
// function printContactsInfo({ names, phones }) {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');
//     for (let i = 0; i < nameList.length, i < phoneList.length; i += 1) {
//         console.log(`${nameList[i]}: ${phoneList[i]}`);
//     }
// };
// printContactsInfo({
//     names: 'Jacob,William,Solomon,Anna,Henry',                              //Henry: undefined
//     phones: '89001234567,89001112233,89005556677,890055566300'
//     }
// );


// Глубокая деструктуризация

// // было
// function getBotReport(companyName, repairBots, defenceBots) {
//     return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// };

// console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // стало
// function getBotReport({companyName, bots: { repairBots, defenceBots }}) {
//     console.log('companyName', companyName);
//     // console.log('bots', bots);                          // не выведется, т.к. уже прошел глубокую деструктуризацию
//     console.log('repairBots', repairBots);
//     console.log('defenceBots', defenceBots);
//     return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// };

// console.log(getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//         repairBots: 150,
//         defenceBots: 50,
//         }
// }));


// Описание функции
// https://uk.wikipedia.org/wiki/JSDoc

// /**
//  * Get object with info about company and return info string
//  * @param {Object} object
//  * @returns {String} Info string
// */


// Вычисление индекса массы тела

// /**
//  * Рассчитываем индекс массы тела
//  * @param {Object} obj
//  * @returns {Number} BMI
//  */
// function calcBMI({weight, height}) {
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));
//     return Number((numericWeight / numericHeight **2).toFixed(1));
// };
// console.log(calcBMI({ weight:'88,3', height:'1.75'}));
// console.log(calcBMI({ weight:'68,3', height:'1.65'}));
// console.log(calcBMI({ weight:'118,3', height:'1.95'}));


// // Перебор ключей и значений

// /**
//  * Description placeholder
//  * @date 5/20/2023 - 3:48:33 PM
//  *
//  * @param {{ names: any; phones: any; }} {names, phones}
//  */
// function printContactsInfo({names, phones}) {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');
//     for (let i = 0; i < nameList.length, i < phoneList.length; i += 1) {
//         console.log(`${nameList[i]}: ${phoneList[i]}`);
//     }
// };
// printContactsInfo({
//     names: 'Jacob,William,Solomon,Anna,Henry',                              //Henry: undefined
//     phones: '89001234567,89001112233,89005556677,890055566300'
//     }
// );


// function getBotReport({companyName, repairBots, defenceBots}) {
//     return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// };
// console.log(getBotReport({
//     companyName: 'Cyberdyne Systems',
//     repairBots: 150,
//     defenceBots: 50}));


// function getStockReport({
//     companyName,
//     stock
//     // без перебора
//     // : { repairBots, defenceBots }
//     }) {
//     // с перебором
//     let total = 0;
//     for (const value of Object.values(stock)) {
//         total += value;
//     }
//     // // без перебора, но не сработает если ключи в объектах не идентичны
//     // let total = repairBots + defenceBots;

//     return `${companyName} has ${total} items in stock`;
// }
// console.log(
//     getStockReport({
//         companyName: 'Cyberdyne Systems',
//         stock: {
//             repairBots: 150,
//             defenceBots: 50,
//         }
//     })
// );
// console.log(
//     getStockReport({
//         companyName: 'Belacci',
//         stock: {
//             shoes: 20,
//             skirts: 10,
//             hats: 5,
//         }
//     })
// );


// // Операция SPRED
// // Дополнить функцию createContact(partialContact), чтобы она возвращала новый объект контакта с добавленными свойствами id и createAt, а также list со значением 'default', если в partialContact нет такого свойства.

// function createContact(partialContact) {
//     return {
//         id: generatedId(),                  // добавлено функцией снизу
//         createAt: new Date(),               // добавлено функцией
//         list: 'default',                    // добавлено в теле этой функции
//         ...partialContact,
//     }
// }
// console.log(
//     createContact({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     })
// );
// console.log(
//     createContact({
//         name: 'Poly',
//         email: 'poly@mail.com',
//     })
// );
// function generatedId() {
//     return '_' + Math.random().toString(36).substr(2,9);
// }


// // Операция REST
// Написать функцию, чтобы она возвращала новый объект со свойствами fullName вместо firstName и lastName

// function transformUsername({firstName, lastName, ...props}) {
//     return {
//         fullName: `${firstName} ${lastName}`,
//         ...props,
//     }
// }
// console.log(
//     transformUsername({
//         id: 1,
//         firstName: 'Jacob',
//         lastName: 'Mercer',
//         email: 'j.mercer@gmail.com',
//         friendCount: 40,
//     }),
// );
// console.log(
//     transformUsername({
//         id: 2,
//         firstName: 'Adrian',
//         lastName: 'Cross',
//         email: 'a.cross@gmail.com',
//         friendCount: 20,
//     }),
// );

// // autocheck-03-19/41
// const stones = [
//         {
//     name: 'Изумруд',
//     price: 1300,
//     quantity: 4,
//     },
//         {
//     name: 'Бриллиант',
//     price: 2700,
//     quantity: 3,
//     },
//         {
//     name: 'Сапфир',
//     price: 400,
//     quantity: 7,
//     },
//         {
//     name: 'Аквамарин',
//     price: 200,
//     quantity: 2,
//     }
// ];
// function getAllPropValues(propName) {
//     const newArr = [];
//     for (const stone of stones) {
//         console.log(propName);
//         // 1 вариант
//         // for (const key in stone) {
//         //     if (key === propName) {
//         //         newArr.push(stone[key])
//         //     }
//         // }

//         // 2 вариант
//         if (propName in stone) {
//             newArr.push(stone[propName])
//         }

//     }
//     return newArr;
// }
// console.log(getAllPropValues('price'));