let searchInput = document.getElementById('searchInput');
let resultCountries = document.getElementById('resultCountries');
let spinner = document.getElementById('spinner');

let inputValue = "";
let countryList = [];

function createAndAppendHTTPRequest(country) {
    let {
        flag,
        name,
        population
    } = country;

    let countryCard = document.createElement('div');
    countryCard.classList.add("country-card", "col-11", "col-md-5", "mr-auto", "ml-auto", "d-flex", "flex-row");
    resultCountries.appendChild(countryCard);

    let countryImage = document.createElement('img');
    countryImage.src = flag;
    countryImage.classList.add('country-flag', "mt-auto", "mb-auto");
    countryCard.appendChild(countryImage);

    let countryNameContainer = document.createElement('div');
    countryNameContainer.classList.add("d-flex", "flex-column", "ml-4");
    countryCard.appendChild(countryNameContainer);

    let countryName = document.createElement('p');
    countryName.textContent = name;
    countryName.classList.add("country-name");
    countryNameContainer.appendChild(countryName);

    let countryPopulation = document.createElement('p');
    countryPopulation.textContent = population;
    countryPopulation.classList.add("country-population");
    countryNameContainer.appendChild(countryPopulation);

}

function searchCountries() {
    resultCountries.textContent = "";

    for (let country of countryList) {
        let countryName = country.name;
        if (countryName.includes(inputValue)) {
            console.log("imerzeshan");
            createAndAppendHTTPRequest(country);
        }
    }
}

function displayFetch() {
    let options = {
        method: "GET"
    };
    spinner.classList.remove("d-none");
    fetch('https://apis.ccbp.in/countries-data', options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            // console.log(jsonData);
            spinner.classList.add("d-none");
            countryList = jsonData;
            searchCountries();
        });
}

displayFetch();

searchInput.addEventListener('keyup', (event) => {

    inputValue = event.target.value;
    searchCountries();
});