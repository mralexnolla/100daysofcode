const team = {
    _players: [{ firstName: 'Peter',
                 lastName: 'Parker',
                 age: 17
               }, 
               { firstName: 'Bruce',
                 lastName: 'Wayne',
                 age: 35
               }, 
               {firstName: 'Tony',
                lastName: 'Stark',
                age: 40
               }
    ],
    _games: [ {opponent: 'Asgardians',
               teamPoints: 110,
               opponentPoints: 108
              },
              {opponent: 'Wakandian',
               teamPoints: 210,
               opponentPoints: 140
              },
              {opponent: 'Atlantis',
               teamPoints: 110,
               opponentPoints: 108
              }
  
    ],
  
    get players(){
      return this._players;
    },
  
    get games(){
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName, newAge){
      let player = {
        firstName : newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this._players.push(player)
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this._games.push(game)
    }
  
  };
  
  team.addPlayer('Bugs', 'Bunny', 76 );
  team.addGame('Titans', 100, 98)
  console.log(team.games)
  
  