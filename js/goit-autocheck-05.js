"use strict";


// // autocheck-05-1/20
// // Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this в местах обращения к свойствам и методам объекта.

// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],

//     checkPizza(pizzaName) {
//         return this.pizzas.includes(pizzaName);
//         },
  
//     order(pizzaName) {
//         const isPizzaAvailable = this.checkPizza(pizzaName);

//         if (!isPizzaAvailable) {
//             return `Sorry, there is no pizza named «${pizzaName}»`;
//         }

//         return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
// };
// console.log(pizzaPalace.checkPizza("Smoked"));          // true
// console.log(pizzaPalace.order("Smoked"));               // Order accepted, preparing «Smoked» pizza
// console.log(pizzaPalace.order("4Cheese"));              // Sorry, there is no pizza named «4Cheese»


// // autocheck-05-2/20
// // Перед увольнением разработчик сломал исходный код управления аккаунтами пользователей нашего сервиса доставки еды. Выполни рефакторинг методов объекта customer, расставив отсутствующие this при обращении к свойствам объекта.
// // После объявления объекта мы добавили вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],

//     getBalance() {
//         return this.balance;
//     },
//     getDiscount() {
//         return this.discount;
//     },
//     setDiscount(value) {
//         this.discount = value;
//     },
//     getOrders() {
//         return this.orders;
//     },
//     addOrder(cost, order) {
//         this.balance -= cost - cost * this.discount;
//         this.orders.push(order);
//     },

// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


// // autocheck-05-3/20
// // Тестировщики нашли баги в коде сервиса хранения истории заказов еды. Тебе необходимо исправить их, правильно расставив this в методах объекта historyService, чтобы методы начали работать правильно.

// const historyService = {
//     orders: [
//         { email: "jacob@hotmail.com", dish: "Burrito" },
//         { email: "solomon@topmail.net", dish: "Burger" },
//         { email: "artemis@coldmail.net", dish: "Pizza" },
//         { email: "solomon@topmail.net", dish: "Apple pie" },
//         { email: "jacob@hotmail.com", dish: "Taco" },
//     ],
//     // Change code below this line
//     getOrdersLog() {
//         return this.orders
//             .map(order => `email: ${order.email} dish: ${order.dish}`)
//             .join(" - ");
//     },
//     getEmails() {
//         const emails = this.orders.map(order => order.email);
//         const uniqueEmails = new Set(emails);
//         return [...uniqueEmails];
//     },
//     getOrdersByEmail(email) {
//         return this.orders.filter(order => order.email === email);
//     },
//     // Change code above this line
// };

// // строка с перечислением данных всех заказов из свойства orders
// console.log(historyService.getOrdersLog());
// // массив всех уникальных почтовых адресов из свойства orders
// console.log(historyService.getEmails());
// // массив из почтового адреса и блюда, отфильтрованный по почтовому адресу
// console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
// console.log(historyService.getOrdersByEmail("artemis@coldmail.net"));


// // autocheck-05-4/20
// // Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.

// const parent = {
//     name: "Stacey",
//     surname: "Moore",
//     age: 54,
//     heritage: "Irish",
// };

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(child);
// console.log(child.age);
// // свойство parent.heritage выведет только при выключенном "use strict"
// console.log(child.heritage);


// // autocheck-05-5/20
// // Измени код, построив цепочку прототипов так, чтобы объект ancestor был прототипом для parent, а тот в свою очередь был прототипом для child.

// const ancestor = {
//     name: "Paul",
//     age: 83,
//     surname: "Dawson",
//     heritage: "Irish",
// };

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(child);
// // {name: 'Jason', age: 27}
// // age: 27
// // name: "Jason"
    
// // [[Prototype]]: Object
// // age: 54
// // name: "Stacey"
// // surname: "Moore"
    
// // [[Prototype]]:
// // Objectage: 83
// // heritage: "Irish"
// // name: "Paul"
// // surname: "Dawson"
    
// // [[Prototype]]:
// // Object
// // constructor: ƒ Object()
// // hasOwnProperty: ƒ hasOwnProperty()
// // isPrototypeOf: ƒ isPrototypeOf()
// // propertyIsEnumerable: ƒ propertyIsEnumerable()
// // toLocaleString: ƒ toLocaleString()
// // toString: ƒ toString()
// // valueOf: ƒ valueOf()
// // __defineGetter__: ƒ __defineGetter__()
// // __defineSetter__: ƒ __defineSetter__()
// // __lookupGetter__: ƒ __lookupGetter__()
// // __lookupSetter__: ƒ __lookupSetter__()
// // __proto__: (…)
// // get __proto__: ƒ __proto__()
// // set __proto__: ƒ __proto__()

