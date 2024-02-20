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


Async programming, short for asynchronous programming, is a programming paradigm that allows tasks to be executed concurrently without waiting for each other to complete. Here are some key points:

Concurrency: Async programming enables multiple tasks to be executed concurrently, improving efficiency by allowing the program to perform other tasks while waiting for certain operations to complete, such as I/O operations or network requests.

Non-blocking Operations: In async programming, tasks are designed to be non-blocking, meaning that when an asynchronous operation is initiated, the program can continue executing other tasks without waiting for the operation to finish.

Event Loop: Most async programming frameworks rely on an event loop to manage the execution of asynchronous tasks. The event loop continuously checks for completed tasks and handles them as needed, allowing the program to remain responsive.

Callbacks and Promises: Async programming often involves the use of callbacks or promises to handle the result of asynchronous operations. Callbacks are functions that are executed once an operation completes, while promises represent the eventual result of an asynchronous operation.

Concurrency Challenges: While async programming can improve performance and responsiveness, it also introduces challenges such as managing shared resources and coordinating the execution of multiple asynchronous tasks.

Popular Async Programming Languages and Frameworks: Many programming languages and frameworks support async programming, including JavaScript with its async/await syntax, Python with async/await keywords in its asyncio library, and C# with async/await in its asynchronous programming model.

Overall, async programming is a powerful paradigm for building responsive and efficient applications, particularly when dealing with I/O-bound operations or handling large numbers of concurrent tasks.


I'd be glad to provide a comprehensive explanation of asynchronous programming in JavaScript:

Asynchronous Programming in JavaScript

In web development, JavaScript executes code in a single thread, which means it can only do one thing at a time. Asynchronous programming allows JavaScript to handle multiple tasks concurrently, even though it's single-threaded, by efficiently managing the queue of operations and switching between them as needed. This is crucial for web applications that need to remain responsive to user interactions, network requests, and other potentially long-running processes.

Key Concepts and Approaches:

Non-Blocking Operations: Asynchronous functions don't pause the main thread while they're waiting for something to happen, such as a network response or the completion of a timer. This ensures that the UI remains responsive and the user can continue interacting with the application.
Event-Driven Model: In JavaScript, the event loop continuously monitors for events (like button clicks, network responses, timers expiring) and schedules callback functions or promises to be executed accordingly.
Call Stack, Event Queue, and Callback Queue: The call stack manages synchronous code execution, while the event queue holds events and related metadata. The callback queue acts as a buffer for callback functions or promises waiting to be processed by the event loop.
Callback Hell: Nesting callback functions deeply can make code difficult to read and maintain. Consider using promises or async/await for better readability.
Common Asynchronous Patterns in JavaScript:

Callbacks: Functions passed as arguments to asynchronous functions to be invoked when the operation completes.
Promises: Objects representing eventual completion (or failure) of an asynchronous operation, providing chaining mechanisms for handling results and errors.
async/await: Syntactic sugar built on top of promises, making asynchronous code look more like synchronous code.
Web Workers: Separate threads for CPU-intensive tasks that don't block the main thread.
Generators: Functions that can be paused and resumed, yielding values along the way, useful for handling asynchronous streams of data.
Observables: Objects that represent streams of data over time, allowing subscriptions to receive data notifications.
Benefits of Asynchronous Programming:

Responsiveness: Maintains a responsive UI even when performing long-running tasks.
Efficiency: Avoids blocking the main thread, allowing other tasks to run while waiting for operations to complete.
Scalability: Enables handling multiple concurrent requests or events more effectively.
Choosing the Right Approach:

Callbacks: Useful for simple asynchronous operations.
Promises: Better for more complex logic and error handling.
async/await: Improves readability of promise-based code.
Web Workers: For CPU-intensive tasks that don't interact with the DOM.
Generators: For handling streams of data.
Observables: For complex data flows with multiple subscribers.
Remember that choosing the right approach depends on the specific needs of your application and the complexity of the asynchronous operations involved.
*/

// console.log("one");
// console.log("two");

// setTimeout(() => {
//   console.log("hello");
// }, 2000);

// console.log("three");
// console.log("four");

// // Call back function
// function sum(a, b) {
//   console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//   sumCallback(a, b);
// }

// calculator(1, 2, (a, b) => {
//   console.log(a + b);
// });

// const hello = () => {
//   console.log("hello");
// };

// setTimeout(hello, 3000);

// function getData(dataID, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataID);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }
// Callback Hell
// getData(1, () => {
//   getData(2, () => {
//     getData(3);
//   });
// });

// // Promises
// let promise = new Promise((resolve, reject) => {
//   console.log("Promise");
//   resolve(123);
//   reject(false);
// });

// function getData(dataId, getNextData) {
//   return new Promise((reslove, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       reslove("success");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

//  Use of promises
// const getPromise = () => {
//   return new Promise((reslove, reject) => {
//     console.log("Here is promise");
//     reslove("success");
//     // reject("network error");
//   });
// };

// let promise = getPromise();
// promise.then((res) => {
//   console.log("Promise fullfilled", res);
// });
// promise.catch((err) => {
//   console.log("Rejected", err);
// });

// Promise Chain

function asynFunction1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data1");
      resolve("success");
    }, 4000);
  });
}
function asynFunction2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data2");
      resolve("success");
    }, 4000);
  });
}

console.log("fetching data1...");
asynFunction1().then((res) => {
  console.log(res);
  console.log("fetching data2...");
  asynFunction2().then((res) => {});
});

//

function getData(dataID, getNextData) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      console.log("data", dataID);
      reslove("success");
      if (getNextData) {
        getNextData();
      }
    }, 3000);
  });
}
// Promise CHain
getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  });

Async
function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    }, 2000);
  });
}

async function getWeatherData() {
  await api();
  await api();
}

async function getAllData() {
  await getData(1);
  await getData(2);
  await getData(3);
  await getData(4);
}

(async () => {
  await getData(1);
  await getData(2);
  await getData(3);
  await getData(4);
})();

/*

Promises: Promises are a way to handle asynchronous operations in JavaScript, making it easier to manage complex workflows. When working with promises, remember the following:

- then(): This method is used to handle the fulfillment of a promise. It takes a callback function as its argument, which will be invoked once the promise is fulfilled. This allows you to perform actions or continue the workflow after the promise resolves successfully.

- catch(): When a promise is rejected (encounters an error), the catch() method is used to handle the error. It takes a callback function that will be executed if the promise is rejected, allowing you to gracefully handle errors in your asynchronous code.



Promise Chain: Promises can be chained together using the then() method, allowing you to create a sequence of asynchronous operations. Each then() call returns a new promise, which can be further chained with additional then() calls or a catch() to handle errors.



Async/Await: Async functions and the await keyword provide a more intuitive way to work with asynchronous code, especially when dealing with promises. Here's how they work:

- async function: An async function is a function that operates asynchronously via the event loop. It always returns a promise, which resolves with the value returned by the function or rejects with an error thrown from within the function.

await: The await keyword is used inside async functions to pause the execution of the function until a promise is settled (either fulfilled or rejected). This allows you to write asynchronous code that looks and behaves more like synchronous code, making it easier to understand and maintain.



IIFE (Immediately Invoked Function Expression): IIFE is a JavaScript design pattern that allows you to create a function and immediately execute it. Here's how it works:

- An IIFE is defined as a function expression wrapped in parentheses ( ) followed by an additional set of parentheses ().

- The outer parentheses create a function expression, and the inner parentheses immediately invoke the function, executing its code.

- IIFEs are commonly used to create a new scope for variables, avoiding polluting the global namespace, and for executing code immediately without the need for a function name.

 */