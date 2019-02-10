const nav1 = document.querySelector('#nav1');
const nav2 = document.querySelector('#nav2');
const nav0 = document.querySelector('#nav0');
const nav3 = document.querySelector('#nav3');
const nav4 = document.querySelector('#nav4');
const nav5 = document.querySelector('#nav5');
const nav6 = document.querySelector('#nav6');


const aboutUs = document.querySelector('#about-us');
const info = document.querySelector('#info');
const functions = document.querySelector('#main-func');
const form = document.querySelector('#form');
const header = document.querySelector('#header');

nav0.addEventListener('click', () => {
    scrollElement(functions);
});

nav1.addEventListener('click', () => {
    scrollElement(info);
});

nav2.addEventListener('click', () => {
    scrollElement(aboutUs);
});

nav3.addEventListener('click', () => {
    scrollElement(form);
});

nav4.addEventListener('click', () => {
    scrollElement(form);
});

nav5.addEventListener('click', () => {
    scrollElement(aboutUs);
});

nav6.addEventListener('click', () => {
    scrollElement(header);
});