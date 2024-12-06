let cartContainer = document.getElementById('cartContainer');

let cartHeading = document.createElement("h1");
cartHeading.innerHTML = "Add To Cart";
cartContainer.appendChild(cartHeading);

let userInput = document.createElement('input');
userInput.id = 'cartItemTextInput';
cartContainer.appendChild(userInput);

let addButton = document.createElement('button');
addButton.innerHTML = "Add";
addButton.id = "addBtn";
addButton.classList.add("btn", 'btn-primary', 'ml-2');
cartContainer.appendChild(addButton);

let listContainer = document.createElement('div');
cartContainer.appendChild(listContainer);

let para = document.createElement('p');
para.innerHTML = 'My Cart items';
listContainer.appendChild(para);

let itemContainer = document.createElement('ul');
listContainer.appendChild(itemContainer);



addButton.onclick = function() {
    let item = document.createElement('li');
    item.textContent = userInput.value;
    itemContainer.appendChild(item);
    userInput.value = "";
}