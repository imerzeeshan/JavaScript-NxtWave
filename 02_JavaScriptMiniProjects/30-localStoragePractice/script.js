let message = document.getElementById('msg');
let saveBtn = document.getElementById('saveBtn');
let clearBtn = document.getElementById('clearBtn');

let storageKey = "userInput";
let localVal = localStorage.getItem(storageKey);

if (localVal === null) {
    localStorage.setItem(storageKey, message.value);
}

saveBtn.onclick = function() {
    let val = message.value;
    localStorage.setItem(storageKey, val);
};

clearBtn.onclick = function() {
    localStorage.removeItem(storageKey);
    message.value = "";
};