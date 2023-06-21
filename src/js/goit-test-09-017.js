"use strict";


// <!-- Лекция 09.11.2022 -->


// // Синхронные процессы

// console.log('start');

// setTimeout(()=>{
//     console.log('setTimeout');
// }, 0);

// for (let i = 0; i < 99; i += 1) {
//     console.log('for', i);    
// };


// const user = {
//     name: 'user', 
//     age: 22
// };

// function foo(a,b,c,d) {
//     console.log('a', a);            // arg1
//     console.log('b', b);            // arg2
//     console.log('c', c);            // 3
//     // console.log('d', d);            // user = { name: 'user', age: 22}
//     console.log('d', arguments);            
//     console.log('hello world');
// };

// setInterval(foo, 3000, 'arg1', 'arg2', 3, user);

// setTimeout(()=>{

// }, 300);


// // id в setInterval

// const user = {
//     name: 'user', 
//     age: 22
// };

// let acc = 1;

// function foo() {  
//     if (acc>=5) {
//         clearInterval(idInterval);
//         return
//     };

//     console.log('hello world');
//     acc+=1;
// };

// const idInterval = setInterval(foo, 3000, 'arg1', 'arg2', 3, user);

// const idTime = setTimeout(()=>{

// }, 300);

// console.log('idInterval', idInterval);
// console.log('idTime', idTime);


// <!-- Текущие время и дата -->

const refs = {
    dateDay: document.querySelector('.date-day'),
    date: document.querySelector('.date'),
    dateMonth: document.querySelector('.date-month'),
    dateYear: document.querySelector('.date-year'),
    clock: document.querySelector('.digital-clock'),
    seconds: document.querySelector('.clock-seconds__arrow'),
    minutes: document.querySelector('.clock-minutes__arrow'),
    hours: document.querySelector('.clock-hours__arrow'),
};

const nameOfDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const nameOfMonth = ['January', 'February', 'March',
'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

setInterval(()=>{
    const currentTime = new Date();
    const day = nameOfDay[currentTime.getDay()];
    const dayOfMonth = currentTime.getDate().toString().padStart(2, '0');
    const month = nameOfMonth[currentTime.getMonth()];
    const year = currentTime.getFullYear();
    console.log(day, dayOfMonth, month, year);
    
    refs.dateDay.textContent = day;
    refs.date.textContent = dayOfMonth;
    refs.dateMonth.textContent = month;
    refs.dateYear.textContent = year;

    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    console.log(hours, minutes, seconds);

    refs.clock.textContent = `Time: ${hours} : ${minutes} : ${seconds}`;

    // seconds 360/60=6
    // minutes 360/60=6
    // hours   360/12=30
    const forSeconds = seconds * 6;
    const forMinutes = minutes * 6;
    const forHours = hours * 30 + minutes * 0.5; //(30/60) = 0.5

    refs.seconds.style.transform = `rotate(${forSeconds}deg)`;
    refs.minutes.style.transform = `rotate(${forMinutes}deg)`;
    refs.hours.style.transform = `rotate(${forHours}deg)`;

}, 1000);


