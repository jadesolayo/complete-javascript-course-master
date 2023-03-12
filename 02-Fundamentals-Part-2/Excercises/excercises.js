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
