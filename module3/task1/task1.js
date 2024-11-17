'use strict';

const items = ['First item', 'Second item', 'Third item'];
for (let item of items) {
  document.querySelector('#target').innerHTML += `<li>${item}</li>`;
}

document.querySelector('#target').classList.add('my-list');