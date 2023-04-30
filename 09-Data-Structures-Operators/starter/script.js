'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[3 + 2]]: {
    open: 0, //Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //  Enhanced ES6 object Literals
  openingHours,

  //  Enhanced ES6 way of writing methods
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is ypur delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(
      `Your pizza will contain ${mainIngredient} ${otherIngredients}`
    );
    console.log(otherIngredients);
  },
};

// Notes on SET
//  Sets are a collection of unique values. A set can never have any duplicates and that makes them very useful in certain situations. Just like array and strings, sets are also iterables.
//  A set differs from an array in two ways:
// 1) Its Element are unique
// 2) The order of elemets in a set is irrelevant.
// In set, you can't retrieve a value as they're  no indexes.
// A major use case of Set is to remove duplicaates from an Array.
// We can also loop through a set just like any other iterable
// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(orderSet);
// console.log(new Set(`Jonas`));

// To get the size of a Set
// console.log(orderSet.size);

// To check if an element is in  Set
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));

// Add new element to a set
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// console.log(orderSet);

// deleting an element from a set
// orderSet.delete('Risotto');
// console.log(orderSet);

// To clear a set
// console.log(orderSet.clear);
// for (const order of orderSet) console.log(order);
// Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// To unpack the new set in a new array we use the spread (...) operator since they're both Iterables.
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);
// console.log(new Set('oloyedeyetundejadesola').size);

// Notes on MAPS

// A map is a data Structure that we can use to map values to keys. And just like an object, data is stored in key value pairs in maps. The huge difference between objects amd Maps is that in Maps, the keys can have any type. In Object, the keys are basically always strings but in maps, we can have any data type as keys including objects and Maps itself .

const rest = new Map();
// To add elements, use .set
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are Opened')
  .set(false, 'We are Closed');
// To access the map use .get
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 22;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// To check if a Map has an element
console.log(rest.has('categories'));

// To delete an element from the map
rest.delete(2);

// To clear a Map
// rest.clear()

// To get the size of the map
console.log(rest.size);

console.log(rest);

// Using Arrays as Key Values
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));
console.log(rest);

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
/*
 Destructuing Arrays 

 const arr = [2, 3, 4];

 Before ES6
 const a = arr[0];
 const b = arr[1];
 const c = arr[2];

 Using Destructuring
 const [x, y, z] = arr;
 console.log(x, y, z);

 let [main, secondary] = restaurant.categories;
 console.log(main, secondary);

 switching Variables before ES6
 let temp = main;
 main = secondary;
 secondary = temp;
 console.log(main, secondary);

 Switching variables
 [main, secondary] = [secondary, main];
 console.log(main, secondary);

 Receiving two return values from a function.
 const [starter, mainCourse] = restaurant.order(2, 0);
 console.log(starter, main);

 Nested destructuring
 const nested = [2, [4, 5]];
 const [i, [j, k]] = nested;
 console.log(i, j, k);

 Setting Default values
 const [p = 8, q = 8, r = 5] = [5];
 console.log(p, q, r);

 */

// Looping  Objects, Object keys, Values and Entries

