/*JavaScript Array concat() Method

The concat() method concatenates (joins) two or more arrays. It returns a new array, 
containing the joined arrays. This method is useful for combining arrays without modifying the originals.

Syntax:
let newArray1 = oldArray.concat()
let newArray2 = oldArray.concat(value0)
let newArray3 = oldArray.concat(value0,value1)
.......
.......
let newArray = oldArray.concat(value1 , [ value2, [ ...,[ valueN]]])


Parameters:
The parameters of this method are the arrays or the values that need 
to be added to the given array. The number of arguments to this method
 depends upon the number of arrays or values to be merged.

Return value:
This method returns a newly created array that is created after 
merging all the arrays passed to the method as arguments. 
*/


// Example 1: Below is an example of the Array concat() method to join three arrays.

// JavaScript code for concat() method
function func() {
    let num1 = [11, 12, 13],
        num2 = [14, 15, 16],
        num3 = [17, 18, 19];
    console.log(num1.concat(num2, num3));
}
func();

// Output
// [
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19
// ]


// Example 2: In this example, the method concat() concatenates all 
// the arguments passed to the method with the given array into one 
// array which it returns as the answer.


// JavaScript code for concat() method
function func() {
    let alpha = ["a", "b", "c"];
    console.log(alpha.concat(1, [2, 3]));
}
func();

// Output
// [ 'a', 'b', 'c', 1, 2, 3 ]


// Example 3: In this example, the method concat() concatenates both 
// arrays into one array which it returns as the answer.

// JavaScript code for concat() method
function func() {
    let num1 = [[23]];
    let num2 = [89, [67]];
    console.log(num1.concat(num2));
}
func();

// Output
// [ [ 23 ], 89, [ 67 ] ]