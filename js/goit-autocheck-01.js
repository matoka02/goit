"use strict"

// // autocheck-01-01/36
// // Объяви две переменные, productName для названия товара и pricePerItem для хранения цены за штуку. При объявлении присвой переменным следующие характеристики товара:

// // - название - строка "Droid"
// // - цена за штуку - число 2000

// const productName = "Droid";
// console.log(productName);
// const pricePerItem = 2000;
// console.log(pricePerItem);
// console.log(typeof(pricePerItem)); //смотрю, как работает


// //autocheck-01-02/36
// // Имя товара изменили на "Repair droid" и увеличили его цену на 1500 кредитов. Переопредели значения переменных pricePerItem и productName после их объявления.

// // let productName = "Droid";
// let pricePerItem = 2000;

// productName = "Repair droid";
// console.log(productName);
// pricePerItem += 1500;
// console.log(pricePerItem);


//autocheck-01-03/36
// // Объяви следующие переменные используя ключевое слово const или let и присвой им соответствующие значения.

// let topSpeed = 160;
// let distance = 617.54;
// let login = "mango935";
// let isOnline = true;
// let isAdmin = false;
// console.log(topSpeed);              //смотрю, как работает
// console.log(typeof (topSpeed));     //смотрю, как работает
// console.log(typeof (login));        //смотрю, как работает
// console.log(typeof (isAdmin));      //смотрю, как работает


//autocheck-01-04/36
//  //Дополни код, присвоив переменной totalPrice выражение для подсчёта общей суммы заказа. Переменная pricePerItem хранит цену одной единицы товара, а orderedQuantity - количество единиц товара в заказе.

// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = orderedQuantity * pricePerItem;
// console.log(totalPrice);


//autocheck-01-05/36
// //  Объяви перемнную message и запиши в неё сообщение о покупке, строку в формате: "You picked <имя товара>, price per item is <цена товара> credits". Где <имя товара> и <цена товара> это значения переменных productName и pricePerItem. Используй синтаксис шаблонных строк.

// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);


//autocheck-01-06/36
// // Магазин по продаже ремонтных дроидов готов к открытию, осталось написать скрипт для их заказа. Объяви переменные и присвой им соответствующие значения:
// // - pricePerDroid - цена одного дроида, значение 800
// // - orderedQuantity - количество дроидов в заказе, значение 6
// // - deliveryFee - стоимость доставки, значение 50
// // - totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки
// // - message - сообщение о состоянии заказа в формате "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery ${deliveryFee} is included in total price.`;
// console.log(message);

//autocheck-01-07/36
// // Объяви функцию sayHi, внутри которой добавь console.log() со строкой "Hello, this is my first function!". После объявления вызови функцию sayHi.

// function sayHi() {
//     console.log("Hello, this is my first function!");
// }
// sayHi();


//autocheck-01-08/36
// // Функция add должна уметь складывать три числа и выводить результат в консоль. Добавь функции add три параметра a, b и c, которые будут получать значения аргументов при её вызове.
// // Дополни console.log() так, чтобы он логировал строку "Addition result equals <result>", где <result> это сумма переданных чисел.

// function add(a, b, c) {
//     console.log(a + b + c);
// }
// add(15, 27, 10); //52
// add(10, 20, 30); //60
// add(5, 10, 15); //30


//autocheck-01-09/36
// // Дополни код функции add так, чтобы она возвращала результат сложения значений трёх параметров a, b и c.

// function add(a, b, c) {
//     return (a + b + c)
// }
// add(2, 5, 8);

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));


//autocheck-01-10/36
// // Функция makeMessage(name, price) составляет и возвращает сообщение о покупке. Она объявляет два параметра, значения которых будут задаваться во время её вызова.
// // - name - название товара
// // - price - цена товара

