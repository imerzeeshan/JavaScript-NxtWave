/**
Given an array (myArray).
Write a JS program to find the length of the array and log the length.

Input
The first line of input will contain an array (myArray).

Output
The output should be a single line containing the length of the array.

Sample Input
[12, 1, 2, 4, 1]

Sample Output
5
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
  let input = readLine().replace(/'/g, '"')
  // myArray
  let myArray = JSON.parse(input);

  /*
   *Write your code here and log the output.
   */
   console.log(myArray.length);
}










