import * as cssEditor from '../../views/cssEditorView';
import * as model from '../../model/model';
import { createLetterSlicer } from '../../helpers';
import * as hint from '../../views/tableView/tableViewHint';

const controlTableHint = () => {
  const intervalDelay = 120;
  const hintText = model.state.levelData.hint;

  const letterSlicer = createLetterSlicer(hintText);

  const interval = setInterval(() => {
    const { letter, currLetterNum } = letterSlicer();

    cssEditor.parentElement.value = letter;
    if (hintText.length < currLetterNum) clearInterval(interval);
  }, intervalDelay);

  hint.render(model.state.levelData.hintExplanation);
  hint.unmountButton();
};

export default controlTableHint;
