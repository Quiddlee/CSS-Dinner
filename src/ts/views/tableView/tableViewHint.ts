import CssClasses from '../../types/enums';

export const hintButtonElement = document.createElement('button');

export const hintInit = () => {
  hintButtonElement.classList.add(
    CssClasses.TABLE_WRAPPER_HINT_BTN,
    CssClasses.BTN,
    CssClasses.BTN_ROUNDED,
  );
  hintButtonElement.textContent = "Help, I'm stuck!";
};
