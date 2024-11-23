'use strict';

const JokeLog = document.querySelector('#joke-log');
JokeLog.addEventListener('submit', async function(evt){
  evt.preventDefault();
  const query = document.getElementById('query').value;
  JokeLog.innerHTML = '';

  try {
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
    if (!response.ok) throw new Error('Invalid input!');
    const jokes = await response.json();
    console.log(jokes.result);
    for (const joke of jokes.result) {
      const p = document.createElement('p');
      p.innerText = joke.value;
      //console.log(joke.value);

      const article = document.createElement('article');
      article.appendChild(p);
      JokeLog.appendChild(article);
    }

  } catch (error) {
    console.log(error.message);
  }
});