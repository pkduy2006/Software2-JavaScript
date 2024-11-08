'use strict';

const start_year = prompt('Enter starting year');
const end_year = prompt('Enter ending year');

for(let i = start_year; i <= end_year; i++) {
  if(i % 4 === 0 && i % 100 !== 0 || i % 400 === 0) {
    document.querySelector('#target').innerHTML += `<li>${i}</li>`;
  }
}