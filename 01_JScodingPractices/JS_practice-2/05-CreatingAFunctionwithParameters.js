/*
Write a function to return the average of two integers and log the result. The formula to calculate the average of two integers is, average = (a + b)/2

Input
The first line of input will contain an integer (firstInteger). The second line of input will contain an integer (secondInteger).

Output
The output should be a single line containing the average of the given two integers.

Sample Input 1
4
2
Sample Output 1
3

Sample Input 2
10
20
Sample Output 2
15
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
  // firstInteger
  let firstInteger = parseInt(readLine());
  // secondInteger
  let secondInteger = parseInt(readLine());

  let avgOfTwoNumbers = ((a,b) => {
      let avg = (a+b)/2;
      return avg;
      
  });
  
  let average = avgOfTwoNumbers(firstInteger,secondInteger);
  console.log(average);

}
