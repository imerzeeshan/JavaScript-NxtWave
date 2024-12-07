const container = document.getElementById('checkBoxWithLabelContainer');

const checkboxInput = document.createElement('input');
checkboxInput.type = "checkbox";
checkboxInput.id = "checkbox";
container.appendChild(checkboxInput);

const label = document.createElement('label');
label.id = "checkboxLabel";
label.textContent = "I am a label";
label.setAttribute('for', 'checkbox');
container.appendChild(label);

checkboxInput.onclick = function() {
    label.classList.toggle("line-through");
};