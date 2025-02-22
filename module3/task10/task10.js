'use strict';

function print_name(evt)  {
  evt.preventDefault();

  const first_name = document.querySelector('input[name=firstname]');
  const last_name = document.querySelector('input[name=lastname]');
  const p = document.querySelector('p');
  p.innerText = `Your name is ${first_name.value} ${last_name.value}.`;
}

const form = document.getElementById('source');
form.addEventListener('submit', print_name);