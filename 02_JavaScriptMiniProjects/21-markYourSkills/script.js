let skillList = [{
    skillName: "HTML",
    uniqueNo: 1,
},
{
    skillName: "CSS",
    uniqueNo: 2,
},
{
    skillName: "JavaScript",
    uniqueNo: 3,
}
];

let skillsContainer = document.getElementById('skillsContainer');
let heading = document.createElement('h1');
heading.textContent = "Mark your Skills";
skillsContainer.appendChild(heading);

let listContainer = document.createElement('ul');
skillsContainer.appendChild(listContainer);


function skillsFn(item) {
let uni = item.uniqueNo;

let listItem = document.createElement('li');
listItem.classList.add('d-flex', "flex-row");
listContainer.appendChild(listItem);

let checkboxInput = document.createElement('input');
checkboxInput.type = 'checkbox';
checkboxInput.id = "checkbox" + uni;

listItem.appendChild(checkboxInput);

let label = document.createElement('label');
label.setAttribute('for', 'checkbox' + uni);
label.id = "label" + uni;
label.textContent = item.skillName;
label.classList.add("ml-3");
listItem.appendChild(label);

checkboxInput.onclick = function() {
    label.classList.toggle('green');
};
// let breakEl = document.createElement('br');
// skillsContainer.appendChild(breakEl);
}

for (let item of skillList) {
skillsFn(item);
}