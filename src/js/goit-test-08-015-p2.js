"use strict";


// // 1. примеры экспорта

// // дефолтный экспорт
// import qwerty from "./goit-test-08-015";
// console.log(qwerty(25,15));        //40

// // именной экспорт
// import {add} from "./goit-test-08-015";
// console.log(add(25,15));            //40


// // 2. несколько экспортов default
// import qwerty from "./goit-test-08-015";
// console.log(qwerty);            //15, значение a проигнорировано

// // 3. именной экспорт
// import { boo, foo } from "./goit-test-08-015";      // порядок не важен
// foo();          // hello world
// boo();          // my name is Anastasiia

// import { boo } from "./goit-test-08-015";      // можно только 1 взять
// boo();          // my name is Anastasiia

// import * as data from "./goit-test-08-015";      // импортируем все 
// console.log(data);                          
// // {__esModule: true}
// // boo:(...)
// // foo:(...)
// // __esModule: true
// // get boo:()=>boo
// // get foo:()=>foo
// // [[Prototype]]:Object
// data.boo();      // my name is Anastasiia