// console.log(child.age);                                  // 27
// // свойство parent.heritage выведет только при выключенном "use strict"
// console.log(child.heritage);                            // Irish
// console.log(child.hasOwnProperty("heritage"));          // false


// // autocheck-05-6/20
// // Используя ключевое слово class, объяви класс Car с пустым телом.

// class Car { };
// console.log(Car);                       // class Car { }


// // autocheck-05-7/20
// // Добавь классу Car метод constructor который принимает три параметра:
// // - brand - марка автомобиля.
// // - model - модель автомобиля.
// // - price - цена автомобиля.
// // Класс Car должен создавать объект с одноимёнными свойствами brand, model и price, значениями которых должны быть переданные аргументы во время её вызова с оператором new.

// class Car {

//     constructor(brand, model, price) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }

// }
// const car1 = new Car("Audi", "Q3", 36000);
// const car2 = new Car("BMW", "X5", 58900);
// const car3 = new Car("Nissan", "Murano", 31700);

// console.log(car1);              // Car {brand: 'Audi', model: 'Q3', price: 36000}
// console.log(car2);
// console.log(car3);


// // autocheck-05-8/20
// // Выполни рефакторинг класса Car так, чтобы он принимал один параметр - объект со свойсвами brand, model и price. Деструктуризируй объект в сигнатуре (подписи) конструктора.

// class Car {

//     constructor({brand, model, price}) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }

// }
// const car1 = new Car({
//     brand: "Audi",
//     model: "Q3",
//     price: 36000
// });
// const car2 = new Car({
//     brand: "BMW",
//     model: "X5",
//     price: 58900
// });
// const car3 = new Car({
//     brand: "Nissan",
//     model: "Murano",
//     price: 31700
// });

// console.log(car1);
// console.log(car2);
// console.log(car3);


// // autocheck-05-9/20
// // Добавь классу Car два метода.
// // - getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
// // - changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.

// class Car {

//     constructor({brand, model, price}) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }

//     getPrice() {
//         return this.price;
//     }

//     changePrice(newPrice) {
//         return this.price = newPrice;
//     }
// }
// const car1 = new Car({
//     brand: "Audi",
//     model: "Q3",
//     price: 36000
// });
// const car2 = new Car({
//     brand: "BMW",
//     model: "X5",
//     price: 58900
// });
// const car3 = new Car({
//     brand: "Nissan",
//     model: "Murano",
//     price: 31700
// });

// console.log(car1);                      // 36000
// console.log(car1.getPrice());           // 36000
// console.log(car1.changePrice(35000));   // 35000
// // после вызова метода параметр price в массиве перезаписывается
// console.log(car1.changePrice(250));     // 250
// console.log(car1);                      // Car {brand: 'Audi', model: 'Q3', price: 250}


// // autocheck-05-10/20
// // Напиши класс Storage, который будет создавать объекты для управления складом товаров. Класс ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.
// // Объяви следующие методы класса:
// // - getItems() - возвращает массив текущих товаров в свойстве items объекта который вызывает этот метод.
// // - addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта который вызывает этот метод.
// // - removeItem(itemToRemove) - принимает товар itemToRemove и удаляет его из массива товаров в свойстве items объекта который вызывает этот метод.
// // Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// class Storage {
//     constructor(items) {
//         this.items = items;
//     }

//     getItems() {
//         return this.items
//     }

//     addItem(newItem) {
//         // // вариант №1
//         // return this.items.splice(3, 0, newItem)

//         // // вариант №2, индекс вычисляется
//         // const lastIndex = this.items.length;
//         // this.items.splice(lastIndex, 1, newItem);
//         // return this.items;

//         // решение в автопроверке
//         this.items.push(newItem);
//     }


//     removeItem(itemToRemove) {
//         // // вариант №1
//         // return this.items.splice(1, 1)

//         // // вариант №2, индекс вычисляется
//         // const itemIndex = this.items.indexOf(itemToRemove);
//         // this.items.splice(itemIndex, 1);
//         // return this.items;
            
