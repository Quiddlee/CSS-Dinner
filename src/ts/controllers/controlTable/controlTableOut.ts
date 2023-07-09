import { ALLOWED_ELEMENTS_TO_HOVER } from '../../config';
import { removeHoverFromTableAndMarkup } from '../controller';
import { hideHelper } from '../../views/tableView/tableViewHelper';

const controlTableOut = (e: MouseEvent) => {
  const target = e.target as HTMLElement;

  if (!ALLOWED_ELEMENTS_TO_HOVER.includes(target.tagName)) return;

  hideHelper();
  removeHoverFromTableAndMarkup();
};

export default controlTableOut;
