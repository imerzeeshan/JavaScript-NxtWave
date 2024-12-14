let arr = [1, 7, 3, 1, 0, 20, 77];

let startIndexInput = document.getElementById('startIndexInput');
let deleteCountInput = document.getElementById('deleteCountInput');
let itemToAddInput = document.getElementById('itemToAddInput');
let spliceBtn = document.getElementById('spliceBtn');
let updatedArray = document.getElementById('updatedArray');

function convertArrToJSONStringAndAppend() {
    const stringifiedArray = JSON.stringify(arr);
    updatedArray.textContent = stringifiedArray;
}

convertArrToJSONStringAndAppend();

spliceBtn.onclick = () => {
    let idx = startIndexInput.value;
    let delItem = deleteCountInput.value;
    let addItem = itemToAddInput.value;

    if (idx === "") {
        alert('Enter the start index');
        return;
    }
    if (delItem === "") {
        delItem = 0;
    }
    if (addItem === "") {
        arr.splice(idx, delItem);
    } else {
        arr.splice(idx, delItem, addItem);
    }
    startIndexInput.value = "";
    deleteCountInput.value = "";
    itemToAddInput.value = "";
    convertArrToJSONStringAndAppend();
};