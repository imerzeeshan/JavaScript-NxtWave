/*JavaScript Array join() Method

The JavaScript Array join() Method is used to join the elements of an array into a string. 
The elements of the string will be separated by a specified separator and its default value is a comma(,).

Syntax
array.join(separator);

Parameters
This method accepts a single parameter as mentioned above and described below:

separator: It is Optional i.e., it can be either used as a parameter or not. 
Its default value is a comma(, ).*/


/*Example 1: In this example, the function join() joins together the 
elements of the array into a string using ‘|’.*/

function func() {
    let a = [1, 2, 3, 4, 5, 6];
    console.log(a.join('|'));
}
func();

// Output
// 1|2|3|4|5|6


/*Example 2: In this example, the function join() joins together the elements 
of the array into a string using ‘, ‘ since it is the default value.*/


let b = [1, 2, 3, 4, 5, 6];
console.log(b.join()); 

// Output
// 1,2,3,4,5,6


/*Example 3: In this example, the function join() joins together the elements of
 the array into a string using ‘ ‘ (empty string).*/

let c = [1, 2, 3, 4, 5, 6];
console.log(c.join(''));
console.log(c.join(' '));

// Output
// 123456