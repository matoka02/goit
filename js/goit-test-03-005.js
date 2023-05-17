// "use strict";

// const userA = {
//     username: "Mango",
//     age: 20,
// };
// const userB = userA;
// userB.age = 30;
// console.log(userA, userB);                  //30, 30

// // Операции с объектами
// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true,
//     values: true,
// };
// // user.mood = "happy";                           //добавление ключа, вариант №1
// user['mood'] = "happy";                           //добавление ключа, вариант №2
// // console.log(user);
// console.log(user['mood']);

// user.hobby = 'skydiving';
// console.log(user);

// user['premium'] = false;
// console.log(user['premium']);

// const arr = Object.keys(user);
// for (const key of arr) {
//     console.log(`${key} - ${user[key]}`);
// };
// console.log(arr);                               // получение ключей


// // Работа со значениями объекта

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// const test = Object.create(salaries);
// test.Kate = 140;
// console.log(test);

// function getResult(obj) {

//     // // работает, только если значения в объекте собственные (заданы только в {})
//     // const values = Object.values(obj);
//     // let sum = 0;
//     // for (const value of values) {
//     //     sum += value;
//     // }
//     // console.log(sum);
//     // return sum;

//     // // работает, когда значения в объекте и присвоенные (добавлены после {}), и собственные
//     // let sum = 0;
//     // for (const key in obj) {
//     //     sum += obj[key];
//     //     console.log(obj[key]);
//     // };
//     // return sum;

//     // // проверка, какие переменные в объекте, - собственные или унаследованные/присвоенные
//     // const values = Object.values(obj);
//     // console.log(values);
//     // let sum = 0;
//     // for (const key in obj) {
//     //     // console.log('Все', key);
//     //     if (obj.hasOwnProperty(key)) {
//     //     console.log('Унаследованные', key);
//     //     }
//     //     if (!obj.hasOwnProperty(key)) {
//     //     console.log('Не собственные', key);
//     //     }
//     //     sum += obj[key];
//     // };
//     // return sum;
// };
// console.log(getResult(salaries));       //390
// console.log(getResult(test));           //530


// // Массивы объектов

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

// function calcTotalPrice(stones, stoneName) {
//     // console.log(stones, stoneName);              //выявлен массив
//     for (const stone of stones) {                   //перебор массива
//         if (stone.name === stoneName) {             //сравнение значения объекта
//             return stone.price * stone.quantity;    //вычисление, если совпало
//         };
//     };
//     return null;
// }
// console.log(calcTotalPrice(stones, 'Сапфир'));
// console.log(calcTotalPrice(stones, 'Ртуть'));


// const user = {
//     name: 'Anastasiia',
//     sayHello() {
//         console.log(`Hello, I am ${this.name}`);
//     }
// }
// user.sayHello()


// // Движения по банковскому счету
// // здесь this  обращается к account
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };

// const account = {
//     // текущий баланс счета
//     balance: 0,

//     // история транзакций
//     transactions: [
//         {amount: 1000, id: 1683662722373, type: "deposit"}   // прописываем содержимое для выполнения метода 5
//     ],

//     // 1. метод создает и возвращает объект транзакции
//     // принимает сумму и тип транзакции
//     createTransaction(amount, type) {
//         const transaction = {
//             amount,
//             type,
//             id: Date.now(),                 //дата в миллисекундах с 01.01.1970
//         }
//         return transaction;
//     },

//     // 2. метод, который отвечает за добавление суммы к балансу
//     // принимает сумму транзакции
//     // вызывает createTransaction для создания объектов транзакции
//     // после чего добавляет его в историю транзакций
//     deposit(amount) {
//         const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//         // console.log(this);
//         this.transactions.push(transaction);
//         this.balance += amount;
//     },

//     // 3. метод, который отвечает за сняте суммы с баланса
//     // принимает сумму транзакции
//     // вызывает createTransaction для создания объектов транзакции
//     // после чего добавляет его в историю транзакций
    
//     // если amount больше текущего баланса, выводит сообщение
//     // о том, что снятие невозможно
//     withdraw(amount) {
//         if (this.balance < amount) {
//             console.log('Недостаточно средств!');
//             return;
//         }

