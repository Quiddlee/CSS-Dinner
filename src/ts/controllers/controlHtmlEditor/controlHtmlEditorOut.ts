import { removeHoverFromTableAndMarkup } from '../controller';
import { hideHelper } from '../../views/tableView/tableViewHelper';

const controlHtmlEditorOut = (e: MouseEvent) => {
  const target = e.target as HTMLElement;

  if (target.tagName !== 'DIV') return;

  hideHelper();
  removeHoverFromTableAndMarkup();
};

export default controlHtmlEditorOut;
