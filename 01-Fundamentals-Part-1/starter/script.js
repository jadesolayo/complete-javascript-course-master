let js = "amazing";
// if (js === "amazing") alert("JavaScript is Fun!");

// let firstName = "Yetunde";
// let age = 23;
// let school = true;
// let masters;
// let phd = null;

// console.log(typeof school);

/* Notes
A value is a piece of data. It is the most fundamental unit of information that we  have in programming.

Naming Variables .
variable names cannot start with a number 
variable names can only contain numbers , letters, underscores or the dolllar sign.
Always write your variables with camel casing.
Don't use reserved keywords as variable name e.g(name)
Don't start a variable name with an Uppercase letter
write constants with upper case later
Make sure your variable names are descriptive(EASY TO UNDERSTAND).
Do this:
let myFirstJob = "Programmer";
let mySecondJob = "Teacher";

Don't do this
job1 = "Teacher";
job2 = "programmer";


Primitive Data Types 
Number: FLoating point numbers (Use for decimals and integers) let age = 23;
String: Sequence of characters (Used for Text) let firstname = "Jonas";
Boolean: Logical type that can only be true or false (Used for taking decisions)let fullAge = true;
undefined: value taken by a variable that is not yet defined(empty value) let children;
Null: Also means 'empty value'
Symbol (ES2015): value that is unique and cannot be changed.
BgInt(ES2020): Larger Integers than the Number can hold. 

Note that it is the value that holds the data type not the variable

Let, Const and Var Variables

Let and var variables can be redeclared i.e (mutable) but const cannot be redeclared i.e (immutable)

let age = 30;
age = 34;

const P! = 3.141234

var mybirthday = 'September'
myBirthday = 'August 20'

Basic Operators in Javascript

Math operator
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

Typeof operator

const lastName = "Schmedtmann";
console.log(typeof lastName);

*/

// Challenge 1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀 */

// Solution
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

// Strings and Strings Literal

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1995;
const year = 2037;

const jonas =
  "I'm " + firstName + " , a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

// String Literals Examples

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string....`);

console.log("String with \n multiple \n lines");

console.log(`String
multiple
lines`);

// Type Coercion

console.log("I am " + 23 + " years old");

console.log("23" - "10" - 3);

console.log("23" * "2");

console.log("23" / "2");

let n = "1" + 1;

n = n - 1;

console.log(n);

console.log(2 + 3 + 4 - "10");

console.log((6 / "2") * "55");

// Truthy and Falsy Values

// 5 Falsy values: 0, " ", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(" "));

const money = 0;

if (money) {
  console.log(`Don't Spend It All`)
} else {
  console.log(`Go and Get a Job`)
}

const height = 100;
if (height) {
  console.log(`Yay! Height is Defined`)
} else {
  console.log(`Height is undefined `)
}

const weight = '';

if (weight) {
  console.log(`Yay! Weight is Defined`)
} else {
  console.log(`Weight is undefined `)
}


// Equality operators == vs ===

const age = 18;
if (age === 18){
  console.log("You just became a Youth ")
}

