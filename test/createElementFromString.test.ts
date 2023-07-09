import { createElementFromString } from '../src/ts/views/view';

const successCases = [
  {
    id: 0,
    input: '<div></div>',
    output: 'DIV',
  },
  {
    id: 1,
    input: '<plate></plate>',
    output: 'PLATE',
  },
  {
    id: 2,
    input: '<bento></bento>',
    output: 'BENTO',
  },
  {
    id: 3,
    input: '<apple></apple>',
    output: 'APPLE',
  },
];

describe('Should create element from string', () => {
  it.each(successCases)('success case $id', ({ input, output }) => {
    expect(createElementFromString(input).tagName).toBe(output);
  });
});
