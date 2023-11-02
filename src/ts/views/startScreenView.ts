import { clearParent } from './view';

import { IStartScreenData } from '../types/interfaces';
import { START_PAGES } from '../config';

const parentElement = document.createElement('div');
let currentPage = 0;

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
      ${
        currentPage !== 0
          ? '<button class="modal__btn--empty btn btn--rounded">Back</button>'
          : ''
      }
      <button class="modal__btn--empty btn btn--rounded">Skip</button>
      <button class="modal__btn--filled btn btn--rounded">${
        currentPage === START_PAGES.length - 1 ? 'Start' : 'Continue'
      }</button>
    </div>
  </article>
</dialog>`;

export const addHandlerNavigate = (
  handler: (currentPage: number, isBack: boolean) => void,
) => {
  parentElement.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const notNavigationButtons =
      target.textContent !== 'Back' &&
      target.textContent !== 'Continue' &&
      target.textContent !== 'Start';
    const isBackBtnClicked = target.textContent === 'Back';

    if (notNavigationButtons) return;

    handler(currentPage, isBackBtnClicked);
  });
};

export const addHandlerSkip = (handler: () => void) => {
  parentElement.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const skipButtonNotClicked =
      !target.classList.contains('modal__btn--empty') ||
      target.textContent !== 'Skip';

    if (skipButtonNotClicked) return;

    handler();
  });
};

export const render = (data: IStartScreenData, newPage: number) => {
  clearParent(parentElement);
  currentPage = newPage;
  const markup = generateMarkup(data);
  return parentElement.insertAdjacentHTML('afterbegin', markup);
};

export const unmount = () => {
  parentElement.parentNode?.removeChild(parentElement);
  document.body.style.overflow = '';
};

export const init = () => {
  document.body.style.overflow = 'hidden';
  parentElement.classList.add('start-screen');
  return parentElement;
};
