let itemList = [{
    itemName: "Veg Biryani",
    uniqueNo: 1,
},
{
    itemName: "Chicken 65",
    uniqueNo: 2,
},
{
    itemName: "Paratha",
    uniqueNo: 3,
}
];

let orderedItemsContainer = document.getElementById('orderedItemsContainer');
let heading = document.createElement('h1');
heading.innerHTML = 'Your Ordered Items';
orderedItemsContainer.appendChild(heading);

let ListContainer = document.createElement('ul');
orderedItemsContainer.appendChild(ListContainer);

function orderYourItem(item) {
let listItem = document.createElement('li');
listItem.textContent = item.itemName;
listItem.id = "item" + item.uniqueNo;
listItem.classList.add('d-flex', "ordered-item");
ListContainer.appendChild(listItem);

let button = document.createElement('button');
button.textContent = 'Cancel';
button.id = "button" + item.uniqueNo;
button.classList.add("btn", "btn-danger", "ml-3");
listItem.appendChild(button);

button.onclick = function() {
    ListContainer.removeChild(listItem);
};
}

for (let item of itemList) {
orderYourItem(item);
}