"use strict";

// <!-- Лекция 28.09.2022 -->


// // Массив cars

const cars = [
        {
    make: 'Honda',
    price: 24045,
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    onSale: true,                            
    },
        {
    make: 'Honda',
    price: 22455,
    model: 'accord',
    type: 'sedan',
    amount: 2,
    onSale: true,                            
    },
        {
    make: 'Honda',
    price: 22455,
    model: 'CR-V',
    type: 'Accord',
    amount: 2,
    onSale: true,                            
    },
        {
    make: 'Mazda',
    price: 24195,
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    onSale: false,                            
    },
        {
    make: 'Mazda',
    price: 31520,
    model: 'CX-6',
    type: 'suv',
    amount: 7,
    onSale: true,                            
    },
        {
    make: 'Toyota',
    price: 34210,
    model: '4Ranner',
    type: 'suv',
    amount: 19,
    onSale: false,                            
    },
        {
    make: 'Toyota',
    price: 45560,
    model: 'Seguonia',
    type: 'suv',
    amount: 16,
    onSale: false,                            
    },
        {
    make: 'Toyota',
    price: 24320,
    model: 'Tacoma',
    type: 'track',
    amount: 4,
    onSale: true,                            
    },
        {
    make: 'Ford',
    price: 27110,
    model: 'F-150',
    type: 'suv',
    amount: 11,
    onSale: true,                            
    },
        {
    make: 'Ford',
    price: 22120,
    model: 'Fusion',
    type: 'sedan',
    amount: 6,
    onSale: true,                            
    },
        {
    make: 'Ford',
    price: 27110,
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    onSale: false,                            
    },
];
// массив 11 объектов
console.log(cars);


// // <!-- Метод map -->

// // 1. Поиск моделей

// // const getModels = arr => {
// //     const models = arr.map((item, index, array) => item.model);
// //     return models;
// // };

// рефакторинг
// const getModels = arr => arr.map(({model}) => model);
// // массив, состоящий из моделей
// console.log(getModels(cars));

// // 2. Применение скидки

// const makeCarWithDiscount = (cars, discount) => {
//     const result = cars.map((car) => {
//         const discountPrice = car.price / 100 * discount;
//         car.price -= discountPrice;
//         return car;
//     });
//     return result;
// };
// массив 11 объектов, в которых цена с учетом скидки
// console.log(makeCarWithDiscount(cars, 6));
// console.log(makeCarWithDiscount(cars, 11));

// // рефакторинг
// const makeCarWithDiscount = (cars, discount) =>
//     cars.map((car) => { car.price -= car.price / 100 * discount;
//         return car;
//     });
// console.log(makeCarWithDiscount(cars, 6));
// console.log(makeCarWithDiscount(cars, 11));

// // рефакторинг с округлением
// const makeCarWithDiscount = (cars, discount) =>
//     cars.map((car) => {
//         car.price -= car.price / 100 * discount;
//         car.price = Math.ceil(car.price);
//         return car;
//     });
// console.log(makeCarWithDiscount(cars, 6));
// console.log(makeCarWithDiscount(cars, 11));


// // <!-- Метод filter -->

// // 3. Поиск машин по определенной цене

// const filterByPrice = (cars, threshold) => {
//     const result = cars.filter((item, idx, arr) => {
//         if (item.price < threshold) {
//             return item
//         }
//     })
//     return result;
// };

// // рефакторинг
// const filterByPrice = (cars, threshold) => cars.filter(({price}) => price < threshold);
// // массив объектов, у которых цена выше заданного минимума
// console.log(filterByPrice(cars, 30000));
// console.log(filterByPrice(cars, 25000));

// // 4. Поиск машин по наличию в продаже

// const getCarsWithDiscount = cars => {
//     const result = cars.filter(car => {
//         if (car.onSale) {
//             return car;
//         }
//     });
//     return result;
// };

// // рефакторинг
// const getCarsWithDiscount = cars => cars.filter(({onSale}) => onSale);
// // массив объектов, которые есть в продаже
// console.log(getCarsWithDiscount(cars));


// // 5. Поиск типа машин

// const getCarsWithType = (cars, type) => {
//     const result = cars.filter((car) => {
//         if (car.type === type) {
//             return car;
//         };
//     });
//     return result;
// };

// // рефакторинг
// const getCarsWithType = (cars, type) => cars.filter(({type: carType}) => carType === type);
// // массив объектов, с заданным типом
// console.log(getCarsWithType(cars, 'suv'));
// console.log(getCarsWithType(cars, 'sedan'));


// // <!-- Метод find -->

// // 6. Поиск определенной модели

// const getCarsByModel = (cars, model) => {
//     const result = cars.find((car) => {
//         if (car.model === model) {
//             return car;
//         }
//     })
//     return result;
// };

// // рефакторинг
// const getCarsByModel = (cars, model) => cars.find((car) => car.model === model);
// // объект, в котором найдена заданная модель
// console.log(getCarsByModel(cars, 'F-150'));
// console.log(getCarsByModel(cars, 'CX-9'));


// // <!-- Метод sort -->
// // этот метод мутирует/изменяет исходный массив!

// // 7. Сортировка по стоимости по возростанию

// const sortByAscendingAmount = cars => {
//     const result = cars.sort((a, b) =>
//     // {
//     //     // объекты
//     //     console.log('a', a);
//     //     console.log('b', b);
//     // }
//         a.amount - b.amount
//     );
//     return result;
// };

// // рефакторинг
// const sortByAscendingAmount = cars => cars.sort((a, b) =>
//         a.amount - b.amount);
// // массив объектов отсортированный
// console.table(sortByAscendingAmount(cars));


// // 8. Сортировка по стоимости по убыванию

// // const sortByDescendingAmount = cars => {
// //     const result = cars.sort((a, b) =>
// //         b.amount - a.amount
// //     );
// //     return result;
// // };

// // // рефакторинг
// const sortByAscendingAmount = cars => cars.sort((a, b) =>
//         a.amount - b.amount);
// // // массив объектов отсортированный
// console.table(sortByDescendingAmount(cars));


// // 9. Сортировка моделей по алфавиту и наоборот

// const sortByModel = (cars, order) => { 
//     let result;
//     if (order === 'asc') {
//         // по алфавиту
//         result = cars.sort((a,b) => a.model.localeCompare(b.model));

//     } else {
//         // обратный алфавит
//         result = cars.sort((a,b) => b.model.localeCompare(a.model));
//     };
//     return result;
// };
// // массив обїектов изменен и отсортирован
// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

