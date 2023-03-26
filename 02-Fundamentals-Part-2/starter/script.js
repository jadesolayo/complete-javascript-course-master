// Strict Mode
// Srict Mode helps us to avoid accidental errors that Javascript might not catch

"use strict";

// let hasDriversLincense = false;
// const passTest = true;
// if (passTest) hasDriversLincense = true;
// if (hasDriversLincense) console.log(`i can drive!`);

// Strict mode also helps to prevent us from using reserved keyword as the name of a variable. E.g:

// const interface = true;
// const private = 334;

// Functions
// A function is a piece of code that can be reused over and over again.

// Functions allow us to write more maintainable codes(DRY)(Don't Repeat Yourself)

// Functions are the fundamental building blocks of javaScript programs

// function logger() {
//   console.log(`My name is Jadesola and it is so nice to meet you! 😁`);
// }
// // caling / running / invoking function
// logger();
// logger();
// logger();

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

// Function Expression

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

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
//   return juice;
// }
// console.log(fruitProcessor(3, 6));

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

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// // Test 1

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Team Dolphins win! 🎉(${scoreDolphins} vs. ${scoreKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Team Koalas win! 🎉(${scoreKoalas} vs. ${scoreDolphins})`);
//   } else {
//     console.log(`No Team Wins!😪`);
//   }
// };
// checkWinner(scoreDolphins, scoreKoalas);

// // Test 2

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);

// checkWinner(scoreDolphins, scoreKoalas);

// // ARRAYS

// const friends = ["Michael", "Steven", "Peter", "Jonas"];
// console.log(friends);

// // Another way to write an Array
// const years = new Array(1991, 1992, 1967, 2006, 1990);

// console.log(friends[0]);
// console.log(friends[2]);

// To get the length of an array
// console.log(friends.length);

// To get the last input of an array
// console.log(friends[friends.length - 1]);

// To replace an input of an array
// friends[2] = "Jay";
// console.log(friends);

// At this instance, Peter has been replaced with Jay

// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1990, "teacher", friends];
// console.log(jonas);

// // Excercise

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };
// const year = new Array(1991, 1992, 1967, 2006, 1990);
// const ages1 = calcAge(year[0]);
// const ages2 = calcAge(year[1]);
// const ages3 = calcAge(year[2]);
// const ages4 = calcAge(year[year.length - 1]);
// const ages = [
//   calcAge(year[0]),
//   calcAge(year[1]),
//   calcAge(year[2]),
//   calcAge(year[year.length - 1]),
// ];
// console.log(ages);
// console.log(ages.length);

// ARRAY METHODS
// const fruits = ["Mango", "Apple", "Banana", "Pineapple", "Watermelon"];

// // Adding Elements to an Array
// const newLength = fruits.push("Guava"); //Add elemets to the end of an array;
// console.log(newLength);

// fruits.unshift("Orange"); //Add elements to the beginning of am array
// console.log(fruits);

// // Removing elements from an array
// fruits.pop(); //remove elemets at the end of an array;
// const popped = fruits.pop();
// console.log(popped);
// console.log(fruits);

// fruits.shift(); //remove elemets at the beginning of an array;
// console.log(fruits);

// console.log(fruits.indexOf("Apple"));
// console.log(fruits.indexOf("Pineapple"));

// fruits.push(34);
// console.log(fruits);

// console.log(fruits.includes("Pineapple"));
// console.log(fruits.includes("34")); //Strict checking

// if (fruits.includes("Watermelon")) {
//   console.log("Watermelon is in your fruit basket 🍉 ");
// } else {
//   console.log("Not found");
// }

// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(calcTip(100)); // Output 15
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);

// OBJECTS

// const jonas = [
//   //This ia an array syntax
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1990,
//   "Teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1990,
//   job: "Teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(jonas);

// // DOT VS. BRACKET NOTATION
// const bob = {
//   firstName: "Bob",
//   lastName: "Hailey",
//   birthYear: 1990,
//   job: "Mechanic",
//   friends: [`Boston`, `Stella`, `Rose`],
//   hasDriversLicense: true,
// };
// console.log(bob);

// // Dot Notation
// console.log(bob.lastName);

// // Bracket Notation
// console.log(bob["firstName"]);

// const nameKey = "Name";
// console.log(bob["first" + nameKey]);
// console.log(bob["last" + nameKey]);

// Need for Bracket Notation
// const interestedIn = prompt(
//   `What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends`
// );
// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! çhoose between firstName, lastName, age, job, and friends"
//   );
// }

// Modifying an object
// jonas.location = "Portugal"; // With dot notation
// jonas["twitter"] = "@jonasschedtmann"; //With bracket notation
// console.log(jonas);
// // Challenge
// // Jonas has 3 friends and his best friend is Michael. (Rewrite this with the object above)
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} and his best friend is ${jonas.friends[0]}`
// );
// OBJECT METHODS
//  A method is any function that is attached to an object

// const david = {
//   firstName: "David",
//   lastName: "Scotland",
//   birthYear: 1991,
//   job: "Teacher",
//   friends: [`Michael`, `Peter`, `Steven`],
//   hasDriversLicense: true,

// An example of a method
// calcAge: function (birthYear) {
//   return = 2037 - david.birthYear;
// },

// calcAge: function () {
//   console.log(this);
//   return 2037 - this.birthYear;
// },

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} years old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//   },
// };
// console.log(david.getSummary());

// Arrays are also objects but a special kind of object and they have methods like (push, pop, shift,length e.t.c.) that we can use to manipulate them. The methods mentioned earlier are built in funtions and they have been designed to work in a certain way but in objects, we are allowed to create our methods

// console.log(david.calcAge(1991));
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// console.log(david["calcAge"](1991));

// const david = {
//   firstName: "David",
//   lastName: "Scotland",
//   birthYear: 1991,
//   job: "Teacher",
//   friends: [`Michael`, `Peter`, `Steven`],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   obtainDriversLicense: function () {
//     if (this.hasDriversLicense) {
//       return "he has drivers license";
//     } else {
//       return "he has no drivers license";
//     }
//   },

// };
// console.log(david.calcAge());

// console.log(
//   `${david.firstName} is a ${david.age} year old teacher, and ${david.obtainDriversLicense()}`
// );

// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMIvalue = this.mass / (this.height * this.height);
//     return this.BMIvalue;
//   },
// };
// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMIvalue = this.mass / (this.height * this.height);
//     return this.BMIvalue;
//   },
// };

// My Solution
// console.log(mark.calcBMI(), john.calcBMI());
// console.log(
//   `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
//     john.fullName
//   } BMI (${john.calcBMI()})`
// );

// Tutor Solution
// console.log(mark.calcBMI());
// console.log(john.calcBMI());

// if (mark.BMIvalue > john.BMIvalue) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
//       john.fullName
//     }'s BMI (${john.calcBMI()})`
//   );
// } else if (john.BMIvalue > mark.BMIvalue) {
//   console.log(
//     `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
//       mark.fullName
//     }'s BMI (${mark.calcBMI()})`
//   );
// }

// ITERATION - FOR LOOP

// A for loop is a loop that will keep running as long as the condition is true.
// Instead of doing this
// console.log("Lifting weights repetition 1 ");
// console.log("Lifting weights repetition 2 ");
// console.log("Lifting weights repetition 3 ");
// console.log("Lifting weights repetition 4 ");
// console.log("Lifting weights repetition 5 ");
// console.log("Lifting weights repetition 6 ");
// console.log("Lifting weights repetition 7 ");
// console.log("Lifting weights repetition 8 ");
// console.log("Lifting weights repetition 9 ");
// console.log("Lifting weights repetition 10 ");

// A for loop allows us to do this
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// LOOPING ARRAYS
// const types = [];
// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1990,
//   "Teacher",
//   ["Michael", "Peter", "Steven"],
// ];
// To loop this array we do this:
// for (let i = 0; i < jonasArray.length; i++) {
//   console.log(jonasArray[i], typeof jonasArray[i]);

// Filling an Empty Array
// types[i] = typeof jonasArray[i];
//   types.push(typeof jonasArray[i]);
// }
// console.log(types);

// const yearsArray = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < yearsArray.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// CONTINUE AND BREAK STATEMENTS
// Continue is used to exit the current iteration of the loop and continue to the next one while Break is used to completely terminate the whole loop
// console.log("--ONLY STRINGS--");
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] !== "string") {
//     continue;
//   }
//   console.log(jonasArray[i], typeof jonasArray[i]);
// }
// console.log("--BREAK WITH NUMBER--");
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] === "number") {
//     break;
//   }
//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

// LOOPING BACKWARDS AND LOOP IN LOOP

// const jonasArray2 = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1990,
//   "Teacher",
//   ["Michael", "Peter", "Steven"],
// ];
// for (let i = jonasArray2.length - 1; i >= 0; i--) {
//   console.log(i, jonasArray2[i]);
// }

// // LOOP IN LOOP
// for (let excercise = 1; excercise < 4; excercise++) {
//   console.log(`Starting Competition ${excercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Lifting weight competition${rep}`);
//   }
// }

// THE WHILE LOOP

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }
// To write the above in a WHILE loop, we do this:
// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weight competition ${rep}`);
//   rep++;
// }
// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log(`Loop is about to end...`);
//   }
// }
// When you don't know how many iterations you're going to have,the while loop is the best option to use

// CODING CHALLENGE 4 🤩

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

// MY SOLUTION

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(bills[i] + tips[i]);
// }
// console.log(bills, tips, totals);

// TUTOR'S SOLUTION
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

// BONUS QUESTION SOLUTION
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i]
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(totals));
