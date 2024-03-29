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
/* 
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
*/
// Strings and Template Literal

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

// Conditional Statements

const age = 12;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young, Wait another ${yearsLeft}years ☹️ `);
}
const birthYears = 1991;
let century;
if (birthYears <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
// Conditional Statement Challenge
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's! (${BMIJohn})`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's! (${BMIMark}) `);
}

// Type conversion and Type Coercion

// Type conversion is when we manually convert from one type to another while type coercion is when JavaScript automatically converts it for us.

// Type conversion

const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

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
  console.log(`Don't Spend It All`);
  console.log(`Don't Spend It All`);
} else {
  console.log(`Go and Get a Job`);
}

const height = 100;
if (height) {
  console.log(`Yay! Height is Defined`);
} else {
  console.log(`Height is undefined  `);
}

const weight = "";

if (weight) {
  console.log(`Yay! Weight is Defined`);
} else {
  console.log(`Weight is undefined `);
}

// Equality operators == vs ===

// const age = "18";
// if (age === 18) {
//   console.log("You just became a Youth (strict)");
// }
// if (age == 18) {
//   console.log("You just became a Youth (loose)");
// }
// const favorite = Number(prompt("What's Your favorite Number"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//   console.log(`Cool! 23 is an amazing number!`);
// } else if (favorite === 7) {
//   `7 is also a cool number!`;
// } else if (favorite === 9) {
//   console, log("9 is also not bad!");
// } else {
//   console.log(`Wrong! The number is in between 23, 7 and 9`);
// }
// if (favorite !== 23) {
//   console.log("Why not try 23, 7 or 9?");
// }

// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// Solution

const teamDolphin = (96 + 108 + 89) / 3;
const teamKoalas = (88 + 91 + 110) / 3;
console.log(teamDolphin, teamKoalas);

if (teamDolphin > teamKoalas) {
  console.log(`Team Dolphin wins the trophy!`);
} else if (teamKoalas > teamDolphin) {
  console.log(`Team koalas wins the trophy!`);
} else console.log(`Teams played draw so no one wins the trophy!`);

// Bonus points
const teamDolphinBonus = (97 + 112 + 101) / 3;
const teamKoalasBonus = (109 + 95 + 123) / 3;
console.log(teamDolphinBonus, teamKoalasBonus);

if (teamDolphinBonus > teamKoalasBonus && teamDolphinBonus >= 100) {
  console.log(`Team Dolphin wins the trophy!`);
} else if (teamKoalasBonus > teamDolphinBonus && teamKoalasBonus >= 100) {
  console.log(`Team koalas wins the trophy!`);
} else if (
  teamDolphinBonus === teamKoalasBonus &&
  teamDolphinBonus >= 100 &&
  teamKoalasBonus >= 100
) {
  console.log(`Both wins the trophy!`);
} else {
  console.log(`No one wins the Trophy!`);
}

// SWITCH STATEMENTS

const day = `Monday`;

switch (day) {
  case `Monday`:
    console.log(`Plan course structure`);
    console.log(`Go to a coding meetup`);
    break;
  case `Tuesday`:
    console.log(`Prepare theory videos`);
    break;
  case `Wednesday`:
  case `Thursday`:
    console.log(`Write code examples`);
    break;
  case `Friday`:
    console.log(`Record videos`);
    break;
  case `Saturday`:
  case `Sunday`:
    console.log(`Enjoy the weekend!`);
    break;
  default:
    console.log("Not a valid day!");
    break;
}
// As an If Else Statement

const dayOfTheWeek = `Thursday`;

if (dayOfTheWeek === `Monday`) {
  console.log(`Plan course structure`);
  console.log(`Go to a coding meetup`);
} else if (dayOfTheWeek === `Tuesday`) {
  console.log(`Prepare theory videos`);
} else if (dayOfTheWeek === `Wednesday` || dayOfTheWeek === `Thursday`) {
  console.log(`Write code examples`);
} else if (dayOfTheWeek === `Friday`) {
  console.log(`Record videos`);
} else if (dayOfTheWeek === `Saturday` || dayOfTheWeek === `Sunday`) {
  console.log(`Enjoy the weekend!`);
} else {
  console.log(`Not a valid day!`);
}

// Statement and Expression
// An Expression is a piece of code that produces a value e.g 3 + 4, 1222, true && false || true && false;
// A statement is a bigger piece of code that is executed bsed on a value and it does not produces a value on itself e.g if else statement

// Ternary Operator

const age2 = 23;
age2 >= 18
  ? console.log(`I like to drink wine 🍷`)
  : console.log(`I like to drink water💧`);

const drink = age2 >= 18 ? `wine 🍷` : `water💧`;
console.log(drink);

// If else statement

let drink2;
if (age2 >= 18) {
  drink2 = `wine 🍷`;
} else {
  drink2 = `water💧`;
}
console.log(drink2);

console.log(`I like to drink ${drink}`);

// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

//My  Solution

// let totalTip;
// const tip = 15;
// const bill = 40;
// bill >= 50 && bill <= 300 ? (totalTip = (tip / 100) * bill) : bill > 300;
// totalTip = (tip / 100) * bill;

// console.log(
//   `The bill was ${bill}, the tip was ${totalTip}, and the total value ${
//     totalTip + bill
//   }`
// );

// Correct solution

// let tip;
const bill = 400;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`
);

// using if Else Statement

// if (bill <= 300 && bill >= 50) {
//   tip = bill * 0.15;
// } else {
//   tip = bill * 0.2;
// }
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`
// );
