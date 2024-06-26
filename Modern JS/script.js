"use strict";

// Data needed for a later exercise

// Data needed for first part of the section

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon);

// // With optional Chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`On ${day}, we open at ${open}`);
// }

// // On methods

// console.log(restaurant.order?.(0, 1) ?? "method does not exist");
// console.log(restaurant.orderRissoto?.(0, 1) ?? "method does not exist");

// // Arrays
// const users = [{ name: "Jonas", email: "Hello@jonas.io" }];
// console.log(users[0]?.name ?? "User array empty");
// console.log(users[10]?.name ?? "User array empty");

// // Looping over objects (Property Names)
// const properties = Object.keys(openingHours);
// console.log(properties);
// let openStr = `We are open on ${properties.length} days`;

// for (const day of Object.keys(openingHours)) {
//   openStr += `${day} ,`;
// }
// console.log(openStr);

// // Property Values
// const values = Object.values(openingHours);
// console.log(values);

// // Entire objects
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
// Example

// For of Loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// const rest1 = {
//   name: "Capri",
//   numGuests: 0,
// };

// const rest2 = {
//   name: "La Piazza",
//   owner: "Giovanni Rossi",
// };

// Or Assignment Operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// logical nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // AND Assignment Operator
// rest1.owner = rest1.owner && "<ANDONYMOUS>";
// rest2.owner = rest2.owner && "<ANDONYMOUS>";

// rest1.owner &&= "<ANDONYMOUS>";
// rest2.owner &&= "<ANDONYMOUS>";

// console.log(rest1);
// console.log(rest2);

// //  SPREAD, because on Right side of =
// const arr = [1, 2, ...[3, 4]];

// //  Rest, because on Right side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherfood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherfood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// // functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(numbers);
//   console.log(sum);
// };

// add(2, 3);
// add(3, 4, 5, 6);
// add(2, 12, 34, 12, 45);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
// const remaingIngredients = ["bacon,", "pinnapple", "chicken"];
// restaurant.orderPizza("cheese");
// restaurant.orderPizza("cheese", ...remaingIngredients);

// console.log(3 || "Jonas");
// console.log("" || "Jonas");
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || "" || "Hello" || 23 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log(0 && "Jonas");
// console.log(7 && "Jonas");

// console.log("Hello" && 23 && null && "Jonas");

// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "spinach");
// }

// restaurant.orderPizza && restaurant.orderPizza("musrooms", "spinach");

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// // Copy array
// const mainMenu = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// const str = "Jonas";
// const letters = [...str, " ", "S."];
// console.log(letters);

// // Real World Example
// const ingredients = [
//   prompt("let's make pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3"),
// ];

// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { foundIn: 1998, ...restaurant, founder: "Guiseppe" };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Risotrante Roma";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// destructuring objects

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// const { menu, starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// // mutating objects
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested Objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// destructuring array
// const arr = [2, 3, 4];
// const [x, y, z] = arr;
// console.log(x, y, z);

// let [first, , second] = restaurant.categories;
// console.log(first, second);

// // Switching variables
// [first, second] = [second, first];
// console.log(first, second);

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// // Nested array
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// //Nested Destructuring
// const [k, , [l, m]] = nested;
// console.log(k, l, m);

// // default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// const ratings = [
//   ["rating", 4.19],
//   ["ratingsCount", 144584],
// ];

// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;

// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// Coding challenge 1
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// const [players1, players2] = game.players;

// const Bayern = game.players[0];
// const Dortmund = game.players[1];

// [players1.gk, ...players1.fieldPlayer] = players1;
// [players2.gk, ...players2.fieldPlayer] = players2;

// console.log(players1);
// console.log(players2);

// const allPlayers = [...Bayern, ...Dortmund];
// console.log(allPlayers);

// const players1Final = [...Bayern, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, team2, draw);

// function printGoals(...player) {
//   console.log(`${player.length} goals were scored`);
// }

// printGoals("Ronaldo", "Bale", "Benzema");
// printGoals(...Dortmund);

// printGoals(...game.scored);

// team1 < team2 && console.log('Team 1 is likeyly to win');
// team1 > team2 && console.log('Team 2 is likeyly to win');

//1
// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player} `);

// // 2

// let average = 0;
// const odds = Object.values(game.odds);
// for (const odd of Object.values(game.odds)) average += odd;

// average /= odds.length;
// console.log(average);

// // 3
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// sets
// const orderSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Risotto",
//   "Pasta",
//   "Pizza",
// ]);

// console.log(orderSet);

// console.log(new Set("Jonas"));
// console.log(orderSet.size);
// console.log(orderSet.has("Pizza"));
// console.log(orderSet.has("Bread"));

