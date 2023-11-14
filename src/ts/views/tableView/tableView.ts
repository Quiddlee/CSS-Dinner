import {
  clearParent,
  createElementFromString,
  generateCheckMarkIcon,
} from '../view';
import { LevelElem, MouseEventHandler } from '../../types/type';
import CssClasses from '../../types/enums';
import { TableData } from '../../types/interfaces';
import { helperElement, helperInit } from './tableViewHelper';
import { levelTitle, updateTitle } from './tableViewTitle';
import {
  hintButtonElement,
  hintInit,
  parentElement as hintParentElement,
} from './tableViewHint';
import {
  generateMobileStaticMarkup,
  mobileNavNext,
  mobileNavPrev,
} from './tableMobileNav';

const tableWrapper = document.createElement('section');
export const parentElement = document.createElement('article');
export const parsedLevelElements: HTMLElement[] = [];
const checkmark = createElementFromString(generateCheckMarkIcon(false));
let data: TableData;

export const generateWinMarkup = () => {
  const win = document.createElement('div');
  win.classList.add(CssClasses.TABLE_WRAPPER_TABLE_WIN);
  win.textContent = 'You Win! 🎉🎉🎉';
  return win;
};

export const parseLevelIntoElements = ([
  elem,
  children,
]: LevelElem): HTMLElement => {
  const parent = createElementFromString(elem);
  parsedLevelElements.push(parent);

  parent.classList.add(CssClasses.TABLE_ITEMS_FADE_IN);
  parent.addEventListener(
    'animationend',
    () => parent.classList.remove(CssClasses.TABLE_ITEMS_FADE_IN),
    { once: true },
  );

  if (!Array.isArray(children)) {
    return parent;
  }

  parent.append(parseLevelIntoElements(children));
  return parent;
};

const generateMarkup = () =>
  data.levelData.elements.map(parseLevelIntoElements);

export const render = (renderData: TableData) => {
  data = renderData;

  clearParent(parentElement);

  if (data.levelData.title === 'win') {
    const markup = generateWinMarkup();
    parentElement.append(markup);
    updateTitle('Well done!');
    hintParentElement.classList.add(CssClasses.HIDDEN);
    return;
  }

  updateTitle(data.levelData.title);
  hintParentElement.classList.remove(CssClasses.HIDDEN);

  const checkMarkData = data.completedLevels.find(
    (lvl) => lvl.level === data.currLevel,
  );
  checkmark.classList.remove(CssClasses.CHECK_ICON_ACTIVE);

  if (checkMarkData) {
    checkmark.classList.remove(CssClasses.CHECK_ICON_HINT);
    checkmark.classList.add(CssClasses.CHECK_ICON_ACTIVE);
  } else checkmark.classList.remove(CssClasses.CHECK_ICON_ACTIVE);

  if (checkMarkData?.isHintUsed) {
    checkmark.classList.add(CssClasses.CHECK_ICON_HINT);
  } else checkmark.classList.remove(CssClasses.CHECK_ICON_HINT);

  tableWrapper.append(checkmark);

  const markup = generateMarkup();
  parentElement.append(...markup);
};

const generateTableEdgeMarkup = () => {
  const tableEdge = document.createElement('div');
  const tableLegFirst = document.createElement('span');
  const tableLegSecond = document.createElement('span');

  tableLegFirst.classList.add(CssClasses.TABLE_WRAPPER_LEG_FIRST);
  tableLegSecond.classList.add(CssClasses.TABLE_WRAPPER_LEG_SECOND);
  tableEdge.classList.add(CssClasses.TABLE_WRAPPER_EDGE);

  tableEdge.append(tableLegFirst, tableLegSecond);

  return tableEdge;
};

export const addHoverHandlers = (
  handlerIn: MouseEventHandler,
  handlerOut: MouseEventHandler,
) => {
  parentElement.addEventListener('mouseover', handlerIn);
  parentElement.addEventListener('mouseout', handlerOut);
};

export const addHintHandler = (handler: MouseEventHandler) => {
  hintButtonElement.addEventListener('click', handler);
};

export const addMobileNavigationHandlers = (
  handlerNext: MouseEventHandler,
  handlerPrev: MouseEventHandler,
) => {
  mobileNavNext.addEventListener('click', handlerNext);
  mobileNavPrev.addEventListener('click', handlerPrev);
};

export const init = () => {
  const tableEdge = generateTableEdgeMarkup();
  const mobileNavigation = generateMobileStaticMarkup();

  tableWrapper.classList.add(CssClasses.TABLE_WRAPPER);
  parentElement.classList.add(CssClasses.TABLE_WRAPPER_TABLE);
  helperElement.classList.add(
    CssClasses.HELPER,
    CssClasses.CODE,
    CssClasses.HELPER_CLOSED,
    CssClasses.HIDDEN,
  );
  levelTitle.classList.add(CssClasses.TABLE_WRAPPER_TITLE);
  checkmark.classList.add(
    CssClasses.TABLE_WRAPPER_MOBILE_CHECKMARK,
    CssClasses.CHECK_ICON,
  );

  hintInit();
  helperInit();

  document.documentElement.append(helperElement);
  tableWrapper.append(
    mobileNavigation,
    levelTitle,
    hintParentElement,
    parentElement,
    tableEdge,
  );

  return tableWrapper;
};
