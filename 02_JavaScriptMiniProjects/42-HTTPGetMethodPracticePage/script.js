let sendGetRequestBtn = document.getElementById('sendGetRequestBtn');
let requestStatus = document.getElementById('requestStatus');
let httpResponse = document.getElementById('httpResponse');
let loading = document.getElementById('loading');

let options = {
    method: "GET"
};

sendGetRequestBtn.addEventListener('click', () => {
    requestStatus.classList.add("d-none");
    loading.classList.remove("d-none");
    fetch("https://gorest.co.in/public-api/users", options)
        .then(
            function(response) {
                return response.json();
            })
        .then(
            function(jsonData) {
                requestStatus.classList.remove("d-none");
                loading.classList.add("d-none");

                let {
                    code
                } = jsonData;
                let http = JSON.stringify(jsonData);
                requestStatus.textContent = code;
                httpResponse.textContent = http;
            });
});