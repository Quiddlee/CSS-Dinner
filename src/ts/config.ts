import CssClasses from './types/enums';
import { IStartScreenData } from './types/interfaces';
import startImage from '../img/start-01.jpg';

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
export const START_PAGES: IStartScreenData[] = [
  {
    img: startImage,
    title: 'Welcome to css dinner!',
    description: `<span>🤚 IMPORTANT – PLEASE READ THIS RULES BEFORE START</span>
      <span>Embark on an exciting journey through the world of web development with CSS Selectors Game 🎮</span>
      <span>In this interactive series of levels, you will master the art of selecting HTML elements 🙌</span>
      <span>Unleash your inner coder as you tackle challenges and puzzles designed to teach you the ins and outs of CSS selectors 😎</span>`,
  },

  {
    img: startImage,
    title: 'Welcome to css dinner2!',
    description: `<span>🤚 IMPORTANT – PLEASE READ THIS RULES BEFORE START</span>
      <span>Embark on an exciting journey through the world of web development with CSS Selectors Game 🎮</span>
      <span>In this interactive series of levels, you will master the art of selecting HTML elements 🙌</span>
      <span>Unleash your inner coder as you tackle challenges and puzzles designed to teach you the ins and outs of CSS selectors 😎</span>`,
  },

  {
    img: startImage,
    title: 'Welcome to css dinner3!',
    description: `<span>🤚 IMPORTANT – PLEASE READ THIS RULES BEFORE START</span>
      <span>Embark on an exciting journey through the world of web development with CSS Selectors Game 🎮</span>
      <span>In this interactive series of levels, you will master the art of selecting HTML elements 🙌</span>
      <span>Unleash your inner coder as you tackle challenges and puzzles designed to teach you the ins and outs of CSS selectors 😎</span>`,
  },
];
