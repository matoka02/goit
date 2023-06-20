"use strict";


// <!-- Лекция 04.11.2022 -->


// // 1. SessionStorage и LocalStorage

// const session = document.querySelector('.session');
// const local = document.querySelector('.local');
// const remove = document.querySelector('.remove');

// session.addEventListener('click', onSession);
// const arr = [1,2,3,4];

// function onSession() {
//     // sessionStorage.setItem('session', 'hello session');
//     // sessionStorage.setItem('session', arr);
//     // localStorage.getItem('local');
//     // console.log(typeof localStorage.getItem('local'));
//     // console.log(localStorage.getItem('local'));

//     // const data = localStorage.getItem('local');
//     // const resp = JSON.parse(data);
//     // console.log(resp);

//     const data = JSON.parse(localStorage.getItem('local')) || [];
//     console.log(data);
//     data.forEach(element => {
//         console.log(element);
//     });
// };

// local.addEventListener('click', onLocal);

// function onLocal() {
//     // localStorage.setItem('local', 'hello local');
//     // localStorage.setItem('local', arr);

//     localStorage.setItem('local', JSON.stringify(arr));    
//     localStorage.setItem('local-01', JSON.stringify(arr));    
//     localStorage.setItem('local-02', JSON.stringify(arr));    
// };

// remove.addEventListener('click', onRemove);  

// function onRemove() {
//     // localStorage.removeItem('local');       // удалание 1 ключа  
//     localStorage.clear();                     // удаление всех ключей
// };


// // 2. Безопасная передача

// try {
//     console.log(a);
// } catch (error) {
//     console.log(error);
// };

// console.log('hello world');


// // 3. Рефакторинг SessionStorage и LocalStorage

// const session = document.querySelector('.session');
// const local = document.querySelector('.local');
// const remove = document.querySelector('.remove');

// session.addEventListener('click', onSession);
// const arr = [1,2,3,4];

// function onSession() {

//     try {
//         // const data = JSON.parse(localStorage.getItem('local')) || [];
//         const data = JSON.parse(localStorage.getItem('local'));
//         if (data.length <2) {
//             // регистрация ошибки и передача ее в catch
//             throw new Error('Array is empty');
//         }    
//         console.log(data);
//         data.forEach(element => {
//             console.log(element);
//         });
//     }   catch (error) {
//             console.log(error);
//     }   finally{
//         console.log('hello world');
//     } 

// };

// local.addEventListener('click', onLocal);

// function onLocal() {
//     localStorage.setItem('local', 'arr');    
//     localStorage.setItem('local-01', JSON.stringify(arr));    
//     localStorage.setItem('local-02', JSON.stringify(arr));    
// };

// remove.addEventListener('click', onRemove);  

// function onRemove() {
//     localStorage.removeItem('local'); 
// };  


// // 3. Игра крестики-нолики

const content = document.querySelector('.content');
const restart = document.querySelector('.js-restart');

content.insertAdjacentHTML('beforeend', createMarkup());
content.addEventListener('click', onClick);
restart.addEventListener('click', onRestart);

const X_KEY = 'PlayerX';
const O_KEY = 'PlayerO';

let player = 'X';

let stepX = JSON.parse(localStorage.getItem(X_KEY)) || [];
let stepO = JSON.parse(localStorage.getItem(O_KEY)) || [];

const win = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

function startGame() {
    // console.log(stepX);
    // console.log(stepO);
    [...content.children].forEach(item => {
        // console.dir(item.dataset.id);
        const id = Number(item.dataset.id);

        // console.log(id);
        // console.log(stepX);
        // console.log(stepX.includes(id));

        if (stepX.includes(id)) {
            item.textContent = 'X';
        } else if (stepO.includes(id)){
            item.textContent = 'O';
        };
    });
};
startGame();

function createMarkup() {
    let markup = '';
    for (let i = 1; i <= 9; i += 1) {
        markup += `<div class="item" data-id="${i}"></div>`;
    };    
    return markup;
};

function onClick(evt) {
    if (!evt.target.textContent) {
        evt.target.textContent = player; 
        // console.dir(evt.target);
        const id = Number(evt.target.dataset.id);  

        let result = false;

        if (player === "X") {
            stepX.push(id);
            // console.log(isWinner(stepX)); 
            localStorage.setItem(X_KEY, JSON.stringify(stepX));
            result = isWinner(stepX);          
        } else{
            stepO.push(id);
            localStorage.setItem(O_KEY, JSON.stringify(stepO));
            result = isWinner(stepO); 
        }; 

        setTimeout(()=>{
            if (result) {
                alert(`Winner ${player}`);
                onRestart(); 
                return;
            }; 
            player = player === 'X' ? 'O' : 'X';
        }); 

        // console.log('stepX', stepX);
        // console.log('stepO', stepO);

    } else {
        alert('Change!')
    };
};

function isWinner(arr) {
    return win.some( item => 
        // console.log(item);
        item.every( id => 
            // console.log(id);
            arr.includes(id)
            )        
    );
};

function onRestart() {
    player = 'X';
    stepX = [];
    stepO = [];

    // localStorage.removeItem(X_KEY); 
    // localStorage.removeItem(O_KEY); 
    localStorage.clear();
    
    content.innerHTML = createMarkup(); 
};


// // 4. Сервис для localStorage

/**
 * 
 * @param {*} key 
 * @param {*} value 
 */

// const save = (key, value) => {
//     try {
//         const serializedState = JSON.stringify(value);
//         localStorage.setItem(key, serializedState);
//     } catch (error) {
//         console.error("Set state error: ", error.message);
//     }
// };
    
// const load = key => {
//     try {
//         const serializedState = localStorage.getItem(key);
//         return serializedState === null ? undefined : JSON.parse(serializedState);
//     } catch (error) {
//         console.error("Get state error: ", error.message);
//     }
// };

// const remove = key => {
//     try {
//         const serializedState = localStorage.removeItem(key);
//         return serializedState === null ? undefined : JSON.parse(serializedState);
//     } catch (error) {
//         console.error("Get state error: ", error.message);
//     }
// };
    
//     export default { save, load, remove };