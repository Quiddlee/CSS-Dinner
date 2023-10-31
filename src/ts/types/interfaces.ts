import { LevelElemsArr } from './type';

export interface CompletedLevelData {
  isHintUsed: boolean;
  level: number;
}

export interface LevelItem {
  title: string;
  hint: string;
  elements: LevelElemsArr;
}

export interface State {
  levelData: LevelItem;
  currLevel: number;
  numOfLevels: number;
  completedLevels: CompletedLevelData[];
  isFirstLoad: boolean;
}

export interface SidePanelData {
  levelTitles: LevelItem[];
  numOfLevels: number;
  currLevel: number;
  completedLevels: CompletedLevelData[];
}

export interface TableData {
  levelData: LevelItem;
  currLevel: number;
  completedLevels: CompletedLevelData[];
}
