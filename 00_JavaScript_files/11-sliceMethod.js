/*JavaScript Array slice() Method

The Array slice() method returns selected elements in an array as a new array. 
It selects from a given start, up to a (not inclusive) given end. This method 
does not change the original array, enabling non-destructive extraction of array segments.

Syntax:
arr.slice(begin, end);

Parameters:
begin: This parameter defines the starting index from where the portion is to be extracted. 
If this argument is missing then the method takes begin as 0 as it is the default start value.
end: Parameter specifying the end index for extracting a portion from an array, defaulting 
to array length if undefined, adjusting for exceeding length.

Return value:
This method returns a new array containing some portion of the original array. */

/*Example 1: Extracting elements between two indexes

Here, the slice() method extracts the array from the given array starting from index 2 
and including all the elements less than index 4.*/

function func() {
    // Original Array
    let arr = [23, 56, 87, 32, 75, 13];
    // Extracted array
    let new_arr = arr.slice(2, 4);
    console.log(arr);
    console.log(new_arr);
}
func();
console.log("---------------------------------------------------------")

// Output
// [ 23, 56, 87, 32, 75, 13 ]
// [ 87, 32 ]


/*Example 2: Passing no arguments

Here, the slice() method extracts the entire array from the given string and returns it as the answer, 
Since no arguments were passed to it.*/

function func1() {
    //Original Array
    let arr = [23, 56, 87, 32, 75, 13];
    //Extracted array
    let new_arr = arr.slice();
    console.log(arr);
    console.log(new_arr);
}
func1();
console.log("---------------------------------------------------------")

// Output
// [ 23, 56, 87, 32, 75, 13 ]
// [ 23, 56, 87, 32, 75, 13 ]


/*Example 3: Extracting array from index 2

In this example, the slice() method extracts the array starting from index 2 till the 
end of the array and returns it as the answer.*/

function func2() {

    //Original Array
    let arr = [23, 56, 87, 32, 75, 13];
    
    //Extracted array
    let new_arr = arr.slice(2);
    console.log(arr);
    console.log(new_arr);
}
func2();
console.log("---------------------------------------------------------")

// Output
// [ 23, 56, 87, 32, 75, 13 ]
// [ 87, 32, 75, 13 ]


/*Example 4: Slicing the nested Array

In this example, the slice() method extracts the elements from the nested array and 
returns it as the answer.*/

function func3() {

    // Original Array
    let arr = [23, [87, 32, 75, 27,3,10,18 ,13]];
    
    // Extracted array
    let new_arr = arr[1].slice(2, 4);
    console.log(arr);
    console.log(new_arr);
}
func3();

/*Output
[
  23,
  [
    87, 32, 75, 27,
     3, 10, 18, 13
  ]
]
[ 75, 27 ]*/
