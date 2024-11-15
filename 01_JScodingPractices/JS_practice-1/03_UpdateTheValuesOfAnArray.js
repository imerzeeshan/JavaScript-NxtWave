/*
Given an array (myArray) in the prefilled code.
Write a JS program to update the value located at the given index (index) of an array with the given value (val) and log the updated array.

Input
The first line of input will contain a whole number (index).
The second line of input will contain an integer (val).

Output
The output should be a single line containing the updated array.

Constraints
0 <= index < length of the given array.
The value should be an integer.

Sample Input
0
5

Sample Output
[5, 50, 'center', 75, 100]
*/

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  // index
  let index = parseInt(readLine());
  // val
  let val = parseInt(readLine());
  // myArray
  let myArray = [25, 50, "center", 75, 100];

  /*
   * Write your code here and log the output.
   */
   myArray[index] = val;
   console.log(myArray);
}
TheValuesOfAnArray.js