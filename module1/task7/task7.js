'use strict';

const times = prompt('Enter the number of dice rolls.');
let result = 0;

for (let i = 1; i <= times; i++)  {
  result += Math.floor(Math.random() * 6 + 1);
}

document.querySelector('#target').innerHTML = `Sum of the dice rolls is ${result}.`;