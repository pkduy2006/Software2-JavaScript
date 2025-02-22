'use strict';

const TvShow = document.querySelector('#tv-show');
TvShow.addEventListener('submit', async function(evt)  {
  evt.preventDefault();
  const query = document.getElementById('query').value;
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    if (!response.ok) throw new Error('Invalid input!');
    const answers = await response.json();
    console.log(answers);
  } catch (error) {
    console.log(error.message);
  }
});