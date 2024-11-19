/*JavaScript Array shift() Method

The shift() method in JavaScript is used to remove the first element of an array, 
reducing the array’s length by one. This method is particularly useful for scenarios 
where elements need to be processed in the order they were added, such as in queue-like structures.

Syntax:
arr.shift();

Parameters:
This method does not accept any parameter.

Return Value:
This function returns the removed first element of the array. 
If the array is empty then this function returns undefined.

Note: This function can also be used with other javascript objects that behave like the array.


Key Points
The shift() method modifies the original array.
It can be used with other JavaScript objects that behave like arrays (e.g., array-like objects).
Indices of the remaining elements are adjusted, decrementing by one to fill the gap left by the 
removed element.

Examples of Array shift() Method*/


/*Example 1: Removing the First Element from the Array
The function func() removes the first element from array
 using the shift() method. The removed element is stored 
 in the variable, value, which is then logged to the console 
 along with the modified array.*/

// Original array
let array = ["GFG", "Geeks", "for", "Geeks"];

// Checking for condition in array
    let value = array.shift();

console.log(value);
console.log(array);

// Output
// GFG
// [ 'Geeks', 'for', 'Geeks' ]

// Example 2: Removing First Element from Empty Array
// The function func() attempts to remove the first element from an empty array array using the shift() method. Since the array is empty, shift() returns undefined, which is logged to the console along with the unchanged array.

// Original array
let arr = [];

// Checking for condition in array
let val = arr.shift();

console.log(val);
console.log(arr);

// Output
// undefined
// []


// Example 3: Removing the First Element from the Nested Array
// The function func() removes the first element from the nested array using the shift() method. The removed element is stored in the variable value, which is then logged to the console along with the modified array.

// Original array
let arr1 = [1,[2,3,4],5,6];

// shift method on nested array
let val1 = arr1[1].shift();

console.log(val1);
console.log("Array after operation: "+ arr1);

// Output
// 2
// Array after operation: 1,3,4,5,6