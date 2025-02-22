'use strict';

let candidates = [];
const number_of_candidates = prompt('Enter the number of candidates.');
for (let i = 1; i <= number_of_candidates; i++) {
  const name = prompt('Name for candidates ' + i + '.');
  candidates.push({'name':name, 'votes':0});
}

const number_of_voters = prompt('Enter the number of voters.');
for (let i = 1; i <= number_of_voters; i++) {
  const name_of_supported = prompt(`Voter ${i}, enter the candidate you want to vote.`);
  for (let x of candidates) {
    if (x['name'] === name_of_supported) {
      x['votes']++;
    }
  }
}

candidates.sort((a, b) => {
  return b['votes'] - a['votes'];
});

console.log(`The winner is ${candidates[0]['name']} with ${candidates[0]['votes']} votes.
results:`);
for (let i = 0; i < number_of_candidates; i++) {
  console.log(`${candidates[i]['name']}: ${candidates[i]['votes']} votes`)
}