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

/*Arrays in JS

Arrays in JS : collections of items.
Generally to store related information same type of information, arrays is used for it(linear). Position/Index matters in array.
Property that returns a value and method does some type of work.
Array is not a data type itself but instead it is a special  kind of  object, here for key there is index. Value are stored in a linear fashion.
We can change the value of array with it index. This cannot be done in arrays. Strings are immutable but array are mutable.

Iterable : where we can iterate and use loop. Array, strings, objects. For of loop is usually preferred  for array loop

Arrays Methods

Push() : add to end
Pop():delete from end & return
toString: converts array to string
Concat(): joins multiple arrays & returns result
Unshift: add to start
Shirft : delete from start & end
Slice () : return a piece of array
Splice(): change original array(add, remove, replace */
