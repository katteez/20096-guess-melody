import getElementFromTemplate from '../create-element';
import renderScreen from '../render-screen';
import welcomeScreenElement from './welcome';

// Результат игры: проигрыш, закончились попытки
const template = `
<section class="result">
  <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <h2 class="result__title">Какая жалость!</h2>
  <p class="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
  <button class="result__replay" type="button">Попробовать ещё раз</button>
</section>`;

const failTriesScreenElement = getElementFromTemplate(template);
const replayButton = failTriesScreenElement.querySelector(`.result__replay`);

replayButton.addEventListener(`click`, () => {
  renderScreen(welcomeScreenElement);
});

export default failTriesScreenElement;
