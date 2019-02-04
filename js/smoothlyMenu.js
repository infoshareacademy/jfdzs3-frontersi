const nav1 = document.querySelector('#nav1');
const nav2 = document.querySelector('#nav2');
const nav0 = document.querySelector('#nav0');


const aboutUs = document.querySelector('#about-us');
const info = document.querySelector('#info');
const functions = document.querySelector('#main-func');
const form = document.querySelector('#form');
const header = document.querySelector('#header');

nav0.addEventListener('click', () => {

    scrollIt(functions);
});

nav1.addEventListener('click', () => {

    scrollIt(info);
});

nav2.addEventListener('click', () => {

    scrollIt(aboutUs);
});


nav4.addEventListener('click', () => {

    scrollIt(form);
});
nav5.addEventListener('click', () => {

    scrollIt(aboutUs);
});
nav6.addEventListener('click', () => {

    scrollIt(header);
});