// function makeMessage(name, price) {
//     const message = `You picked ${name}, price per item is ${price} credits`;
//     return message;
// };
// makeMessage('Radar', 6150);
// makeMessage('Scanner', 3500);
// makeMessage('Reactor', 8000);
// makeMessage('Engine', 4070);
// console.log(makeMessage('Radar', 6150));    //смотрю, как работает
// console.log(makeMessage('Scanner', 3500));  //смотрю, как работает
// console.log(makeMessage('Reactor', 8000));  //смотрю, как работает
// console.log(makeMessage('Engine', 4070));   //смотрю, как работает


//autocheck-01-11/36
// // Функция calculateTotalPrice считает и возвращает общую сумму покупки. Она принимает два параметра, значения которых будут задаваться во время её вызова.
// // - orderedQuantity - количество единиц товара в заказе;
// // - pricePerItem - цена одной единицы товара.
// // Дополни код функции так, чтобы в переменную totalPrice записывалась общая сумма покупки, результат умножения кол-ва товаров на цену одного.

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//     const totalPrice = orderedQuantity * pricePerItem;
//     return totalPrice;
// };
// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(1, 3500);
// calculateTotalPrice(12, 70);
// console.log(calculateTotalPrice(5, 100));    //смотрю, как работает
// console.log(calculateTotalPrice(8, 60));     //смотрю, как работает
// console.log(calculateTotalPrice(3, 400));    //смотрю, как работает
// console.log(calculateTotalPrice(1, 3500));   //смотрю, как работает
// console.log(calculateTotalPrice(12, 70));    //смотрю, как работает


//autocheck-01-12/36
// // Функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) составляет и возвращает сообщение о покупке ремонтных дроидов. Она объявляет три параметра, значения которых будут задаваться во время её вызова.

// // - orderedQuantity - количество дроидов в заказе
// // - pricePerDroid - цена одного дроида
// // - deliveryFee - стоимость доставки
// // Дополни код функции так, чтобы она возвращала сообщение о заказе в формате "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.". Не забудь о цене доставки при вычислениях общей стоимости.

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     const totalPrice = orderedQuantity * pricePerDroid + deliveryFee
//     const message = `You ordered droids worth ${totalPrice} credits. Delivery ${deliveryFee} is included in total price.`;
//     return message;
// }
// makeOrderMessage(2, 100, 50);
// makeOrderMessage(4, 300, 100);
// makeOrderMessage(10, 70, 200);
// console.log(makeOrderMessage(2, 100, 50));     //смотрю, как работает
// console.log(makeOrderMessage(4, 300, 100));    //смотрю, как работает
// console.log(makeOrderMessage(10, 70, 200));    //смотрю, как работает


//autocheck-01-13/36
// // Функция isAdult объявляет один параметр age (возраст), значение которого будет задаваться во время её вызова. Присвой переменной passed выражение проверки возраста пользователя на совершеннолетие. Человек считается совершеннолетним в возрасте 18 лет и старше.

// function isAdult(age) {
//     const passed = ((age) => 18);
//     return passed;
// }


//autocheck-01-14/36
// // Функция isValidPassword(password) проверяет равенство сохранённого и введённого паролей и возвращает результат проверки - буль true или false. Переменная SAVED_PASSWORD хранит значение ранее сохраненного пароля. Введённый пароль передаётся в параметр password.
// // Присвой переменной isMatch выражение проверки равенства введённого и сохранённого ранее паролей. Результатом выражения проверки должно быть true, если значения совпадают, и false, если нет.

// function isValidPassword(password) {
//     const SAVED_PASSWORD = 'mangodab3st';           //false
//     const SAVED_PASSWORD = 'kiwirul3z';             //false
//     const SAVED_PASSWORD = 'jqueryismyjam';         //true
//     const isMatch = SAVED_PASSWORD === password;
//     return isMatch;
// }


//autocheck-01-15/36
// // Добавь выражение проверки совершеннолетия пользователя, значения параметра age, в условие для инструкции if.
// // Если пользователь совершеннолетний, должен выполняться блок if и в переменную message записывается строка "You are an adult".
// // В противном случае должен выполняться блок else и записывается строка "You are a minor".

