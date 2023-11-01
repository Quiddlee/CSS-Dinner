import { clearParent } from './view';

import startImage from '../../img/start-01.jpg';

const parentElement = document.createElement('div');

const generateMarkup = () => `
<div class="modal">
  <div class="modal__left">
    <img class="modal__img" src=${startImage} alt="">
  </div>
  <div class="modal__right">
    <h2 class="heading">Welcome to css dinner!</h2>
    <p class="description">
      <span>🤚 IMPORTANT – PLEASE READ THIS RULES BEFORE START</span>
      <span>Embark on an exciting journey through the world of web development with CSS Selectors Game 🎮</span>
      <span>In this interactive series of levels, you will master the art of selecting HTML elements 🙌</span>
      <span>Unleash your inner coder as you tackle challenges and puzzles designed to teach you the ins and outs of CSS selectors 😎</span>
    </p>
  </div>
</div>`;

export const render = () => {
  clearParent(parentElement);

  const markup = generateMarkup();

  return parentElement.insertAdjacentHTML('afterbegin', markup);
};

export const init = () => {
  parentElement.classList.add('start-screen');

  const markup = generateMarkup();
  parentElement.insertAdjacentHTML('afterbegin', markup);

  return parentElement;
};
