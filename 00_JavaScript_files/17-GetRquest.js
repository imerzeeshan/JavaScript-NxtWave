let options = {
    method: "GET"
};

fetch('https://gorest.co.in/public-api/users', options)
.then((response) => {
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.url);
    console.log(response.text());
    // console.log(response.json());
    
    // return response.status;
    // return response.text();
    return response.json();
})
.then(
    (jsonData) => {
    // let parsedData = JSON.parse(data);
    console.log(jsonData);
});