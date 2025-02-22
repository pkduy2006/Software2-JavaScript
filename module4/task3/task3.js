'use strict';

const TvShow = document.querySelector('#tv-show');
TvShow.addEventListener('submit', async function(evt)  {
  evt.preventDefault();
  const query = document.getElementById('query').value;
  TvShow.innerHTML = '';
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    if (!response.ok) throw new Error('Invalid input!');
    const answers = await response.json();
    console.log(answers);
    for (const answer of answers) {
      //console.log(answer.show.name);
      const h2 = document.createElement('h2');
      h2.innerText = answer.show.name;

      //console.log(answer.show.url);
      const a = document.createElement('a');
      a.target = "_blank";
      a.href = answer.show.url;

      //console.log(answer.show.image.medium);
      const img = document.createElement('img');
      img.src = answer.show.image?.medium;
      img.alt = answer.show.name;

      const div = document.createElement('div');
      div.innerHTML = answer.show.summary;
      div.id = 'result';

      const article = document.createElement('article');
      article.appendChild(h2);
      article.appendChild(a);
      article.appendChild(img);
      article.appendChild(div);

      TvShow.appendChild(article);
    }
  } catch (error) {
    console.log(error.message);
  }
});