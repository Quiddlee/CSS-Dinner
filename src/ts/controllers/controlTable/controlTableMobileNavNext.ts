import { renderLevel } from '../controller';
import * as model from '../../model/model';
import LEVELS from '../../model/levels';

const controlTableMobileNavNext = () => {
  const nextLevel = model.state.currLevel + 1;

  if (nextLevel === LEVELS.length) return;

  model.setLevel(nextLevel);
  model.saveState();
  if (model.state.levelData) renderLevel();
};

export default controlTableMobileNavNext;
