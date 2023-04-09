const burgerMenu = document.querySelector('.burger')
const burgerPopup = document.querySelector('.burger__popup')
const burgerLineFirst = burgerMenu.querySelector('.burger__line__first');
const burgerLineSecond = burgerMenu.querySelector('.burger__line__second');
const burgerLineThir = burgerMenu.querySelector('.burger__line__thir');
const portfolioLink = document.querySelector('.link__portfolio');
const portfolioLinkBurger = document.querySelector('.link__portfolio__burger');
const portolioSection = document.querySelector('#portfolio');
const aboutLink = document.querySelector('.link__about');
const aboutLinkBurger = document.querySelector('.link__about__burger');
const aboutSection = document.querySelector('#about');
const contactLink = document.querySelector('.link__contact');
const contactLinkBurger = document.querySelector('.link__contact__burger');
const contactSection = document.querySelector('#contact');
const homeLinkBurger = document.querySelector('.link__home__burger');
const homeSectionBurger = document.querySelector('#home');


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

portfolioLink.addEventListener('click', (e) => {
  e.preventDefault();
  portolioSection.scrollIntoView({ behavior: "smooth", block: "start" });
})

portfolioLinkBurger.addEventListener('click', (e) => {
  e.preventDefault();
  portolioSection.scrollIntoView({ behavior: "smooth", block: "start" });
})

aboutLink.addEventListener('click', (e) => {
  e.preventDefault();
  aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
})

aboutLinkBurger.addEventListener('click', (e) => {
  e.preventDefault();
  aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
})

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
})

contactLinkBurger.addEventListener('click', (e) => {
  e.preventDefault();
  contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
})

homeLinkBurger.addEventListener('click', (e) => {
  e.preventDefault();
  homeSectionBurger.scrollIntoView({ behavior: "smooth", block: "start" });
})