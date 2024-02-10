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