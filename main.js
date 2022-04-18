/* ---------------*/
let display = document.getElementById("display");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
/* ---------------*/
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let resetHours = 0;
let resetMinutes = 0;
let resetSeconds = 0;
let resetMilliSeconds = 0;
/* ------開始時のボタンの活性・非活性---------*/
start.addEventListener("click", function () {
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = false;
})
/* -----ストップウォッチ---------*/
function stopWatch() {
  milliSeconds++;
  if (milliSeconds / 10 == 1) {
    seconds++;
    milliSeconds = 0;
    if (seconds / 60 == 1) {
      minutes++;
      seconds = 0;
      if (minutes / 60 == 1) {
        hours++;
        minutes = 0;
      }
    }
  }
  if (milliSeconds < 0) {
    resetMilliSeconds = milliSeconds;
  } else {
    resetMilliSeconds = milliSeconds
  }
  if (seconds < 10) {
    resetSeconds = seconds;
  } else {
    resetSeconds = seconds
  }
  if (minutes < 60) {
    resetMinutes = minutes;
  } else {
    resetMinutes = minutes
  }
  if (hours < 24) {
    resetHours = hours;
  } else {
    resetHours = hours
  }
  display.innerHTML = `${resetHours}:${resetMinutes}:${resetSeconds}:${resetMilliSeconds}`;
}
/* -----スタート時---------*/
start.addEventListener("click", function () {
    interval = setInterval(stopWatch, 100);
})
/* -----ストップ時---------*/
stop.addEventListener("click", function () {
  clearInterval(interval);
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = false;
})
/* -----リセット時---------*/
reset.addEventListener("click", function () {
  clearInterval(interval);
  display.innerHTML = "0:0:0:0"
  hours = 0;
  minutes = 0;
  seconds = 0;
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;
})