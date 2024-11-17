/*
JavaScript Array lastIndexOf() Method
Last Updated : 15 Jul, 2024
The JavaScript Array lastIndexOf() Method is used to find the index 
of the last occurrence of the search element provided as the argument to the function.

Syntax: 
array.lastIndexOf(element, start)
Parameters:
This method accepts two parameters as mentioned above and described below: 

element: This parameter holds the element whose index will be returned.
start: This parameter is optional and it holds the starting point of the array, 
where to begin the search the default value is 0.

Return value:
This method returns the index of the last occurrence of the element. If the element 
cannot be found in the array, then this method returns -1.
*/

//Example 1: Below is an example of the Array lastIndexOf() method. 
let name = ['gfg', 'cse', 'geeks', 'portal'];
a = name.lastIndexOf('gfg')

// Printing result of method
console.log(a);


//Example 2: In this example, the method will be searched for element 2 in that array and return that element index. 

// Taking input as an array A
// having some elements.
let A = [1, 2, 3, 4, 5, 2];

// lastIndexOf() method is called to
// test whether the searching element
// is present in given array or not.
a = A.lastIndexOf(2)

// Printing result of method.
console.log(a);


/*Example 3: In this example, the method will search for the element 9 in that array if not found then return -1. */

// Taking input as an array A
// having some elements.
let arr = ['gfg', 'cse', 'geeks', 'portal'];

// lastIndexOf() method is called to
// test whether the searching element
// is present in given array or not.
a = arr.lastIndexOf('cat')

// Printing result of method
console.log(a);
