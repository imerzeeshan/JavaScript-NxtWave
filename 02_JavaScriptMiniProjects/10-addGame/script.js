let firstNumberElement = document.getElementById('firstNumber');
let secondNumberElement = document.getElementById('secondNumber');
let userInputElement = document.getElementById('userInput');
let result = document.getElementById('gameResult');

let randomOne = Math.ceil(Math.random() * 100);
let randomTwo = Math.ceil(Math.random() * 100);
firstNumberElement.textContent = randomOne;
secondNumberElement.textContent = randomTwo;


function checkBtn() {
    let userValue = parseInt(userInputElement.value);
    if (userValue === (randomOne + randomTwo)) {
        result.textContent = "Congratulations! You got right.";
        result.style.backgroundColor = 'green';
    } else {
        result.textContent = "Wrong! Please Try Again.";
        result.style.backgroundColor = 'blue';
    }
}

function restartBtn() {
    randomOne = parseInt(Math.ceil(Math.random() * 100));
    randomTwo = parseInt(Math.ceil(Math.random() * 100));
    firstNumberElement.textContent = randomOne;
    secondNumberElement.textContent = randomTwo;
    userInputElement.value = "";
    result.textContent = "";
}