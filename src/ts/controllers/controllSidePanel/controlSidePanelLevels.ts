import * as model from '../../model/model';
import CssClasses from '../../types/enums';
import { renderLevel } from '../controller';
import { DEFAULT_LEVEL } from '../../config';

const controlSidePanelLevels = (e: MouseEvent) => {
  const levelElem = (e.target as HTMLElement).closest(
    `.${CssClasses.SIDE_PANEL_LEVEL_BTN}`,
  ) as HTMLElement;

  if (!levelElem) return;

  const parent = levelElem.parentElement as HTMLLIElement;
  const newLevel = +(parent.dataset.lvl || DEFAULT_LEVEL);

  if (newLevel === model.state.currLevel) return;

  model.setLevel(newLevel);
  model.saveState();
  renderLevel();
};

export default controlSidePanelLevels;
