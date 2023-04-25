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
const buttonWhole = document.querySelector('.button');
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



function removeWholeClose() {
  whole.forEach((item) => item.classList.remove('close'))
}

function removeWholeShu() {
  puerShu.forEach((item) => item.classList.remove('open'))
}

function removeWholeShen() {
  puerShen.forEach((item) => item.classList.remove('open'))
}

function removeWholePao() {
  hunPao.forEach((item) => item.classList.remove('open'))
}

function removeWholeYin() {
  guanYin.forEach((item) => item.classList.remove('open'))
}

buttonWhole.addEventListener('click', () => {
  removeWholeYin();
  removeWholePao();
  removeWholeShen();
  removeWholeShu();
  removeWholeClose();
});


function addClosePhoto() {
  whole.forEach((item) => item.classList.add('close'))
}

function addOpenPhoto() {
  puerShu.forEach((item) => item.classList.add('open'))
}

function removePhotoShu() {
  puerShen.forEach((item) => item.classList.remove('open'))
}

function removePhoto() {
  puerShen.forEach((item) => item.classList.remove('close'))
}

function removePhotoYin() {
  guanYin.forEach((item) => item.classList.remove('open'))
}

buttonShu.addEventListener('click', () => {
  addClosePhoto();
  addOpenPhoto();
  removePhoto();
  removePhotoShu();
  removePhotoYin();
});


function ClosePhoto() {
  whole.forEach((item) => item.classList.add('close'))
}

function removePhotoShen() {
  puerShu.forEach((item) => item.classList.remove('open'))
}

function removePhoto() {
  hunPao.forEach((item) => item.classList.remove('open'))
}

function removeOpenPhotoYin() {
  guanYin.forEach((item) => item.classList.remove('open'))
}

function closePhotoShen() {
  puerShu.forEach((item) => item.classList.add('close'))
}

function openPhotoShen() {
  puerShen.forEach((item) => item.classList.add('open'))
}

buttonShen.addEventListener('click', () => {
  openPhotoShen();
  closePhotoShen();
  removePhotoShen();
  removePhoto();
  ClosePhoto();
  removeOpenPhotoYin();
});



function toggleClosePhotoPao() {
  whole.forEach((item) => item.classList.add('close'))
}

function addOpenPhotoPao() {
  hunPao.forEach((item) => item.classList.add('open'))
}

function remuvePhotoShen() {
  puerShen.forEach((item) => item.classList.remove('open'))
}

function remuvePhotoShu() {
  puerShu.forEach((item) => item.classList.remove('open'))
}

function removeYin() {
  guanYin.forEach((item) => item.classList.remove('open'))
}

buttonPao.addEventListener('click', () => {
  toggleClosePhotoPao();
  addOpenPhotoPao();
  remuvePhotoShen();
  remuvePhotoShu();
  removeYin();
});



function addClosePhotoYin() {
  whole.forEach((item) => item.classList.add('close'))
}

function removeShen() {
  puerShen.forEach((item) => item.classList.remove('open'))
}

function removePao() {
  hunPao.forEach((item) => item.classList.remove('open'))
}

function removeShu() {
  puerShu.forEach((item) => item.classList.remove('open'))
}

function addOpenPhotoYin() {
  guanYin.forEach((item) => item.classList.add('open'))
}

buttonYin.addEventListener('click', () => {
  addClosePhotoYin();
  addOpenPhotoYin();
  removeShen();
  removePao();
  removeShu();
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