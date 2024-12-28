let twentySecondsBtn = document.getElementById('twentySecondsBtn');
let thirtySecondsBtn = document.getElementById('thirtySecondsBtn');
let fortySecondsBtn = document.getElementById('fortySecondsBtn');
let oneMinuteBtn = document.getElementById('oneMinuteBtn');
let timerText = document.getElementById('timerText');

let eventId = null;

function timer(time) {
    let counter = time;
    timerText.textContent = counter + " seconds left";
    eventId = setInterval(() => {
        if (counter > 1) {
            counter--;
            timerText.textContent = counter + " seconds left";
        } else {
            clearInterval(eventId);
            timerText.textContent = "Your moment is complete";
        }
    }, 1000);
}

twentySecondsBtn.addEventListener('click', () => {
    clearInterval(eventId);
    timer(20);
});

thirtySecondsBtn.addEventListener('click', () => {
    clearInterval(eventId);
    timer(30);
});

fortySecondsBtn.addEventListener('click', () => {
    timer(40);
});

oneMinuteBtn.addEventListener('click', () => {
    clearInterval(eventId);
    timer(60);
});