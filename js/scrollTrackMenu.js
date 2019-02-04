function trackScroll() {
  

    const links = document.querySelectorAll('.navi');


    const mainFunctions = document.getElementById("main-func");
    const funcLink = document.querySelector('#nav0');
    const functionsScroll = mainFunctions.offsetTop - 60;

    const info = document.getElementById("info");
    const infoLink = document.querySelector('#nav1');
    const infoScroll = info.offsetTop - 60;

    const aboutUs = document.getElementById('about-us');
    const aboutUsLink = document.querySelector('#nav2');
    const aboutUsScroll = aboutUs.offsetTop - 60;

    const form = document.getElementById("form");
    const formLink = document.querySelector('#nav4');
    const formScroll = form.offsetTop - 60;

    let scrolled = window.pageYOffset;
    
    if (scrolled < functionsScroll) {
        links.forEach((link) => link.classList.remove("active-link"));
    }else if (scrolled >= functionsScroll && scrolled < infoScroll) {
        links.forEach((link) => link.classList.remove("active-link"));
        funcLink.classList.add("active-link");
    }else if (scrolled >= infoScroll && scrolled < aboutUsScroll) {
        links.forEach((link) => link.classList.remove("active-link"));
        infoLink.classList.add("active-link");
    } else if (scrolled >=  aboutUsLink && scrolled < formScroll) {
        links.forEach((link) => link.classList.remove("active-link"));
        aboutUsLink.classList.add("active-link");
    } else if (scrolled >= formScroll) {
        links.forEach((link) => link.classList.remove("active-link"));
        formLink.classList.add("active-link");
    };
};

window.addEventListener("scroll", trackScroll);