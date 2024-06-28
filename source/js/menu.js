const buttonOpenNav = document.querySelector('.main-header__toggle');
const nav = document.querySelector('.main-nav');
const header = document.querySelector('.main-header')

nav.classList.remove('main-nav--no-js');
buttonOpenNav.classList.remove('main-header__toggle-no-js');
nav.classList.add('main-nav--closed');
header.classList.add('main-header--decoration');

buttonOpenNav.onclick = function () {
  nav.classList.toggle('main-nav--opened');
  nav.classList.toggle('main-nav--closed');
  buttonOpenNav.classList.toggle('main-header__toggle--active');
};
