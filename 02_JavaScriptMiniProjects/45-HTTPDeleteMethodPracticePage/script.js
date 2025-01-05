let userInputEl = document.getElementById("userInput");
let sendDeleteRequestBtnEl = document.getElementById("sendDeleteRequestBtn");
let loadingEl = document.getElementById("loading");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");

function sendDeleteHTTPRequest() {
  let userInputVal = userInputEl.value;
  let requestUrl = "https://gorest.co.in/public-api/users/" + userInputVal;
  let options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9ba4c4bfb18e01d1b3f0",
    }
  };

  loadingEl.classList.remove("d-none");
  requestStatusEl.classList.add("d-none");

  fetch(requestUrl, options)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonData) {
      requestStatusEl.classList.remove("d-none");
      loadingEl.classList.add("d-none");

      let requestStatus = jsonData.code;
      let httpResponse = JSON.stringify(jsonData);
      requestStatusEl.textContent = requestStatus;
      httpResponseEl.textContent = httpResponse;
    });
}

sendDeleteRequestBtnEl.addEventListener("click", sendDeleteHTTPRequest);
