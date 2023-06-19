"use strict";

// <!-- Лекция 07.10.2022 -->


// // 1. Блогер

// class Blogger {
//     constructor({ name, age, numberOfPosts, topics }) {
//         this.name = name;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//         this.topics = topics;
//     }
//     getInfo() {
//         return `User ${this.name} is ${this.age} years old and ${this.numberOfPosts} posts`;
//     }
//     updatePostCount(value) {
//         this.numberOfPosts += value
//     }
// }
// const mango = new Blogger({
//     name: 'mango@mail.com',
//     age: 24,
//     numberOfPosts: 20,
//     topics: ['tech', 'cooking'],
// })

// console.log(mango);
// console.log(mango.getInfo());
// mango.updatePostCount(5);
// console.log(mango.getInfo());


// // 2. Склад

// class Storage{

//     constructor(arr) {
//         this.items = arr
//     }

//     getItems() {
//         return this.items
//     }

//     addItem(item) {
//         this.items.push(item)
//     }

//     // removeItem(item) {
//     //     if (this.items.includes(item)) {
//     //         const idx = this.items.indexOf(item);
//     //         this.items.splice(idx,1)
//     //     }
//     // }

//     removeItem(item) {
//         const idx = this.items.indexOf(item);
//         if (!!~idx) {
//             this.items.splice(idx, 1)
//         } else {
//             console.log('Not found');
//         }
//     }
// }

// const storage = new Storage(['strawberry', 'lemon', 'grape', 'peach']);
// console.log(storage);
// storage.addItem('banana');
// console.table(storage.items);
// storage.removeItem('strawberry');
// console.table(storage.items);


// // 3. Пользователь

// class User {
//     #login;
//     #email;
//     constructor({ login, email }) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get login() {
//         return this.#login
//     }
//     set login(newLogin) {
//         if (this.#login !== newLogin) {
//             this.#login = newLogin        
//         }
//     }

//     get email() {
//         return this.#email
//     }
//     set email(newEmail) {
//         if (this.#email !== newEmail) {
//             this.#email = newEmail
//         }
//     }    
// }

// const mango = new User({
//     login: 'Mango',
//     email: 'mango@dog.woof',
// })
// mango.login = 'asvasdadasd';
// console.log(mango);
// mango.login;
// mango.login = 'mangodoge';
// console.log(mango);


// // 4. Заметки

// class Notes{

//     static Priority = {
//         LOW: 'low',
//         NORMAL: 'normal',
//         HIGHT: 'hight',
//     };

//     constructor(arr) {
//         this.items = arr;
//     }

//     addNote(note) {
//         this.items.push(note);
//     }

//     // removeNote(text) {
//     //     const idx = this.items.findIndex(({ text: itemText }) => text === itemText);
//     //     console.log(idx);
//     //     if (!!~idx) {
//     //         this.items.splice(idx, 1)
//     //     } else {
//     //         console.log('Not found');
//     //     }
//     // }

//     removeNote(text) {
//         const inArr = this.items.some(item => item.text === text);
//         if (inArr) {
//             const idx = this.items.findIndex(({ text: itemText }) => text === itemText)
//             this.items.splice(idx, 1)
//         } else {
//             console.log('Not found');
//         }
//     }

//     updatePriority(text, newPriority) {
//         const inArr = this.items.some(item => item.text === text);
//         if (inArr) {
//             inArr.priority = newPriority
//         } else {
//             console.log('Not found');
//         }
//     }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя первая запись', priority: Notes.Priority.LOW });
// myNotes.addNote({ text: 'Моя вторая запись', priority: Notes.Priority.HIGHT });
// console.log(myNotes.items);
// // myNotes.removeNote('Моя вторая запись');
// myNotes.removeNote('Моя восьмая запись');
// myNotes.updatePriority('Моя вторая запись', Notes.Priority.NORMAL);


// // 5. Переключатель
// // Напишите класс Toggle, который принимает объект настройки {isOpen: boolean} и объявляет одно свойство on - состояние вкл/выкл(true/false). По умолчанию значения свойства on должно быть false.

// class Toggle{
//     constructor(on) {
//         this.isOpen = on
//     }
// }


// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');
