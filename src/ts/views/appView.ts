export const element = document.createElement('main');

export const createApp = () => {
  element.setAttribute('id', 'app');
  document.body.append(element);
};
