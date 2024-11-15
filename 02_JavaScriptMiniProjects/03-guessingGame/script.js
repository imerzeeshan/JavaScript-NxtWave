let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById('userInput');
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

function checkGuess() {
    let guessNumber = parseInt(userInput.value);

    if (guessNumber > randomNumber) {
        gameResult.innerHTML = "Too Large! Try Again.";
        gameResult.style.backgroundColor = '#1e217c';
        setTimeout(() => {
            gameResult.innerHTML = "";
            gameResult.style.backgroundColor = 'transparent';
        }, 5000);
    } else if (guessNumber < randomNumber) {
        gameResult.innerHTML = "Too Small! Try Again.";
        gameResult.style.backgroundColor = '#1e217c';
        setTimeout(() => {
            gameResult.innerHTML = "";
            gameResult.style.backgroundColor = 'transparent';
        }, 5000);
    } else if (guessNumber === randomNumber) {
        gameResult.innerHTML = "Congratulations! You Got It Right, Play Again.";
        gameResult.style.backgroundColor = 'green';
        randomNumber = Math.ceil(Math.random() * 100);
        console.log(randomNumber);
    } else {
        gameResult.innerHTML = "Invalid Input! Try Again.";
        gameResult.style.backgroundColor = 'red';
    }
}