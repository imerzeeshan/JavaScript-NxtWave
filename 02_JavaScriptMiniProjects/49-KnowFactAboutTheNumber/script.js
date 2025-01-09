let userInput = document.getElementById('userInput');
let factEl = document.getElementById('fact');
let spinner = document.getElementById('spinner');

function numberFact(number) {
    console.log(number.fact);
    spinner.classList.add("d-none");
    factEl.classList.remove('d-none');
    factEl.textContent = number.fact;
}

userInput.addEventListener('keyup', () => {
    spinner.classList.remove("d-none");
    factEl.classList.add('d-none');
    let number = userInput.value;
    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/numbers-fact?number=" + number, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            numberFact(jsonData);
        });
});