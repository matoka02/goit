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
//         const lastIndex = this.items.length;
//         this.items.splice(lastIndex, 1, newItem);
//         return this.items;
//     }

//     removeItem(itemToRemove) {
//         // // вариант №1
//         // return this.items.splice(1, 1)

//         // // вариант №2, индекс вычисляется
//         const itemIndex = this.items.indexOf(itemToRemove);
//         this.items.splice(itemIndex, 1);
//         return this.items;
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
// Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и добавь два метода для публичного интерфейса, для чтения и изменения этого свойства.
// - getBrand() - возвращает значение приватного свойства brand.
// - changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.

class Car {
    #brand;
    model;
    price;
    constructor({brand, model, price}) {
        this.#brand = brand;
        this.model = model;
        this.price = price;
    }
    getBrand() {
        return this.#brand;
    }
    changeBrand(newBrand) {
        this.#brand = newBrand;
    }
}
const car1 = new Car({
    brand: "Audi",
    model: "Q3",
    price: 36000
});
const car2 = new Car({
    brand: "BMW",
    model: "X5",
    price: 58900
});
const car3 = new Car({
    brand: "Nissan",
    model: "Murano",
    price: 31700
});
// возвращение значения приватного свойства brand
console.log(car1.getBrand());           // Audi
// замена приватного свойства brand
console.log(car1.changeBrand("Honda"));
console.log(car1.getBrand());           // Honda
console.log(car1);                      // Car {model: 'Q3', price: 36000, #brand: 'Honda'}

// возвращение объектов
console.log(car2);                      // Car {model: 'X5', price: 58900, #brand: 'BMW'}
console.log(car3);                      // Car {model: 'Murano', price: 31700, #brand: 'Nissan'}





