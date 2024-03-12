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

// function declaration
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

// arrow function
const calcAge3 = (birthYear) => 2024 - birthYear;
console.log(calcAge3(2007));

const yearsUntilRetirement = (birthYear, firstname) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstname} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1999, "Saijeet"));
console.log(yearsUntilRetirement(2003, "Saikriti"));



