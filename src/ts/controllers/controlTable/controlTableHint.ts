import * as cssEditor from '../../views/cssEditorView';
import * as model from '../../model/model';
import CssClasses from '../../types/enums';
import { createLetterSlicer } from '../../helpers';
import * as hint from '../../views/tableView/tableViewHint';

const controlTableHint = (e: MouseEvent) => {
  const hintBtn = e.target as HTMLElement;
  const intervalDelay = 120;
  const hintText = model.state.levelData.hint;

  const letterSlicer = createLetterSlicer(hintText);

  const interval = setInterval(() => {
    const { letter, currLetterNum } = letterSlicer();

    cssEditor.parentElement.value = letter;
    if (hintText.length < currLetterNum) clearInterval(interval);
  }, intervalDelay);

  hint.render(model.state.levelData.hintExplanation);

  hintBtn.classList.add(CssClasses.HIDDEN);
};

export default controlTableHint;
