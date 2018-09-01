import getElementFromTemplate from '../create-element';
import renderScreen from '../render-screen';
import resultSuccessScreenElement from './result-success';
import failTimeScreenElement from './fail-time';
import failTriesScreenElement from './fail-tries';
import welcomeScreenElement from './welcome';

// Игра на выбор исполнителя
const template = `
<section class="game game--artist">
  <header class="game__header">
    <a class="game__back" href="#">
      <span class="visually-hidden">Сыграть ещё раз</span>
      <img class="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию">
    </a>

    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle class="timer__line" cx="390" cy="390" r="370" style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center" />
    </svg>

    <div class="timer__value" xmlns="http://www.w3.org/1999/xhtml">
      <span class="timer__mins">05</span>
      <span class="timer__dots">:</span>
      <span class="timer__secs">00</span>
    </div>

    <div class="game__mistakes">
      <div class="wrong"></div>
      <div class="wrong"></div>
      <div class="wrong"></div>
    </div>
  </header>

  <section class="game__screen">
    <h2 class="game__title">Кто исполняет эту песню?</h2>
    <div class="game__track">
      <button class="track__button track__button--play" type="button"></button>
      <audio></audio>
    </div>

    <form class="game__artist">
      <div class="artist">
        <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-1" id="answer-1">
        <label class="artist__name" for="answer-1">
          <img class="artist__picture" src="http://placehold.it/134x134" alt="Пелагея">
          Пелагея
        </label>
      </div>

      <div class="artist">
        <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-2" id="answer-2">
        <label class="artist__name" for="answer-2">
          <img class="artist__picture" src="http://placehold.it/134x134" alt="Пелагея">
          Краснознаменная дивизия имени моей бабушки
        </label>
      </div>

      <div class="artist">
        <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-3" id="answer-3">
        <label class="artist__name" for="answer-3">
          <img class="artist__picture" src="http://placehold.it/134x134" alt="Пелагея">
          Lorde
        </label>
      </div>
    </form>
  </section>
</section>`;

const gameArtistScreenElement = getElementFromTemplate(template);
const answersForm = gameArtistScreenElement.querySelector(`.game__artist`);
const returnButton = gameArtistScreenElement.querySelector(`.game__back`);

const getRandomScreen = (...screens) => screens[Math.floor(Math.random() * screens.length)];

answersForm.addEventListener(`click`, (e) => {
  if (e.target.tagName === `INPUT`) {
    const answer1Checked = answersForm.querySelector(`#answer-1:checked`);
    const answer2Checked = answersForm.querySelector(`#answer-2:checked`);
    const answer3Checked = answersForm.querySelector(`#answer-3:checked`);

    if (answer1Checked || answer2Checked || answer3Checked) {
      renderScreen(getRandomScreen(resultSuccessScreenElement, failTimeScreenElement, failTriesScreenElement));
    }
  }
});

returnButton.addEventListener(`click`, () => {
  renderScreen(welcomeScreenElement);
});

export default gameArtistScreenElement;
