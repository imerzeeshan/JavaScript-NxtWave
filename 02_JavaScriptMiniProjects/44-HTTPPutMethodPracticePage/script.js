let userInput = document.getElementById('userInput');
let requestBody = document.getElementById('requestBody');
let sendPutRequestBtn = document.getElementById('sendPutRequestBtn');
let requestStatus = document.getElementById('requestStatus');
let httpResponse = document.getElementById('httpResponse');
let loading = document.getElementById('loading');


function sendPutHTTPRequest() {
    let id = parseInt(userInput.value);
    let requestURL = "https://gorest.co.in/public-api/users/" + id;
    let updateValue = requestBody.value;

    let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 25eba42d052d036590210d088c6f134f1f7af45f61c4555e2ec95b03c4d46843"
        },
        body: updateValue
    };


    // let updateValue = JSON.parse(requestBody.value);
    // data = updateValue.name;

    fetch(requestURL, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let {
                code
            } = jsonData;
            let responseBD = JSON.stringify(jsonData);

            console.log(responseBD);

            requestStatus.textContent = code;
            httpResponse.textContent = responseBD;
        });

}

sendPutRequestBtn.addEventListener('click', sendPutHTTPRequest);