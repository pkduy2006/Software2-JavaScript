'use strict';

const img = document.querySelector('img');

function change(evt) {
  img.src = 'img/picB.jpg';
}

function recover(evt) {
  img.src = 'img/picA.jpg';
}

const trigger = document.querySelector('#trigger');
trigger.addEventListener('mouseover', change);
trigger.addEventListener("mouseout", recover);