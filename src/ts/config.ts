import CssClasses from './types/enums';

export const DEFAULT_LEVEL = 0;
export const EDITOR_NUM_OF_LINES = 20;
export const ALLOWED_ELEMENTS_TO_HOVER = ['PLATE', 'APPLE', 'BENTO'];
export const HTML_EDITOR_PARENT_TAG = '<div class="table"></div>';
export const LEVELS_HEADER = 'Choose a level';
export const RESET_PROGRESS_BTN_TEXT = 'Reset Progress';
export const FORBIDDEN_SELECTOR = '.strobe';
export const FANCY_ID = 'fancy';
export const HTML_TAGS: Map<string, string> = new Map([
  ['PLATE', '<plate></plate>'],
  ['fancy', `<plate id="${FANCY_ID}"></plate>`],
  ['APPLE', '<apple></apple>'],
  ['small', `<apple class="${CssClasses.SMALL}"></apple>`],
  ['BENTO', '<bento></bento>'],
]);
