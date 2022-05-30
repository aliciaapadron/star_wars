'use strict';
const button = document.querySelector('.js_button');
const select = document.querySelector('.js_select');
const textbutton = document.querySelector('.js_textbutton');
const imgbutton = document.querySelector('.js_imgbutton');

function whoIsYourFather() {
  if (select.value == 'Anakin') {
    textbutton.innerHTML = "You don't have a father, and so it happens...";
  } else if (select.value == 'Luke') {
    textbutton.innerHTML = 'Luke, I am your father';
    imgbutton.src = './images/dark.jpg';
  } else if (select.value == 'Leia') {
    textbutton.innerHTML = 'Organa is not your father, I´m your father, sorry';
    imgbutton.src = './images/dark.jpg';
  } else if (select.value == 'Kylo Ren') {
    textbutton.innerHTML =
      'I am your father, but being that evil could be Dark Vader';
    imgbutton.src = './images/hans.png';
  }
}

function handleClickButton(event) {
  event.preventDefault();
  whoIsYourFather();
}

button.addEventListener('click', handleClickButton);
