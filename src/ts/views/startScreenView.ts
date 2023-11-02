import { clearParent, update } from './view';

import { IStartScreenData } from '../types/interfaces';
import { START_PAGES } from '../config';

const parentElement = document.createElement('div');
let currentPage = 0;

const generateMarkup = (data: IStartScreenData) => {
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === START_PAGES.length - 1;

  return `
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
          <button class="${
            isFirstPage ? 'hidden' : ''
          } modal__btn--empty btn btn--rounded">Back</button>
          <button class="modal__btn--empty btn btn--rounded">Skip</button>
          <button class="modal__btn--filled btn btn--rounded">${
            isLastPage ? 'Start' : 'Continue'
          }</button>
        </div>
      </article>
    </dialog>`;
};

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
  currentPage = newPage;

  if (parentElement.children.length !== 0)
    return update(parentElement, () => generateMarkup(data));

  clearParent(parentElement);
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
