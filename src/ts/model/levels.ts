import CssClasses from '../types/enums';
import { LevelItem } from '../types/interfaces';
import { FANCY_ID } from '../config';

const LEVELS: LevelItem[] = [
  {
    title: 'Виберіть тарілки',
    hint: 'plate',
    hintExplanation: {
      title: 'Не переймайтеся, у вас все вийде!',
      description: `
        Зараз ви вивчите селектори CSS! Селектори - це те, як ви вибираєте елемент, до якого застосовуються стилі.
        <br>
        <br>

        1. - Правило CSS
        <br>
        <br>

        p {
        <br>
        margin-bottom: 12px;
        <br>
        }

        <br>
        <br>
        Тут "p" - це селектор (вибирає всі елементи < p >) і застосовує стиль margin-bottom.
        <br>
        <br>

        Щоб грати, введіть селектор CSS у редактор нижче, щоб вибрати правильні елементи на столі. Якщо ви вгадаєте, ви перейдете на наступний рівень.

        <br>
        <br>
        Наведіть вказівник на елементи на столі, щоб побачити їх HTML-маркування.
      `,
    },
    elements: [
      [`<plate class="${CssClasses.STROBE}" />`],
      [`<plate class="${CssClasses.STROBE}" />`],
    ],
  },
  {
    title: 'Виберіть яблука',
    hint: 'apple',
    hintExplanation: {
      title: 'Не переймайтеся, у вас все вийде!',
      description: `
        Зараз ви вивчите селектори CSS! Селектори - це те, як ви вибираєте елемент, до якого застосовуються стилі.

        <br>
        <br>
        1. - Правило CSS
        <br>
        <br>
        p {
        <br>
           margin-bottom: 12px;
        <br>
        }
        <br>
        <br>
        Тут "p" - це селектор (вибирає всі елементи < p >) і застосовує стиль margin-bottom.
      `,
    },
    elements: [
      [`<apple class="${CssClasses.STROBE}" />`],
      [`<plate />`],
      [`<apple class="${CssClasses.STROBE}" />`],
    ],
  },
  {
    title: 'Виберіть ланч-бокс',
    hint: 'bento',
    hintExplanation: {
      title: 'Не переймайтеся, у вас все вийде!',
      description: `
        Зараз ви вивчите селектори CSS! Селектори - це те, як ви вибираєте елемент, до якого застосовуються стилі.

        <br>
        <br>
        1. - Правило CSS
        <br>
        <br>
        p {
        <br>
           margin-bottom: 12px;
        <br>
        }
        <br>
        <br>
        Тут "p" - це селектор (вибирає всі елементи < p >) і застосовує стиль margin-bottom.
      `,
    },
    elements: [
      [`<bento class="${CssClasses.STROBE}"/>`],
      [`<plate />`],
      [`<plate />`],
    ],
  },
  {
    title: 'Виберіть вишукану тарілку',
    hint: '#fancy',
    hintExplanation: {
      title: 'Не переймайтеся, у вас все вийде!',
      description: `
        Відмінна робота з освоєнням селекторів CSS! Тепер давайте зосередимося на селекторах ідентифікатора. Пам'ятайте, вони починаються з символу '#'. Наприклад:
        <br>
        <br>
        2. - Селектор ідентифікатора
        <br>
        <br>
        #uniqueID {
        <br>
        color: blue;
        <br>
        }
        <br>
        <br>
        У цьому випадку '#uniqueID' - це селектор (вибирає елемент із ідентифікатором 'uniqueID') і застосовує стиль кольору.
        <br>
        <br>
        Для поліпшення ваших навичок введіть селектор ідентифікатора в редактор, щоб вибрати конкретні елементи на сторінці. Наведіть вказівник на елементи, щоб побачити їх HTML-маркування.
      `,
    },
    elements: [
      [`<plate />`],
      [`<plate class="${CssClasses.STROBE}" id="${FANCY_ID}"/>`],
      [`<plate />`],
    ],
  },
  {
    title: 'Виберіть маленькі яблука',
    hint: 'apple.small',
    hintExplanation: {
      title: 'Не переймайтеся, у вас все вийде!',
      description: `
        Фантастичний прогрес! Тепер давайте заглибимося у селектори класу. Вони починаються з крапки '.' і за ним слідує ім'я класу. Наприклад:
        <br>
        <br>
        3. - Селектор класу
        <br>
        <br>
        .buttonStyle {
        <br>
        background-color: green;
        <br>
        }
        <br>
        <br>
        Тут '.buttonStyle' - це селектор (вибирає елементи з класом 'buttonStyle') і застосовує стиль фонового кольору.
        <br>
        <br>
        Щоб піднятися на новий рівень, введіть селектор класу в редактор, щоб визначити конкретні елементи на сторінці. Наведіть вказівник на елементи, щоб розкрити їх HTML-маркування.
      `,
    },
    elements: [
      [`<apple />`],
      [
        `<bento></bento>`,
        [`<apple class="${CssClasses.SMALL} ${CssClasses.STROBE}" />`],
      ],
      [`<plate id="${FANCY_ID}"/>`, [`<apple />`]],
      [
        `<plate></plate>`,
        [`<apple class="${CssClasses.SMALL} ${CssClasses.STROBE}" />`],
      ],
    ],
  },
  {
    title: 'Виберіть всі тарілки та ланч-бокси',
    hint: 'plate, bento',
    hintExplanation: {
      title: 'Не переймайтеся, у вас все вийде!',
      description: `
        Чудово! Тепер давайте дослідимо силу кількох селекторів. Ви можете поєднувати їх, використовуючи кому ','. Наприклад:
        <br>
        <br>
        4. - Кілька селекторів
        <br>
        <br>
        h1, h2 {
        <br>
        font-family: 'Arial', sans-serif;
        <br>
        }
        <br>
        <br>
        У цьому прикладі 'h1, h2' - це селектори (вибирають як елементи < h1 >, так і < h2 >) і застосовують стиль шрифту.
        <br>
        <br>
        Для виклику виклику вам викликати в редакторі кілька селекторів, розділених комами, щоб впливати на декілька елементів одночасно. Наведіть вказівник на елементи, щоб розкрити їх HTML-маркування.
      `,
    },
    elements: [
      [`<apple class="${CssClasses.SMALL}" />`],
      [`<apple />`],
      [`<plate class="${CssClasses.STROBE}" />`],
      [`<bento class="${CssClasses.STROBE}"></bento>`, [`<apple />`]],
      [`<plate class="${CssClasses.STROBE}" />`],
      [`<apple />`],
      [`<apple class="${CssClasses.SMALL}" />`],
    ],
  },
  {
    title: 'Виберіть усе!',
    hint: '*',
    hintExplanation: {
      title: 'Не переймайтеся, у вас все вийде!',
      description: `
        Чудово! Тепер давайте дослідимо універсальний селектор '*'. Цей селектор вибирає всі елементи на сторінці. Подивіться:
        <br>
        <br>
        5. - Універсальний селектор
        <br>
        <br>
        * {
        <br>
        box-sizing: border-box;
        <br>
        }
        <br>
        <br>
        Тут '*' - це селектор, і він застосовує стиль box-sizing до кожного елемента.
        <br>
        <br>
        Для виклику вам викликати в редакторі універсальний селектор '*', щоб впливати на всі елементи глобально. Наведіть вказівник на елементи, щоб побачити їх HTML-маркування.
      `,
    },
    elements: [
      [
        `<plate class="${CssClasses.STROBE}" id="${FANCY_ID}"></plate>`,
        [`<apple class="${CssClasses.SMALL} ${CssClasses.STROBE}" />`],
      ],
      [
        `<plate class="${CssClasses.STROBE}"></plate>`,
        [`<apple class="${CssClasses.STROBE}" />`],
      ],
      [
        `<plate class="${CssClasses.STROBE}" id="${FANCY_ID}"></plate>`,
        [`<apple class="${CssClasses.SMALL} ${CssClasses.STROBE}" />`],
      ],
    ],
  },
  {
    title: 'Виберіть всі парні тарілки',
    hint: 'plate:nth-of-type(even)',
    hintExplanation: {
      title: 'Не переймайтеся, у вас все вийде!',
      description: `
        Фантастично! Тепер давайте поглибимося у селектор nth-of-type. Цей селектор дозволяє вам вибирати елементи на основі їх положення в батьківському елементі. Розгляньте наступний приклад:
        <br>
        <br>
        6. - Селектор nth-of-type
        <br>
        <br>
        li:nth-of-type(odd) {
        <br>
        background-color: #f2f2f2;
        <br>
        }
        <br>
        <br>
        У цьому випадку 'li:nth-of-type(odd)' - це селектор, який застосовує фоновий колір до кожного непарного елемента < li >.
        <br>
        <br>
        Для складної задачі використовуйте селектор nth-of-type в редакторі, щоб стилізувати конкретні елементи на основі їх положення в батьківському елементі. Наведіть вказівник на елементи, щоб розкрити їх HTML-маркування.
      `,
    },
    elements: [
      [`<plate  />`],
      [`<plate class="${CssClasses.STROBE}" />`],
      [`<plate  />`],
      [`<plate class="${CssClasses.STROBE}" />`],
      [`<plate  />`],
    ],
  },
  {
    title: 'Виберіть яблуко на середній тарілці',
    hint: ':nth-child(2)',
    hintExplanation: {
      title: 'Не переймайтеся, у вас все вийде!',
      description: `
        Фантастично! Тепер давайте дослідимо універсальний селектор :nth-child. Цей селектор дозволяє вам вибирати елементи на основі їхнього положення серед рівноправних братів. Перегляньте цей приклад:
        <br>
        <br>
        7. - Селектор :nth-child
        <br>
        <br>
        div:nth-child(even) {
        <br>
        border: 1px solid #ccc;
        <br>
        }
        <br>
        <br>
        У цьому випадку 'div:nth-child(even)' - це селектор, який застосовує рамку до кожного парного елемента < div > серед його рівноправних братів.
        <br>
        <br>
        Для цікавого завдання використовуйте селектор :nth-child в редакторі, щоб стилізувати конкретні елементи на основі їхнього положення в батьківському елементі. Наведіть вказівник на елементи, щоб розкрити їх HTML-маркування.
      `,
    },
    elements: [
      [
        `<plate id="${FANCY_ID}" ></plate>`,
        [`<apple class="${CssClasses.SMALL}" />`],
      ],
      [`<plate ></plate>`, [`<apple class="${CssClasses.STROBE}" />`]],
      [`<bento  />`],
    ],
  },
  {
    title: 'Виберіть великі яблука',
    hint: 'apple:not(.small)',
    hintExplanation: {
      title: 'Не переймайтеся, у вас все вийде!',
      description: `
        Фантастично! Тепер давайте розглянемо потужний псевдо-клас :not. Цей селектор дозволяє вам виключити певні елементи зі стилізації. Перегляньте цей приклад:
        <br>
        <br>
        8. - Псевдо-клас :not
        <br>
        <br>
        a:not(.external-link) {
        <br>
        text-decoration: underline;
        <br>
        }
        <br>
        <br>
        У цьому випадку 'a:not(.external-link)' - це селектор, який застосовує підкреслення до всіх елементів якоря (< a >), крім тих, які мають клас 'external-link'.
        <br>
        <br>
        Для захоплюючого завдання використовуйте псевдо-клас :not в редакторі, щоб виключити певні елементи зі стилізації. Наведіть вказівник на елементи, щоб розкрити їх HTML-маркування.
      `,
    },
    elements: [
      [
        `<plate id="${FANCY_ID}" ></plate>`,
        [`<apple class="${CssClasses.SMALL}" />`],
      ],
      [
        `<plate id="${FANCY_ID}"></plate>`,
        [`<apple class="${CssClasses.STROBE}" />`],
      ],
      [`<apple class="${CssClasses.STROBE}" />`],
      [`<plate />`],
    ],
  },
  {
    title: 'Кінець!',
    hint: 'hint',
    elements: [],
  },
];

export default LEVELS;
