import { CompletedLevelData, State } from '../types/interfaces';
import { DEFAULT_LEVEL } from '../config';
import LEVELS from './levels';

export const state: State = {
  levelData: {
    title: '',
    hint: '',
    elements: [],
  },
  currLevel: DEFAULT_LEVEL,
  numOfLevels: LEVELS.length - 1,
  completedLevels: [],
  isFirstLoad: true,
};

export const setLevel = (newLevel: number) => {
  state.levelData = LEVELS[newLevel];
  state.currLevel = newLevel;
};

export const resetProgress = () => {
  setLevel(DEFAULT_LEVEL);
  state.completedLevels = [];
};

export const addCompletedLevel = (data: CompletedLevelData) => {
  state.completedLevels.push(data);
};

export const saveState = () => {
  localStorage.setItem('state', JSON.stringify(state));
};

export const getState = () => {
  const data = localStorage.getItem('state');

  if (!data) return;

  const parsed = JSON.parse(data);

  state.levelData = parsed.levelData;
  state.currLevel = parsed.currLevel;
  state.completedLevels = parsed.completedLevels;

  // TODO: change to false after modal is done
  state.isFirstLoad = true;
};