/* Property Names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `\n ${day}`;
}
console.log(openStr);

Property Values
const values = Object.values(openingHours);
console.log(values);

Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

[key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

/*
Optional Chaining

if (restaurant.openingHours && restaurant.openingHours.open) {
  console.log(restaurant.openingHours.open);
}

 Without Optional chaining
 console.log(restaurant.openingHours.mon.open);

With Optional Chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

 Example
const days = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}
 Optional Chaining for Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');
/*
 Optional Chaining for Arrays
const users = [{ 
  name: 'Jonas',
 email: 'hello@jonas.io' }, "Elizabeth"];
 const users = [" "];
console.log(users[0]?.name ?? `User array empty`);

 Using if/else statement
if (users.length > 0) console.log(users[0].email);
else console.log('user array empty');

 The For-of Loop 
 const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
 for (const item of menu) console.log(item);

 for (const [i, el] of menu.entries()) {
   console.log(`${[i + 1]}: ${[el]}`);
  }

 console.log(...menu.entries());

 restaurant.numGuests = 0;
 const guests = restaurant.numGuests || 10;
 console.log(guests);

  Nullish: null and undefined (NOT 0 or '')
 const guestCorrect = restaurant.numGuests ?? 10;
 console.log(guestCorrect);

 (Short Circuiting (&& and ||) )

 Use any Data type, return any data type, short-circuiting
 console.log('---- OR ----');
 console.log(3 || 'Jonas');
 console.log('' || 'Jonas');
 console.log(true || 'Jonas');
 console.log(true || 0);
 console.log(undefined || null);
 console.log(undefined || 0 | '' || 'Hello' || 23 || null);

 Practical Example
 restaurant.numGuests = 0;
 const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
 console.log(guests1); Instead of doing this

 const guests2 = restaurant.numGuests || 10;
 console.log(guests2);  Do this instead, this is more readable and will produce the same result because the the OR operator will return the first Truthy value in which you can use to evaluate .

 This will consider the first truthy value and return it since it is an OR operation, it will return one of the operands

 console.log('---- AND ----');
 console.log(0 && 'Jonas');
 console.log(7 && 'Jonas');
 console.log('Hello' && 23 && null & 'Jonas');

/ if (restaurant.orderPizza) {
   restaurant.orderPizza('mushrooms', 'spinach');  Instead of doing this
 }
 restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
 1) Destructuring
 Rest Pattern
 SPREAD, because on the right hand side of =
 const arr = [1, 2, ...[3, 4]];

 REST, because on Left side of =
 const [a, b, ...others] = [1, 2, 3, 4, 5];
 console.log(a, b, others);  This will create variables a and b and then put the rest in an array.

 const [pizza, , rissoto, ...otherFood] = [
   ...restaurant.mainMenu,
   ...restaurant.starterMenu,
 ];
 console.log(pizza, rissoto, otherFood);
 console.log(...restaurant.starterMenu);
 Objects
 const { sat, ...weekdays } = restaurant.openingHours;
 console.log(weekdays);

 2) Functions
 const add = function (...numbers) {
   let sum = 0;
   for (let i = 0; i < numbers.length; i++) {
     sum += numbers[i];
   }
   console.log(sum);
 };
 add(2, 3);
 add(5, 3, 7, 2);
 add(8, 2, 5, 3, 2, 1, 4);

 const x = [25, 4, 5, 6];
 add(...x);

 restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
 restaurant.orderPizza('mushrooms');

 Spread Operator

 How we copy element manually before.
 const arr = [7, 8, 9];
 const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
 console.log(badNewArr);

 Using the spread operator
 const newArr = [1, 2, ...arr];
 console.log(newArr);

 console.log(...newArr);

 const newMenu = [...restaurant.mainMenu, 'Gnocci', 'Jambolaya Rice'];
 console.log(newMenu);  This will create  new array and it will not alter the one created before.

 Copying array with the spread operator
 const mainMenuCopy = [...restaurant.mainMenu];

 Joining two arrays with the spread operator
 const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
 console.log(menu);

 Iterables: arrays, strings, maps, sets. NOT objects
 const str = 'Jonas';
 const letters = [...str, ' ', 'S.'];
 console.log(letters);
 console.log(...str);

 Real world example
 const ingredients = [
   prompt(`Let's make Pasta! Ingredient 1?`),
   prompt(`Ingredient 2?`),
   prompt(`Ingredient 3?`),
 ];

 This is how we would have done it before without the spread operator
 restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

Now Using the spread operator. Use this henceforth.
 restaurant.orderPasta(...ingredients);

 Objects

 const newRestaurant = {
   ...restaurant,
   founder: 'Guiseppe',
   foundedIn: 1998,
 };
 console.log(newRestaurant);

 const restaurantCopy = { ...restaurant };
 restaurantCopy.name = 'Ristorante Roma';
 console.log(restaurantCopy.name);  Ristorante Roma
 console.log(restaurant.name);  Classicano Italiano
 Note that the result of one does not affect the other as there are two different variables

 Destructuring Objects
 restaurant.orderDelivery({
   time: '22:30',
   address: 'Via Del Sole 21',
   mainIndex: 2,
   starterIndex: 2,
 });
 restaurant.orderDel ivery({
   address: 'Via Del Sole 21',
 });

 const { name, openingHours, categories } = restaurant;
 console.log(name, openingHours, categories);

 Destructuring objects and giving variables new name. The new variable names are the ones in purple.
 const {
   name: restaurantName,
   openingHours: hours,
   categories: tags,
 } = restaurant;
 console.log(restaurantName, hours, tags);

 Setting default values

 const { menu = [], starterMenu: starters = [] } = restaurant;
 console.log(menu, starters);

 Mutating Variables

 let a = 111;
 let b = 999;
 const obj = {
   a: 23,
   b: 25,
   c: 30,
 };
 ({ a, b } = obj);
 console.log(a, b);
 Nested Objects
 const {
   fri: { open: o, close: c },
 } = openingHours;
 console.log(o, c);

 Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

 Data needed for first part of the section

 const game = {
   team1: 'Bayern Munich',
   team2: 'Borrussia Dortmund',
   players: [
     [
       'Neuer',
       'Pavard',
       'Martinez',
       'Alaba',
       'Davies',
       'Kimmich',
       'Goretzka',
       'Coman',
       'Muller',
       'Gnarby',
       'Lewandowski',
     ],
     [
       'Burki',
       'Schulz',
       'Hummels',
       'Akanji',
       'Hakimi',
       'Weigl',
       'Witsel',
       'Hazard',
       'Brandt',
       'Sancho',
       'Gotze',
     ],
   ],
   score: '4:0',
   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
   date: 'Nov 9th, 2037',
   odds: {
     team1: 1.33,
     x: 3.25,
     team2: 6.5,
   },
 };

  Coding Challenge #1

 /*
 We're building a football betting app (soccer for my American friends 😅)!

 Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

 1. Create one player array for each team (variables 'players1' and 'players2')
 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
 3. Create an array 'allPlayers' containing all players of both teams (22 players)
 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

 TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
 */
