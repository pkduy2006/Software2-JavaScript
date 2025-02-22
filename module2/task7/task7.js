'use strict';
const max_num = prompt('Enter the maximum number on the dice you want.');
const rolls = [];
let result;
do {
  result = Math.floor(Math.random() * max_num) + 1;
  rolls.push(result);
} while (result < max_num);

for (let x of rolls) {
  document.querySelector('#target').innerHTML += `<li>${x}</li>`;
}