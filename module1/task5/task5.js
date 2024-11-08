'use strict';
const year = prompt('Type a year.');

const int_year = parseInt(year);
if(int_year % 4 === 0 && int_year % 100 !== 0 || int_year % 400 === 0) {
  document.querySelector('#target').innerHTML = `${int_year} is a leap year.`;
}
else{
  document.querySelector('#target').innerHTML = `${int_year} is not a leap year.`;
}