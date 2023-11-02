import CssClasses from './types/enums';
import { IStartScreenData } from './types/interfaces';
import startImage1 from '../img/start-01.jpg';
import startImage2 from '../img/start-02.jpg';
import startImage3 from '../img/start-03.jpg';
import startImage4 from '../img/start-04.jpg';
import startImage5 from '../img/start-05.jpg';
import startImage6 from '../img/start-06.jpg';

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
    img: startImage1,
    title: 'WELCOME TO CSS DINNER!',
    description: `
      <span>🤚 IMPORTANT – PLEASE READ THIS RULES BEFORE START</span>
      <span>Embark on an exciting journey through the world of web development with CSS Selectors Game 🎮</span>
      <span>In this interactive series of levels, you will master the art of selecting HTML elements 🙌</span>
      <span>Unleash your inner coder as you tackle challenges and puzzles designed to teach you the ins and outs of CSS selectors 😎</span>
    `,
  },

  {
    img: startImage2,
    title: 'INSPECT ELEMENTS AND HTML CODE',
    description: `
      <span>Your task is to select the elements that is dancing 💃</span>
      <span>To improve your understanding, you can hover over any element on the table. This will show you the corresponding HTML code in the viewer. 👌</span>
      <span>Additionally, you can hover over the HTML code to highlight the element on the table.</span>
      <span>This feature helps you make the connection between CSS selectors and the actual HTML elements 😉.</span>
    `,
  },

  {
    img: startImage3,
    title: 'SELECT THE DANCING ELEMENTS',
    description: `
      <span>As already been said Your main goal is to select all the elements on the table that are dancing (strobe). 😃</span>
      <span>To do this, simply type the CSS selector into the input field provided. With green gradient background 😍</span>
    `,
  },

  {
    img: startImage4,
    title: 'GET HELP WITH THE BUTTON',
    description: `
      <span>If you're stuck or need a hint 😱, don't worry! You can press the "Help I’m stuck" button, which will reveal the correct CSS selector for the dancing elements.</span>
      <span>And also describes when it should be used and how it should be used 🙂</span>
    `,
  },

  {
    img: startImage5,
    title: 'CHOOSE YOUR LEVEL',
    description: `
      <span>In the right panel, you have the option to select the level that you want.</span>
      <span>There are different kind of levels to challenge your CSS selection skills 💪.</span>
    `,
  },

  {
    img: startImage6,
    title: 'RESET YOUR PROGRESS',
    description: `
      <span>If you wish to start over or reset your progress, there's a handy "Reset Progress" 💫 option available in the right panel.</span>
      <span>Enjoy the CSS Selecting Game and have a blast mastering your CSS selection skills! 🤠</span>
    `,
  },
];
