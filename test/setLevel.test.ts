import { setLevel, state } from '../src/ts/model/model';
import LEVELS from '../src/ts/model/levels';

const successCases = [
  {
    id: 0,
    input: 1,
  },
  {
    id: 1,
    input: 5,
  },
  {
    id: 2,
    input: 8,
  },
  {
    id: 3,
    input: 10,
  },
];

describe('Should insert open close tag', () => {
  it.each(successCases)('success case $id', ({ input }) => {
    setLevel(input);
    expect(state.levelData).toBe(LEVELS[input]);
    expect(state.currLevel).toBe(input);
  });
});
