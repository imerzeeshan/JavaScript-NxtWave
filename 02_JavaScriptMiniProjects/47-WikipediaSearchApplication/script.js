let searchInputEl = document.getElementById('searchInput');
let searchResults = document.getElementById('searchResults');
let spinner = document.getElementById('spinner');

function createAndAppendHTTPReques(data) {
    let {
        title,
        link,
        description
    } = data;
    console.log(data);
    let searchItem = document.createElement('div');
    searchItem.classList.add('search-item');
    searchResults.appendChild(searchItem);

    let titleEl = document.createElement('a');
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.textContent = title;
    titleEl.classList.add("result-title");
    searchItem.appendChild(titleEl);

    let titleBreak = document.createElement('br');
    searchItem.appendChild(titleBreak);

    let linkEl = document.createElement('a');
    linkEl.href = link;
    linkEl.target = "_blank";
    linkEl.textContent = link;
    linkEl.classList.add("result-url");
    searchItem.appendChild(linkEl);

    let linkBreak = document.createElement('br');
    searchItem.appendChild(linkBreak);

    let descriptionEl = document.createElement('p');
    descriptionEl.classList.add('link-description');
    descriptionEl.textContent = description;
    searchItem.appendChild(descriptionEl);

}

function displayResult(search_results) {
    // console.log(search_results[0]);
    spinner.classList.toggle("d-none");

    for (let result of search_results) {
        createAndAppendHTTPReques(result);
    }
}

searchInputEl.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        spinner.classList.toggle("d-none");
        searchResults.textContent = "";
        let inputValue = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + inputValue;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                displayResult(jsonData.search_results);
            });

    }
});