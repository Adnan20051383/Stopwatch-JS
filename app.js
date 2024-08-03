const timerString = document.getElementById("stopwatch-timer");
let intervalId = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function startStopwatch() {
    if(!isRunning) {
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateStopwatch, 10);
        isRunning = true;
    }
}

function stopStopwatch() {
    if(isRunning) {
        clearInterval(intervalId);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function resetStopwatch() {
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    timerString.textContent = "00:00:00:00";
}

function updateStopwatch() {
    elapsedTime = Date.now() - startTime;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let miliSeconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2,0);
    minutes = String(minutes).padStart(2,0);
    seconds = String(seconds).padStart(2,0);
    miliSeconds = String(miliSeconds).padStart(2,0);
    timerString.textContent = `${hours}:${minutes}:${seconds}:${miliSeconds}`;
}