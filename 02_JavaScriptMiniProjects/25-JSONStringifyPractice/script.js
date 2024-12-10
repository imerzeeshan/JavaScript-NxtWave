let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
    name: "Rahul",
    age: 25,
    gender: "Male",
};
let todos = [{
        todo: "Attending CCBP sessions",
        todoStatus: "Completed",
    },
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed",
    },
    {
        todo: "Asking doubts",
        todoStatus: "Completed",
    },
];

let jsonContainer = document.getElementById("jsonContainer");

let bikesStringify = JSON.stringify(bikes);
let para = document.createElement('p');
para.textContent = bikesStringify;
jsonContainer.appendChild(para);

let personStringify = JSON.stringify(person);
let para1 = document.createElement('p');
para1.textContent = personStringify;
jsonContainer.appendChild(para1);


let todosStringify = JSON.stringify(todos);
let para2 = document.createElement('p');
para2.textContent = todosStringify;
jsonContainer.appendChild(para2);