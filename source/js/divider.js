
const slider = document.querySelector('.result__photos');
const section = document.querySelector('.result')
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

section.addEventListener('mousedown', () => {
  isActive = true;
});

section.addEventListener('mouseup', () => {
  isActive = false;
});

section.addEventListener('mouseleave', () => {
  isActive = false;
});

section.addEventListener('mousemove', (e) => {
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

section.addEventListener('touchend', () => {
  isActive = false;
});

section.addEventListener('touchcancel', () => {
  isActive = false;
});

section.addEventListener('touchmove', (e) => {
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
