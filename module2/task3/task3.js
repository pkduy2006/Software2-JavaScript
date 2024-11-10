'use strict';

const dogs = [];

for (let i = 0; i < 6; i++) {
  dogs.push(prompt('Give name for dog ' + (i + 1)));
}

dogs.sort().reverse();

for (const dog of dogs) {
  document.querySelector('#target').innerHTML += `<li>${dog}</li>`;
}