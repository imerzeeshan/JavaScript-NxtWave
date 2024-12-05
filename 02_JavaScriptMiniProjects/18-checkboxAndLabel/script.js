let checkboxContainer = document.getElementById('checkboxWithLabelContainer');
checkboxContainer.classList.add("text-center", "p-5");

let checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.id = "checkbox";
checkboxContainer.appendChild(checkbox);

let label = document.createElement('label');
label.setAttribute('for', "checkbox");
label.textContent = "Click Me!";
label.id = 'checkboxLabel';
label.classList.add("pl-2");
checkboxContainer.appendChild(label);