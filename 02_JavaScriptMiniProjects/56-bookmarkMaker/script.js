// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let bookmarkForm = document.getElementById("bookmarkForm");
let siteNameInput = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");
let submitBtn = document.getElementById("submitBtn");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");
let bookmarksList = document.getElementById("bookmarksList");


siteNameInput.addEventListener('change', function(event) {
    if (event.target.value === "") {
        siteNameErrMsg.textContent = "Required*";
    } else {
        siteNameErrMsg.textContent = "";
    }
});
siteUrlInput.addEventListener('change', function(event) {
    if (event.target.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else {
        siteUrlErrMsg.textContent = "";
    }
});

function createAndAppendBookmark() {
    let bookmarkItem = document.createElement('div');
    bookmarkItem.classList.add('added-bookmark');
    bookmarksList.appendChild(bookmarkItem);

    let bookmarkTitle = document.createElement('h1');
    bookmarkTitle.textContent = siteNameInput.value;
    bookmarkTitle.classList.add("title");
    bookmarkItem.appendChild(bookmarkTitle);

    let bookmarkUrl = document.createElement('a');
    bookmarkUrl.textContent = siteUrlInput.value;
    bookmarkUrl.href = siteUrlInput.value;
    bookmarkUrl.target = "_blank";
    bookmarkItem.appendChild(bookmarkUrl);
}

function validationForm() {
    if (siteNameInput.value === "") {
        siteNameErrMsg.textContent = "Required*";
    }
    if (siteUrlInput.value === "") {
        siteUrlErrMsg.textContent = "Required*";
        return;
    }
    createAndAppendBookmark();
}

bookmarkForm.addEventListener("submit", function(event) {
    event.preventDefault();
    validationForm();
});