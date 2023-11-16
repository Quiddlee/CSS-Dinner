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

        <br>
        <br>
        Exhibit 1 - A CSS Rule

        <br>
        <br>
        p {
        <br>
           margin-bottom: 12px;
        <br>
        }

        <br>
        <br>

        Here, the "p" is the selector (selects all < p > elements) and applies the margin-bottom style.
        <br>
        <br>
        To play, type in a CSS selector in the editor below to select the correct items on the table.If you get it right, you'll advance to the next level.
        <br>
        <br>
        Hover over the items on the table to see their HTML markup.
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
      title: "No worries, you've got this!",
      description: `
        You're about to learn CSS Selectors! Selectors are how you pick which element to apply styles to.

        <br>
        <br>
        Exhibit 1 - A CSS Rule
        <br>
        <br>
        p {
        <br>
           margin-bottom: 12px;
        <br>
        }
        <br>
        <br>
        Here, the "p" is the selector (selects all < p > elements) and applies the margin-bottom style.
      `,
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
      title: "No worries, you've got this!",
      description: `
        You're about to learn CSS Selectors! Selectors are how you pick which element to apply styles to.

        <br>
        <br>
        Exhibit 1 - A CSS Rule
        <br>
        <br>
        p {
        <br>
           margin-bottom: 12px;
        <br>
        }
        <br>
        <br>
        Here, the "p" is the selector (selects all < p > elements) and applies the margin-bottom style.
      `,
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
      title: "No worries, you've got this!",
      description: `
        Great job on mastering CSS Selectors! Now, let's focus on ID selectors. Remember, they start with a '#' symbol. For example:

        <br>
        <br>

        Exhibit 2 - An ID Selector
        <br>
        <br>
        #uniqueID {
        <br>
        color: blue;
        <br>
        }
        <br>
        <br>
        In this case, '#uniqueID' is the selector (selects the element with the ID 'uniqueID') and applies the color style.
        <br>
        <br>
        To enhance your skills, input an ID selector in the editor to target specific elements on the page. Hover over elements to reveal their HTML markup.
      `,
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
      title: "No worries, you've got this!",
      description: `
        Fantastic progress! Now, let's delve into class selectors. They begin with a period '.' followed by the class name. For example:

        <br>
        <br>
        Exhibit 3 - A Class Selector
        <br>
        <br>
        .buttonStyle {
        <br>
        background-color: green;
        <br>
        }
        <br>
        <br>
        Here, '.buttonStyle' is the selector (targets elements with the class 'buttonStyle') and applies the background-color style.
        <br>
        <br>

        To level up, enter a class selector in the editor to pinpoint specific elements on the page. Hover over items to uncover their HTML markup.
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
    title: 'Select all the plates and bentos',
    hint: 'plate, bento',
    hintExplanation: {
      title: "No worries, you've got this!",
      description: `
        Brilliant! Now, let's explore the power of multiple selectors. You can combine selectors using a comma ','. For instance:
        <br>
        <br>
        Exhibit 4 - Multiple Selectors
        <br>
        <br>
        h1, h2 {
        <br>
        font-family: 'Arial', sans-serif;
        <br>
        }
        <br>
        <br>
        In this example, 'h1, h2' are the selectors (targeting both < h 1> and < h 2> elements) and applying the font-family style.
        <br>
        <br>

        For a challenge, input multiple selectors in the editor, separated by commas, to affect multiple elements at once. Hover over items to uncover their HTML markup.
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
    title: 'Select all the things!\n',
    hint: '*',
    hintExplanation: {
      title: "No worries, you've got this!",
      description: `
        Awesome! Now, let's explore the universal selector '*'. This selector targets all elements on the page. Take a look:
        <br>
        <br>
        Exhibit 5 - Universal Selector
        <br>
        <br>
        * {
        <br>
        box-sizing: border-box;
        <br>
        }
        <br>
        <br>
        Here, '*' is the selector, and it applies the box-sizing style to every element.
        <br>
        <br>
        For an advanced task, use the '*' selector in the editor to globally impact all elements. Hover over items to see their HTML markup.
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
    title: 'Select all even plates',
    hint: 'plate:nth-of-type(even)',
    hintExplanation: {
      title: "No worries, you've got this!",
      description: `
        Fantastic! Now, let's dive into the nth-of-type selector. This selector allows you to target elements based on their position within a parent. Consider the following example:
        <br>
        <br>
        Exhibit 6 - nth-of-type Selector
        <br>
        <br>
        li:nth-of-type(odd) {
        <br>
        background-color: #f2f2f2;
        <br>
        }
        <br>
        <br>
        In this case, 'li:nth-of-type(odd)' is the selector, applying the background color to every odd-numbered < li > element.
        <br>
        <br>

        For a challenging task, utilize the nth-of-type selector in the editor to style specific elements based on their position within a parent. Hover over items to reveal their HTML markup.
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
    title: 'Select the apple on the middle plate',
    hint: ':nth-child(2)',
    hintExplanation: {
      title: "No worries, you've got this!",
      description: `
        Fantastic! Now, let's explore the versatile :nth-child selector. This selector allows you to target elements based on their position among siblings. Check out this example:
        <br>
        <br>
        Exhibit 7 - :nth-child Selector
        <br>
        <br>
        div:nth-child(even) {
        <br>
        border: 1px solid #ccc;
        <br>
        }
        <br>
        <br>
        Here, 'div:nth-child(even)' is the selector, applying a border to every even-numbered < div > among its siblings.
        <br>
        <br>

        For an engaging task, use the :nth-child selector in the editor to style specific elements based on their position within their parent. Hover over items to unveil their HTML markup.
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
    title: 'Select the big apples',
    hint: 'apple:not(.small)',
    hintExplanation: {
      title: "No worries, you've got this!",
      description: `
        Fantastic! Now, let's explore the powerful :not pseudo-class. This selector allows you to exclude specific elements from your styling. Take a look at this example:
        <br>
        <br>
        Exhibit 8 - :not Pseudo-class
        <br>
        <br>
        a:not(.external-link) {
        <br>
        text-decoration: underline;
        <br>
        }
        <br>
        <br>
        Here, 'a:not(.external-link)' is the selector, applying an underline to all anchor (< a >) elements except those with the class 'external-link.'
        <br>
        <br>

        For an intriguing challenge, utilize the :not pseudo-class in the editor to exclude certain elements from your styling. Hover over items to reveal their HTML markup.
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
    title: 'win',
    hint: 'hint',
    elements: [],
  },
];

export default LEVELS;
