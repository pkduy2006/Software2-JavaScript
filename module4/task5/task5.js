'use strict';

async function getJoke()  {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    if (!response.ok) throw new Error('Invalid input');
    const joke = await response.json();
    //console.log(joke);
    console.log(joke.value);
  } catch (error) {
    console.log(error.message);
  }
}

getJoke();