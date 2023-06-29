"use strict";

// <!-- Лекция 25.11.2022 -->


// тестовый публичный сервис
// https://jsonplaceholder.typicode.com/posts
// SOAP API
// https://habr.com/ru/post/483204/
// https://firebase.google.com/

// // пример запроса
// const obj = {
//     name: 'User',
//     email: 'test@gmail.com',
//     age: 22,
// }

// fetch('https://mysite/', {
//     method: 'PATCH',
//     body: JSON.stringify({
//         email: 'test2@gmail.com'
//     })
// })


// // Create = POST

// const options = {
//     method: 'POST',
//     body: JSON.stringify({
//         author: "Mango",
//         body: "CRUD is awesome",
//     }),
//     headers: {
//         "Content-Type": "application/json; charset=UTF-8",
//     },
// };

// fetch('https://jsonplaceholder.typicode.com/posts', options)
// .then(resp => resp.json())
// .then(data => console.log(data));


// // Read = GET

// const options = {
//     method: 'GET',
//     headers: {
//         "Content-Type": "application/json; charset=UTF-8",
//     },
// };

// fetch('https://jsonplaceholder.typicode.com/posts', options)
// .then(resp => resp.json())
// .then(data => console.log(data));   // 100 обьктов в массиве


// // Update = PATCH

// const obj = {
//     name: 'Mango',
//     age: 22,
//     id: 1
// }

// fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
//     method: 'PATCH',
//     body: JSON.stringify({
//         name: 'Poly'
//     })
// })
// .then(resp => resp.json())
// .then(data => console.log(data));


// // Update = PATCH

const obj = {
    name: 'Mango',
    age: 22,
    id: 1
}

fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
    method: 'PUT',
    body: JSON.stringify({
        author: 'Poly'
    })
})
.then(resp => resp.json())
.then(data => console.log(data));


// // Delete = DELETE

fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
    method: 'DELETE',
})
.then(resp => resp.json())
.then(data => console.log(data));       // пустой объект