// function checkAge(age) {
//     let message;

//     if (age >= 18) {
//         message = 'You are an adult';
//     } else {
//         message = 'You are a minor';
//     }

//     return message;
// }


//autocheck-01-16/36
// // Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова:
// // - available - общее количество товаров на складе
// // - ordered - единиц товара в заказе
// // Используя ветвления дополни код функции так, что:
// //  - Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается строка "Not enough goods in stock!".
// //  - В противном случае записывается строка "Order is processed, our manager will contact you.".

// function checkStorage(available, ordered) {
//     let message;

//     if (available >= ordered) {
//         message = 'Order is processed, our manager will contact you.';
//     } else {
//         message = 'Not enough goods in stock!';
//     }

//     console.log(message);

//     return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

//autocheck-01-17/36
// // Замени выражения со стандартными математеческими операторами на комбинированный оператор присвоения с добавлением, вычитанием, умножением и делением.

// let a = 7;
// let b = 6;
// let c = 45;
// let d = 2;

// console.log(a, b, c, d);        //посмотреть, как работает

// a += 2;     //9
// b -= 4;     //2
// c *= 3;     //135
// d /= 10;    //0.2

// console.log (a, b, c, d);       //посмотреть, как работает


//autocheck-01-18/36
// // Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.
// // Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:
// // - pricePerDroid - цена одного дроида
// // - orderedQuantity - кол-во заказанных дроидов
// // - customerCredits - сумма средств на счету клиента
// // Дополни её следующим функционалом:
// // - Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
// // - Добавь проверку сможет ли клиент оплатить заказ:
// //  -- если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку "Insufficient funds!";
// //  -- в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: "You ordered <число> droids, you have <число> credits left".

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;

//     const totalPrice = pricePerDroid * orderedQuantity;

//     if (totalPrice >= customerCredits) {
//         message = `Insufficient funds!`;
//     } else {
//         message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//     }

//     console.log(message);

//     return message;
// }
// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);


//autocheck-01-19/36
// // Функция checkPassword(password) получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.
// // - Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
// // - Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
// // - Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка "Access denied, wrong password!".

// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;

//     if (password === null) {
//         message = 'Canceled by user!';
//     } else if (password === 'jqueryismyjam') {
//         message = 'Welcome!';
//     } else {
//         message = 'Access denied, wrong password!';
//     }

//     console.log(message);

//     return message;
// }
// checkPassword("mangohackzor");
// checkPassword(null);
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");


//autocheck-01-20/36
// // Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова.
// // - available - доступное количество товаров на складе
// // - ordered - единиц товара в заказе
// // Используя ветвления дополни код функции так, что:
// // - Если в заказе еще нет товаров, то есть значение параметра ordered равно 0, в переменную message присваивается строка "There are no products in the order!".
// // - Eсли товаров в заказе больше чем доступно товаров на складе, то в переменную message присваивается строка "Your order is too large, there are not enough items in stock!".
// // - В противном случае в переменную message присваевается строка "The order is accepted, our manager will contact you".

// function checkStorage(available, ordered) {
//     let message;

//     if (ordered === 0) {
//         message = `There are no products in the order!`;
//     } else if (ordered >= available) {
//         message = `Your order is too large, there are not enough items in stock!`;
//     } else {
//         message = `The order is accepted, our manager will contact you`;
//     }

//     console.log(message);

//     return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);


//autocheck-01-21/36
// // Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток. Она объявляет три параметра, значения которых будут задаваться во время её вызова:
// // - number - число, вхождение которого проверяется
// // - start - начало числового промежутка
// // - end - конец числового промежутка
// // Присвой переменной isInRange выражение проверки вхождения number в числовой промеждуток от start до end. То есть число должно быть больше либо равно start и меньше либо равно end. Результатом выражения проверки будет буль true или false.

// function isNumberInRange(start, end, number) {
//     const isInRange = (number >= start && number <= end);

//     console.log(isInRange);

