'use strict';

let numbers = new Set();
let number = prompt('Enter a number.');

while(numbers.has(number) === false) {
  numbers.add(number);
  number = prompt('Enter a number.');
}

alert(`${number} has already been given.`);
document.querySelector('#announcement').innerHTML = 'Here is the list of all given numbers: ';

const array_numbers = [];
for (let n of numbers) {
  array_numbers.push(n);
}
array_numbers.sort((a, b) => a-b);
for (let n of array_numbers) {
  document.querySelector('#target').innerHTML += `<li>${n}</li>`;
}