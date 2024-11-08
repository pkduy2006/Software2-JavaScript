'use strict';

const choice = confirm('Should I calculate the square root?');

if(choice === false) {
  document.querySelector('#target').innerHTML = "The square root is not calculated.";
}
else {
  const number = prompt('Enter a number.');
  if(parseInt(number) > 0) {
    document.querySelector('#target').innerHTML = `The square root of ${number} is ${Math.sqrt(parseInt(number))}.`;
  }
  else {
    document.querySelector('#target').innerHTML = 'The square root of a negative number is not defined.';
  }
}