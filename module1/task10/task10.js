'use strict';

const number = prompt('Enter the number of dice.');
const sum = prompt('Enter the sum of dice rolls you want.');
let cnt = 0, probability = 0;

for (let i = 1; i <= 10000; i++) {
  cnt++;
  let total = 0;
  for(let j = 1; j <= number; j++) {
    total += Math.floor(Math.random() * 6 + 1);
  }
  if(total === parseInt(sum)) {
    probability++;
  }
}

document.querySelector('#target').innerHTML = `Probability to get sum ${sum} with ${number} dice rolls is ${(probability / cnt * 100).toFixed(2)}%.`;