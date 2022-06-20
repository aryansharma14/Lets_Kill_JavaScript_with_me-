let x = 5; //varible intialising

//const keyword...................
const y = 9;
//y = 10 // error as const cant me changed
console.log(x);
console.log(y);

//about consol log = used to give output to web browser engines.........
const greet = "hello";
const ing = "sir";

console.log(greet + "  " + ing);

//lets talk about datatypes..........................

//1-->concept of backstick  - they are generally used to comabine varibles or expression into strings. ( usage = ` string `;).......

const name = "aryan";
const backname = "sharma"; // " "  and ' ' are sime in javascript..
const result = `the names are ${name} and ${backname}`;
console.log(result);

//2-->concept of  number datatype..............

//"number" represents int/float/decimal/exponentials . for eg;

const a = 3;
const b = 3.543;
const c = 3e5;

console.log(a);
console.log(b);
console.log(c);

//Number datatype can also be +Infinfty  or - Infinfity and NAn (not a number). for eg;

const num1 = 3 / 0;
console.log(num1);

const num2 = -3 / 0;
console.log(num2);

const num3 = "abs" / 13;
console.log(num3);

//3--> concept of Javascript bigint ............................
//number datatype has a limit of (2^53 to -2^53 ) to inncrease the limit ' we use bigint' ;
//usgae = const _variable = 10000000n;  put n at last of constants

const value = 8943473758296532589682n;

//adding to big number'

const value2 = value + 1n; //n is necesaary , warna error mil jayega like" cannot mix bigint and number"
console.log(value2);

//4---> boolean datatype..............................
const istrue = true;
const isfalse = false;

//5-->undefined datatype....................
let age;
//or
let age2 = undefined;
console.log(age);
console.log(age2);

//6--->Null datatype..........
const people = null;
console.log(people);

//7---> Javascript Symbol,,,,,,,,,,,..........
//symbol is immutable  primitve value and is unique...

const rate1 = Symbol("hello");
const rate2 = Symbol("hello");
if (rate1 != rate2) {
  // bcz of symbole rate1 and rate2 is not same
  console.log("hot");
}

//8----> Jvascript Object..................
//it allows to store collection of data .........
const worker = {
  firstname: "ram",
  type: "null",
  work: "manager",
  salary: 10000,
};

//9--->Jvascript typeof .............
//used to find the type of varibles ...

const naam = 4;
typeof naam;
