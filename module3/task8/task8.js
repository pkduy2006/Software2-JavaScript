'use strict';

function calculator(evt) {
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;
  const operation = document.getElementById('operation').value;
  const converted_num1 = parseInt(num1);
  const converted_num2 = parseInt(num2);
  let answer;
  if (operation === 'add')  {
    answer = converted_num1 + converted_num2;
  } else if (operation === 'sub') {
    answer = converted_num1 - converted_num2;
  } else if (operation === 'multi') {
    answer = converted_num1 * converted_num2;
  } else  {
    answer = converted_num1 / converted_num2;
  }
  const result = document.getElementById('result');
  result.innerText = answer;
}

const button = document.querySelector('button');
button.addEventListener('click', calculator);



