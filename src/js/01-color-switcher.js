function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', onStart);
let interval;
function onStart() {
  interval = setInterval(changeColor, 1000);
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
}

refs.stopBtn.disabled = true;
refs.stopBtn.addEventListener('click', onStop);
function onStop() {
  clearInterval(interval);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
}
function changeColor() {
  const color = getRandomHexColor();
  refs.body.style.background = color;
}
