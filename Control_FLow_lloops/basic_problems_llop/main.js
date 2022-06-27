//Roots of a Quadratic Equation....................................................
// program to solve quadratic equation
// let root1, root2;

// // take input from the user
// let a = prompt("Enter the first number: ");
// let b = prompt("Enter the second number: ");
// let c = prompt("Enter the third number: ");

// // calculate discriminant
// let discriminant = b * b - 4 * a * c;

// // condition for real and different roots
// if (discriminant > 0) {
//   root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//   root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

//   // result
//   console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// }

// // condition for real and equal roots
// else if (discriminant == 0) {
//   root1 = root2 = -b / (2 * a);

//   // result
//   console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// }

// Print Prime Numbers.....................................................................................................
// program to print prime numbers between the two numbers

// take input from the user
const lowerNumber = parseInt(prompt("Enter lower number: "));
const higherNumber = parseInt(prompt("Enter higher number: "));

console.log(
  `The prime numbers between ${lowerNumber} and ${higherNumber} are:`
);
for (let i = lowerNumber; i <= higherNumber; i++) {
  let flag = 0;

  // looping through 2 to user input number
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }

  // if number greater than 1 and not divisible by other numbers
  if (i > 1 && flag == 0) {
    console.log(i);
  }
}

//Example 1: Generate a Random Number........................................................
// generating  a random number
const ar = Math.random();
console.log(ar);

//Get a Random Number between 1 and 10..............................................
// generating a random number
const am = Math.random() * (10 - 1) + 1;
console.log(`Random value between 1 and 10 is ${am}`);
