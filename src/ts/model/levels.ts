import CssClasses from '../types/enums';
import { LevelItem } from '../types/interfaces';
import { FANCY_ID } from '../config';

const LEVELS: LevelItem[] = [
  {
    title: 'Select the plates',
    hint: 'plate',
    elements: [
      [`<plate class="${CssClasses.STROBE}" />`],
      [`<plate class="${CssClasses.STROBE}" />`],
    ],
  },
  {
    title: 'Select the apples',
    hint: 'apple',
    elements: [
      [`<apple class="${CssClasses.STROBE}" />`],
      [`<plate />`],
      [`<apple class="${CssClasses.STROBE}" />`],
    ],
  },
  {
    title: 'Select the bento box',
    hint: 'bento',
    elements: [
      [`<bento class="${CssClasses.STROBE}"/>`],
      [`<plate />`],
      [`<plate />`],
    ],
  },
  {
    title: 'Select the fancy plate',
    hint: '#fancy',
    elements: [
      [`<plate />`],
      [`<plate class="${CssClasses.STROBE}" id="${FANCY_ID}"/>`],
      [`<plate />`],
    ],
  },
  {
    title: 'Select the small apples',
    hint: 'apple.small',
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
