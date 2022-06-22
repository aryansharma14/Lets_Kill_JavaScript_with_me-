//IN this section we gonna talk about comparision operators

//1---> " == " - is used to check if the two subjects are equal or not............................
const a = 5,
  b = 2,
  c = "hello";
console.log(a == 5); //true
console.log(b == "2"); //false , but u may have doubt why as one is number and other is string ...for that we use strict equal ===.....
console.log(c == "Hello");

//2---> "!=" - is used to find that subjects are not equal..............................
const x = 3,
  y = "hello";

// not equal operator
console.log(x != 2); // true
console.log(y != "Hello"); // true

//3---> "===" - check the subject and datatype is equal or not ...............................
const f = 2;

// strict equal operator
console.log(f === 2); // true
console.log(f === "2"); // false // as one is string and onther is number

//4--->"!==" -  check the subject and datatype is not equal or not ...............................
const m = 2,
  n = "hello";

// strict not equal operator
console.log(m !== 2); // false
console.log(m !== "2"); // true
console.log(n !== "Hello"); // true

//5----> ">" - to find if subject gretaer or not.............................
//       "<" - to find if subject smaller or not...
const j = 3;

// greater than operator
console.log(j > 2); // true
console.log(j < 4); // true

//6---> ">= " or " <=" .................,,,,,,,,,,,,,.........................

const r = 2;

// less than or equal operator
console.log(r <= 3); // true
console.log(r <= 2); // true

const g = 3;

// greater than or equal operator
console.log(g >= 3); //true

//7 ----> Logical AND Operator "&&".............................
const ar = true,
  br = false;
const cr = 4;

// logical AND
console.log(ar && ar); // true
console.log(ar && br); // false

console.log(cr > 2 && cr < 2); // false
