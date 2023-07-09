import CssClasses from './types/enums';

export const addHover = (element?: Element | null, html?: Element | null) => {
  if (element) element.classList.add(CssClasses.HOVER_TABLE);
  if (html) html.classList.add(CssClasses.HOVER_HTML);
};

export const removeHover = (element: Element) =>
  element.classList.remove(CssClasses.HOVER_HTML, CssClasses.HOVER_TABLE);

export const addHoverForChildren = (children: Element[]) => {
  children.forEach((child) => {
    addHover(null, child);

    if (child.children.length !== 0) addHoverForChildren([...child.children]);
  });
};

export const getParsedLvlTargetId = (
  parsedLvlData: HTMLElement[],
  target: HTMLElement,
) => parsedLvlData.findIndex((child) => child === target);

export const createLetterSlicer = (word: string) => {
  let currLetterNum = 1;

  return () => {
    const letter = word.slice(0, currLetterNum);
    currLetterNum += 1;
    return {
      letter,
      currLetterNum,
    };
  };
};
