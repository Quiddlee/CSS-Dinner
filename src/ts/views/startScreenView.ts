import { clearParent } from './view';

import { IStartScreenData } from '../types/interfaces';

const parentElement = document.createElement('div');

const generateMarkup = (data: IStartScreenData) => `
<dialog class="modal">
  <div class="modal__left">
    <img class="modal__img" src=${data.img} alt="">
  </div>
  <article class="modal__right">
    <h2 class="heading">${data.title}</h2>
    <p class="description">
      ${data.description}
    </p>

    <div class="modal__controls">
      <button class="modal__btn--skip btn btn--rounded">Skip</button>
      <button class="modal__btn--continue btn btn--rounded">Continue</button>
    </div>
  </article>
</dialog>`;

export const addHandler = () => {
  parentElement.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const continueButtonNotClicked = !target.classList.contains(
      'modal__btn--continue',
    );

    if (continueButtonNotClicked) return;

    // eslint-disable-next-line no-console
    console.log('continue');
  });

  parentElement.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const skipButtonNotClicked = !target.classList.contains('modal__btn--skip');

    if (skipButtonNotClicked) return;

    // eslint-disable-next-line no-console
    console.log('skip');
  });
};

export const render = (data: IStartScreenData) => {
  clearParent(parentElement);
  const markup = generateMarkup(data);
  return parentElement.insertAdjacentHTML('afterbegin', markup);
};

export const init = () => {
  parentElement.classList.add('start-screen');
  return parentElement;
};
