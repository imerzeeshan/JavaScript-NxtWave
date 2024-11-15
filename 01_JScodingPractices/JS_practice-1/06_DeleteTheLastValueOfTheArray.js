/*
Given an array (myArray).
Write a JS program to delete the last value of the array using the array method pop and log the deleted value and updated array.

Input
The first line of input will contain an array (myArray).

Output
The first line of output should contain the deleted value.
The second line of output should contain the updated array.

Sample Input
[17, 2, 4, 9] 

Sample Output
9
[17, 2, 4]
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
  let input = readLine().replace(/'/g, '"');
  // myArray
  let myArray = JSON.parse(input);

  /*
   * Write your code here and log the output.
   */
   console.log(myArray.pop());
   console.log(myArray);
}
