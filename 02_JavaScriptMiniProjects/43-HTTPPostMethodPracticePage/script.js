let requestBody = document.getElementById('requestBody');
let sendPostRequestBtn = document.getElementById('sendPostRequestBtn');
let requestStatus = document.getElementById('requestStatus');
let httpResponse = document.getElementById('httpResponse');
let loading = document.getElementById('loading');

function sendPostHTTPRequest() {
    let requestUrl = "https://gorest.co.in/public-api/users";
    let data = requestBody.value;
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 25eba42d052d036590210d088c6f134f1f7af45f61c4555e2ec95b03c4d46843",
        },
        body: data
    };

    requestStatus.classList.add("d-none");
    loading.classList.remove("d-none");

    fetch(requestUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            requestStatus.classList.remove("d-none");
            loading.classList.add("d-none");
            let {
                code
            } = jsonData;
            let response = JSON.stringify(jsonData);
            requestStatus.textContent = code;
            httpResponse.textContent = response;
        });
}

sendPostRequestBtn.addEventListener('click', sendPostHTTPRequest);