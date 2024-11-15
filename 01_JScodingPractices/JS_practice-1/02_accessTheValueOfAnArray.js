/* 
Given an array (myArray) in the prefilled code.
Write a JS program to log the value located at the given index (index).

Input
The first line of input will contain a whole number (index).

Output
The output should be a single line containing the value located at the given index of the array.


Sample Input
0
Sample Output
25
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
  // myArray
  let myArray = [25, false, "green", "apple"];

  /*
   * Write your code here and log the output.
   */
   console.log(myArray[index]);
}
