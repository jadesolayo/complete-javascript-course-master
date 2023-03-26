"use strict";
console.log("These are the excercises i'm working with");

// Objects
const person = {
  firstName: "Sharon",
  lastName: "Kingsley",
  age: 24,
  hobbies: ["Skipping", "Reading novels", "Sleeping", "Skating", "Dancing"],
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  getHobbies: function () {
    return `My hobbies are ${this.hobbies[0]},${this.hobbies[1]}, ${this.hobbies[2]}, ${this.hobbies[3]}, ${this.hobbies[4]}`;
  },
};
console.log(person.fullName());
console.log(person.getHobbies());

const anotherPerson = {
  firstName: "Sharon",
  lastName: "Kingsley",
  age: 24,
  hobbies: ["Skipping", "Reading novels", "Sleeping", "Skating", "Dancing"],
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  getHobbies: function () {
    return `My hobbies are ${this.hobbies[0]},${this.hobbies[1]}, ${this.hobbies[2]}, ${this.hobbies[3]}, ${this.hobbies[4]}`;
  },
};
anotherPerson.age = 30; //Modified age property
anotherPerson.hobbies = ["Teaching", "Hiking", "Playing games", "Camping"]; // Modified hobbies property

console.log(anotherPerson.fullName());
console.log(anotherPerson.getHobbies());

// Write a JavaScript function that takes two parameters (a and b) and returns their sum.

// let a;
// let b;
// function addNumbers(a, b) {
//   return a + b;
// }
// const sum = addNumbers(4, 5);
// console.log(sum);

// Write a JavaScript program that loops through numbers 1 to 100. For multiples of three, print "Fizz" instead of the number and for multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".

// for (let i = 0; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// Write a JavaScript program to check whether a given number is even or odd.

// const checkNumber = prompt("Enter Number");
// if (checkNumber % 2 === 0) {
//   console.log("The number entered is an even number");
// } else if (checkNumber % 2 === 1) {
//     console.log("The number entered is an odd number");
// } else {
//   console.log("Enter a valid Number!")
// }

// Write a JavaScript function that takes an array of numbers and returns the sum of all the numbers in the array.
// const arrayNum = [2, 3, 4, 5, 6, 7, 1, 3, 5, 6];
// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(sumArray([2, 3, 4, 5, 6, 7, 1, 3, 5, 6]));

// Write a JavaScript function that takes a string and returns the number of vowels in the string.

const stringEntered = prompt("Enter a word");
function checkVowel(str) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
console.log(checkVowel(stringEntered));

function countVowels(str) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Basketball"));
