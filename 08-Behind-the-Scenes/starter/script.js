'use strict';
// Scoping in Practice

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
       Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
 console.log(str);
    console.log(millenial);
    console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();
*/

// Hoisting in practice

//Hoisting in Variables
// console.log(me);
/// console.log(job); cannot access 'job' before initialization
// // console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// // Hoisting in functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// console.log(addArrow);

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // Example
// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }
// var x = 1;
// let y = 2;
// const z = 3;

// // The this Keyword in Practice
// console.log(this); // window object

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); // undefined
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this); // window object
// };
// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this); // jonas object
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge; // Method borrowing
// matilda.calcAge();

// const f = jonas.calcAge;
// f(); //cannot read properties of undefined (reading 'year'). This gives an error because 'f' is not an object. so it cannot read its properties.

// Regular functions vs. Arrow functions

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this); // jonas object
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
  //   const isMillenial = () => {
  //     console.log(this);
  //     console.log(this.year >= 1981 && this.year <= 1996);
  //   };
  //   isMillenial();
  // }, 
  //Here the arrow fnction will use the this keyword of its parent which is the calcAge.
  },
  greet: () => console.log(`Hey! ${this.firstName}`), //Don't do this. This is because arrow function do not get their own this keyword. They take the this keyword of their parent element which in this case is the global variable which has the window object.
  // greet: function () {
  //   console.log(`Hey! ${this.firstName}`);
  // }, Do this instead.
};
jonas.greet();
jonas.calcAge();

// arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12); This creates an array in the argument keyword which can be accessed.

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8); THis does not create an array in the argument keyword.

// Primitives vs. Objects in Practice

// Primitive types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// // Reference types
// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage: ', marriedJessica);
// // marriedJessica = {};

// // Copying objects
// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = 'Davis';

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log('Before marriage:', jessica2);
// console.log('After marriage: ', jessicaCopy);
//  


