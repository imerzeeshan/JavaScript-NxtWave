/*
Given an array (myArray) and the value (val).
Write a JS program to add a value to the end of the array using the array method push and log the updated array.

Input
The first line of input will contain an array (myArray) and the second line of input will contain an integer (val).

Output
The output should be a single line containing the updated array.

Sample Input
[1, 2, 4]
2

Sample Output
[1, 2, 4,2]
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
  // val
  let val = parseInt(readLine());

  /*
   * Write your code here and log the output.
   */
   myArray.push(val);
   console.log(myArray);
}
