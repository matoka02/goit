"use strict";


// <!-- Лекция 28.10.2022 -->

// // 1. Throttle

// console.log(_.throttle);

// document.addEventListener('scroll', _.throttle(onScroll, 3000));

// function onScroll(evt) {
//     console.log('hi');
// };


// 2. Галерея

const roses = ['https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80', 'https://images.unsplash.com/photo-1623776025811-fd139155a39b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80', 'https://images.unsplash.com/photo-1562965795-16cb921c6c2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=825&q=80', 'https://images.unsplash.com/photo-1468679950062-7f9630082231?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', 'https://images.unsplash.com/photo-1516834474-48c0abc2a902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80', 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80', 'https://images.unsplash.com/photo-1623776025811-fd139155a39b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80', 'https://images.unsplash.com/photo-1562965795-16cb921c6c2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=825&q=80', 'https://images.unsplash.com/photo-1468679950062-7f9630082231?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', 'https://images.unsplash.com/photo-1516834474-48c0abc2a902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80', 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80', 'https://images.unsplash.com/photo-1623776025811-fd139155a39b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80', 'https://images.unsplash.com/photo-1562965795-16cb921c6c2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=825&q=80', 'https://images.unsplash.com/photo-1468679950062-7f9630082231?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', 'https://images.unsplash.com/photo-1516834474-48c0abc2a902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80', 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80', 'https://images.unsplash.com/photo-1623776025811-fd139155a39b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80', 'https://images.unsplash.com/photo-1562965795-16cb921c6c2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=825&q=80', 'https://images.unsplash.com/photo-1468679950062-7f9630082231?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', 'https://images.unsplash.com/photo-1516834474-48c0abc2a902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80'];

const list = document.querySelector('.list');
const markup = roses.map(item => `<li>
<img src="${item}" loading="lazy" alt="rose" width="300px">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, facere consequuntur rerum magnam tempore perferendis natus modi ipsam, veritatis officiis ut eveniet odio ea placeat aspernatur veniam fugit pariatur nisi!
A necessitatibus sint impedit quas, vitae unde recusandae perferendis sed, eveniet illo laborum. Rerum fuga provident molestias, quo repudiandae adipisci sed et modi. Quos hic blanditiis, impedit sapiente explicabo nemo!
Dolorum culpa aliquid quaerat, ipsam facilis pariatur aspernatur, expedita amet odit omnis odio assumenda quam earum reiciendis fugit! Reprehenderit placeat cumque rerum doloremque enim dignissimos velit sed ipsum, porro alias.
Commodi obcaecati fuga fugiat modi in quos nostrum quod, non nobis nisi sed quisquam natus perferendis? Est dolorem, vitae asperiores nemo ab dicta quibusdam odio sapiente cumque, sint neque vero.
Consequuntur eum delectus magnam? Quam culpa quo nulla nam sit aspernatur ea fugit repudiandae alias earum magnam in labore adipisci, cum nesciunt quod vero. Maxime excepturi dolorem eveniet repudiandae atque!</p>
</li>`).join('');

list.insertAdjacentHTML('beforeend', markup);


document.addEventListener('scroll', _.debounce(onScroll, 300, {
    trailing: true,         // отработка после окончания eventa, по умолчанию true
    leading: false,         // отработка после начала eventa, по умолчанию false
}));

let i = 0;

function onScroll(evt) {
    console.log(evt);
    i += 1;
    console.log(i);
};

// // 3. input
// const input = document.querySelector('input');
// input.addEventListener('input', _.throttle(onClick, 400));

// function onClick(evt) {
//     console.log(evt.target.value);
// };