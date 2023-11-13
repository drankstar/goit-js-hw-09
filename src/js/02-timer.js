import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
let interval;
let selectedDate;
refs.startBtn.disabled = true;
refs.startBtn.addEventListener('click', onStart);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notify.failure('Please choose a date in the future');
      return;
    }
    refs.startBtn.disabled = false;
    selectedDate = selectedDates[0];
  },
};

flatpickr('#datetime-picker', options);

function onStart() {
  changeTime();
  interval = setInterval(changeTime, 1000);
}

function changeTime() {
  const delta = selectedDate - new Date();
  if (delta < 0) {
    clearInterval(interval);
    return;
  }
  const convert = convertMs(delta);
  refs.days.textContent = convert.days;
  refs.hours.textContent = `0${convert.hours}`.slice(-2);
  refs.minutes.textContent = `0${convert.minutes}`.slice(-2);
  refs.seconds.textContent = `0${convert.seconds}`.slice(-2);
}

function convertMs(ms) {
  const second = 1000;
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
