import * as table from '../views/tableView/tableView';
import * as cssEditor from '../views/cssEditorView';
import { parentElement } from '../views/cssEditorView';
import * as model from '../model/model';
import * as app from '../views/appView';
import CssClasses from '../types/enums';
import { renderLevel } from './controller';
import { FORBIDDEN_SELECTOR } from '../config';

const controlCssEditor = async () => {
  const tableElem = table.parentElement;
  const userSubmit = cssEditor.parentElement.value;
  const rightElements = tableElem.querySelectorAll('.strobe');
  let userSelection: NodeListOf<HTMLElement> | null = null;

  try {
    userSelection = tableElem.querySelectorAll(userSubmit);
  } catch (e) {
    // block
  }

  if (userSubmit === FORBIDDEN_SELECTOR || !userSelection?.length) {
    app.element.classList.add(CssClasses.SHAKE);
    app.element.onanimationend = () =>
      app.element.classList.remove(CssClasses.SHAKE);
    return;
  }

  if (userSelection.length !== rightElements.length) {
    userSelection.forEach((elem) => {
      const currElem = elem;

      currElem.classList.add(CssClasses.SHAKE);
      currElem.onanimationend = () =>
        currElem.classList.remove(CssClasses.SHAKE);
    });
    return;
  }

  const animationQueue: Set<Promise<'_'>> = new Set();

  rightElements.forEach((elem) => {
    elem.classList.add('fade-out');

    const promiseFadeOutAnimation = new Promise<'_'>((resolve) => {
      elem.addEventListener(
        'animationend',
        () => {
          resolve('_');
          elem.classList.remove('fade-out');
        },
        { once: true },
      );
    });

    animationQueue.add(promiseFadeOutAnimation);
  });

  const hintBtnElement = document.querySelector(
    `.${CssClasses.TABLE_WRAPPER_HINT_BTN}`,
  ) as HTMLElement;
  const isHintUsed = !hintBtnElement;

  model.addCompletedLevel({
    isHintUsed,
    level: model.state.currLevel,
  });
  model.setLevel(model.state.currLevel + 1);
  model.saveState();

  cssEditor.parentElement.value = '';
  parentElement.classList.add(CssClasses.INPUT_STROBE);

  await Promise.all(animationQueue);

  if (model.state.levelData) renderLevel();
};

export default controlCssEditor;
