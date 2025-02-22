'use strict';

function popup(evt) {
  alert('Button clicked.');
}

const button = document.querySelector('button');
button.addEventListener('click', popup);