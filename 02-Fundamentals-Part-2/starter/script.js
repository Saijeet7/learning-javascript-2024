"use strict";
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// function declaration
function logger() {
  console.log("My name is Saijeet");
}
// calling / running / invoking
logger();

function calcAge1(birthYear) {
  return 2024 - birthYear;
}

console.log(calcAge1(1999));

// function expression
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

const age2 = calcAge2(2003);
console.log(age2);
