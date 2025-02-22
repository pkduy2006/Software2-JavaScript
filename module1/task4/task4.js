'use strict';

const name = prompt('Type your name.');

const result = Math.floor((Math.random() * 4) + 1);
let finalResult;

switch (result) {
  case 1:
    finalResult = "Gryffindor";
    break;
  case 2:
    finalResult = "Slytherin";
    break;
  case 3:
    finalResult = "Hufflepuff";
    break;
  default:
    finalResult = "Ravenclaw";
}

document.querySelector('#target').innerHTML = name + ', you are ' + finalResult + '.';