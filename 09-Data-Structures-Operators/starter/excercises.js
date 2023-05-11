// Excercises to Test my knowledge
'use strict';

const fruits = ['apple', 'banana', 'orange'];
// Using array destructuring
const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1, fruit2, fruit3);

const getNumbers = function () {
  return [1, 2, 3];
};
console.log(getNumbers());
const [firstNum, secondNum, thirdNum] = getNumbers();
console.log(firstNum, secondNum, thirdNum);
