import { generateLineNumbersMarkup } from './view';
import CssClasses from '../types/enums';

export const parentElement = document.createElement('input');
const submitBtn = document.createElement('button');

const handleInputChange = () => {
  if (parentElement.value === '')
    parentElement.classList.add(CssClasses.INPUT_STROBE);
  else parentElement.classList.remove(CssClasses.INPUT_STROBE);
};

const createForm = () => {
  parentElement.classList.add(
    CssClasses.CSS_EDITOR_INPUT,
    CssClasses.INPUT_STROBE,
  );

  parentElement.type = 'Text';
  parentElement.placeholder = 'Type in a CSS selector';
  parentElement.addEventListener('input', handleInputChange);

  submitBtn.classList.add(CssClasses.CSS_EDITOR_ENTER_BTN);
  submitBtn.textContent = 'Enter';
};

const createEditor = () => {
  const editor = document.createElement('article');
  editor.classList.add(CssClasses.CSS_EDITOR_EDITOR_AREA);

  createForm();

  editor.append(parentElement, submitBtn);
  return editor;
};

const toggleBtnActive = () => {
  submitBtn.blur();
  submitBtn.classList.toggle('clicked');
};

const keyIsNotValid = (e: KeyboardEvent) => e.repeat || e.key !== 'Enter';

export const render = () => {
  parentElement.value = '';
  parentElement.classList.add(CssClasses.INPUT_STROBE);
};

export const addHandler = (handler: () => void) => {
  window.addEventListener('keydown', (e) => {
    if (keyIsNotValid(e)) return;

    toggleBtnActive();
    handler();
  });
  window.addEventListener('keyup', (e) => {
    if (keyIsNotValid(e)) return;

    toggleBtnActive();
  });
  submitBtn.addEventListener('click', handler);
};

export const init = () => {
  const cssEditorWrapper = document.createElement('section');
  cssEditorWrapper.classList.add(CssClasses.CSS_EDITOR, CssClasses.CODE);

  const lineNums = generateLineNumbersMarkup(CssClasses.CSS_EDITOR_LINE_NUMS);
  const editor = createEditor();

  cssEditorWrapper.append(lineNums, editor);
  return cssEditorWrapper;
};
