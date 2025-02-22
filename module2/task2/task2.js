'use strict';

const names = [];
const number = prompt('Enter the number of participants.');
for (let i = 1; i <= number; i++) {
  names.push(prompt('Enter the name of passenger ' + i + '.'))
}

names.sort();
for (let name of names) {
  document.querySelector("#target").innerHTML += `<li>${name}</li>`;
}