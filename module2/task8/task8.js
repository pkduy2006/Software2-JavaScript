'use strict';

function concat(arr) {
  let result ="";
  for (let x of arr) {
    result += x;
  }

  return result;
}

const cats = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
document.querySelector('#target').innerHTML = concat(cats);
