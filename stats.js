//Creating a team object
const team = {
  //Creating the objects of the team
_players :[{
  //Creating the attributes of the team
  firstName:'John',
  lastName: 'Doe',
  age:18
}],

_games : [{opponent: 'Cheetah', teamPoints: 41, opponentPoints: 1}],
//returns the team members 
get players() {
  return this._players;
},
//returns rthe games played 
get games() {
  return this._games;
},

//method for adding a new player to the team with three paprameters
addPlayer(firstName, lastName, age) {
  let player = {
    firstNmae: firstName,
    lastName: lastName,
    age:age
  };

  this.players.push(player);
},
//method for adding a new game to the games array
addGame(opponent, teamPoints, opponentPoints) {
  let game = {
opponent: opponent,
teamPoints: teamPoints,
opponentPoints: opponentPoints,
  };
//pushes the game object to the _games array
  this.games.push(game);
}
};

//invoking the add player method
team.addPlayer('Steph','Curry', 28);
team.addPlayer('Lisa' ,'Leslie',  44);
team.addPlayer('Bugs' ,'Bunny', 76);

console.log(team.players)

//invoking the game method
team.addGame('michigan', 52, 2);
team.addGame('colorado' ,34,3);
team.addGame('new york', 110,0);

console.log(team.games)
