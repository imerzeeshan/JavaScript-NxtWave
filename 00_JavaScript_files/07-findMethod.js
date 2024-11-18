/*
The find() method in JavaScript looks through an array and returns 
the first item that meets a specific condition you provide. 
If no item matches, it returns undefined. It skips any empty 
space in the array and doesn’t alter the original array.

Syntax:
array.find(function(currentValue, index, arr), thisValue)

Parameters:
function(currentValue, index, arr): A function to execute on each value in the array until the first 
element satisfying the condition is found. It takes three parameters:

currentValue: The current element being processed in the array.

index (optional): The index of the current element being processed in the array.

arr (optional): The array find() was called upon.

thisValue (optional): A value to use as this when executing the callback function.

Return value:
It returns the array element value if any of the elements in the 
array satisfy the condition, otherwise, it returns undefined.

Different Examples of find() Method
*/


// Example 1: In this example we searches for the first positive element in the array. 
// The find() method iterates through the array, returning the first element greater than 0. 
// It logs the result to the console.

// Input array contain some elements.
let array = [-10, -0.20, 0.30, -40, -50];

// Method (return element > 0).
let found = array.find(function (element) {
    return element > 0;
});

// Printing desired values.
console.log(found);


/*Example 2: In this example we searches for the first element in the array greater than 20. 
It uses the find() method to iterate through the array and returns the first element that
satisfies the condition. Finally, it logs the result (30) to the console. */

// Input array contain some elements.
let arr = [10, 20, 30, 40, 50];

// Method (return element > 10).
let found1 = arr.find(function (element) {
    return element > 20;
});

// Printing desired values.
console.log(found1);



/*Example 3: In this example we aims to find the first element in the array greater than 4.
It employs the find() method, iterating through the array until a matching element is found. 
It logs the result (`7`) to the console. */

// Input array contain some elements.
let arr1 = [2, 7, 8, 9];

// Provided testing method (return element > 4).
let found2 = arr1.find(function (element) {
    return element > 4;
});

// Printing desired values.
console.log(found2);
