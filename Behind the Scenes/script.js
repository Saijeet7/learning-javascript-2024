"use strict";

// function calcAge(birthYear) {
//   const age = 2024 - birthYear;
//   function printAge() {
//     let outPut = `${firstName}, You are ${age}, born in ${birthYear}`;
//     console.log(outPut);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var milllenial = true;
//       const firstName = "Steven";
//       const str = `Oh, and you're a millenina, ${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }

//       outPut = "New Output";
//     }
//     console.log(milllenial);
//     console.log(outPut);
//   }
//   printAge();
//   return age;
// }
// const firstName = "Jonas";
// calcAge(1995);

// console.log(me);
// console.log(job);
// console.log(year);

// var me = "Jonas";
// let job = "teacher";
// const year = 1991;

// functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// Example
// if (!numProducts) deleteShoppingCart();
// var numProducts = 10;
// function deleteShoppingCart() {
//   console.log("All products deleted");
// }

// Window object
// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(20 - birthYear);
//   console.log(this);
// };

// calcAge(1999);

// const calcAgeArrow = (birthYear) => {
//   console.log(20 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1999);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2024 - this.year);
//   },
// };

// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// var firstName = "Matilda";

// const jonas = {
//   firstName: "Jonas",
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2024 - this.year);
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => console.log(`Hey ${this.firstName} `),
// };
// jonas.greet();
// jonas.calcAge();

// // arguments keywords
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => a + b;

// Primitve Types
let lastName = "William";
let oldLastName = lastName;
lastName = "David";
console.log(lastName, oldLastName);

// Reference Types
const Jessica = {
  firstName: "Jessica",
  lastName: "William",
  age: 27,
};

const marriedJessica = Jessica;
marriedJessica.lastName = "Davis";
console.log("Before Marriage:", Jessica);
console.log("After Marriage:", marriedJessica);

// Copying objects
const Jessica2 = {
  firstName: "Jessica",
  lastName: "William",
  age: 27,
};

const jessicaCopy = Object.assign({}, Jessica2);
jessicaCopy.lastName = "Davis";

console.log("Before Marraige: ", Jessica2);
console.log("After Marraige: ", jessicaCopy);
