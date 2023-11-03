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
      🤚 IMPORTANT – PLEASE READ THIS RULES BEFORE START
      <br><br>
      Embark on an exciting journey through the world of web development with CSS Selectors Game 🎮
      <br><br>
      In this interactive series of levels, you will master the art of selecting HTML elements 🙌
      <br><br>
      Unleash your inner coder as you tackle challenges and puzzles designed to teach you the ins and outs of CSS selectors 😎
    `,
  },

  {
    img: startImage2,
    title: 'INSPECT ELEMENTS AND HTML CODE',
    description: `
      Your task is to select the elements that is dancing 💃
      <br><br>
      To improve your understanding, you can hover over any element on the table. This will show you the corresponding HTML code in the viewer. 👌
      <br><br>
      Additionally, you can hover over the HTML code to highlight the element on the table.
      <br><br>
      This feature helps you make the connection between CSS selectors and the actual HTML elements 😉.
    `,
  },

  {
    img: startImage3,
    title: 'SELECT THE DANCING ELEMENTS',
    description: `
      As already been said Your main goal is to select all the elements on the table that are dancing (strobe). 😃
      <br><br>
      To do this, simply type the CSS selector into the input field provided. With green gradient background 😍
      <br><br>
      <br><br>
    `,
  },

  {
    img: startImage4,
    title: 'GET HELP WITH THE BUTTON',
    description: `
      If you're stuck or need a hint 😱, don't worry! You can press the "Help I’m stuck" button, which will reveal the correct CSS selector for the dancing elements.
      <br><br>
      And also describes when it should be used and how it should be used 🙂
      <br><br>
      <br><br>
    `,
  },

  {
    img: startImage5,
    title: 'CHOOSE YOUR LEVEL',
    description: `
      In the right panel, you have the option to select the level that you want.
      <br><br>
      There are different kind of levels to challenge your CSS selection skills 💪.
      <br><br>
      <br><br>
    `,
  },

  {
    img: startImage6,
    title: 'RESET YOUR PROGRESS',
    description: `
      If you wish to start over or reset your progress, there's a handy "Reset Progress" 💫 option available in the right panel.
      <br><br>
      Enjoy the CSS Selecting Game and have a blast mastering your CSS selection skills! 🤠
      <br><br>
      <br><br>
    `,
  },
];
