let marks = [98, 88, 90, 95, 68];
let villain = ["Joker", "Penguin", "Bane", "Riddler"];

console.log(marks);
console.log(villain);

for (let i = 0; i < marks.length; i++) {
  console.log(marks[i]);
}

for (let i = 0; i < villain.length; i++) {
  console.log(villain[i]);
}

for (let v of villain) {
  console.log(v);
}

let total = 0;
for (let i = 0; i < marks.length; i++) {
  total += marks[i];
}
let average = total / marks.length;
console.log(`The average marks : ${average}`);

const newArray = [];
let items = [250, 645, 300, 900, 50];
for (let item of items) {
  value = item - 0.1 * item;
  newArray.push(value);
}

console.log(newArray);

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);
companies.shift();
console.log(companies);
companies.splice(2, 1, "Ola");
console.log(companies);
companies.push("Amazon");
