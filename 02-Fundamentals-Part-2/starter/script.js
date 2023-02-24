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

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
const fruitJuice = fruitProcessor(3, 6);
console.log(fruitJuice);
console.log(fruitProcessor(8, 7));

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
