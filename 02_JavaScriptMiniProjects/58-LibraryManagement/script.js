let searchInput = document.getElementById('searchInput');
let searchResults = document.getElementById('searchResults');
let noResultFound = document.getElementById('noResultFound');
let popularBooks = document.getElementById('popularBooks');
let spinner = document.getElementById('spinner');


function createAndAppendBooks(result) {
    let columnContainer = document.createElement('div');
    columnContainer.classList.add("col-6");
    searchResults.appendChild(columnContainer);

    let bookImage = document.createElement('img');
    bookImage.src = result.imageLink;
    bookImage.classList.add("image-size");
    columnContainer.appendChild(bookImage);

    let authorEl = document.createElement('p');
    authorEl.classList.add("mt-2", "font-size");
    authorEl.textContent = result.author;
    columnContainer.appendChild(authorEl);
}

function createBooks(search_Results) {
    for (let result of search_Results) {
        createAndAppendBooks(result);
    }
}

function bookSearch(input) {
    let Url = "https://apis.ccbp.in/book-store?title=" + input;
    let options = {
        method: "GET"
    };
    fetch(Url, options)
        .then(function(response) {
            // console.log(response);
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            if (jsonData.total === 0) {
                noResultFound.classList.remove("d-none");
                popularBooks.classList.add("d-none");
                spinner.classList.add('d-none');
            } else {
                // popularBooks.classList.remove("d-none");
                // noResultFound.classList.add("d-none");
                spinner.classList.add('d-none');
                createBooks(jsonData.search_results);
                popularBooks.classList.remove("d-none");
            }
        });
}

searchInput.addEventListener('keydown', function(event) {

    if (event.key === "Enter") {
        searchResults.textContent = "";
        let input = searchInput.value;
        if (input !== "") {
            popularBooks.classList.add("d-none");
            noResultFound.classList.add("d-none");
            spinner.classList.remove('d-none');
            bookSearch(input);
        }
    }
});