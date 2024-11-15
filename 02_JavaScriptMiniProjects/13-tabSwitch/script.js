let aboutButtonEl = document.getElementById("aboutButton");
let timeToVisitButtonEl = document.getElementById("timeToVisitButton");
let attractionsButtonEl = document.getElementById("attractionsButton");

let aboutTabEl = document.getElementById("aboutTab");
let timeToVisitTabEl = document.getElementById("timeToVisitTab");
let attractionsTabEl = document.getElementById("attractionsTab");

timeToVisitTabEl.classList.add("d-none");
attractionsTabEl.classList.add("d-none");

function onClickAboutTab() {
    aboutTabEl.classList.remove("d-none");
    timeToVisitTabEl.classList.add("d-none");
    attractionsTabEl.classList.add("d-none");

    aboutButtonEl.classList.add("selected-button");
    timeToVisitButtonEl.classList.remove("selected-button");
    attractionsButtonEl.classList.remove("selected-button");
}

function onClickTimeToVisitTab() {
    aboutTabEl.classList.add("d-none");
    timeToVisitTabEl.classList.remove("d-none");
    attractionsTabEl.classList.add("d-none");

    aboutButtonEl.classList.remove("selected-button");
    timeToVisitButtonEl.classList.add("selected-button");
    attractionsButtonEl.classList.remove("selected-button");
}

function onClickAttractionsTab() {
    aboutTabEl.classList.add("d-none");
    timeToVisitTabEl.classList.add("d-none");
    attractionsTabEl.classList.remove("d-none");

    aboutButtonEl.classList.remove("selected-button");
    timeToVisitButtonEl.classList.remove("selected-button");
    attractionsButtonEl.classList.add("selected-button");
}