//     return isInRange;
// }
// isNumberInRange(10, 30, 17);    //true
// isNumberInRange(10, 30, 5);     //false
// isNumberInRange(20, 50, 24);    //true
// isNumberInRange(20, 50, 76);    //false


//autocheck-01-22/36
// // Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить доступ к контенту. Проверка происходит по типу подписки. Получить доступ могут только пользователи с подпиской pro или vip.
// // Присвой переменной canAccessContent выражение проверки подписки. Если значение параметра subType равно строкам "pro" или "vip", пользователь получит доступ. Результатом выражения проверки будет буль true или false.

// function checkIfCanAccessContent(subType) {
//     const canAccessContent = (subType === 'pro' || subType === 'vip');

//     console.log(canAccessContent);

//     return canAccessContent;
// }
// checkIfCanAccessContent("pro");         //true
// checkIfCanAccessContent("starter");     //false
// checkIfCanAccessContent("vip");         //true
// checkIfCanAccessContent("free");        //false


//autocheck-01-23/36
// // Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток. То есть число должно быть меньше либо равно start и больше либо равно end. Результатом выражения проверки будет буль true или false.
// // Она объявляет три параметра, значения которых будут задаваться во время её вызова:
// // - number - число, не вхождение которого проверяется
// // - start - начало числового промежутка
// // - end - конец числового промежутка
// // Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор !.


// function isNumberInRange(start, end, number) {
//     const isInRange = (number >= start && number <= end);
//     const isNotInRange = !isInRange;

//     console.log(isInRange);

//     return isInRange;
// }
// isNumberInRange(10, 30, 17);    //true
// isNumberInRange(10, 30, 5);     //false
// isNumberInRange(20, 50, 24);    //true
// isNumberInRange(20, 50, 76);    //false

// // В задаче були наоборот, т.к. использовалось значение isNumberNotInRange

//autocheck-01-24/36
// // Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы потраченных денег (параметр totalSpent) в магазине за всё время (партнёрская программа). Скидка записывается в переменную discount и возвращается из функции как результат её работы.
// // Используя ветвления и логические операторы, дополни код функции.
// // - Если потрачено от 50000 ( включительно ) или больше кредитов - скидка 10% (золотой партнёр)
// // - Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
// // - Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
// // - Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)
// // Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.

// function getDiscount(totalSpent) {
//     let discount;
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.10;

//     if (totalSpent >= 50000) {
//         discount = GOLD_DISCOUNT;
//     } else if (totalSpent >= 20000 && totalSpent < 50000) {
//         discount = SILVER_DISCOUNT;
//     } else if (totalSpent >= 5000 && totalSpent < 20000) {
//         discount = BRONZE_DISCOUNT;
//     } else {
//         discount = BASE_DISCOUNT;
//     }

//     console.log(discount);

//     return discount;
// }
// getDiscount(137000);
// getDiscount(46900);
// getDiscount(8250);
// getDiscount(1300);
// getDiscount(5000);
// getDiscount(20000);
// getDiscount(50000);


//autocheck-01-25/36
// // Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.

// function checkStorage(available, ordered) {
//     let message;

//     message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you"
    
//     console.log(message);

//     return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

//autocheck-01-26/36
// // Функция checkPassword(password) сравнивает переданный ей пароль (параметр password) с сохранённым паролем администратора (константа ADMIN_PASSWORD) и возвращает строку с сообщением о результате.
// // Используя тернарный оператор дополни функцию так, что:
// // - Если значения password и ADMIN_PASSWORD совпадают, присвой переменной message строку "Access is allowed".
// // - В противном случае, присвой message строку "Access denied, wrong password!".

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;

//     message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";

//     console.log(message);

//     return message;
// }
// checkPassword("jqueryismyjam");
// checkPassword("angul4r1sl1f3");
// checkPassword("r3actsux");