//         const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//         this.transactions.push(transaction);
//         this.balance -= amount;
//     },
    
//     // 4. метод возвращает текущий баланс
//     getBalance() {
//         alert(this.balance);
//     },

//     // 5. метод ищет и возвращает обїект транзакции по id
//     getTransactionDetails(id) {
//         for (const transaction of this.transactions) {
//             console.log();
//             if (transaction.id === id) {
//                 console.log(transaction);
//             };
//         };
//     },

//     // 6. метод возвращает кол-во средств
//     // определенного типа транзакций из всей истории транзакций

//     getTransactionTotal(type) {
//         let total = 0;
//         for (const transaction of this.transactions) {
//             // console.log(transaction);                   // покажет все типы транзакций
//             if (transaction.type === type) {
//                 // console.log(transaction);               // покажет транзакции нужного типа
//                 total+=transaction.amount;
//             };
//         };
//         return total;
//     },


    
// };
// // account.createTransaction(1000, Transaction.DEPOSIT);        // 1. создана транзакция, тип тразакции - депозит
// // account.deposit(1000, Transaction.DEPOSIT);                  // 2. +1000, тип тразакции - депозит
// account.deposit(1000);                                       // 2. баланс стал 1000
// account.deposit(1000);                                       // 6. пополняем
// account.deposit(1000);                                       // 6. пополняем
// account.deposit(1000);                                       // 6. пополняем
// account.deposit(1000);                                       // 6. пополняем
// account.deposit(1000);                                       // 6. пополняем
// account.withdraw(2000);                                      // 6. списываем
// account.withdraw(1000);                                      // 6. списываем
// // account.getBalance();                                           // 4. всплывет окно с балансом 1000
// // account.withdraw(2000);                                      // 3. средств не хватает
// // account.withdraw(950);                                          // 3. -950
// setTimeout(() => {                                              // 5. создана задержка выполнения
//     // account.withdraw(950);

// }, 2000);
// // console.log(account);                                        // объект после всех операций
// // account.getTransactionDetails(1683662722373);                   // 5. ищет
// // account.getTransactionTotal(Transaction.WITHDRAW);              // 6.
// console.log(account.getTransactionTotal(Transaction.WITHDRAW)); // 6. итого списано 3000
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));  // 6. итого пополнено 7000


// Метод Object.enteries(obj) возвращает массив с собственными свойствами

// // Новый объект ссылается на старый
// // Но если большая вложенность объектов, то полное копирование требует методов рекурсии
// const TransactionX = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };

// function foo(obj) {
//     const newObj = Object.assign(obj);          //создан новый объект
//     obj.DEPOSIT = 'blablabla',                  //в новом заменено значение ключа
//     console.log(newObj);
// }
// foo(TransactionX);
// console.log('Transaction', TransactionX);       //выводим новый объект

// // Удаление ключа в объекте
// const TransactionR = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };
// console.log('До', TransactionR);
// delete TransactionR.DEPOSIT;
// console.log('После', TransactionR);


// <!-- Лекция 22.02.2023 -->

// Перебор ключей и значений
// const user = {
//     name: "Artem",
//     age: 28,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         reactNative: false,
//     },
// };

// for (const key in user) {
//     // // получение списка ключей
//     // console.log(key);

//     // // получение массива ключ:значение
//     // console.log(user);

//     // // получение значений ключей
//     // console.log(user.key);                  //undefined, т.к. ищет ключ с именем key
//     // console.log(user[key]);
// };

// for (const key of user) {
//     console.log(key);                          // не работает перебор, требует доп.решений
// }

// // Добавление и удаление ключей
// const value1 = 1;
// const value2 = 2;
// const test1 = 3;
// const test2 = 43;
// const user = {
//     name: "Artem",
//     age: 28,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         reactNative: false,
//     },
//     [value1 + value2]: "some value",            // но к этому ключу не обратиться
//     result: test1+test2,
// };

// // user.age = 29;
// // user.age += 1;                                //переопределено значение
// // console.log(user.age);

// // user.city = "Kyiv";                           //добавление нового ключа и значения
// // console.log(user);

