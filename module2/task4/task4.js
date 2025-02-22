'use strict';

const numbers = [];
let number;
do {
  number = prompt("Enter a number or enter '0' to quit.");
  numbers.push(number);
} while (number != 0);

numbers.sort((a, b) => b - a);
console.log(numbers);