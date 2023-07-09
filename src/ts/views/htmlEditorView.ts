import { LevelElemsArr, LevelElem, MouseEventHandler } from '../types/type';
import { clearParent, generateLineNumbersMarkup } from './view';
import CssClasses from '../types/enums';
import { HTML_EDITOR_PARENT_TAG } from '../config';

export const parentElement = document.createElement('article');
export const parsedLevelMarkup: HTMLElement[] = [];
let data: LevelElemsArr;

export const insertOpenCloseTags = (tag: string, parent: HTMLElement) => {
  const bracketIndex = tag.indexOf('>') + 1;

  const openTag = tag.slice(0, bracketIndex);
  const closedTag = tag.slice(bracketIndex);

  parent.insertAdjacentText('afterbegin', openTag);
  parent.insertAdjacentText('beforeend', closedTag);
};

const parseLevelIntoPreviewMarkup = ([
  elem,
  children,
]: LevelElem): HTMLDivElement => {
  const clearElem = elem.replace(' class="strobe"', '').replace(' strobe', '');
  const parent = document.createElement('div');
  parent.classList.add(
    CssClasses.PADDING_LEFT_20,
    CssClasses.HTML_EDITOR_HTML_BLOCK,
  );
  parsedLevelMarkup.push(parent);

  if (!Array.isArray(children)) {
    parent.textContent = clearElem;
    return parent;
  }

  parent.append(parseLevelIntoPreviewMarkup(children));
  insertOpenCloseTags(clearElem, parent);

  return parent;
};

const generateMarkup = () => data.map(parseLevelIntoPreviewMarkup);

export const render = (renderData: LevelElemsArr) => {
  data = renderData;

  clearParent(parentElement);
  const markup = generateMarkup();
  parentElement.append(...markup);
  insertOpenCloseTags(HTML_EDITOR_PARENT_TAG, parentElement);
};

export const addHoverHandlers = (
  handlerIn: MouseEventHandler,
  handlerOut: MouseEventHandler,
) => {
  parentElement.addEventListener('mouseover', handlerIn);
  parentElement.addEventListener('mouseout', handlerOut);
};

export const init = () => {
  const htmlEditorWrapper = document.createElement('section');
  htmlEditorWrapper.classList.add(CssClasses.HTML_EDITOR, CssClasses.CODE);
  parentElement.classList.add(CssClasses.HTML_EDITOR_HTML);

  const lineNums = generateLineNumbersMarkup(CssClasses.HTML_EDITOR_LINE_NUMS);

  htmlEditorWrapper.append(lineNums, parentElement);
  return htmlEditorWrapper;
};
