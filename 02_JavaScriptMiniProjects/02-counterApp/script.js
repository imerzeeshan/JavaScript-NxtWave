let counterElement = document.getElementById('counterValue');


function onIncrement() {
    let prevCountValue = counterElement.textContent;
    let updatedCountValue = parseInt(prevCountValue) + 1;
    counterElement.textContent = updatedCountValue;

    if (updatedCountValue > 0) {
        counterElement.style.color = 'green';
    } else if (updatedCountValue < 0) {
        counterElement.style.color = 'red';
    } else {
        counterElement.style.color = 'black';
    }

}

function onDecrement() {
    let prevCountValue = counterElement.textContent;
    let updatedCountValue = parseInt(prevCountValue) - 1;
    counterElement.textContent = updatedCountValue;
    counterElement.style.color = 'red'
    if (updatedCountValue > 0) {
        counterElement.style.color = 'green';
    } else if (updatedCountValue < 0) {
        counterElement.style.color = 'red';
    } else {
        counterElement.style.color = 'black';
    }
}


function onReset() {
    counterElement.textContent = 0;
    counterElement.style.color = 'black';
}