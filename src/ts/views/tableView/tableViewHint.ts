import { IHintExplanationData } from '../../types/interfaces';

export const parentElement = document.createElement('div');
export const hintButtonElement = document.createElement('button');

const generateMarkup = (data: IHintExplanationData) => `
  <article class="hint">
    <div class="hint__header">
      <h2 class="hint__title">${data.title}</h2>
      <button class="hint__close btn">x</button>
    </div>
    <p class="hint__description">
      ${data.description}
    </p>
  </article>
`;

const renderHintButton = () => {
  hintButtonElement.classList.add(
    'table-wrapper__hint-btn',
    'btn',
    'btn--rounded',
  );

  hintButtonElement.textContent = 'Допоможіть!';
};

export const render = (data?: IHintExplanationData) => {
  if (!data) return;
  const markup = generateMarkup(data);
  parentElement.insertAdjacentHTML('beforeend', markup);
};

export const renderButton = () => {
  parentElement.append(hintButtonElement);
};

export const unmount = () => {
  const hint = parentElement.children[0] as HTMLElement | null;

  if (!hint || !hint?.classList.contains('hint')) return;

  hint.style.animation = 'hint-fade-out .45s cubic-bezier(0.25, 1.55, 0.65, 1)';
  hint.addEventListener('animationend', hint.remove);
};

export const unmountButton = () => {
  hintButtonElement.remove();
};

parentElement.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (target.className.includes('hint__close')) unmount();
});

export const hintInit = () => {
  renderHintButton();
  parentElement.append(hintButtonElement);
  parentElement.classList.add('hint-container');
};
