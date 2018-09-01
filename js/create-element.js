// Создание dom-элемента по переданной в виде строки разметке
const getElementFromTemplate = (template) => {
  let element = document.createElement(`div`);
  element.innerHTML = template;

  return element;
};

export default getElementFromTemplate;
