let jokeText = document.getElementById('jokeText');
let jokeBtn = document.getElementById('jokeBtn');
let spinner = document.getElementById('spinner');
// let jokeText = document.getElementById('jokeText');

let options = {
    method: "GET"
};

jokeBtn.addEventListener('click', () => {
    spinner.classList.remove('d-none');
    jokeText.classList.add('d-none');
    fetch("https://apis.ccbp.in/jokes/random", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinner.classList.add('d-none');
            jokeText.classList.remove('d-none');
            jokeText.textContent = jsonData.value;
        });
});