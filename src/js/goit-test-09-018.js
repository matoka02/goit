"use strict";

// <!-- Лекция 11.11.2022 -->


// // 1. Асинхронный код

// // макропроцесс => call Steck => webAPI call Steck, если синхронный код и микропроцессы выполнены
// setTimeout(()=>{'setTimeout'});
// // микропроцесс => call Steck => webAPI => call Steck, если синхронный код выполнен
// Promise.resolve().then(()=>{console.log('Promise');});
// // синхронный код => call Steck 
// console.log('object');

const promise = new Promise((res, rej)=>{
    const random = Math.random();

    if (random>0.5) {
        res(20);
    } else{
        rej('Error!');
    }
});
// console.log(promise);           // Promise {<rejected>: 10}

// promise.then((res)=>{console.log(res);},(err)=>{console.log(err);});                          // Error

promise
.then((res)=>{
    //
    //
    //
    //
    //
    //
    console.log(res);                       // 20
}).catch(err => console.log(err))          // Error
.finally(()=>{
    //
})