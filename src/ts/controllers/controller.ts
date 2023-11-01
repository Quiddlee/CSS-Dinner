import '../../sass/main.scss';
import * as app from '../views/appView';
import * as table from '../views/tableView/tableView';
import * as cssEditor from '../views/cssEditorView';
import * as htmlEditor from '../views/htmlEditorView';
import * as sidePanel from '../views/sidePanelView';
import * as model from '../model/model';
import * as startScreen from '../views/startScreenView';
import { addHover, addHoverForChildren, removeHover } from '../helpers';
import controlTableIn from './controlTable/controlTableIn';
import controlHtmlEditorIn from './controlHtmlEditor/controlHtmlEditorIn';
import controlCssEditor from './controlCssEditor';
import controlSidePanelLevels from './controllSidePanel/controlSidePanelLevels';
import controlSidePanelReset from './controllSidePanel/controlSidePanelReset';
import controlTableOut from './controlTable/controlTableOut';
import controlHtmlEditorOut from './controlHtmlEditor/controlHtmlEditorOut';
import controlTableHint from './controlTable/controlTableHint';
import LEVELS from '../model/levels';
import controlTableMobileNavNext from './controlTable/controlTableMobileNavNext';
import controlTableMobileNavPrev from './controlTable/controlTableMobileNavPrev';
import { IStartScreenData } from '../types/interfaces';
import startImage from '../../img/start-01.jpg';

export const addHoverTableAndMarkup = (
  tableElement: HTMLElement,
  markup: HTMLElement,
) => {
  addHover(tableElement, markup);
  addHoverForChildren([...markup.children]);
};

export const removeHoverFromTableAndMarkup = () => {
  [table.parsedLevelElements, htmlEditor.parsedLevelMarkup].forEach((parent) =>
    parent.forEach(removeHover),
  );
};

export const renderLevel = () => {
  cssEditor.render();
  htmlEditor.render(model.state.levelData.elements);
  table.render({
    levelData: model.state.levelData,
    currLevel: model.state.currLevel,
    completedLevels: model.state.completedLevels,
  });
  sidePanel.render({
    levelTitles: LEVELS,
    numOfLevels: model.state.numOfLevels,
    currLevel: model.state.currLevel,
    completedLevels: model.state.completedLevels,
  });
};

const init = () => {
  model.getState();
  model.setLevel(model.state.currLevel);

  app.createApp();

  const tableWrapper = table.init();
  const cssEditorWrapper = cssEditor.init();
  const htmlEditorWrapper = htmlEditor.init();
  const sidePanelWrapper = sidePanel.init();
  const startScreenWrapper = startScreen.init();

  app.element.append(
    tableWrapper,
    cssEditorWrapper,
    htmlEditorWrapper,
    sidePanelWrapper,
  );

  renderLevel();

  if (model.state.isFirstLoad) {
    document.body.append(startScreenWrapper);

    const mockData: IStartScreenData = {
      img: startImage,
      title: 'Welcome to css dinner!',
      description: `<span>🤚 IMPORTANT – PLEASE READ THIS RULES BEFORE START</span>
      <span>Embark on an exciting journey through the world of web development with CSS Selectors Game 🎮</span>
      <span>In this interactive series of levels, you will master the art of selecting HTML elements 🙌</span>
      <span>Unleash your inner coder as you tackle challenges and puzzles designed to teach you the ins and outs of CSS selectors 😎</span>`,
    };

    startScreen.render(mockData);
  }

  table.addHoverHandlers(controlTableIn, controlTableOut);
  table.addHintHandler(controlTableHint);
  table.addMobileNavigationHandlers(
    controlTableMobileNavNext,
    controlTableMobileNavPrev,
  );
  htmlEditor.addHoverHandlers(controlHtmlEditorIn, controlHtmlEditorOut);
  cssEditor.addHandler(controlCssEditor);
  sidePanel.addResetProgressHandler(controlSidePanelReset);
  sidePanel.addChooseLevelsHandler(controlSidePanelLevels);
  startScreen.addHandler();
};
init();
