'use strict';

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// Destructuing Arrays

// const arr = [2, 3, 4];

// Before ES6
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// Using Destructuring
// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// switching Variables before ES6
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Switching variables
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// Receiving two return values from a function.
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, main);

// Nested destructuring
// const nested = [2, [4, 5]];
// const [i, [j, k]] = nested;
// console.log(i, j, k);

// Setting Default values
// const [p = 8, q = 8, r = 5] = [5];
// console.log(p, q, r);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

// Spread Operator

// How we copy element manually before.
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Using the spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci', 'Jambolaya Rice'];
console.log(newMenu); // This will create  new array and it will not alter the one created before.

// Copying array with the spread operator
const mainMenuCopy = [...restaurant.mainMenu];

// Joining two arrays wit the spread operator
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);














// Destructuring Objects
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via Del Sole 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDel ivery({
//   address: 'Via Del Sole 21',
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// Destructuring objects and giving variables new name. The new variable names are the ones in purple.
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// Setting default values

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating Variables

// let a = 111;
// let b = 999;
// const obj = {
//   a: 23,
//   b: 25,
//   c: 30,
// };
// ({ a, b } = obj);
// console.log(a, b);
// Nested Objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
