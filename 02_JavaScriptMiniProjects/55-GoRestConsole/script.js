let consoleForm = document.getElementById('consoleForm');
let requestUrl = document.getElementById('requestUrl');
let responseStatus = document.getElementById('responseStatus');
let requestUrlErrMsg = document.getElementById('requestUrlErrMsg');
let requestMethod = document.getElementById('requestMethod');
let requestBody = document.getElementById('requestBody');
let responseBody = document.getElementById('responseBody');

requestUrl.addEventListener('change', function(event) {
    if (event.target.value === "") {
        requestUrlErrMsg.textContent = "Required*";
    } else {
        requestUrlErrMsg.textContent = "";
    }
});

let httpMethod = requestMethod.value;
requestMethod.addEventListener('change', function(event) {
    httpMethod = event.target.value;
    // console.log(httpMethod);
});

function httpResponseStatus(jsonData) {
    responseStatus.value = jsonData.code;
}

function httpResponseBody(jsonData) {
    responseBody.value = JSON.stringify(jsonData);
}

function submitHTTPRequest() {
    let url = requestUrl.value;
    let options = {
        method: httpMethod,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer f154813ace3078897e49b2ea155fa1e8c5472fd4d3cb110cb45359e4a49141fa"
        },
        body: requestBody.value
    };
    // console.log(options.body);
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            // console.log(jsonData.text());
            httpResponseStatus(jsonData);
            httpResponseBody(jsonData);
        });
}

function urlValidation() {
    if (requestUrl.value === "") {
        requestUrlErrMsg.textContent = "Required*";
    } else {
        requestUrlErrMsg.textContent = "";
    }
}

consoleForm.addEventListener("submit", function(event) {
    event.preventDefault();
    urlValidation();
    submitHTTPRequest();
});