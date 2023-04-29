const burgerMenu = document.querySelector('.burger');
const burgerPopup = document.querySelector('.burger__popup');
const burgerLineFirst = burgerMenu.querySelector('.burger__line__first');
const burgerLineSecond = burgerMenu.querySelector('.burger__line__second');
const burgerLineThir = burgerMenu.querySelector('.burger__line__thir');
const homeSectionBurger = document.querySelector('#home');
const portfolioLinkBurger = document.querySelector('.link__portfolio__burger');
const aboutLinkBurger = document.querySelector('.link__about__burger');
const contactLinkBurger = document.querySelector('.link__contact__burger');
const homeLinkBurger = document.querySelector('.link__home__burger');


function toggleburgerMenu() {
  burgerLineFirst.classList.toggle('line_first_opened');
  burgerLineSecond.classList.toggle('line_second_opened');
  burgerLineThir.classList.toggle('line_thir_opened');
}


function toggleburgerPopup() {
  burgerPopup.classList.toggle('burger__popup__opened');
}


burgerMenu.addEventListener('click', () => {
  toggleburgerMenu();
  toggleburgerPopup();
});


burgerPopup.addEventListener('click', () => {
  toggleburgerPopup();
  toggleburgerMenu();
});


portfolioLinkBurger.addEventListener('click', (e) => {
  e.preventDefault();
  portolioSection.scrollIntoView({ behavior: "smooth", block: "start" });
})

aboutLinkBurger.addEventListener('click', (e) => {
  e.preventDefault();
  aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
})

contactLinkBurger.addEventListener('click', (e) => {
  e.preventDefault();
  contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
})

homeLinkBurger.addEventListener('click', (e) => {
  e.preventDefault();
  homeSectionBurger.scrollIntoView({ behavior: "smooth", block: "start" });
})
