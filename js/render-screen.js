const mainElement = document.querySelector(`.main`);

// Отрисовка экрана по переданному dom-элементу
const renderScreen = (screenElement) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(screenElement);
};

export default renderScreen;
