'use strict';

function even(arr) {
  const evenNumbers = [];
  for (const number of arr) {
    if(number % 2 === 0) {
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}

const numbers = [20, 25, 30, 37, 52, 54, 57, 113, 124, 200, 225, 227, 236, 239, 500, 510, 544, 560];
console.log(numbers);
console.log(even(numbers));