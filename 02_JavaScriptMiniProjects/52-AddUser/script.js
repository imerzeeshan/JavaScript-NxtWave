let addUserFrom = document.getElementById('addUserForm');
let nameEl = document.getElementById('name');
let emailEl = document.getElementById('email');
let nameErrMsg = document.getElementById('nameErrMsg');
let emailErrMsg = document.getElementById('emailErrMsg');

nameEl.addEventListener('blur', function(event) {
    if (event.target.value === "") {
        nameErrMsg.textContent = "Required*";
    } else {
        nameErrMsg.textContent = "";
    }
});
emailEl.addEventListener('blur', function(event) {
    if (event.target.value === "") {
        emailErrMsg.textContent = "Required*";
    } else {
        emailErrMsg.textContent = "";
    }
});

addUserFrom.addEventListener("submit", function(event) {
    event.preventDefault();

});