export const element = document.createElement('main');

const initScroll = () => {
  const scroll = document.createElement('scroll');
  scroll.setAttribute('data-elastic', 'true');
  scroll.style.cssText = `
    position: relative;
    overflow-y: scroll;
    height: 99.7dvh;
    display: block
  `;
  document.body.append(scroll);

  return scroll;
};

export const createApp = () => {
  element.setAttribute('id', 'app');
  const scroll = initScroll();
  scroll.append(element);
};
