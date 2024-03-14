"use strict";
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// function declaration
// function logger() {
//   console.log("My name is Saijeet");
// }
// // calling / running / invoking
// logger();

// // function declaration
// function calcAge1(birthYear) {
//   return 2024 - birthYear;
// }

// console.log(calcAge1(1999));

// // function expression
// const calcAge2 = function (birthYear) {
//   return 2024 - birthYear;
// };

// const age2 = calcAge2(2003);
// console.log(age2);

// // arrow function
// const calcAge3 = (birthYear) => 2024 - birthYear;
// console.log(calcAge3(2007));

// const calcAge = function (birthYear) {
//   return 2024 - birthYear;
// };

// const yearsUntilRetirement = (birthYear, firstname) => {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return `${firstname} retires in ${retirement} years`;
//   } else {
//     return `${firstname} has already been retired`;
//   }
//   //   return retirement;
// };

// console.log(yearsUntilRetirement(2003, "Saikriti"));
// console.log(yearsUntilRetirement(1919, "Saijeet"));

// const calcAverage = (val1, val2, val3) => {
//   const calcAverage = (val1 + val2 + val3) / 3;
//   return calcAverage;
// };

// const scoreKoalas = calcAverage(44, 23, 71);
// const scoreDolphins = calcAverage(65, 54, 49);

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgKoalas > avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else if (avgDolphins > avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else {
//     console.log("No team wins...");
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// const friends = ["Avi", "Saswat", "Suman", "Pratik"]; // Literal Syntax
// const years = new Array(1999, 2002, 2003, 2004); // Array Function

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// const firstName = "Abash";

// const Jonas = [firstName, friends, 2024 - 1999];

// const calcAge = function (birthYear) {
//   return 2024 - birthYear;
// };

// const year = [1999, 1997, 1998, 2003];
// const age = [];
// for (let i = 0; i < years.length; i++) {
//   let newAge = calcAge(year[i]);
//   age[i] = newAge;
// }
// console.log(age);

// friends.push("Nima");
// friends.unshift("Asim");

// if (friends.includes("Suman")) {
//   console.log("You have a friend called Suman");
// }

// const bill = 275;

/* Write your code below. Good luck! 🙂 */

// const calcTip = (bill) => {
//   let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   return tip;
// };

// console.log(calcTip(100));

// let bills = [125, 555, 44];
// let tips = [];

// for (let i = 0; i < bills.length; i++) {
//   const val = calcTip(bills[i]);
//   tips.push(val);
// }

// console.log(tips);

// // Objects

// const john = {
//   firstName: "John",
//   lastName: "Cena",
//   age: 2024 - 1980,
//   job: "wrestler",
//   friends: ["Michael", "UnderTaker", "Edge"],
// }; //Object literal syntax

// console.log(john);

// console.log(john.lastName);
// console.log(john["lastName"]);

// const namekeys = "Name";

// console.log(john["first" + namekeys]);
// console.log(john["last" + namekeys]);

// const interested = prompt(
//   "What do you want to know about Jonas? Chooose between firstName, lastName, age, job and friends?"
// );

// if (john[interested]) {
//   console.log(john[interested]);
// } else {
//   console.log(
//     "Wrong Request,  Chooose between firstName, lastName, age, job and friends?"
//   );
// }

// john.location = "USA";
// john["food"] = "Burger";

// console.log(john);

// console.log(
//   `John has ${john.friends.length} friends, and his best friend is ${john.friends[0]}`
// );

const john = {
  firstName: "John",
  lastName: "Cena",
  birthyear: 1980,
  job: "wrestler",
  friends: ["Michael", "UnderTaker", "Edge"],
  hasWrestlingLicence: true,
  calcAge1: (birthyear) => {
    return 2024 - birthyear;
  },
  calcAge2: function () {
    return 2024 - this.birthyear;
  },
  calcAge3: function () {
    this.age = 2024 - this.birthyear;
    return this.age;
  },
  getSummary: function () {
    this.calcAge3();
    return `John is ${this.age} year old ${this.job} and ${
      this.hasWrestlingLicence ? "has a" : "has no"
    } driver license.`;
  },
}; //Object literal syntax

console.log(john.calcAge2());
console.log(john["calcAge2"]());
console.log(john.getSummary());


// Exercise 7
