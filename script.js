// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   orderFood: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({ time, address, mainIndex, starterIndex }) {
//     console.log(
//       `Order received! You have ordered ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
//     );
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// //  Destructuring Arrays

// //  The old way:
// const array = [1, 2, 3];

// const a = array[0];
// const b = array[1];
// const c = array[2];
// console.log(a, b, c);

// //  The new way:
// const [x, y, z] = array;
// console.log(x, y, z);

// let [categoriesFirstElement, categoriesSecondElement] = restaurant.categories;
// console.log(categoriesFirstElement, categoriesSecondElement);

// let [, , categoriesThirdElement] = restaurant.categories;
// console.log(
//   categoriesFirstElement,
//   categoriesSecondElement,
//   categoriesThirdElement
// );

// //  Rearranging elements with values
// [categoriesFirstElement, categoriesSecondElement, categoriesThirdElement] = [
//   categoriesThirdElement,
//   categoriesFirstElement,
//   categoriesSecondElement,
// ];

// console.log(
//   categoriesFirstElement,
//   categoriesSecondElement,
//   categoriesThirdElement
// );

// //  Destructuring arrays via function values
// const [starter, main] = restaurant.orderFood(2, 0);
// console.log(restaurant.orderFood(2, 0));
// console.log(starter, main);

// //  Destructuring nested arrays
// const nestedArray = [9, 8, 7, 6, [5, 4, [3, 2], 1]];
// const [h, i, , k, [l, m, [n, o], p]] = nestedArray;

// console.log(h, i, k, l, m, n, o, p);

// //  Destructuring Objects

// const {
//   name: restaurantName,
//   categories: tags,
//   openingHours: hours,
// } = restaurant;
// console.log(restaurantName, tags, hours);

// //  Default values
// const { menu = 'This is the default value', starterMenu: starters } =
//   restaurant;
// console.log(menu, starters);

// //  Mutating variables
// let lightweight = 135;
// let superLightweight = 140;
// let welterweight = 147;
// let superWelterweight;

// const boxing = {
//   lightweight: 140,
//   superLightweight: 147,
//   welterweight: 154,
//   superWelterweight,
// };
// console.log(boxing);

// ({
//   lightweight,
//   superLightweight,
//   welterweight,
//   superWelterweight = 160,
// } = boxing);

// console.log(
//   `The rules have changed. The lightweight division limit is now ${lightweight}, the super lightweight division limit is now ${superLightweight}, the welterweight division limit is now ${welterweight} the super welterweight division limit now is ${superWelterweight}.`
// );

// //  Nested objects
// const {
//   fri: friday,
//   fri: { open, close },
// } = restaurant.openingHours;

// console.log(friday);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: '10 Downing Street',
//   mainIndex: 2,
//   starterIndex: 2,
// });