//autocheck-01-27/36
// // Функция getSubscriptionPrice(type) получает строку с типом подписки пользователя (параметр type), проверяет её на совпадение с тремя возможными типами ежемесячной подписки и возвращает цену хранящуюся в переменной price.
// // Если значение параметра type это строка:
// // - "starter" - цена подписки 0 кредитов.
// // - "professional" - цена подписки 20 кредитов.
// // - "organization" - цена подписки 50 кредитов.
// // Изначально в теле функции была инструкция if...else, которая выглядела вот так.

// // if (type === "starter") {
// //   price = 0;
// // } else if (type === "professional") {
// //   price = 20;
// // } else if (type === "organization") {
// //   price = 50;
// // }
// // После рефакторинга инструкция if..else была заменена на switch. Дополни код инструкции switch, чтобы функция работала правильно.

// function getSubscriptionPrice(type) {
//     let price;

//     switch (type) {
//         case "starter":
//             price = 0;
//             break;
//         case "professional":
//             price = 20;
//             break;
//         case "organization":
//             price = 50;
//             break;
//         default:         // в этой задаче необязательная команда
//             break;
//     }

//     console.log(price);

//     return price;
// }
// getSubscriptionPrice("professional");
// getSubscriptionPrice("organization");
// getSubscriptionPrice("starter");


//autocheck-01-28/36
// // Функция checkPassword(password) получает пароль в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.
// // Если значение параметра password:
// // - равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
// // - совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
// // - не удовлетворяет ни одному из предыдущих условий, в переменную message записывается строка "Access denied, wrong password!".
// // Проведи рефакторинг кода, заменив инструкцию if..else на switch, и не забудь о блоке default (аналог else).

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;

//     switch (password) {
//         case null:
//             message = "Canceled by user!";
//             break;
    
//         case ADMIN_PASSWORD:
//             message = "Welcome!";
//             break;
            
//         default:
//             message = "Access denied, wrong password!";
//             break;
//     }

//     console.log(message);

//     return message;
// }
// checkPassword("mangohackzor");
// checkPassword(null);
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");


//autocheck-01-29/36
// // Функция getShippingCost(country) должна проверять возможность доставки товара в страну пользователя (параметр country) и возвращать сообщение о результате хранящееся в переменной message. Обязательно используй инструкцию switch.
// // Формат возвращаемой строки "Shipping to <country> will cost <price> credits", где вместо <country> и <price> необходимо подставить соотвествующие значения.
// // Список стран и стоимость доставки:
// // - China - 100 кредитов
// // - Chile - 250 кредитов
// // - Australia - 170 кредитов
// // - Jamaica - 120 кредитов
// // Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, то функция должна вернуть строку "Sorry, there is no delivery to your country"

// function getShippingCost(country) {
//     let message;

//     switch (country) {
//         case "China":
//             message = `Shipping to ${country} will cost 100 credits`;
//             break;
    
//         case "Chile":
//             message = `Shipping to ${country} will cost 250 credits`;
//             break;
    
//         case "Australia":
//             message = `Shipping to ${country} will cost 170 credits`;
//             break;
    
//         case "Jamaica":
//             message = `Shipping to ${country} will cost 120 credits`;
//             break;
    
//         default:
//             message = `Sorry, there is no delivery to your country`;
//             break;
//     }

//     console.log(message);

//     return message;
// }
// getShippingCost("Australia");
// getShippingCost("Germany");
// getShippingCost("China");
// getShippingCost("Chile");
// getShippingCost("Jamaica");
// getShippingCost("Sweden");


//autocheck-01-30/36
// // Функция getNameLength(name) принимает имя (параметр name) и возвращает строку, в которой указана его длина. Дополни шаблонную строку в переменной message длиной строки из параметра name.

// function getNameLength(name) {
    
//     const message = `Name ${name} is ${name.length} characters long`;

//     console.log(message);

//     return message;
// }
// getNameLength("Poly");
// getNameLength("Harambe");
// getNameLength("Billy");
// getNameLength("Joe");


