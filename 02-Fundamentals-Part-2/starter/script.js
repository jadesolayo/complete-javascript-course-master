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
// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }
// const age1 = calcAge1(2000);
// // Function Expression

// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };
// const age2 = calcAge2(2000);

// console.log(age1, age2);

// The major difference between a function expression and a function declaration is that function declaration can be initialized before declaraing while function expression cannot.

// Arrow Functions

// const calcAge3 = (birthYear) => 2023 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

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

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age2 = calcAge(birthYear);
//   const retirement = 65 - age2;

//   if (retirement > 0) {
//     console.log(`${firstName} will retire in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return -1;
//   }
// };
// console.log(yearsUntilRetirement(1990, "Esther"));
// console.log(yearsUntilRetirement(1940, "Rebecca"));

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

// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// MY SOLUTION

// const calcAverage = (score1, score2, score3) => {
//   const averageScores = (score1 + score2 + score3) / 3;
//   return averageScores;
// };

// const teamDolphins = calcAverage(85, 54, 41);
// console.log(teamDolphins);

// const teamKoalas = calcAverage(23, 34, 27);
// console.log(teamKoalas);

// console.log(teamDolphins, teamKoalas);
// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Team Dolphins win! 🎉(${teamDolphins} vs.${teamKoalas})`);

//     return avgDolphins >= 2 * avgKoalas;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Team Koalas win! 🎉(${teamKoalas} vs.${teamDolphins})`);

//     return avgKoalas >= 2 * avgDolphins;
//   } else {
//     console.log(`No Team Wins!😪`);
//   }
//   return -1;
// }
// checkWinner(60, 28);

// INSTRUCTOR SOLUTION

const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test 1

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Team Dolphins win! 🎉(${scoreDolphins} vs. ${scoreKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Team Koalas win! 🎉(${scoreKoalas} vs. ${scoreDolphins})`);
  } else {
    console.log(`No Team Wins!😪`);
  }
};
checkWinner(scoreDolphins, scoreKoalas);

// Test 2

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

checkWinner(scoreDolphins, scoreKoalas);

// ARRAYS

const friends = ["Michael", "Steven", "Peter", "Jonas"];
console.log(friends);

// Another way to write an Array
const years = new Array(1991, 1992, 1967, 2006, 1990);

console.log(friends[0]);
console.log(friends[2]);

// To get the length of an array
console.log(friends.length);

// To get the last input of an array
console.log(friends[friends.length - 1]);

// To replace an input of an array
friends[2] = "Jay";
console.log(friends);
// At this instance, Peter has been replaced with Jay

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1990, "teacher", friends];
console.log(jonas);

// Excercise

const calcAge = function (birthYear) {
  return 2023 - birthYear;
};
const year = new Array(1991, 1992, 1967, 2006, 1990);
const ages1 = calcAge(year[0]);
const ages2 = calcAge(year[1]);
const ages3 = calcAge(year[2]);
const ages4 = calcAge(year[year.length - 1]);
const ages = [
  calcAge(year[0]),
  calcAge(year[1]),
  calcAge(year[2]),
  calcAge(year[year.length - 1]),
];
console.log(ages);
console.log(ages.length);

// ARRAY METHODS
const fruits = ["Mango", "Apple", "Banana", "Pineapple", "Watermelon"];

// Adding Elements to an Array
const newLength = fruits.push("Guava"); //Add elemets to the end of an array;
console.log(newLength);

fruits.unshift("Orange"); //Add elements to the beginning of am array
console.log(fruits);

// Removing elements from an array
fruits.pop(); //remove elemets at the end of an array;
const popped = fruits.pop();
console.log(popped);
console.log(fruits);

fruits.shift(); //remove elemets at the beginning of an array;
console.log(fruits);

console.log(fruits.indexOf("Apple"));
console.log(fruits.indexOf("Pineapple"));

fruits.push(34);
console.log(fruits);

console.log(fruits.includes("Pineapple"));
console.log(fruits.includes("34")); //Strict checking

if (fruits.includes("Watermelon")) {
  console.log("Watermelon is in your fruit basket 🍉 ");
} else {
  console.log("Not found");
}

const david = {
  firstName: "David",
  lastName: "Scotland",
  birthYear: 1991,
  job: "Teacher",
  friends: [`Michael`, `Peter`, `Steven`],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  obtainDriversLicense: function () {
    if (this.hasDriversLicense) {
      return "he has drivers license";
    } else {
      return "he has no drivers license";
    }
  },

};
console.log(david.calcAge());

console.log(
  `${david.firstName} is a ${david.age} year old teacher, and ${david.obtainDriversLicense()}`
);