/*
  My Solution
  1)
 const [players1, players2] = game.players;
 console.log(players1, players2);

  2)
 const [goalKeeper, ...fieldPlayers] = players1;
 console.log(goalKeeper, fieldPlayers);

  3)
 const allPlayers = [...players1, ...players2];
 console.log(allPlayers);

  4)
 const subPlayers = ['Thiago', 'Coutinho', 'Perisic'];
 const players1Final = [...players1, ...subPlayers];
 console.log(players1Final);
  Tutor's Solution
  const playersFinal = [...players1, 'Thiago', 'Cortinho', 'Perisic'];

  5)
 const { team1, x: draw, team2 } = game.odds;
 console.log(team1, team2, draw);
  Tutor's Solution
  const {
    odds: { team1, x: draw, team2 },
  } = game;

  6)
 const printGoals = function (...players) {
   console.log(players);
   console.log(`${players.length} goals were scored`);
 };
 printGoals(...game.scored);

  7)
 team1 < team2 && console.log('Team 1 is more likely to win');

 team1 > team2 && console.log('Team 2 is more likely to win');
*/

// Coding Challenge #2

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// My Solution
// 1)
// for (const [scores, scorer] of game.scored.entries()) {
//   console.log(`Goal ${scores + 1}: ${scorer}`);
// }
// // 2}
// let sum = 0;
// const odds = Object.values(game.odds);
// for (const value of odds) {
//   sum += value;
// }
// const averageOdd = sum / odds.length;
// console.log(averageOdd);

// †utor's Solution
// const odds = Object.values(game.odds);
// for (const odd of odds) average += odd;
// aveage /= odds.length;
// console.log(average);

// 3)
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw:' : `victory${game[team]}:`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }
