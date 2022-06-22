//Q1---->>Display Numbers from 1 to 5

// let i = 1,
//   n = 5;

// while (i <= n) {
//   console.log(i);
//   i += 1;
// }

//Q2--->>> Sum of Positive Numbers Only
// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum

// let sum = 0;

// let number = parseInt(prompt("Enter a number: "));

// while (number >= 0) {
//   sum += number;

//   number = parseInt(prompt("Enter a number: "));
// }

// // display the sum
// console.log(`The sum is ${sum}.`);

// Q3----->>>>Display Numbers from 1 to 5 by useing do while

let i = 1;
const n = 5;

do {
  console.log(i);
  i++;
} while (i <= n);
