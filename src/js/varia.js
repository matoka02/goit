'use strict';


/*--- 1.1 Открытие окон и методы window ---*/

// let newWin = window.open("about:blank", "hello", "width=200,height=200");
// newWin.document.write("Hello, world!");

// let newWindow = open('/', 'example', 'width=300,height=300')
// newWindow.focus();
// alert(newWindow.location.href); // (*) about:blank, загрузка ещё не началась
// newWindow.onload = function() {
//   let html = `<div style="font-size:30px">Добро пожаловать!</div>`;
//   newWindow.document.body.insertAdjacentHTML('afterbegin', html);
// };

// let newWindow = open('/', 'example', 'width=300,height=300');
// newWindow.onload = function() {
//   newWindow.close();
//   alert(newWindow.closed); // true
// };


/*--- 1.2 Общение между окнами ---*/

// let oldDoc = iframe.contentDocument;
// iframe.onload = function () {
//   let newDoc = iframe.contentDocument;
//   // загруженный document - не тот, который был в iframe при создании изначально!
//   console.log(oldDoc == newDoc); // false
// };

// let oldDoc = iframe.contentDocument;
// // каждый 100 мс проверяем, не изменился ли документ
// let timer = setInterval(() => {
//   let newDoc = iframe.contentDocument;
//   if (newDoc == oldDoc) return;
//   console.log("New document is here!");
//   clearInterval(timer); // отключим setInterval, он нам больше не нужен
// }, 100);

// console.log(iframe.contentWindow == frames[0]);       // true
// console.log(iframe.contentWindow == frames.win);       // true


/*--- 2.1 ArrayBuffer, бинарные массивы ---*/

// let buffer = new ArrayBuffer(16);
// console.log(buffer.byteLength);                 // 16

// let view=new Uint32Array(buffer);
// console.log(Uint32Array.BYTES_PER_ELEMENT);     // 4
// console.log(view.length);                       // 4
// console.log(view.byteLength);                   // 16

// view[0] = 123456;
// for (const num of view) {
//   console.log(num);
// };

// 2.1.1 Дан массив из типизированных массивов Uint8Array. Напишите функцию concat(arrays), которая объединяет эти массивы в один типизированный массив и возвращает его.

// function concat(arrays) {
//   // находим общую длину переданных массивов
//   let totalLength = arrays.reduce((acc, value) => acc + value.length, 0);

//   let result = new Uint8Array(totalLength);
  
//   if (!arrays.length) return result;

//   // копируем каждый из массивов в result
//   // следующий массив копируется сразу после предыдущего
//   let offset = 0;
//   for(let array of arrays) {
//     result.set(array, offset);
//     offset += array.length;
//   }

//   return result;
// };


/*--- 2.4 File и FileReader ---*/

// См. html


