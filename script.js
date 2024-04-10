const body = document.body;
const header = document.querySelector('#header');
const logo = document.querySelector('#header-img');
const navBar = document.querySelector('#nav-bar');
const burger = document.querySelector('.burger');
const navLinks = document.querySelectorAll('.nav-link');

function openNav() {
    body.classList.toggle('open');
    header.classList.toggle('open');
    logo.classList.toggle('open');
    navBar.classList.toggle('open');
    burger.classList.toggle('open');
};

burger.addEventListener('click', openNav);

navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        if (body.classList.contains('open')) {
            openNav();
        }
    })
})