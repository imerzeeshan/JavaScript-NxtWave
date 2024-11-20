/*JavaScript Array sort() Method

The JS array.sort() method rearranges the array elements alphabetically and returns a sorted array.
It does not create a new array but updates the original array.

Sorting Array of Strings*/


// Original array
let arr = ["JS", "HTML", "CSS"];

console.log(arr);

// Sorting the array
arr.sort()

console.log(arr);

// Output
// [ 'JS', 'HTML', 'CSS' ]
// [ 'CSS', 'HTML', 'JS' ]


/*Syntax:
arr.sort(compareFunction);

Parameters
arr: The array to be sorted.
compareFunction (Optional): A function that defines the sort order. If omitted, 
the array elements are sorted based on their string Unicode code points.
Return value: This method returns the reference of the sorted original array.

Sorting a Numeric Array in JS
Ascending Order
Array.sort() sorts the elements in lexicographical order whether a string or number.*/


const arr1 = [ 10, 20, 25, 100 , 40]
console.log(arr1.sort())

// Output
// [ 10, 100, 20, 25, 40 ]



/*The sorting with JavaScript’s sort() is different from languages like C++ , 
Java and Python. It compares array elements alphabetically as strings rather than numbers. 
This causes elements to be sorted based on character Unicode values instead of numerical order.
To sort the numeric array property we have to pass a comparator function.*/

const arr2 = [ 10, 20, 25, 100 , 40]
console.log(arr2.sort((a,b) => a - b));

// Output
// [ 10, 20, 25, 40, 100 ]



/*Descending Order
change the comparator function to sort the array in descending order.*/

const ar = [ 10, 20, 25, 100 , 40]
console.log(ar.sort((a,b) => b - a));

// Output
// [ 100, 40, 25, 20, 10 ]


/*Please go through this How to Sort Numeric Array using JavaScript?, 
to know how the JavaScript array sort function works.

Sort Array of Strings in Reverse Order
We can use the string.localeCompare() method in the comparator function to sort in reverse order.*/


let arr3 = ["JS", "HTML", "CSS"];
console.log(arr3);
arr3.sort((x, y) => x.localeCompare(y))
console.log(arr3);

// Output
// [ 'JS', 'HTML', 'CSS' ]
// [ 'CSS', 'HTML', 'JS' ]


/*We can also use the array.reverse() method to sort the array in descending order.*/


let arr4 = ["JS", "CSS", "HTML"];
arr4.sort();
arr4.reverse();
console.log(arr4);

// Output
// [ 'JS', 'HTML', 'CSS' ]



// Sorting Array of Objects
// The array of objects can be sorted on the basis of property values.


// Array of a objects with different names and ages
let arr5 = [
    { name: 'Rahul', age: 28 },
    { name: 'Jatin', age: 25 },
    { name: 'Vikas', age: 32 },
    { name: 'Rohit', age: 35 }
];

// Sort the objects for age
arr5.sort((x, y) => x.age - y.age);

console.log(arr5);

// Sort object for names 
arr5.sort((x, y) => x.name.localeCompare(y.name));

console.log(arr5);  

// Output
// [
//   { name: 'Jatin', age: 25 },
//   { name: 'Rahul', age: 28 },
//   { name: 'Vikas', age: 32 },
//   { name: 'Rohit', age: 35 }
// ]
// [
//   { name: 'Jatin', age: 25 },
//   { name: 'Rahul', age: 28 },
//   { name: 'Rohi...}
// ]



/*Sort Stability
Sort stability means that when sorting, if two items have the same value, 
their order stays the same as in the original list. A stable sort keeps 
the order of equal items unchanged during sorting.

Note: Before ECMAScript 2019 (version 10), JavaScript’s sort() method 
did not guarantee sort stability, meaning the original order of equal 
elements might not be preserved after sorting.*/

let a = [
    { name: 'Rahul', age: 30 },
    { name: 'Jatin', age: 25 },
    { name: 'Vikas', age: 30 },
    { name: 'Rohit', age: 25 }
];

a.sort((x, y) => x.age - y.age);

console.log(a);  

// Output
// [
//   { name: 'Jatin', age: 25 },
//   { name: 'Rohit', age: 25 },
//   { name: 'Rahul', age: 30 },
//   { name: 'Vikas', age: 30 }
// ]