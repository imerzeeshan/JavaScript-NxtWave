let questionForm = document.getElementById('questionsForm');
let cityHyderabad = document.getElementById('cityHyderabad');
let cityChennai = document.getElementById('cityChennai');
let cityDelhi = document.getElementById('cityDelhi');
let cityMumbai = document.getElementById('cityMumbai');
let submitBtn = document.getElementById('submitBtn');
let resultMsg = document.getElementById('resultMsg');

let answer = "";

cityHyderabad.addEventListener('change', function(event) {
    answer = event.target.value;
});
cityChennai.addEventListener('change', function(event) {
    answer = event.target.value;
});
cityDelhi.addEventListener('change', function(event) {
    answer = event.target.value;
});
cityMumbai.addEventListener('change', function(event) {
    answer = event.target.value;
});

questionForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (answer === "") {
        resultMsg.textContent = "Please select the answer";
    } else if (answer !== "Delhi") {
        resultMsg.textContent = "Wrong answer";
    } else {
        resultMsg.textContent = "Correct answer";
    }
});