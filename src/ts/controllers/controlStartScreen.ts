import * as startScreen from '../views/startScreenView';
import { START_PAGES } from '../config';

export const controlNavigate = (currentPage: number, isBack: boolean) => {
  const newPageNum = isBack ? currentPage - 1 : currentPage + 1;
  const newPage = START_PAGES[newPageNum];

  // eslint-disable-next-line no-console
  console.log(newPageNum, newPage, isBack);

  if (newPage === undefined) return;

  startScreen.render(newPage, newPageNum);
};

export const controlSkip = () => {
  // block
};
