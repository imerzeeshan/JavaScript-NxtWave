let myArray = [10,'abc',11.25,100,568];

let arr = myArray.splice(1,2,'one',true);

let idx = myArray.findIndex((item) => {
    console.log(typeof(item));
    if(item === 100) {
        return true;
    } else {
        return false;
    }
});
console.log(idx);
console.log(myArray);
console.log(arr);

//----------------------------------------

let customerData = [
    {
        name: "Zeeshan",
        id: 101
    },
    {
        name: "najeeb",
        id: 102
    },
    {
        name: "moassar",
        id: 103
    }
];

let idx1 = customerData.findIndex((item) => {
    if (item.id === 102) {
        return true;
    }
    else {
        return false;
    }
});

console.log(idx);
console.log(customerData[idx1]);
console.log(customerData[idx1].name);









