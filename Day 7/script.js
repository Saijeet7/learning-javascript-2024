console.log("Hello World");
let fullName = "Saijeet";
var age = 23;
var age = 34;
var age = 30;
let num = 24;
const PI = 22 / 7;
num = 39;
console.log(age);
console.log(num);
console.log(PI);
console.log(typeof fullName);

{
  let a = 7;
  console.log(a);
}

{
  let a = 9;
  console.log(10);
  console.log(typeof a);
}
let x = BigInt("123");
console.log(x);
console.log(typeof x);

let y = Symbol("Hello");
console.log(y);
console.log(typeof y);

const student = {
  name: "Saswat",
  age: 23,
  cgpa: 9,
  isPass: true,
};

student["age"] = student["age"] + 1;
console.log(student);
console.log(typeof student);
console.log(student["name"]);

const product = {
  title: "CT Ball Pen",
  rating: 4,
  price: 150,
  offer: 5,
  isDeal: true,
};

console.log("abcd" + 123);

const profile = {
  username: "Saijeet",
  post: 10,
  follower: 500,
  bio: "Lorem ipusm",
};

/*
Variables are container for data.

Null is a special value means we know it has no value which can be interpreted as absent.
* Represents an intentional absence of value.
* Converted to 0 during arithmetic operations.
* An actual value that can be assigned to a variable.
* Compared loosely (==) as equal to undefined, but strictly (===) not equal.


Undefined means we don’t know what value we have inside it.
* Indicates a variable has been declared but not assigned a value.
* converted to NaN during arithmetic operations.
* Not considered an assignment value.


null is an assigned value. It means nothing. undefined typically means a variable has been declared but not defined yet.
All variable declared as must have a meaningful name

Javascript is a dynamically typed language. We don’t have to tell variable its data type.

= means assignment operator. (Means assigning value inside a variable.)
Js is case sensitive language
several factors make camel case a popular choice for JavaScript:

* Consistency with JavaScript Ecosystem: JavaScript's standard library and many popular libraries and frameworks predominantly use camel case for naming variables, functions, and properties. Adhering to the same convention ensures consistency within your codebase and aligns with the broader JavaScript community practices. When developers encounter code that follows familiar conventions, it's easier for them to understand and work with it efficiently.
* Readability: Camel case improves code readability by making variable names more readable and understandable. Breaking down variable names into separate words with each word capitalized (except the first) helps distinguish between different parts of the name
* Ease of Typing: Writing in camel case is often easier and quicker than alternatives like snake case (e.g., my_variable_name) because it requires fewer keystrokes and doesn't require the use of special characters like underscores. This can contribute to faster development and reduce the likelihood of typographical errors.
* Integration with Object-Oriented Principles: JavaScript supports object-oriented programming (OOP) paradigms, where objects encapsulate data and behavior. Camel case aligns well with OOP conventions, making it easier to map object properties and methods to their corresponding JavaScript code.
* Compatibility with JSON: JavaScript Object Notation (JSON) is a widely used data interchange format. JSON keys must be strings, and camel case is a common convention for naming keys in JSON data. By using camel case consistently in your JavaScript code, you ensure compatibility with JSON APIs and data structures, simplifying data manipulation and interoperability.
* Community Standards and Best Practices: Many coding style guides and best practices, such as those provided by Google, Airbnb, and Mozilla, recommend or enforce the use of camel case in JavaScript code. Following these standards fosters code consistency across projects and teams, which is essential for collaboration, code maintenance, and long-term scalability.

Keywords and they are three types :

Let var and const
Var is the oldest data types, and mainly used 2015. In ES 6 came let and const
In var we can redeclare the code again and again but in let we cannot redeclare but can update
In const it cannot be updated or redeclared. For example value of pi. In objects its key can be updated
By default in js in let if any variable is declared it will be undefined but const cannot be declared and not have a value or must be instialized.
Var is global scope but let and const has block scope

Data types in JS
There are two data types i.e. Primitive and non-primitive
Number : Numerical data type
String :
Null
Undefined
BigInt:
* Purpose: BigInt is designed to represent integers of arbitrary precision, allowing you to work with numbers beyond the limitations imposed by the Number type.
* Limitations: While BigInts provide flexibility for working with large integers, they cannot be mixed directly with regular Number types in arithmetic operations without explicit conversion.
Symbol:
* Purpose: Symbols are unique and immutable primitives introduced to create property keys that are guaranteed to be unique. They are often used to define object properties that are meant to be truly private or to create special built-in language features.
* Uniqueness: Each symbol is unique, even if it has the same description. This uniqueness makes symbols suitable for creating object properties that won't conflict with other properties.
* Use Cases: Symbols are commonly used as keys for object properties in scenarios where private or special-purpose properties are needed. They are also used to define well-known symbols that provide hooks into JavaScript language features, such as iterators, generators, and meta-programming operations.

Non-primitive :objects(arrays, functions)
Object is a collection of values. Collection of primitive values and are stored in key value pair.

Boolean has two value true and false

*/
