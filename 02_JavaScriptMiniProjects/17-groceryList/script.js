let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];
let groceryListContainer = document.getElementById('groceryListContainer');

let heading = document.createElement('h1');
heading.textContent = 'Grocery List';
heading.classList.add("heading");
groceryListContainer.appendChild(heading);

let itemContainer = document.createElement('ul');
itemContainer.classList.add("ulItemContainer");
groceryListContainer.appendChild(itemContainer);

function groceryListFn(item) {

    let listItem = document.createElement('li');
    listItem.innerHTML = item;
    itemContainer.appendChild(listItem);

}

for (let item of groceryList) {
    groceryListFn(item);
}