// orderSet.add("Garlic Bread");
// orderSet.add("Garlic Bread");
// console.log(orderSet);
// orderSet.delete("Pasta");
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// // Example
// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waier"];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set("saijeet").size);

// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");

// console.log(rest.set(2, "Lisbon, Portugal"));

// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open :D")
//   .set(false, "We are closed :(");

// console.log(rest);

// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.has("categories"));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// // rest.clear();

// const arr = [1, 2];
// rest.set(arr, "Test");
// rest.set(document.querySelector("h1"), "Heading");
// console.log(rest);
// console.log(rest.size);
// console.log(rest.get(arr));

// const question = new Map([
//   ["question", "Whats is the best programming language in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JS"],
//   ["correct", 3],
//   [true, "Correct"],
//   [false, "Try Again"],
// ]);

// console.log(question);

// // Convert object to map
// console.log(Object.entries(openingHours));
// const hourMap = new Map(Object.entries(openingHours));
// console.log(hourMap);

// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
// }

// const answer = 3;
// console.log(answer);
// console.log(question.get(question.get("correct") === answer));

// // Convert map to array

// console.log([...question]);
// console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, "⚽️ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽️ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽️ GOAL"],
//   [80, "⚽️ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);

// const setEvents = [...new Set(gameEvents.values())];

// const newEvents = [...gameEvents];
// console.log(newEvents);
// const events = new Set([]);
// let totalTime = 0;

// for (const [stamp, event] of newEvents) {
//   events.add(event);
//   totalTime += stamp;
//   const half = stamp <= 45 ? "[FIRST HALF]" : "[SECOND HALF]";
//   console.log(`${half} ${stamp} : ${event}`);
// }

// const average = totalTime / newEvents.length;
// console.log(average);

// console.log(events);

// gameEvents.delete(64);
// console.log(gameEvents);

// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// // ------------- String
// const airline = "TAP Nepal";
// const plane = "A120";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log("B737"[0]);

// console.log(airline.length);

// console.log(airline.indexOf("l"));
// console.log(airline.indexOf("Nepal"));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   const seatPostion = seat.slice(-1);
//   console.log(seatPostion);
//   seatPostion == "B" ?? "E"
//     ? console.log("Middle Seat")
//     : console.log("Not Middle Seat");
// };

// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fix capitalization in name
// const passenger = "jOnaS";
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // replacing
// const priceGB = "288.964$";
// const priceNP = priceGB.replace("$", "Rs").replace(".", ",");
// console.log(priceNP);

// const accouncement =
//   "All passengers come to boarding door 23, Boadring door 23!";

// console.log(accouncement.replace(/door/g, "gate"));

// // Practice Exercise

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   baggage.includes("knife") || baggage.includes("gun")
//     ? console.log("Not allowed")
//     : console.log("Welcome Aboard");
// };

// checkBaggage("I have a laptop, some Food and a pocket Knife");
// checkBaggage("Socks and camera");
// checkBaggage("Got some snacks and a gun for protection");

// // split string
// console.log("a+very+nice+strong".split("+"));
// console.log("Saijeet Upadhyay".split(" "));

// const [firstName, lastName] = "Saijeet Upadhyay".split(" ");

// const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
// console.log(newName);

// const capitalizeName = (name) => {
//   const names = name.split(" ");
//   const array = [];
//   for (const n of names) {
//     const newName = n[0].toUpperCase() + n.slice(1).toLowerCase();
//     array.push(newName);
//   }
//   console.log(array.join(" "));
// };

// capitalizeName("jessica ann smith davis");
// capitalizeName("anna davis");

// // Padding
// const message = "Go to gate 23!";
// console.log(message.padStart(20, "+").padEnd(25, "+"));

// const maskCreditCard = (number) => {
//   const str = number + "";
//   const last = str.slice(-4);
//   return last.padStart(str.length, "*");
// };

// console.log(maskCreditCard(234234));
// console.log(maskCreditCard(2141293124));
// console.log(maskCreditCard(123123123121233));

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", () => {
  let textInput = document.querySelector("textarea").value;
  console.log(textInput);
  const rows = textInput.split("\n");
  let count = 0;
  for (const row of rows) {
    count++;
    const [firstWord, secondWord] = row.toLowerCase().trim().split("_");
    const output = `${firstWord}${secondWord.replace(
      secondWord[0],
      secondWord[0].toUpperCase()
    )}`;
    console.log(output.padEnd(20, " ") + "✅".repeat(count));
  }
});

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const flightSeperate = flights.split("+");
console.log(flightSeperate);

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flightSeperate) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : " "}${type.replaceAll(
    "_",
    " "
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(":", "h")})`.padStart(50);
  console.log(output);
}
