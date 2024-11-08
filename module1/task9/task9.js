'use strict';

const number = prompt('Enter a number.');

let check = true;
if(number < 2)
  check = false;
for (let i = 2; i <= Math.sqrt(parseInt(number)); i++) {
  if(number % i === 0) {
    check = false;
    break;
  }
}
if(check === true) {
  document.querySelector('#target').innerHTML = `${number} is a prime number.`;
}
else {
  document.querySelector('#target').innerHTML = `${number} is not a prime number.`;
}