/*
Callbacks:

Callbacks are functions passed as arguments to another function, to be executed later, usually upon completion of an asynchronous operation.
They were traditionally used in JavaScript for handling asynchronous tasks, like fetching data from a server or reading a file.
Callbacks can lead to "callback hell" or "pyramid of doom" where multiple nested callbacks make code hard to read and maintain.

Promises:

Promises provide a cleaner and more structured way to handle asynchronous operations, introduced in ECMAScript 6 (ES6).
A promise represents the eventual completion or failure of an asynchronous operation and allows chaining of multiple asynchronous operations.
Promises have three states: pending, fulfilled, and rejected, which represent the state of the asynchronous operation.
Promises have built-in methods like then() for handling successful completion and catch() for handling errors.



Callbacks vs. Promises in JavaScript: Handling Asynchronous Operations
Both callbacks and promises are ways to deal with asynchronous code in JavaScript, where operations take time to complete. They have their own strengths and weaknesses:

Callbacks:

Function passed as an argument: You pass a function (the callback) to another function, telling it what to do once it finishes its task.
Simple for basic scenarios: Easy to understand for single asynchronous operations.
Nesting leads to "callback hell": Hard to read and maintain when dealing with multiple chained operations.
Error handling requires extra attention: Can be cumbersome to handle errors gracefully.
Promises:

Object representing potential completion: A promise object holds the eventual result (or error) of an asynchronous operation.
Cleaner syntax: Offers .then() and .catch() methods for chaining and handling success/failure states.
Better error handling: Built-in mechanisms for handling errors in a centralized way.
Can feel abstract: The concept might be less intuitive for beginners compared to callbacks.
Choosing Between Them:

For simple async operations, callbacks might suffice.
For complex scenarios or multiple operations, promises offer better readability and maintainability.
Modern JavaScript leans towards promises.
Additional Point:

Async/await: A newer syntax built on top of promises, making asynchronous code look more synchronous.

*/

const student = {
  fullName: "Suman Raj Khanal",
  marks: 99,
  printMarks: function () {
    console.log("marks = ", this.marks);
  },
};

const employee = {
  calcTax() {
    console.log("tax rate is 10%");
  },
};

const newEmployee = {
  salary: 47000,
};
const newEmployee2 = {
  salary: 57000,
};
const newEmployee3 = {
  salary: 37000,
  calcTax() {
    console.log("tax rate is 20%");
  },
};

newEmployee.__proto__ = employee;
newEmployee2.__proto__ = employee;
newEmployee3.__proto__ = employee;

class Car {
  constructor(brand, mileage, employee) {
    console.log("creating new object");
    this.brand = brand;
    this.mileage = mileage;
    this.employee = employee;
  }
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }
  setBrand(brand) {
    this.brandName = brand;
  }
}

let tesla = new Car("tesla", "200km", "50");
console.log(tesla);
let bmw = new Car("BMW ", "20km");
console.log(bmw);
bmw.brand = "BMW MOdel 2";
tesla.setBrand("Cybertruck");
/*
Understanding JavaScript Objects:

Objects are like containers holding both data (properties) and actions (methods).
They can even contain other objects, making them versatile and powerful.
The Prototype Property:

Every JavaScript object has a special property called prototype.
This property holds methods shared among all instances of a particular type of object.
Objects automatically inherit methods from their prototype.
Custom Objects:

If you define a method in both an object and its prototype, the object's method takes precedence.
This allows you to create custom behaviors for your objects.
Class Concept:

Classes act as blueprints for creating objects with similar properties and methods.
They encapsulate both data (variables) and actions (functions).
Constructor Method:

A constructor method is like a setup wizard for new instances of a class.
It's automatically called when you create a new object using the new keyword.
It initializes the object's state and prepares it for use.
*/

class Parent {
  hello() {
    console.log("hello");
  }
}
class Child extends Parent {}
let obj = new Child();

class Person {
  constructor() {
    this.species = "Homo Sapians";
  }
  eat() {
    console.log("Eat");
  }
  sleep() {
    console.log("Sleep");
  }
  work() {
    console.log("Sleep All Day");
  }
}

class Developer extends Person {
  constructor(branch) {
    super(); // to invoke parent class constructor
    this.branch = branch;
  }
  work() {
    super.eat();
    console.log("Develop Something");
  }
}
class Doctor extends Person {
  work() {
    console.log("Heart Specialist");
  }
}

let Mark = new Developer("Mark", "MERN");
let p1 = new Person();
let Himanshree = new Doctor();
Himanshree.work();

// Practice
let Data = "Site New data";
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log(`data = ${Data}`);
  }
}

class Admin extends User {
  constructor(name, email, data) {
    super(name, email);
    this.newData = data;
  }
  editData() {
    console.log(`data = ${Data}`);
    Data = this.newData;
    console.log(`data = ${Data}`);
  }
}

let user1 = new User("userFirst", "user1@gmail.com");
let admin = new Admin("Admin", "admin@gmail.com", "Here is new data");
