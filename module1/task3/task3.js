'use strict';
const number1 = prompt('Type the first number.');
const number2 = prompt('Type the second number.');
const number3 = prompt('Type the third number.');

const sum = parseInt(number1) + parseInt(number2) + parseInt(number3);
const product = parseInt(number1) * parseInt(number2) * parseInt(number3);
const average = sum / 3;

document.querySelector('#sum').innerHTML = `Sum: ${sum}`;
document.querySelector('#product').innerHTML = `Product: ${product}`;
document.querySelector('#average').innerHTML = `Average: ${average.toFixed(1)}`;