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
export const LEVELS_HEADER = 'Виберіть рівень';
export const RESET_PROGRESS_BTN_TEXT = 'Скинути прогрес';
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
    title: 'ЛАСКАВО ПРОСИМО ДО CSS ВЕЧЕРІ!',
    description: `
    🤚 ВАЖЛИВО – БУДЬ ЛАСКА, ОЗНАЙОМТЕСЯ З ЦИМИ ПРАВИЛАМИ ПЕРЕД ПОЧАТКОМ
    <br><br>
    Відправтеся в чудову подорож світом розробки веб-сайтів з грою CSS Selector 🎮
    <br><br>
    У цій інтерактивній серії рівнів, ви опануєте мистецтво вибору елементів HTML 🙌
    <br><br>
    Випустіть свого внутрішнього кодера, коли ви виконуєте виклики та загадки, розроблені для навчання основ CSS селекторів 😎
  `,
  },

  {
    img: startImage2,
    title: 'ОГЛЯД ЕЛЕМЕНТІВ ТА HTML КОДУ',
    description: `
    Ваше завдання - вибрати елементи, які танцюють 💃
    <br><br>
    Щоб покращити розуміння, ви можете навести курсор на будь-який елемент на столі. Це покаже вам відповідний HTML код у вікні перегляду. 👌
    <br><br>
    Додатково, ви можете навести курсор на HTML код, щоб виділити елемент на столі.
    <br><br>
    Ця функція допомагає вам зробити зв'язок між CSS селекторами та фактичними HTML елементами 😉.
  `,
  },

  {
    img: startImage3,
    title: 'ВИБЕРІТЬ ТАНЦЮЮЧІ ЕЛЕМЕНТИ',
    description: `
    Як вже було сказано, ваше основне завдання - вибрати всі елементи на столі, які танцюють (strobe). 😃
    <br><br>
    Щоб зробити це, просто введіть CSS селектор у надане поле вводу. З зеленим градієнтним фоном 😍
    <br><br>
    <br><br>
  `,
  },

  {
    img: startImage4,
    title: 'ОТРИМАЙТЕ ДОПОМОГУ З КНОПКОЮ',
    description: `
    Якщо ви застрягли або потребуєте підказки 😱, не хвилюйтеся! Ви можете натиснути кнопку "Допоможіть, я застряг", яка відкриє правильний CSS селектор для танцюючих елементів.
    <br><br>
    А також описує, коли його слід використовувати та як його слід використовувати 🙂
    <br><br>
    <br><br>
  `,
  },

  {
    img: startImage5,
    title: 'ВИБЕРІТЬ СВІЙ РІВЕНЬ',
    description: `
    У правій панелі ви маєте можливість вибрати рівень, який вам потрібен.
    <br><br>
    Є різні види рівнів, щоб викликати ваши навички вибору CSS 💪.
    <br><br>
    <br><br>
  `,
  },

  {
    img: startImage6,
    title: 'СКИНУТИ ПРОГРЕСС',
    description: `
      Якщо ви хочете почати спочатку або скинути свій прогрес, на панелі справа є зручна опція «Скинути прогрес» 💫.
      <br><br>
      Насоложуйтеся грою в виборі CSS та вдосконалюйте свої навички вибору CSS! 🤠
      <br><br>
      <br><br>
    `,
  },
];
