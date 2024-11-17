/**
JavaScript Array indexOf() Method
Last Updated : 27 Sep, 2024
The indexOf() method in JavaScript is used to find the position of
the first occurrence of a specific value in an array. If the value is not present,
it returns -1. This method is handy for quickly determining 
where a particular item is located within an array.

Syntax:
array.indexOf(element, start)

Parameters:
element: This parameter holds the element whose index will be returned.
start: This parameter is optional and holds the starting point of the array, 
where the default value is 0 to begin the search.

Return value:
The method returns the index of the first occurrence of the specified element.
If the element is not found, it returns -1.

Example 1: Finding Index of Element in Array
This code demonstrates the use of the indexOf() method 
to find the index of the element “gfg” in the array name.
The index of “gfg” is stored in the variable a and then logged into the console.
*/

let array = ['gfg', 'cse', 'geeks', 'portal',3,6,7,3.56];
a = array.indexOf(3.56);
// Printing result of method
console.log(a)


// Example 2: Searching Element in Array
// This code demonstrates the use of the 
// indexOf() method to find the index of 
// a specific element (2) in an array (A). 
// It returns the index of the first occurrence 
// of the element in the array (1 in this case). 
// If the element is not found, it returns -1.


// Taking input as an array A
// having some elements.
let A = [1, 2, 3, 4, 5];

// indexOf() method is called to
// test whether the searching element
// is present in given array or not.
a = A.indexOf(2);
b = A.indexOf(6);

// Printing result of method.
console.log(a);
console.log(b);


let arr = [1,2,3,4,5,6,7,5];
a = arr.indexOf(5);
console.log(a);