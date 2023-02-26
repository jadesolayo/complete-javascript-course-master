// Strict Mode
// Srict Mode helps us to avoid accidental errors that Javascript might not catch
"use strict";
let hasDriversLincense = false;
const passTest = true;
if (passTest) hasDriversLincense = true;
if (hasDriversLincense) console.log(`i can drive!`);

// Strict mode also helps to prevent us from using reserved keyword as the name of a variable. E.g:

// const interface = true;
// const private = 334;

// Functions
// A fnction is a piece of code that can be reuses over and over again.

// Functions allow us to write more maintainable codes(DRY)(Don't Repeat Yourself)

// Functions are the fundamental building blocks of javaScript programs

function logger() {
  console.log(`My name is Jadesola and it is so nice to meet you! 😁`);
}
// caling / running / invoking function
logger();
logger();
logger();

// Parameters are variables that are specific to a function and will be defined when the function is called

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }
// const fruitJuice = fruitProcessor(3, 6);
// console.log(fruitJuice);
// console.log(fruitProcessor(8, 7));

// Function Declarations and Function Expression

// Function Declaration
function calcAge1(birthYear) {
  return 2023 - birthYear;
}
const age1 = calcAge1(2000);
// Function Expression

const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calcAge2(2000);

console.log(age1, age2);

// The major difference between a function expression and a function declaration is that function declaration can be initialized before declaraing while function expression cannot.

// Arrow Functions

const calcAge3 = (birthYear) => 2023 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} will retire in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1995, "Jadesola"));

// Written with normal function

/* 
function yearsUntilRetirement2(birthYear, firstName) {
  const age2 = 2023 - birthYear;
  const retirement = 65 - age2;
  return `${firstName} will retire in ${retirement} years`;
}
console.log(yearsUntilRetirement2(1990, "Esther")); 
*/

// FUNCTIONS CALLING OTHER FUNCTIONS

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
  return juice;
}
console.log(fruitProcessor(3, 6));

// REVIEWING FUNCTIONS
// the return statement immediately exit a function once it is added and everything after the return statement is ignored.

const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age2 = calcAge(birthYear);
  const retirement = 65 - age2;

  if (retirement > 0) {
    console.log(`${firstName} will retire in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};
console.log(yearsUntilRetirement(1990, "Esther"));
console.log(yearsUntilRetirement(1940, "Rebecca"));

// The Three types of functions and how they are written:

// Function Declaration

// function calcAge(birthYear) {
//   return 2023 - birthYear;
// }

// Function Expression

// const calcAge = function (birthYear){
//   return 2023 - birthYear;
// }

// Arrow Function

// const calcAge = birthYear => 2037 - birthYear;