//         // решение в автопроверке
//             this.items = this.items.filter((item) => item !== itemToRemove);
//     }
// };

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// // autocheck-05-11/20
// // Напиши класс StringBuilder, который принимает один параметр initialValue - произвольную строку, которая записывается на создаваемый объект в свойство value.
// // Объяви следующие методы класса:
// // - getValue() - возвращает текущее значение свойства value.
// // - padEnd(str) - получает параметр str (строку) и добавляет её в конец значения свойства value объекта который вызывает этот метод.
// // - padStart(str) - получает параметр str (строку) и добавляет её в начало значения свойства value объекта который вызывает этот метод.
// // - padBoth(str) - получает параметр str (строку) и добавляет её в начало и в конец значения свойства value объекта который вызывает этот метод.
// // Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// class StringBuilder {
//     constructor(initialValue) {
//         this.value = initialValue;
//     }

//     getValue() {
//         return this.value;
//     }
//     padEnd(str) {
//         this.value += str;
//     }
//     padStart(str) {
//         this.value = str + this.value;
//     }
//     padBoth(str) {
//         this.padStart(str);
//         this.padEnd(str);
//     }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue());            // "."
// builder.padStart("^");
// console.log(builder.getValue());            // "^."
// builder.padEnd("^");
// console.log(builder.getValue());            // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue());            // "=^.^="


// // autocheck-05-12/20
// // Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и добавь два метода для публичного интерфейса, для чтения и изменения этого свойства.
// // - getBrand() - возвращает значение приватного свойства brand.
// // - changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.

// class Car {
//     #brand;
//     model;
//     price;
//     constructor({brand, model, price}) {
//         this.#brand = brand;
//         this.model = model;
//         this.price = price;
//     }
//     getBrand() {
//         return this.#brand;
//     }
//     changeBrand(newBrand) {
//         this.#brand = newBrand;
//     }
// }
// const car1 = new Car({
//     brand: "Audi",
//     model: "Q3",
//     price: 36000
// });
// const car2 = new Car({
//     brand: "BMW",
//     model: "X5",
//     price: 58900
// });
// const car3 = new Car({
//     brand: "Nissan",
//     model: "Murano",
//     price: 31700
// });
// // возвращение значения приватного свойства brand
// console.log(car1.getBrand());           // Audi
// // замена приватного свойства brand
// console.log(car1.changeBrand("Honda"));
// console.log(car1.getBrand());           // Honda
// console.log(car1);                      // Car {model: 'Q3', price: 36000, #brand: 'Honda'}

// // возвращение объектов
// console.log(car2);                      // Car {model: 'X5', price: 58900, #brand: 'BMW'}
// console.log(car3);                      // Car {model: 'Murano', price: 31700, #brand: 'Nissan'}


// // autocheck-05-13/20
// // Выполни рефакторинг класса Storage, сделав свойство items приватным.
// // Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// class Storage {
//     #items;

//     constructor(items) {
//         this.#items = items;
//     }

//     getItems() {
//         return this.#items
//     }

//     addItem(newItem) {
//         this.#items.push(newItem);
//     }

//     removeItem(itemToRemove) {
//         this.#items = this.#items.filter((item) => item !== itemToRemove);
//     }
// };

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage);            // Storage {#items: Array(3)}
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// // autocheck-05-14/20
// // Выполни рефакторинг класса StringBuilder, сделав свойство value приватным.
// // Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// class StringBuilder {
//     #value;

//     constructor(initialValue) {
//         this.#value = initialValue;
//     }

//     getValue() {
//         return this.#value;
//     }
//     padEnd(str) {
//         this.#value += str;
//     }
//     padStart(str) {
//         this.#value = str + this.#value;
//     }
//     padBoth(str) {
//         this.padStart(str);
//         this.padEnd(str);
//     }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue());            // "."
// builder.padStart("^");
// console.log(builder.getValue());            // "^."
// builder.padEnd("^");
// console.log(builder.getValue());            // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue());            // "=^.^="


// // autocheck-05-15/20
// // Выполни рефакторинг класса Car. Сделай свойства model и price приватными, также как #brand. Стандартизируй публичный интерфейс класса, заменив уже объявленные методы на геттеры и сеттеры brand, model и price для взаимодействия с приватными свойствами.

// class Car {
//     #brand;
//     #model;
//     #price;

//     constructor({ brand, model, price }) {
//         this.#brand = brand;
//         this.#model = model;
//         this.#price = price;
//     }

//     get brand() {
//         return this.#brand;
//     }

//     set brand(newBrand) {
//         this.#brand = newBrand;
//     }

//     get model() {
//         return this.#model;
//     }

//     set model(newModel) {
//         this.#model = newModel;
//     }

//     get price() {
//         return this.#price;
//     }