// // delete user.city;                             //удаление ключа, только по одному
// // console.log(user);

// // Object.freeze(user)                                 //заморозка массива, невозможно дальше его изменить
// // user.age += 20;
// // console.log(user);                                  //Uncaught TypeError: Cannot assign to read only property 'age' of object '#<Object>'


// // Собственные и присвоенные значения
// const user = {
//     name: "Artem",
//     age: 28,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         reactNative: false,
//     },
// };
// // Object.freeze(user);                                //выдает ошибку с режимом "use strict"

// const user2 = Object.create(user);
// user2.age = 33;
// // console.log(user.age);
// // console.log(user2.age);

// for (const key in user2) {
//         if (user2.hasOwnProperty(key)) {
//         console.log('Own', user2[key]);
//     } else {
//         console.log('All', user2[key]);
//     };
// };


// // Определение значения ключей
// const user = {
//     score: 0,
// };

// // есть ли ключ и он собственный
// if (user.hasOwnProperty(`score`)) {
//     console.log(`yes`);                     //yes
//     } else {
//         console.log(`no`);
// };

// // есть ли ключ вообще
// if (`score` in user) {
//     console.log(`yes`);                     //yes
//     } else {
//         console.log(`no`);
    
// }

// // неудачный пример
// if (user.score) {
//     console.log(`yes`);
// } else {
//     console.log(`no`);                      //no
// };


// // Метод объекта и THIS

// const user = {
//     name: 'Artem',
//     age: 28,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         reactNative: false,
//     },
//     sayHello() {
//         console.log(`My name is ${this.name}`);
//     },                                          //это функция или метод объекта
//     iKnow() {
//         // // метод OBJECT.ENTERIES
//         // const keys = Object.keys(this.languages);
//         // const values = Object.values(this.languages);
//         // const entries = Object.entries(this.languages);
//         // console.log(keys);
//         // console.log(values);
//         // console.log(entries);                   //2-уровнеый массив, где вложенный уровень - массив ключа и значения

//         // // метод OBJECT.VALUES
//         // const keys = Object.keys(this.languages);
//         // const values = Object.values(this.languages);
//         // console.log(keys);
//         // console.log(values);                    //значения языков


//         // // метод OBJECT.KEYS
//         // const keys = Object.keys(this.languages);
//         // for (const key of keys) {
//         //     if (this.languages[key]) {
//         //         console.log(key);               //js, т.к. true
//         //     }
//         //     console.log(this.languages[key]);
//         // };
//         //     console.log(keys);                      //массив языков

        
//         // // метод FOR...IN
//         // for (const key in this.languages) {
//         //     if (this.languages[key]) {
//         //         console.log(key);               //js, т.к. true
//         //     };
//         // };
//     },
// };

// const user2 = Object.create(user);
// user2.age = 100;
// console.log(user2);
// user2.sayHello();
// user.sayHello();
// user.iKnow();

// Добавление полей

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };

// // user.skills = {
// //     run: true,
// // }
// user.mood = 'happy';
// user.hobby = 'skydiving';
// // user['premium'] = false;                 //обращение к ключу в квадратных скобках [] должно быть в кавычках - это аналогично записи 2 строк ниже
// const key = 'premium';
// user[key] = false;
// console.log(user);

// // for (const key in user) {
// //     console.log(key);                       //выведет 5 ключей
// //     console.log(user[key]);                 //выведет 5 значений
// // }

// const keys = Object.keys(user);
// console.log(keys);                          //выведет массив из 5 ключей
// for (const key of keys) {
//     console.log(user[key]);                 //выведет массив из 5 значений
// };


// // Метод OBJECT.VALUES()
// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// let sum = 0;

// // использование OBJECT.VALUES()
// const values = Object.values(salaries);
// console.log(values);                                //выведет массив значений
// for (const value of values) {
//     // console.log(value);                             //выведет 3 значения
//     sum += value;
// };
// console.log(sum);                                   //выведет сумму 390

// // использование FOR...IN
// for (const key in salaries) {
//     // console.log(salaries[key]);                //выведет 3 значения
//     sum += salaries[key];

// };
// console.log(sum);                               //выведет сумму 390


