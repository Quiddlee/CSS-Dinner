import { resetProgress, state } from '../src/ts/model/model';
import { DEFAULT_LEVEL } from '../src/ts/config';

resetProgress();

const successCases = [
  {
    id: 0,
    input: [12, 5],
  },
  {
    id: 1,
    input: [3, 3],
  },
  {
    id: 2,
    input: [10, 10],
  },
  {
    id: 3,
    input: [123, 123],
  },
];

describe('Should insert open close tag', () => {
  it.each(successCases)('success case $id', ({ input }) => {
    const [currLevel, completedLevels] = input;
    
    state.currLevel = currLevel;
    state.completedLevels.length = completedLevels;

    resetProgress();
    expect(state.currLevel).toBe(DEFAULT_LEVEL);
    expect(state.completedLevels.length).toBe(0);
  });
});
