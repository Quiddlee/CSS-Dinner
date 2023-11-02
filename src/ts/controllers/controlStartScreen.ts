import * as startScreen from '../views/startScreenView';
import { START_PAGES } from '../config';

export const controlNavigate = (currentPage: number, isBack: boolean) => {
  const newPageNum = isBack ? currentPage - 1 : currentPage + 1;
  const newPage = START_PAGES[newPageNum];
  const isLastPage = newPageNum === START_PAGES.length;

  if (isLastPage) {
    startScreen.unmount();
    return;
  }

  startScreen.render(newPage, newPageNum);
};

export const controlSkip = () => {
  startScreen.unmount();
};
