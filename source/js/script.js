const buttonOpenNav = document.querySelector('.main-header__toggle');
const nav = document.querySelector('.main-nav');

buttonOpenNav.onclick = function () {
  console.log("okokok")
  nav.classList.toggle('main-nav--opened');
  nav.classList.toggle('main-nav--closed');
}

// function closeModal(event) {
//   if (event.target === outsideClosingModal || event.target === buttonCloseModal || event.target === openModal) {
//     outsideClosingModal.classList.toggle('modal-container-close');
//   };
// };
//
// if (openModal) {
//   document.addEventListener("click", closeModal);
// };
