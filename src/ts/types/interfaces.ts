import { LevelElemsArr } from './type';

export interface CompletedLevelData {
  isHintUsed: boolean;
  level: number;
}

export interface IHintExplanationData {
  title: string;
  description: string;
}

export interface LevelItem {
  title: string;
  hint: string;
  elements: LevelElemsArr;
  hintExplanation?: IHintExplanationData;
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

export interface IStartScreenData {
  img: string;
  title: string;
  description: string;
}
