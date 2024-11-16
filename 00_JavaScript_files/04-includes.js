/**
Given an array (myArray) and the value (val).
Write a JS program to find whether an array (myArray) includes the given value (val) or not using the array method "includes".

Input
The first line of input will contain an array (myArray).
The second line of input will contain any value.

Output
The output should be a single line containing the boolean value.
Constraints
Strings should be given in quotes.

Sample Input 1
[3, 4, 5]
4

Sample Output 1
true

Sample Input 2
[9.8, 'Hello', true] Hi'

Sample Output 2
false
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

/* Please do not modify anything above this line */

function isValuePresent(myArray, val) {
  let result =  myArray.includes(val);
  return result;
}

/* Please do not modify anything below this line */

function main() {
  let myArray = JSON.parse(readLine().replace(/'/g, '"'));
  let val = JSON.parse(readLine().replace(/'/g, '"'));
  
  let isPresent = isValuePresent(myArray, val);
  
  console.log(isPresent);
}
