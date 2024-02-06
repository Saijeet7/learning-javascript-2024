function sum(x, y) {
  return x * y;
}

console.log(sum(4, 5));

let value = sum(5, 6);
console.log(value);

const mul = (a, b) => {
  console.log(a * b);
};

mul(4, 9);

function countVowels(str) {
  let count = 0;
  for (const char of str) {
    console.log(char);
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u")
      count++;
  }
  console.log(`The the total count is ${count}`);
}

countVowels("alfie");

const countVow = (str) => {
  let count = 0;
  for (const char of str) {
    console.log(char);
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u")
      count++;
  }
  console.log(`The the total count is ${count}`);
};

countVow("Saijeet");

function abc() {
  console.log("Hello");
}

let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) {
  console.log(val);
});
arr.forEach((val) => {
  console.log(val);
});

let cities = ["New York", "KTM", "San Francisco", "Chicago"];

arr.forEach((val, idx, arr) => {
  console.log(val, idx, arr);
});

const array = [1, 2, 5, 7];

const square = (num) => {
  console.log(num * num);
};
array.forEach((val) => {
  console.log(val * val);
});

array.forEach(square);

let newArr = array.map((num) => {
  return num * num;
});

console.log(newArr);

let filArr = array.filter((val) => {
  return val % 2 === 0;
});

console.log(filArr);
