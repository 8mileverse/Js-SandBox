function* createTeamIterators(teams) {
  for (let i = 0; i < teams.length; i++) {
    yield teams[i];
  }
}

const team = ["Chealsea", "ManUnited", "Arsenal", "ManchesterCity"];

const iterator = createTeamIterators(team);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// for (const teams of createTeamIterators(team)) {
    
// console.log(teams)
// }


const [first, second, third] = createTeamIterators(team);
console.log(first, second, third)