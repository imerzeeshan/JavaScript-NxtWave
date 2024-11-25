let data = {
    email: "imnajeeb@gamil.com"
};

let options = {
    method: "PUT",
    headers: {
        "Content-Type" : "application/json",
        Accept: "application/json",
        Authorization: "Bearer 25eba42d052d036590210d088c6f134f1f7af45f61c4555e2ec95b03c4d46843"
    },
    body: JSON.stringify(data)
};

fetch('https://gorest.co.in/public-api/users/75392030', options)
.then((response) => {
    return response.json();
})
.then((jsonData) => {
    console.log(jsonData);    
});


