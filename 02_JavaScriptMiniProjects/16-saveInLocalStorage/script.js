let saveButton = document.getElementById('saveButton');
let textArea = document.getElementById('message');
let clearButton = document.getElementById('clearButton');

saveButton.onclick = function() {
    let userEnteredText = textArea.value;
    localStorage.setItem("value", userEnteredText);
};

let storageValue = localStorage.getItem("value");
if (storageValue === null) {
    storageValue = "";
} else {
    textArea.value = storageValue;
}

clearButton.onclick = function() {
    localStorage.removeItem("value");
    textArea.value = '';
}

// localStorage.removeItem();
