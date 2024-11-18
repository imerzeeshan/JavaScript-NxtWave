/*JavaScript Array unshift() Method

JavaScript Array unshift() Method is used to add one or more elements 
to the beginning of the given array. This function increases the length 
of the existing array by the number of elements added to the array.

Syntax:
array.unshift(element1, element2, ..., elementX);

Parameters:
element: This parameter element is to be added at the beginning of the array.

Return value:
This function returns the new length of the array after inserting the arguments 
at the beginning of the array. */

// Example 1: Below is an example of the Array unshift() method.

function func() {

    // Original array
    let array = ["GFG", "Geeks", "for", "Geeks"];

    // Checking for condition in array
    let value = array.unshift("GeeksforGeeks");
    console.log(value);
    console.log(array);
}
func();

// Output
// 5
// [ 'GeeksforGeeks', 'GFG', 'Geeks', 'for', 'Geeks' ]


// Example 2: In this example, the function unshift() adds 28 and 65 to the front of the array.

function func1() {
    let arr = [23, 76, 19, 94];
    
    // Adding elements to the front of the array
    console.log(arr.unshift(28, 65));
    console.log(arr);
}
func1();

// Output
// 6
// [ 28, 65, 23, 76, 19, 94 ]


// Example 3: In this example, the unshift() method tries to add the element of the array, but the array is empty therefore it adds the value in the empty array.

function func2() {
    let arr = [];
    console.log(arr.unshift(1));
    console.log(arr);
}
func2();

// Output
// 1