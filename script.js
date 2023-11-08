const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let timerInterval;
let timeLeft = 0;

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function startTimer(durationInSeconds) {
    clearInterval(timerInterval);
    timeLeft = durationInSeconds;
    display.textContent = formatTime(timeLeft);

    timerInterval = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            // display.textContent = "00:00:00";
            display.textContent = " ⌛Time-out🎯";
        } else {
            timeLeft--;
            display.textContent = formatTime(timeLeft);
        }
    }, 1000);
}

startButton.addEventListener('click', function () {
    const inputTime = prompt("Enter the countdown time in seconds:");
    if (!isNaN(inputTime) && inputTime > 0) {
        startTimer(parseInt(inputTime));
    }
});

stopButton.addEventListener('click', function () {
    clearInterval(timerInterval);
});

resetButton.addEventListener('click', function () {
    clearInterval(timerInterval);
    timeLeft = 0;
    display.textContent = "00:00:00";
});

// let timer;
// let timeLeft;
// let isTimerRunning = false;

// function startTimer(durationInSeconds) {
//     let endTime = Date.now() + durationInSeconds * 1000;
//     updateTimerDisplay(durationInSeconds);

//     timer = setInterval(function () {
//         timeLeft = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
//         updateTimerDisplay(timeLeft);

//         if (timeLeft <= 0) {
//             clearInterval(timer);
//             isTimerRunning = false;
//         }
//     }, 1000);
// }

// function updateTimerDisplay(timeInSeconds) {
//     const minutes = Math.floor(timeInSeconds / 60);
//     const seconds = timeInSeconds % 60;
//     const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
//     document.getElementById("timer-display").textContent = formattedTime;
// }

// document.getElementById("start-btn").addEventListener("click", function () {
//     if (!isTimerRunning) {
//         startTimer(300); // Set timer duration in seconds (here, 300 seconds = 5 minutes)
//         isTimerRunning = true;
//     }
// });

// document.getElementById("stop-btn").addEventListener("click", function () {
//     clearInterval(timer);
//     isTimerRunning = false;
// });

// document.getElementById("reset-btn").addEventListener("click", function () {
//     clearInterval(timer);
//     isTimerRunning = false;
//     updateTimerDisplay(0);
// });
