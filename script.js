// script.js
let timerDisplay = document.getElementById("timer");
let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("reset");
let lapButton = document.getElementById("lap");
let lapsContainer = document.getElementById("laps");

let timer = 0; // Time in milliseconds
let interval = null;
let running = false;

function updateTimer() {
  let hours = Math.floor(timer / 3600000);
  let minutes = Math.floor((timer % 3600000) / 60000);
  let seconds = Math.floor((timer % 60000) / 1000);

  timerDisplay.textContent = 
    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (!running) {
    running = true;
    interval = setInterval(() => {
      timer += 1000;
      updateTimer();
    }, 1000);
  }
}

function pauseTimer() {
  running = false;
  clearInterval(interval);
}

function resetTimer() {
  running = false;
  clearInterval(interval);
  timer = 0;
  updateTimer();
  lapsContainer.innerHTML = '';
}

function addLap() {
  if (timer > 0) {
    let lapTime = document.createElement("li");
    lapTime.textContent = timerDisplay.textContent;
    lapsContainer.appendChild(lapTime);
  }
}

// Event listeners
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
lapButton.addEventListener("click", addLap);

// Initialize display
updateTimer();
