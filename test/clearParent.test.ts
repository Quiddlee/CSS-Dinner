import { clearParent } from '../src/ts/views/view';

const firstElem = document.createElement('div');
firstElem.innerHTML = `<span></span>`;

const secondElem = document.createElement('div');
firstElem.innerHTML = `Test`;

const thirdElem = document.createElement('div');
firstElem.innerHTML = `
<div>
  <span>
    <plate></plate>
  </span>
</div>`;

const fourthElem = document.createElement('div');
firstElem.innerHTML = `
<div>
  <span>
    <plate>
      <bento>
        <apple>Test</apple>
      </bento>
    </plate>
  </span>
</div>`;

const successCases = [
  {
    id: 0,
    input: firstElem,
    output: '',
  },
  {
    id: 1,
    input: secondElem,
    output: '',
  },
  {
    id: 2,
    input: thirdElem,
    output: '',
  },
  {
    id: 3,
    input: fourthElem,
    output: '',
  },
];

describe('Should clear passed element', () => {
  successCases.forEach(({ input }) => clearParent(input));

  it.each(successCases)('success case $id', ({ input, output }) => {
    expect(input.innerHTML).toBe(output);
  });
});