// Массивы объектов

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
// function calcTotalPrice(stones, stoneName) {
//     let result = 0;
//     for (const stone of stones) {
//         // console.log(stones);                //выведет массив
//         if (stone.name === stoneName) {
//             result = stone.price * stone.quantity
//         }
//     };
//     return result;
// };
// calcTotalPrice(stones, 'Сапфир');
// console.log(calcTotalPrice(stones, 'Сапфир'));  //2800

// Оптимизированный код
// function calcTotalPrice(stones, stoneName) {
//     for (const stone of stones) {
//         if (stone.name === stoneName) {
//             return stone.price * stone.quantity;
//         };
//         console.log(stone.name);
//     };
//     return 'Empty';
// };
// console.log(calcTotalPrice(stones, 'Сапфир'));


// // Движения по банковскому счету
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };
// Object.freeze(Transaction);
// // Transaction.DEPOSIT = 'sssssssss';
// // console.log(Transaction);


// const account = {
//     // текущий баланс счета
//     balance: 0,

//     // история транзакций
//     transactions: [{ amount: 145, id: 16, type: 'deposit' },],

//     // 1. метод создает и возвращает объект транзакции
//     // принимает сумму и тип транзакции
//     createTransaction(amount, type) {
//         return {
//             id: Date.now(),
//             amount,
//             type,
//         }
//     },

//     // 2. метод, отвечающий за добавление суммы к балансу
//     // принимает сумму транзакции
//     // вызывает createTransaction для создания объекта тразакции
//     // после чего добавляет его к истории транзакции
//     deposit(amount) {
//         if (amount <= 0) {
//             return 'Error'
//         }
//         const item = this.createTransaction(amount, Transaction.DEPOSIT)
//         // console.log(item);
//         this.balance += amount;
//         this.transactions.push(item);
//     },

//     // 3. метод, который отвечает за снятие суммы с баланса
//     // принимает сумму транзакции
//     // вызывает createTransaction для создания объекта тразакции
//     // после чего добавляет его к истории транзакции
//     // если amount больше текущего баланса, выводит сообщение о том, что снятие невозможно
//     withdraw(amount) {
//         if (amount > this.balance || amount <= 0) {
//             return 'Недостаточно средств'
//         };

//         const item = this.createTransaction(amount, Transaction.WITHDRAW)
//         // console.log(item);
//         this.transactions.push(item);
//         this.balance -= amount;
//     },

//     // 4. метод возвращает текущий баланс
//     getBalance() {
//         return this.balance
//     },

//     // 5. метод ищет и возвращает объект транзкции по id
//     getTransactionDetails(id) {
//         for (const transaction of this.transactions) {
//             if (transaction.id === id) {
//                 return transaction
//             }
//         }
//         return 'Empty';
//     },
    
//     // 6. метод возвращает количество средств
//     // определенного типа из всей истории транзакций
//     getTransactionTotal(type) {
//         let sum = 0;
//         for (const transaction of this.transactions) {
//             if (transaction.type === type) {
//                 sum += transaction.amount
//             }
//         };

//         return sum;
//     },


// };
// console.log(account.createTransaction(1000, 'deposit'));        // 1.

// console.log(account.deposit(0));                                 // 2.
// account.deposit(1);                                              // 2.
// account.deposit(1231);                                           // 2.
// account.deposit(1431);                                           // 2.
// console.log(account);                                            // 2.

// account.deposit(1);                                              // 3.
// account.deposit(1231);                                           // 3.
// account.deposit(1431);                                           // 3.
// console.log(account.withdraw(123));                              // 3.
// console.log(account);                                            // 3. 2540

// account.deposit(1);                                              // 4.
// account.deposit(1231);                                           // 4.
// account.deposit(1431);                                           // 4.
// console.log(account.withdraw(123));                              // 4. 
// console.log(account.getBalance());                               // 4. 2540

// console.log(account.getTransactionDetails(16));                  // 5.

// console.log(account);                                            // 6.
// account.deposit(1);                                              // 6.
// account.deposit(1231);                                           // 6.
// account.deposit(1431);                                           // 6.
// account.withdraw(123);                                           // 6. 
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));   // 6. 2808
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));  // 6. 123