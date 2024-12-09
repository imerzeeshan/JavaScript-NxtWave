let userInput = document.getElementById('titleInput');
let userReview = document.getElementById('reviewTextarea');
let addBtn = document.getElementById('addBtn');
let reviewContainer = document.getElementById('reviewsContainer');

addBtn.onclick = function() {
    if (userInput.value === "") {
        alert('please Enter Valid Title');
    }
    let title = document.createElement('h3');
    let review = document.createElement('p');

    title.textContent = userInput.value;
    review.textContent = userReview.value;
    reviewContainer.appendChild(title);
    reviewContainer.appendChild(review);

    userInput.value = "";
    userReview.value = "";
};