//     set price(newPrice) {
//         this.#price = newPrice;
//     }
// }
// const car1 = new Car({
//     brand: "Audi",
//     model: "Q3",
//     price: 36000
// });
// const car2 = new Car({
//     brand: "BMW",
//     model: "X5",
//     price: 58900
// });
// const car3 = new Car({
//     brand: "Nissan",
//     model: "Murano",
//     price: 31700
// });

// console.log(Car);
// console.log(car1);                      // Car {#brand: 'Audi', #model: 'Q3', #price: 36000}
// console.log(car2);                      // Car {#brand: 'BMW', #model: 'X5', #price: 58900}
// console.log(car3);                      // Car {#brand: 'Nissan', #model: 'Murano', #price: 31700}


// // autocheck-05-16/20
// // Выполни рефакторинг класса Car. Добавь публичное статическое свойство MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля.
// // Добавь сеттеру price проверку передаваемого значения параметра newPrice. Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше или равно, то перезаписывает цену автомобиля.

// class Car {
//     static MAX_PRICE = 50000;

//     #price;

//     constructor({ price }) {
//         this.#price = price;
//     }

//     get price() {
//         return this.#price;
//     }

//     set price(newPrice) {
//         if (newPrice <= Car.MAX_PRICE) this.#price = newPrice;
//     }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price);                // 35000
// audi.price = 49000;
// console.log(audi.price);                // 49000
// audi.price = 51000;
// console.log(audi.price);                // 49000


// // autocheck-05-17/20
// // Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля. Метод должен сравнить значения параметра price и приватного статического свойства MAX_PRICE.
// // - Если цена автомобиля превышает максимальную, метод должен вернуть строку "Error! Price exceeds the maximum".
// // - В противном случае метод должен вернуть строку "Success! Price is within acceptable limits".
// // Под объявлением класса мы добавили инициализацию экземпляра и вызовы методов, чтобы показать как будет использоваться метод checkPrice(price).

// class Car {
//     static #MAX_PRICE = 50000;

//     static checkPrice(price) {
//         if (price <= Car.#MAX_PRICE) {
//             return 'Success! Price is within acceptable limits';
//         }
//         return 'Error! Price exceeds the maximum';
//     }

//     constructor({ price }) {
//         this.price = price;
//     }
// }
// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


// // autocheck-05-18/20
// // В приложении нужен администратор с возможностью добавлять почты пользователей в чёрный список.
// // - Объяви класс Admin, который наследует от класса User
// // - Добавь классу Admin публичное статическое свойство AccessLevel (уровень доступа), значение которого это объект { BASIC: "basic", SUPERUSER: "superuser" }

// class User {
//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }

// class Admin extends User {
//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser"
//     }
// }

// console.log(Admin);
// console.log(Admin.AccessLevel.BASIC);
// console.log(Admin.AccessLevel.SUPERUSER);


// // autocheck-05-19/20
// // Добавь классу Admin метод constructor, который принимает один параметр - объект настроек с двумя свойствами email и accessLevel. Добавь классу Admin публичное свойство accessLevel, значение которого будет передаваться при вызове конструктора.
// // Чтобы показать как будет использоваться класс Admin мы добавили инициализацию экземпляра под объявлением класса.

// class User {
//     email;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }

// class Admin extends User {

//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",
//     };

//     constructor({ email, accessLevel }) {
//         super(email);
//         this.accessLevel = accessLevel;
//     }
// }

// const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email);               // "mango@mail.com"
// console.log(mango.accessLevel);         // "superuser"


// // autocheck-05-20/20
// // Добавь классу Admin следующие свойства и методы.
// // - Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей. Значение по умолчанию это пустой массив.
// // - Публичный метод blacklist(email) для добавления почты в чёрный список. Метод должен добавлять значение параметра email в массив хранящийся в свойстве blacklistedEmails.
// // - Публичный метод isBlacklisted(email) для проверки почты в чёрном списке. Метод должен проверять наличие значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать true или false.
// // После объявления класса мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// class User {
//     email;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }
// class Admin extends User {

//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",
//     };

//     constructor({ email, accessLevel }) {
//         super(email);
//         this.accessLevel = accessLevel;
//     }

//     blacklistedEmails = [];
    
//     blacklist(email) {
//         this.blacklistedEmails.push(email);
//     }

//     isBlacklisted(email) {
//         return this.blacklistedEmails.includes(email);
//     }
// }

// const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email);                    // "mango@mail.com"
// console.log(mango.accessLevel);              // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails);        // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com"));      // false
// console.log(mango.isBlacklisted("poly@mail.com"));       // true
