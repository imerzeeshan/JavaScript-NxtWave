let fromUserInput = document.getElementById('fromUserInput');
let toUserInput = document.getElementById('toUserInput');
let startBtn = document.getElementById('startBtn');
let counterText = document.getElementById('counterText');

startBtn.onclick = () => {
    let fromUserValue = fromUserInput.value;
    let toUserValue = toUserInput.value;

    if (fromUserValue === "" || toUserValue === "") {
        alert('enter the input value');
        return;
    }

    let counter = parseInt(fromUserValue);
    counterText.textContent = counter;
    let intervalId = setInterval(() => {
        if (counter < parseInt(toUserValue)) {
            counter++;
            counterText.textContent = counter;
        } else {
            clearInterval(intervalId);
        }
    }, 1000);
};