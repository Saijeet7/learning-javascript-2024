"use strict";

function calcAge(birthYear) {
  const age = 2024 - birthYear;
  function printAge() {
    let outPut = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(outPut);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var milllenial = true;
      const firstName = "Steven";
      const str = `Oh, and you're a millenina, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }

      outPut = "New Output";
    }
    console.log(milllenial);
    console.log(outPut);
  }
  printAge();
  return age;
}
const firstName = "Jonas";
calcAge(1995);
