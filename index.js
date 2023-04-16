const burgerMenu = document.querySelector('.burger');
const burgerPopup = document.querySelector('.burger__popup');
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
const buttonShu = document.querySelector('.button__shu');
const puerShu = document.querySelectorAll('.shu');
const whole = document.querySelectorAll('.image');
const buttonShen = document.querySelector('.button__shen');
const puerShen = document.querySelectorAll('.shen');
const buttonPao = document.querySelector('.button__pao');
const hunPao = document.querySelectorAll('.pao');
const buttonYin = document.querySelector('.button__yin');
const guanYin = document.querySelectorAll('.yin')



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


function toggleClosePhoto() {
  whole.forEach((item) => item.classList.toggle('shu'))
}

function toggleOpenPhoto() {
  puerShu.forEach((item) => item.classList.toggle('open'))
}

buttonShu.addEventListener('click', () => {
  toggleClosePhoto();
  toggleOpenPhoto();
});


function ClosePhotoShen() {
  whole.forEach((item) => item.classList.toggle('shen'))
}

function toggleOpenPhotoShen() {
  puerShen.forEach((item) => item.classList.toggle('open'))
}

buttonShen.addEventListener('click', () => {
  ClosePhotoShen();
  toggleOpenPhotoShen();
});


function toggleClosePhotoPao() {
  whole.forEach((item) => item.classList.toggle('pao'))
}

function toggleOpenPhotoPao() {
  hunPao.forEach((item) => item.classList.toggle('open'))
}

buttonPao.addEventListener('click', () => {
  toggleClosePhotoPao();
  toggleOpenPhotoPao();
});


function toggleClosePhotoYin() {
  whole.forEach((item) => item.classList.toggle('yin'))
}

function toggleOpenPhotoYin() {
  guanYin.forEach((item) => item.classList.toggle('open'))
}

buttonYin.addEventListener('click', () => {
  toggleClosePhotoYin();
  toggleOpenPhotoYin();
});



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