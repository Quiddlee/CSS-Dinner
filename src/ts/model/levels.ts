import CssClasses from '../types/enums';
import { LevelItem } from '../types/interfaces';
import { FANCY_ID } from '../config';

const LEVELS: LevelItem[] = [
  {
    title: 'Select the plates',
    hint: 'plate',
    hintExplanation: {
      title: "No worries, you've got this!",
      description: `
        You're about to learn CSS Selectors! Selectors are how you pick which element to apply styles to.

        Exhibit 1 - A CSS Rule
        <br>
        p {
        <br>
           margin-bottom: 12px;
        <br>
        }
        <br>

        Here, the "p" is the selector (selects all < p > elements) and applies the margin-bottom style.
      `,
    },
    elements: [
      [`<plate class="${CssClasses.STROBE}" />`],
      [`<plate class="${CssClasses.STROBE}" />`],
    ],
  },
  {
    title: 'Select the apples',
    hint: 'apple',
    hintExplanation: {
      title: 'test',
      description: 'test',
    },
    elements: [
      [`<apple class="${CssClasses.STROBE}" />`],
      [`<plate />`],
      [`<apple class="${CssClasses.STROBE}" />`],
    ],
  },
  {
    title: 'Select the bento box',
    hint: 'bento',
    hintExplanation: {
      title: 'test',
      description: 'test',
    },
    elements: [
      [`<bento class="${CssClasses.STROBE}"/>`],
      [`<plate />`],
      [`<plate />`],
    ],
  },
  {
    title: 'Select the fancy plate',
    hint: '#fancy',
    hintExplanation: {
      title: 'test',
      description: 'test',
    },
    elements: [
      [`<plate />`],
      [`<plate class="${CssClasses.STROBE}" id="${FANCY_ID}"/>`],
      [`<plate />`],
    ],
  },
  {
    title: 'Select the small apples',
    hint: 'apple.small',
    hintExplanation: {
      title: 'test',
      description: 'test',
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
    title: 'Select all the plates and bentos',
    hint: 'plate, bento',
    hintExplanation: {
      title: 'test',
      description: 'test',
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
    title: 'Select all the things!\n',
    hint: '*',
    hintExplanation: {
      title: 'test',
      description: 'test',
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
    title: 'Select all even plates',
    hint: 'plate:nth-of-type(even)',
    hintExplanation: {
      title: 'test',
      description: 'test',
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
    title: 'Select the apple on the middle plate',
    hint: ':nth-child(2)',
    hintExplanation: {
      title: 'test',
      description: 'test',
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
    title: 'Select the big apples',
    hint: 'apple:not(.small)',
    hintExplanation: {
      title: 'test',
      description: 'test',
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
    title: 'win',
    hint: 'hint',
    elements: [],
  },
];

export default LEVELS;
