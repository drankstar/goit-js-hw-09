function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const startBtn = document.querySelector('[data-start]');
console.log(startBtn);

// const stopBtn = document.querySelector('[data-stop=""]');
// console.log(stopBtn);

const body = document.querySelector('body');
console.log(body);

startBtn.addEventListener('click', onClick);
function onClick() {
  const color = getRandomHexColor();
  body.style.background = color;
}
