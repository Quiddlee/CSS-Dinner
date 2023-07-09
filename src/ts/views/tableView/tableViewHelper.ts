import { HTML_TAGS } from '../../config';
import CssClasses from '../../types/enums';

export const helperElement = document.createElement('span');
let helperPrevPosXRem = 0;
let helperPrevPosYRem = 0;
let helperOpacityTimer = 0;
let isBlocked = false;

const generateHelperText = (tagName: string, className: string, id: string) =>
  HTML_TAGS.get(id) ||
  HTML_TAGS.get(className.replace('strobe', '').trim()) ||
  HTML_TAGS.get(tagName) ||
  '';

export const showHelper = (targetElement: HTMLElement) => {
  helperElement.textContent = generateHelperText(
    targetElement.tagName,
    targetElement.className,
    targetElement.id,
  );
  helperElement.classList.remove(CssClasses.HIDDEN);
};

export const hideHelper = () => {
  if (helperOpacityTimer) clearTimeout(helperOpacityTimer);

  helperElement.classList.add(CssClasses.HELPER_CLOSED);
  isBlocked = true;

  helperOpacityTimer = setTimeout(() => {
    helperElement.classList.add(CssClasses.HIDDEN);
  }, 1000);
};

export const moveHelper = (targetElement: HTMLElement) => {
  if (helperOpacityTimer) clearTimeout(helperOpacityTimer);
  isBlocked = false;

  const { left, top, width } = targetElement.getBoundingClientRect();
  const { scrollY } = window;

  const root = document.documentElement;
  const halfElementWidth = width / 2;
  const viewportToElementDifference = top / 1.3;
  const currPosXRem = (left + halfElementWidth) / 10;
  const currPosYRem = (viewportToElementDifference + scrollY) / 10;
  const inertiaXReducer = 8;
  const inertiaYReducer = 5;
  const coordXInertia = (currPosXRem - helperPrevPosXRem) / inertiaXReducer;
  const coordYInertia = (currPosYRem - helperPrevPosYRem) / inertiaYReducer;

  root.style.setProperty('--helper-transition', '.35s');

  helperElement.style.left = `${currPosXRem + coordXInertia}rem`;
  helperElement.style.top = `${currPosYRem + coordYInertia}rem`;
  helperElement.style.filter = 'blur(.1rem)';

  helperElement.ontransitionend = (e) => {
    if (e.propertyName === 'left') {
      root.style.setProperty('--helper-transition', '.6s');
      helperElement.style.left = `${currPosXRem}rem`;
      helperElement.style.top = `${currPosYRem}rem`;
      helperElement.style.filter = '';
    }

    if (!isBlocked) helperElement.classList.remove(CssClasses.HELPER_CLOSED);
  };

  helperPrevPosXRem = currPosXRem;
  helperPrevPosYRem = currPosYRem;
};

export const helperInit = () => {
  helperElement.style.left = `${20}rem`;
  helperElement.style.top = `${20}rem`;
};
