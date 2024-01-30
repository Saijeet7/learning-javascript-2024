for (let i = 1; i < 500; i++) {
  console.log("Working");
}

let sum = 0;
let n = 100;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}

let i = 1;
while (i <= 10) {
  console.log("Working");
  i++;
}

console.log("sum = ", sum);
console.log("Loop has ended");

let size = 0;
let value = "Javascript";

for (let val of value) {
  console.log(val);
  size++;
}

console.log("size = ", size);

let student = {
  name: "Avi Malla",
  age: 23,
  gpa: 3.7,
  isPass: true,
};

for (let i in student) {
  console.log(i, student[i]);
}
