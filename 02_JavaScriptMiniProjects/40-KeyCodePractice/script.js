let userInput = document.getElementById("userInput");
let keyCodeList = document.getElementById('keyCodeList');

userInput.addEventListener('keydown', (event) => {
    let listItem = document.createElement('li');
    let keyCode = event.keyCode;
    listItem.textContent = keyCode;
    keyCodeList.appendChild(listItem);
});