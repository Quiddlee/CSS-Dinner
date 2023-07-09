import { insertOpenCloseTags } from '../src/ts/views/htmlEditorView';

interface SuccessCases {
  id: number;
  input: [string, HTMLElement];
  output: string;
}

const successCases: SuccessCases[] = [
  {
    id: 0,
    input: ['table', document.createElement('div')],
    output: 'table',
  },
  {
    id: 1,
    input: ['plate', document.createElement('div')],
    output: 'plate',
  },
  {
    id: 2,
    input: ['bento', document.createElement('div')],
    output: 'bento',
  },
  {
    id: 3,
    input: ['apple', document.createElement('div')],
    output: 'apple',
  },
];

describe('Should insert open close tag', () => {
  it.each(successCases)('success case $id', ({ input, output }) => {
    insertOpenCloseTags(...input);

    expect(input[1].innerHTML).toBe(output);
  });
});
