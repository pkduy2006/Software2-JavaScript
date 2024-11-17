'use strict';

function better_calculator(evt) {
  const calculation = document.getElementById('calculation').value;
  const arrCalculation = calculation.split('');
  let position;
  for (let i = 0; i < arrCalculation.length; i++) {
    if  (arrCalculation[i] === '+' || arrCalculation[i] === '-' || arrCalculation[i] === '*' || arrCalculation[i] === '/')  {
      position = i;
      break;
    }
  }

  let number1 = 0, number2 = 0, answer, cnt = 1;
  for (let i = position - 1; i >= 0; i--)  {
    number1 += parseInt(arrCalculation[i]) * cnt;
    cnt *= 10;
  }
  cnt = 1;
  for (let i = arrCalculation.length - 1; i >= position + 1; i--) {
    number2 += parseInt(arrCalculation[i]) * cnt;
    cnt *= 10;
  }

  if  (arrCalculation[position] === '+')  {
    answer = number1 + number2;
  } else if (arrCalculation[position] === '-')  {
    answer = number1 - number2;
  } else if (arrCalculation[position] === '*')  {
    answer = number1 * number2;
  } else if (arrCalculation[position] === '/')  {
    answer = number1 / number2;
  }

  const p = document.querySelector('p');
  p.innerText = answer;
}

const button = document.querySelector('button');
button.addEventListener('click', better_calculator);