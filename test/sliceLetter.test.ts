import { createLetterSlicer } from '../src/ts/helpers';

const testWord = 'Test';
const letterSlicer = createLetterSlicer(testWord);
const successCases = [
  {
    id: 0,
    output: 'T',
  },
  {
    id: 1,
    output: 'Te',
  },
  {
    id: 2,
    output: 'Tes',
  },
  {
    id: 3,
    output: 'Test',
  },
];

describe('Should slice word letter by letter', () => {
  it.each(successCases)('success case $id', ({ output }) => {
    expect(letterSlicer().letter).toBe(output);
  });
});

const testWord2 = 'Hello my name is Bogdan';
const letterSlicer2 = createLetterSlicer(testWord2);
const successCases2 = [
  {
    id: 4,
    output: 'H',
  },
  {
    id: 5,
    output: 'He',
  },
  {
    id: 6,
    output: 'Hel',
  },
  {
    id: 7,
    output: 'Hell',
  },
  {
    id: 8,
    output: 'Hello',
  },
  {
    id: 9,
    output: 'Hello ',
  },
  {
    id: 10,
    output: 'Hello m',
  },
  {
    id: 11,
    output: 'Hello my',
  },
  {
    id: 12,
    output: 'Hello my ',
  },
  {
    id: 13,
    output: 'Hello my n',
  },
  {
    id: 14,
    output: 'Hello my na',
  },
  {
    id: 15,
    output: 'Hello my nam',
  },
  {
    id: 16,
    output: 'Hello my name',
  },
  {
    id: 17,
    output: 'Hello my name ',
  },
  {
    id: 18,
    output: 'Hello my name i',
  },
  {
    id: 19,
    output: 'Hello my name is',
  },
  {
    id: 20,
    output: 'Hello my name is ',
  },
  {
    id: 21,
    output: 'Hello my name is B',
  },
  {
    id: 22,
    output: 'Hello my name is Bo',
  },
  {
    id: 23,
    output: 'Hello my name is Bog',
  },
  {
    id: 24,
    output: 'Hello my name is Bogd',
  },
  {
    id: 25,
    output: 'Hello my name is Bogda',
  },
  {
    id: 26,
    output: 'Hello my name is Bogdan',
  },
];

describe('teat', () => {
  it.each(successCases2)('success case $id', ({ output }) => {
    expect(letterSlicer2().letter).toBe(output);
  });
});
