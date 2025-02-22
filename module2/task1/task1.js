'use strict';

const numbers = [];
for (let i = 1; i <= 5; i++) {
  const x = prompt('Enter a number.');
  numbers.push(x);
}

const reversed_numbers = [];
for (let i = 4; i >= 0; i--) {
  reversed_numbers.push(numbers[i]);
}

console.log(reversed_numbers);