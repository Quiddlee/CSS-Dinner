import * as model from '../../model/model';
import CssClasses from '../../types/enums';
import { renderLevel } from '../controller';

const controlSidePanelReset = (e: MouseEvent) => {
  const resetBtn = (e.target as HTMLElement).closest(
    `.${CssClasses.SIDE_PANEL_RESET_PROGRESS}`,
  ) as HTMLElement;

  if (!resetBtn) return;

  model.resetProgress();
  model.saveState();
  renderLevel();
};

export default controlSidePanelReset;
