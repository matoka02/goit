"use strict";

// <!-- Лекция 05.10.2022 -->


// // "use strict";
// // 3. function declaration: undefind при "use strict"
// function foo() {
//     console.log(this);         // f
// };
// // 2. объект, в свойстве ссылка на функцию
// const obj = {
//     logCtx: foo
// };
// // 1.
// obj.logCtx();

// // "use strict";
// // 3. объект, в свойстве функция
// const objA = {
// // function declaration
//     logCtx() {
//         console.log(this);      // {foo: f}
//     }
// };
// // 2. объект, в свойстве ссылка на функцию
// const objB = {
//     foo: objA.logCtx
// };
// // 1.
// objB.foo();


// // "use strict";
// const foo = () => console.log(this);    // Window


// const obj = {
//     // arrow function, ее this ссылается на родительскую сущность
//     foo: () => console.log(this)        // Window
// };
// obj.foo();


// // arrow function, ее this ссылается на родительскую сущность, в которой пустая функция
// const foo = () => console.log(this);        // Window
// const obj = {
//     logCtx: foo
// };
// obj.logCtx();


// // <!-- Методы apply и call-->

// function foo(a, b) {
//     console.log('this =>', this, 'a =>', a, 'b =>', b);
// };
// function boo() {
//     console.log(this);
// };

// // apply передает аргументы как массив
// foo.apply({}, [1, boo]);
// // call передает аргументы как список
// foo.call({}, 1, boo);


// // <!-- Метод bind-->

// function foo(a, b) {
//     console.log('this =>', this, 'a =>', a, 'b =>', b);
// };
// const testObj = {
//     name: 'my Test'
// }
// const boo = foo.bind(testObj, 1, 2);
// // вот эти аргументы не перезапишутся, если при объявлении были указаны
// boo(3, 4);
// boo(4, 5);

// const obj = {
//     name: 'my name',
//     sayHello() {
//         console.log('say', this.name);      // say my name

//         function boo() {
//             console.log('boo', this);       // boo {name: 'my name', sayHello: ƒ}
//         }
//         // this от sayHello
//         boo.call(this)
//     }
// }
// obj.sayHello()


// // 1. Мастерская камней

// const myShop = {
//     stones: [
//         {
//             name: 'Emerald',
//             price: 1300,
//             quantity: 4
//         },
//         {
//             name: 'Diamond',
//             price: 2700,
//             quantity: 3
//         },
//         {
//             name: 'Sapphire',
//             price: 1400,
//             quantity: 7
//         },
//         {
//             name: 'Ruby',
//             price: 800,
//             quantity: 2
//         },
//     ],

//     calcTotalPrice(stoneName) {
//         // return this.stones.reduce((acc, stone) => {
//         //     if (stone.name === stoneName) {
//         //         return stone.price * stone.quantity
//         //     }
//         //     return acc
//         // }, 0);

//         // рефакторинг
//         return this.stones.reduce((acc, {name, price, quantity}) => name === stoneName? price * quantity : acc, 0);
        
//         // // метод find
//         // const {price, quantity} = this.stones.find((item) => item.name === stoneName);
//         // return price * quantity;
//     },
// }
// console.log(myShop.calcTotalPrice('Emerald'));
// console.log(myShop.calcTotalPrice('Diamond'));
// console.log(myShop.calcTotalPrice('Sapphire'));
// console.log(myShop.calcTotalPrice('Ruby'));
// console.log(myShop.calcTotalPrice('Phosphophyllite'));


// // 2. Телефонная книга

// const phonebook = {
//     contacts: [],

//     add(contact) {
//         const newContact = {
//             list: 'default',
//             ...contact,
// // 1. другая функция не скопирует методы объекта из-за this
//             // id: this.generateId(),
//             // createdAt: this.getDate(),
// // 2. другая функция скопирует методы объекта
//             // id: phonebook.generateId(),
//             // createdAt: phonebook.getDate(),
//             id: this.generateId(),
//             createdAt: this.getDate(),
//         };
//         this.contacts.push(newContact);
//         return this.contacts;
//     },
// // 1, 2
//     generateId() {
//         return '_' + Math.random().toString(36).substr(2,9);
//     },
//     getDate() {
//         return Date.now();
//     },

// }

// // console.log(
// //     phonebook.add({
// //         name: 'Mango',
// //         email: 'mango@mail.com',
// //         list: 'friends'
// //     })
// // );
// // console.log(
// //     phonebook.add({
// //         name: 'Poly',
// //         email: 'poly@mail.com',
// //         list: 'friends'
// //     })
// // );

// const newPhoneBook = {
//     contacts: [],
// }
// console.log(phonebook.add.call(newPhoneBook, {
//         name: 'Mark',
//         email: 'mark@mail.com',
//         list: 'friends'
//     })  );


// // 3. Калькулятор

// const calculator = {
//     read(c, d) {
//         this.a = c;
//         this.b = d;
//     },
//     add(){
//         return this.a + this.b
//     },
//     mult() {
//         return this.a * this.b
//     }
// };
// console.log('before', calculator);                    // before {read: ƒ}
// calculator.read(5, 2)
// console.log('after', calculator);                    // after {a: 5, b: 2, read: ƒ}
// console.log(calculator.add());              // 7
// console.log(calculator.mult());             // 10
