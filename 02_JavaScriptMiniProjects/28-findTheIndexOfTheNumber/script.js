let numbers = [17, 31, 77, 20, 63];

let userInput = document.getElementById('userInput');
let findBtn = document.getElementById('findBtn');
let indexOfNumber = document.getElementById('indexOfNumber');

function findIndexOfNumber() {
    let value = parseInt(userInput.value);

    let index = numbers.findIndex(function(eachItem) {
        if (eachItem === value) {
            return true;
        } else {
            return false;
        }
    });
    indexOfNumber.textContent = index;
    userInput.value = "";
}