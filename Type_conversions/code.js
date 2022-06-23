//1--->>>Implicit Conversion to String..........................
// numeric string used with + gives string type
let result;

result = "3" + 2;
console.log(result); // "32"

result = "3" + true;
console.log(result); // "3true"

result = "3" + undefined;
console.log(result); // "3undefined"

result = "3" + null;
console.log(result); // "3null"

//2---->>>Implicit Conversion to Number
// numeric string used with - , / , * results number type

let result1;

result1 = "4" - "2";
console.log(result1); // 2

result1 = "4" - 2;
console.log(result1); // 2

result1 = "4" * 2;
console.log(result1); // 8

result1 = "4" / 2;
console.log(result1); // 2

//3-->>>>Non-numeric String Results to NaN
// non-numeric string used with - , / , * results to NaN

let result2;

result2 = "hello" - "world";
console.log(result2); // NaN

result2 = "4" - "hello";
console.log(result2); // NaN

//4--->>>Implicit Boolean Conversion to Number
// if boolean is used, true is 1, false is 0

let result4;

result4 = "4" - true;
console.log(result4); // 3

result4 = 4 + true;
console.log(result4); // 5

result4 = 4 + false;
console.log(result4); // 4
//JavaScript considers 0 as false and all non-zero number as true. And, if true is converted to a number, the result is always 1.

//5--->>>>null Conversion to Number
// null is 0 when used with number
let result5;

result5 = 4 + null;
console.log(result5); // 4

result5 = 4 - null;
console.log(result5); // 4

//6-->>>undefined used with number, boolean or null
// Arithmetic operation of undefined with number, boolean or null gives NaN

let result6;

result6 = 4 + undefined;
console.log(result6); // NaN

result6 = 4 - undefined;
console.log(result6); // NaN

result6 = true + undefined;
console.log(result6); // NaN

result6 = null + undefined;
console.log(result6); // NaN

//7--->>>Convert to Number Explicitly
//To convert numeric strings and boolean values to numbers, you can use Number(). For example,

let;

// string to number
x = Number("324");
console.log(x); // 324

x = Number("324e-1");
console.log(x); // 32.4

// boolean to number
x = Number(true);
console.log(x); // 1

x = Number(false);
console.log(x); // 0

//for more refer programiz site i also copiesd from there , as this topic is no reson to write myself
