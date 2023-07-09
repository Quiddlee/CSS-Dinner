import * as model from '../../model/model';
import { renderLevel } from '../controller';

const controlTableMobileNavPrev = () => {
  const prevLevel = model.state.currLevel - 1;

  if (prevLevel === -1) return;

  model.setLevel(prevLevel);
  model.saveState();
  if (model.state.levelData) renderLevel();
};

export default controlTableMobileNavPrev;
