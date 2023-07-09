import { ALLOWED_ELEMENTS_TO_HOVER } from '../../config';
import { getParsedLvlTargetId } from '../../helpers';
import * as table from '../../views/tableView/tableView';
import * as htmlEditor from '../../views/htmlEditorView';
import { addHoverTableAndMarkup } from '../controller';
import { moveHelper, showHelper } from '../../views/tableView/tableViewHelper';

const controlTableIn = (e: MouseEvent) => {
  const target = e.target as HTMLElement;

  if (!ALLOWED_ELEMENTS_TO_HOVER.includes(target.tagName)) return;

  const targetElemId = getParsedLvlTargetId(table.parsedLevelElements, target);
  const relatedMarkup = htmlEditor.parsedLevelMarkup[targetElemId];

  showHelper(target);
  moveHelper(target);
  addHoverTableAndMarkup(target, relatedMarkup);
};

export default controlTableIn;
