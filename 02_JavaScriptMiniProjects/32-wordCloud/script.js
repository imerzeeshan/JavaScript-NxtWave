let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordCloudContainer = document.getElementById('wordsContainer');

function randomFontSize() {
    return (Math.floor(Math.random() * 50));
}

function createSpanElementAndAppend(word) {
    let fontSize = randomFontSize();
    let span = document.createElement('span');
    span.textContent = word;
    span.style.fontSize = fontSize + "px";
    span.classList.add('p-2');
    wordCloudContainer.appendChild(span);
}

for (let word of wordCloud) {
    createSpanElementAndAppend(word);
}

let userInput = document.getElementById('userInput');
let errorMsg = document.getElementById('errorMsg');
let addBtn = document.getElementById('addBtn');


addBtn.onclick = function() {
    let userValue = userInput.value;

    if (userValue === "") {
        errorMsg.textContent = "Please enter a word";
    } else {
        errorMsg.textContent = "";
        createSpanElementAndAppend(userValue);
        userInput.value = "";
    }
};