// "use strict";

// 1. примеры экспорта

// // дефолтный экспорт
// export default function add(a,b) {
//     return a + b;
// }
// console.log(add(12, 4));

// // именной экспорт
// export function add(a,b) {
//     return a + b;
// }
// console.log(add(12, 4));


// // 2. несколько экспортов default

// const a = 10;
// const b = 15;

// export default a;
// export default b;        // выведется только последнее значение


// // 3. именной экспорт

// function foo(){
//     console.log('hello world');
// };

// function boo(){
//     console.log('my name is Anastasiia');
// };

// export {foo, boo};