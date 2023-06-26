"use strict";

// <!-- Лекция 18.11.2022 -->

// weatherapi.com
// API Key: 0f1a18797cc1430781a80508232606

// XMLHttpRequest
// https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest

const form = document.querySelector('.js-search');
const list = document.querySelector('.js-list');
const BASE_URL = 'http://api.weatherapi.com/v1/forecast.json';
const API_KEY = '0f1a18797cc1430781a80508232606';

form.addEventListener('submit', onSearch);

function onSearch(evt) {
    evt.preventDefault();

    // console.dir(evt.currentTarget);
    const {query: {value: searchValue}, days: {value: daysValue}} = evt.currentTarget.elements;
    // console.log(searchValue, daysValue);

    if (!searchValue) {
        alert('Empty field');
        return;
    }

    forecastApi(searchValue, daysValue).then(data => {
        console.log(data.forecast.forecastday);
        createMarkup(data.forecast.forecastday);
    })
};

function createMarkup(arr) {
    const markup = arr.map(item => `<li>
    <img src="${item.day.condition.icon}" alt="">
    <span>${item.day.condition.text}</span>
    <h2>Day: ${item.date}</h2>
    <h3>Temperature: ${item.day.avgtemp_c}&#8451;</h3>
    </li>`).join('');

    list.innerHTML = markup;
};

function forecastApi(name='Kiev', value='7') {
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${name}&days=${value}`)
    .then(resp => {
        console.log(resp);
        if(!resp.ok){
            throw new Error(resp.statusText)
        }
        return resp.json()
    })
    // .then(data => console.log(data))
    .catch(err => console.error(err))
}
// forecastApi();