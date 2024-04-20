const buttonOpenNav = document.querySelector('.main-header__toggle');
const nav = document.querySelector('.main-nav');

buttonOpenNav.onclick = function () {
  nav.classList.toggle('main-nav--opened');
  nav.classList.toggle('main-nav--closed');
};
