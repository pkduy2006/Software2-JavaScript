'use strict';
const rolls = [];
let result;
do {
  result = Math.floor(Math.random() * 6) + 1;
  rolls.push(result);
} while (result < 6);

for (let x of rolls) {
  document.querySelector('#target').innerHTML += `<li>${x}</li>`;
}