/*
Write a function expression 'convertMinutesToSeconds' to convert the given minutes (minutes) to seconds. The formula to convert minutes to seconds is, seconds = minutes * 60

Input
The first line of input will contain a positive integer (minutes).

Output
The output should be a single line containing the positive integer (seconds) returned by the function.

Sample Input 1
1
Sample Output 1
60

Sample Input 2
5
Sample Output 2
300
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
  // minutes
  let minutes = parseInt(readLine());

  // Write your code here and return the output
  let convertMinutesToSeconds = (m) => {
      const seconds = m * 60;
      return seconds;
  }

  let result = convertMinutesToSeconds(minutes);
  console.log(result);
}
