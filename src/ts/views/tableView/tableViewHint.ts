import { IHintExplanationData } from '../../types/interfaces';

export const parentElement = document.createElement('div');

const generateMarkup = (data: IHintExplanationData) => `
  <article class="hint">
    <h2 class="hint__title">${data.title}</h2>
    <p class="hint__description">
      ${data.description}
    </p>
  </article>
`;

const generateHintButtonMarkup = () => `
  <button class="table-wrapper__hint-btn btn btn--rounded">Help, I'm stuck!</button>
`;

export const render = (data?: IHintExplanationData) => {
  if (!data) return;
  const markup = generateMarkup(data);
  parentElement.insertAdjacentHTML('beforeend', markup);
};

export const hintInit = () => {
  const hintButtonElement = generateHintButtonMarkup();
  parentElement.insertAdjacentHTML('afterbegin', hintButtonElement);
  parentElement.classList.add('hint-container');
};
