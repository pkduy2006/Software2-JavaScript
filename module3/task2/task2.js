'use strict';

const items = ['First item', 'Second item', 'Third item'];
for (let item of items) {
  const li = document.createElement('li');
  li.innerText = item;
  if (item === 'Second item') {
    li.classList.add('my-item');
  }
  document.querySelector('#target').appendChild(li);
}