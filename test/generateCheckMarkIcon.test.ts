import { generateCheckMarkIcon } from '../src/ts/views/view';
import CssClasses from '../src/ts/types/enums';

interface SuccessCases {
  id: number;
  input: [boolean, string];
  output: string;
}

const successCases: SuccessCases[] = [
  {
    id: 0,
    input: [false, ''],
    output: `
<svg class="${CssClasses.CHECK_ICON}  " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="12"  />
  <rect class="${CssClasses.CHECK_ICON_FIRST_RECT}" x="6.61426" y="8.44629" width="10.0038" height="4.00786" rx="1" transform="rotate(45 6.61426 8.44629)" />
  <rect class="${CssClasses.CHECK_ICON_SECOND_RECT}" x="-5.3" y="16.7" width="13.98" height="4.00786" rx="1" transform="rotate(-45)" />
</svg>
`,
  },
  {
    id: 1,
    input: [true, ''],
    output: `
<svg class="${CssClasses.CHECK_ICON} ${CssClasses.CHECK_ICON_HINT} " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="12"  />
  <rect class="${CssClasses.CHECK_ICON_FIRST_RECT}" x="6.61426" y="8.44629" width="10.0038" height="4.00786" rx="1" transform="rotate(45 6.61426 8.44629)" />
  <rect class="${CssClasses.CHECK_ICON_SECOND_RECT}" x="-5.3" y="16.7" width="13.98" height="4.00786" rx="1" transform="rotate(-45)" />
</svg>
`,
  },
  {
    id: 2,
    input: [true, 'test-class'],
    output: `
<svg class="${CssClasses.CHECK_ICON} ${CssClasses.CHECK_ICON_HINT} test-class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="12"  />
  <rect class="${CssClasses.CHECK_ICON_FIRST_RECT}" x="6.61426" y="8.44629" width="10.0038" height="4.00786" rx="1" transform="rotate(45 6.61426 8.44629)" />
  <rect class="${CssClasses.CHECK_ICON_SECOND_RECT}" x="-5.3" y="16.7" width="13.98" height="4.00786" rx="1" transform="rotate(-45)" />
</svg>
`,
  },
  {
    id: 3,
    input: [true, 'test-class test-class2 test-class3'],
    output: `
<svg class="${CssClasses.CHECK_ICON} ${CssClasses.CHECK_ICON_HINT} test-class test-class2 test-class3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="12"  />
  <rect class="${CssClasses.CHECK_ICON_FIRST_RECT}" x="6.61426" y="8.44629" width="10.0038" height="4.00786" rx="1" transform="rotate(45 6.61426 8.44629)" />
  <rect class="${CssClasses.CHECK_ICON_SECOND_RECT}" x="-5.3" y="16.7" width="13.98" height="4.00786" rx="1" transform="rotate(-45)" />
</svg>
`,
  },
];

describe('Should clear passed element', () => {
  it.each(successCases)('success case $id', ({ input, output }) => {
    expect(generateCheckMarkIcon(...input)).toBe(output);
  });
});
