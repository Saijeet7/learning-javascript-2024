const num = 25;
let condition = 0;
const value = prompt("Enter a number");

while (condition == 1) {
  const value = prompt("You have entered wrong number, enter a new number");
  if (value == num) {
    condition = 1;
  }
}

// Template literals
let text = `Lorem ipsum dolor sit am`;
console.log(text);

let obj = {
  item: "pen",
  price: 10,
};

let newString = `The cost of ${obj.item} is ${obj.price}`;
console.log(newString);

console.log(newString.toUpperCase());

console.log(newString.slice(1, 7));

let str = prompt("Enter a your name");
let strNum = str.length;
let newValue = `@${str}${strNum}`;
alert(newValue);
