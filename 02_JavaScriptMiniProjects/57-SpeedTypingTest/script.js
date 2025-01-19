let speedTypingTest = document.getElementById('speedTypingTest');
let timer = document.getElementById('timer');
let quoteDisplay = document.getElementById('quoteDisplay');
let result = document.getElementById('result');
let quoteInput = document.getElementById('quoteInput');
let submitBtn = document.getElementById('submitBtn');
let resetBtn = document.getElementById('resetBtn');
let spinner = document.getElementById('spinner');

let time = null;
let intervalId = setInterval(function() {
    time++;
    timer.textContent = time;
}, 1000);


let URL = "https://apis.ccbp.in/random-quote";
let options = {
    method: "GET"
};

function randomQuoteGenerato() {
    spinner.classList.remove("d-none");
    speedTypingTest.classList.add("d-none");
    fetch(URL, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            spinner.classList.add("d-none");
            speedTypingTest.classList.remove("d-none");

            // console.log(data.content);
            quoteDisplay.textContent = data.content;
        });
}
randomQuoteGenerato();

submitBtn.addEventListener('click', function() {
    let randomQuote = quoteDisplay.textContent;
    let typedQuote = quoteInput.value;
    console.log(randomQuote === typedQuote);
    if (randomQuote === quoteInput.value) {
        result.textContent = `You typed in ${time} seconds`;
        clearInterval(intervalId);
    } else if (randomQuote !== typedQuote) {
        result.textContent = `You typed incorrect sentance`;
    }
});

resetBtn.addEventListener('click', function() {
    time = 0;
    randomQuoteGenerato();
    quoteInput.value = "";
    result.textContent = "";
});