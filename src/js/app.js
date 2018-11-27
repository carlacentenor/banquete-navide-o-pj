/* eslint linebreak-style: ["error", "windows"] */
const radioBtnCount = document.querySelector('#radiotipo5');
const radioBtnSize = document.querySelector('#radiotipo6');
const radioPizzaSelect = document.querySelector('#radiotipo4');
const boxPizzaFavoriteBig = document.querySelector('#box-pizza-favorite-big');
const boxPizzaFavoriteFamily = document.querySelector('#box-pizza-favorite-family');
const borderPreview = document.querySelectorAll('.border-preview');

const resetBorderGrey = () => {
  for (let i = 0; i < borderPreview.length; i += 1) {
    borderPreview[i].classList.add('pizza__border--desactive');
    borderPreview[i].classList.remove('pizza__border');
  }
};

const activeBorderRadioButtonPizza = (id) => {
  resetBorderGrey();
  document.querySelector(`#${id}`).classList.remove('pizza__border--desactive');
  document.querySelector(`#${id}`).classList.add('pizza__border');
};

const showSectionPizzasFavoritesSizes = (count) => {
  if (count === 'Grande') {
    boxPizzaFavoriteFamily.classList.add('pizza--hide');
    boxPizzaFavoriteBig.classList.remove('pizza--hide');
  } else {
    boxPizzaFavoriteBig.classList.add('pizza--hide');
    boxPizzaFavoriteFamily.classList.remove('pizza--hide');
  }
};

// get Value of Radio Button
const getValueRadio = (name) => {
  const size = document.querySelector(`input[name="${name}"]:checked`).value;
  return size;
};

// function that hides pizzas
const viewPizzas = () => {
  const valueSelection = getValueRadio('count');
//   showSectionPizzasFavoritesSizes(valueSelection);
};

const viewPizzasSize = () => {
  const valueSelectionSize = getValueRadio('tipo');
  showSectionPizzasFavoritesSizes(valueSelectionSize);
};

const viewSelectPizza = (event) => {
  const idElementBorder = event.target.nextElementSibling.firstElementChild.id;
  activeBorderRadioButtonPizza(idElementBorder); 
};

// Eventos
radioBtnCount.addEventListener('change', viewPizzas);
radioBtnCount.addEventListener('change', viewPizzas);
radioBtnSize.addEventListener('change', viewPizzasSize);
radioPizzaSelect.addEventListener('change', viewSelectPizza);

showSectionPizzasFavoritesSizes('Grande');
