"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);

let [first, , second] = restaurant.categories;
console.log(first, second);

// Switching variables
[first, second] = [second, first];
console.log(first, second);

const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// Nested array
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);

//Nested Destructuring
const [k, , [l, m]] = nested;
console.log(k, l, m);

// default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

const ratings = [
  ["rating", 4.19],
  ["ratingsCount", 144584],
];

const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;

console.log(fiveStarRatings, oneStarRatings, threeStarRatings);