//autocheck-01-31/36
// // Дополни код присвоив объявленным переменным выражения обращения к соответствующим элементам или свойствам строки в переменной course.
// // - courseTopicLength - длина строки.
// // - firstElement - первый символ строки.
// // - lastElement - последний символ строки.

// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length-1];

// console.log(courseTopicLength);  //21
// console.log(firstElement);       //J
// console.log(lastElement);        //s


//autocheck-01-32/36
// // Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова:
// // - string - оригинальная строка
// // - length - количество символов с начала строки для подстроки
// // Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.

// function getSubstring(string, length) {
//     const substring = string.slice(0, length);

//     console.log(substring);

//     return substring;
// }
// getSubstring("Hello world", 3);
// getSubstring("Hello world", 6);
// getSubstring("Hello world", 8);
// getSubstring("Hello world", 11);
// getSubstring("Hello world", 0);


//autocheck-01-33/36
// Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.
// Дополни код функции так, что если длина строки:
// - не превышает maxLength, функция возвращает её в исходном виде.
// - больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие "...", после чего возвращает укороченную версию.

// function formatMessage(message, maxLength) {
//     let result;

//     // if (message <= maxLength) {
//     //     result = message;
//     // } else {
//     //     result = `&{message.slice(0, maxLength)} ...`;
//     // }

//     result = message.length <=  maxLength ? message : `${message.slice(0, maxLength)} ...`;

//     console.log(result);

//     return result;
// }
// formatMessage(`Curabitur ligula sapien`, 16);
// formatMessage(`Curabitur ligula sapien`, 23);
// formatMessage(`Vestibulum facilisis purus nec`, 20);
// formatMessage(`Vestibulum facilisis purus nec`, 30);
// formatMessage(`Nunc sed turpis a felis in nunc fringilla`, 15);
// formatMessage(`Nunc sed turpis a felis in nunc fringilla`, 41);


//autocheck-01-34/36
// // Функция normalizeInput(input) принимает строку (параметр input) и возвращает такую же строку, но в нижнем регистре. Присвой переменной normalizedInput выражение создания строки в нижнем регистре из параметра input.

// function normalizeInput(input) {
//     const normalizedInput = input.toLowerCase();

//     console.log(normalizedInput);

//     return normalizedInput;
// }
// normalizeInput("Hello world");
// normalizeInput("This ISN'T SpaM");
// normalizeInput("Big SALE");


//autocheck-01-35/36
// // Функция checkForName(fullname, name) принимает два параметра и возвращает буль true или false - результат проверки вхождения подстроки name в строку fullname.
// // - fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
// // - name - имя для проверки вхождения в полное имя.
// // Присвой переменной result выражение проверки вхождения имени (параметр name), в полное имя (параметр fullname). Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.

// function checkForName(fullname, name) {
//     const result = fullname.includes(name);

//     console.log(result);

//     return result;
// }
// checkForName("Egor Kolbasov", "Egor");
// checkForName("Egor Kolbasov", "egor");
// checkForName("Egor Kolbasov", "egOr");
// checkForName("Egor Kolbasov", "Zhenya");
// checkForName("Vadim Nekrasov", "Vadim");
// checkForName("Vadim Nekrasov", "vadim");
// checkForName("Vadim Nekrasov", "Dima");


//autocheck-01-36/36
// // Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещенных слов spam и sale, и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.
// // - Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
// // - Если в строке нет запрещенных слов, функция возвращает буль false.

// function checkForSpam(message) {
//     let result;

//     result = message.includes('spam') || message.includes('sale');

//     console.log(result);

//     return result;
// }
// checkForSpam("Latest technology news");                       //false
// checkForSpam("JavaScript weekly newsletter");                 //false
// checkForSpam("Get best sale offers now!");                    //true
// checkForSpam("Amazing SalE, only tonight!");                  //false
// checkForSpam("Trust me, this is not a spam message");         //true
// checkForSpam("Get rid of sPaM emails. Our book in on sale!"); //true
// checkForSpam("[SPAM] How to earn fast money?");               //false
