let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let interval = null;
let lapCounter = 1;

// Format time to 2-digits
function formatTime(num) {
  return num < 10 ? `0${num}` : num;
}

// Update the stopwatch display
function updateDisplay() {
  display.innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

// Run stopwatch every second
function startTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

// Start button
document.getElementById("start").addEventListener("click", () => {
  if (!interval) {
    interval = setInterval(startTimer, 1000);
  }
});

// Pause button
document.getElementById("pause").addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

// Reset button
document.getElementById("reset").addEventListener("click", () => {
  clearInterval(interval);
  [seconds, minutes, hours] = [0, 0, 0];
  updateDisplay();
  interval = null;
  document.getElementById("laps").innerHTML = "";
  lapCounter = 1;
});

// Lap button
document.getElementById("lap").addEventListener("click", () => {
  if (interval) {
    const lapTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${lapCounter++} - ${lapTime}`;
    document.getElementById("laps").appendChild(lapItem);
  }
});
