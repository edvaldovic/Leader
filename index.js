const burgerMenu = document.querySelector('.burger')
const burgerPopup = document.querySelector('.burger__popup')
const burgerLineFirst = burgerMenu.querySelector('.burger__line__first');
const burgerLineSecond = burgerMenu.querySelector('.burger__line__second');
const burgerLineThir = burgerMenu.querySelector('.burger__line__thir');


function togglburgerMenu() {
  burgerLineFirst.classList.toggle('line_first_opened');
  burgerLineSecond.classList.toggle('line_second_opened');
  burgerLineThir.classList.toggle('line_thir_opened');
}


function togglburgerPopup() {
  burgerPopup.classList.toggle('burger__popup__opened');
}


burgerMenu.addEventListener('click', () => {
  togglburgerMenu();
  togglburgerPopup();
});


burgerPopup.addEventListener('click', () => {
  togglburgerPopup();
  togglburgerMenu();
})
