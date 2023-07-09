import { getParsedLvlTargetId } from '../../helpers';
import * as htmlEditor from '../../views/htmlEditorView';
import * as table from '../../views/tableView/tableView';
import { addHoverTableAndMarkup } from '../controller';
import { moveHelper, showHelper } from '../../views/tableView/tableViewHelper';

const controlHtmlEditorIn = (e: MouseEvent) => {
  const target = e.target as HTMLElement;

  if (target.tagName !== 'DIV') return;

  const targetMarkupId = getParsedLvlTargetId(
    htmlEditor.parsedLevelMarkup,
    target,
  );
  const relatedElement = table.parsedLevelElements[targetMarkupId];

  showHelper(relatedElement);
  moveHelper(relatedElement);
  addHoverTableAndMarkup(relatedElement, target);
};

export default controlHtmlEditorIn;
