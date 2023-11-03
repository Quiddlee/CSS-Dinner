import { EDITOR_NUM_OF_LINES } from '../config';
import CssClasses from '../types/enums';

export const clearParent = (parent: HTMLElement) => {
  const element = parent;
  element.innerHTML = '';
};

export const generateLineNumbersMarkup = (...cssClasses: CssClasses[]) => {
  const lineNumbers = document.createElement('aside');
  let markup = '';

  for (let i = 0; i < EDITOR_NUM_OF_LINES; i += 1) {
    markup += `<p>${i + 1}</p>`;
  }

  lineNumbers.insertAdjacentHTML('afterbegin', markup);
  lineNumbers.classList.add(
    CssClasses.EDITOR_LINE_NUMBERS,
    ...(cssClasses || ''),
  );

  return lineNumbers;
};

export const createElementFromString = (html: string) => {
  const dummy = document.createElement('div');
  dummy.innerHTML = html.trim();
  return dummy.firstElementChild as HTMLElement;
};

export const generateCheckMarkIcon = (
  isHintUsed: boolean,
  activeClass?: string,
) => `
<svg class="${CssClasses.CHECK_ICON} ${
  isHintUsed ? CssClasses.CHECK_ICON_HINT : ''
} ${
  activeClass || ''
}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="12"  />
  <rect class="${
    CssClasses.CHECK_ICON_FIRST_RECT
  }" x="6.61426" y="8.44629" width="10.0038" height="4.00786" rx="1" transform="rotate(45 6.61426 8.44629)" />
  <rect class="${
    CssClasses.CHECK_ICON_SECOND_RECT
  }" x="-5.3" y="16.7" width="13.98" height="4.00786" rx="1" transform="rotate(-45)" />
</svg>
`;

export const update = (
  parentElement: HTMLElement,
  generateMarkup: () => string,
) => {
  const newMarkup = generateMarkup();

  const virtualDom = document.createRange().createContextualFragment(newMarkup);
  const newElements = virtualDom.querySelectorAll('*');
  const currElements = parentElement.querySelectorAll('*');

  newElements.forEach((newElem, i) => {
    const currElem = currElements[i] as HTMLElement;

    if (newElem.isEqualNode(currElem)) return;

    if ((newElem.firstChild as Node)?.nodeValue?.trim() !== '')
      currElem.innerHTML = newElem.innerHTML;

    [...newElem.attributes].forEach(({ name, value }) =>
      currElem.setAttribute(name, value),
    );
  });
};
