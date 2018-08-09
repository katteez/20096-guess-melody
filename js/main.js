'use strict';

const ARROW_LEFT_KEYCODE = 37;
const ARROW_RIGHT_KEYCODE = 39;

const mainElement = document.querySelector(`.main`);
const screens = document.querySelectorAll(`template`);

let currentScreenIndex = Array.from(screens).findIndex((item) => item.id === `welcome`);
let currentScreen;

// Отрисовка экрана по переданному индексу из массива экранов
const renderScreen = (screenIndex) => {
  if (screens[screenIndex]) {
    currentScreenIndex = screenIndex;
    currentScreen = screens[currentScreenIndex];

    mainElement.innerHTML = ``;
    mainElement.appendChild(currentScreen.content.cloneNode(true));
  }
};

// Отрисовка экрана приветствия
renderScreen(currentScreenIndex);

const toggleNextScreen = () => renderScreen(currentScreenIndex + 1);
const togglePrevScreen = () => renderScreen(currentScreenIndex - 1);

// Переключение экранов по нажатию на altKey + arrowKey
document.addEventListener(`keydown`, (e) => {
  if (e.altKey) {
    if (e.keyCode === ARROW_RIGHT_KEYCODE) {
      toggleNextScreen();
    } else if (e.keyCode === ARROW_LEFT_KEYCODE) {
      togglePrevScreen();
    }
  }
});

const app = document.querySelector(`.app`);
const arrowsWrap = `
<div class="arrows__wrap">
  <style>
    .arrows__wrap {
      position: absolute;
      top: 135px;
      left: 50%;
      margin-left: -56px;
    }
    .arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
    }
  </style>
  <button class="arrows__btn"><-</button>
  <button class="arrows__btn">-></button>
</div>
`;

app.insertAdjacentHTML(`beforeend`, arrowsWrap);

const arrows = app.querySelectorAll(`.arrows__btn`);
const arrowLeftBtn = app.querySelector(`.arrows__btn:first-of-type`);
const arrowRightBtn = app.querySelector(`.arrows__btn:last-of-type`);

arrows.forEach((item) => {
  item.style = `background-color: #fff`;
});

// Переключение экранов по нажатию на кнопки на экране
arrowLeftBtn.addEventListener(`click`, togglePrevScreen);
arrowRightBtn.addEventListener(`click`, toggleNextScreen);
