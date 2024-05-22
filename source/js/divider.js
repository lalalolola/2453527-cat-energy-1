
const slider = document.querySelector('.result__photos');
const buttonDividerResult = document.querySelector('.result__divider-button');

let isActive = false;

const beforeAfterSlider = (x) => {
  let shift = Math.max(0, Math.min(x, slider.offsetWidth));
  slider.style.setProperty('--pos', `${shift}px`);
};

const pauseEvents = (e) => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};

document.body.addEventListener('mousedown', () => {
  isActive = true;
});

document.body.addEventListener('mouseup', () => {
  isActive = false;
});

document.body.addEventListener('mouseleave', () => {
  isActive = false;
});

document.body.addEventListener('mousemove', (e) => {
  if (!isActive) {
    return;
  }

  let x = e.pageX;

  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvents(e);
});

buttonDividerResult.addEventListener('touchstart', () => {
  isActive = true;
});

document.body.addEventListener('touchend', () => {
  isActive = false;
});

document.body.addEventListener('touchcancel', () => {
  isActive = false;
});

document.body.addEventListener('touchmove', (e) => {
  if (!isActive) {
    return;
  }

  let x;
  let i;

  for (i = 0; i < e.changedTouches.length; i++) {
    x = e.changedTouches[i].pageX;
  }

  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvents(e);
});
