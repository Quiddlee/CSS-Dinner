import * as startScreen from '../views/startScreenView';
import { START_PAGES } from '../config';
import { saveState } from '../model/model';

export const controlNavigate = (currentPage: number, isBack: boolean) => {
  const newPageNum = isBack ? currentPage - 1 : currentPage + 1;
  const newPage = START_PAGES[newPageNum];
  const isLastPage = newPageNum === START_PAGES.length;

  if (isLastPage) {
    startScreen.unmount();
    saveState();
    return;
  }

  startScreen.render(newPage, newPageNum);
};

export const controlSkip = () => {
  startScreen.unmount();
  saveState();
};
