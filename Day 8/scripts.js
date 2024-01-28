// Arithmetic operations
let a = 5;
let b = 2;

console.log("a = ", a, " & b = ", b);
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);
a++;
console.log("a++ = ", a++);
--a;
console.log("a-- = ", a--);

// Assignment operators
a += 4;
console.log("a = ", a);
a -= 2;
console.log("a = ", a);
a *= 5;
console.log("a = ", a);
a /= 4;
console.log("a = ", a);
a **= 4;
console.log("a = ", a);
a %= 4;
console.log("a = ", a);

// Condtional Statements

let age = 25;
if (age > 18) {
  console.log("You can vote");
} else {
  console.log("You cannot work");
}

if (age % 2 == 0) {
  console.log("Even");
} else {
  console.log("ODD");
}

age > 18 ? console.log("Adult") : console.log("not Adult");

let num = prompt("Enter the number :");
num % 5 === 0
  ? alert(num, " is multiple of 5")
  : alert(num, "is not Multiple of 5");

