let userInput = '';
 userInput = userInput.toLowerCase();

const getUserChoice = (userInput) => {
  if(userInput === 'rock' || 
     userInput === 'paper' || 
     userInput === 'scissors'){
       return userInput;
     }else{
       console.log(`not valid`);
     }
}

rand = Math.floor(Math.random() * 3);

const getComputerChoice = () =>{
  if(rand === 0){
    return 'rock';
  }else if(rand === 1){
    return 'paper';
  }else{
    return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return 'tie'
  }

  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Computer Wins';
    }else{
      return 'You win';
    }
  }else if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'Computer Wins';
    }else{
      return 'You Win';
    }
  }else if(userChoice === 'scissors'){
    if(computerChoice === 'Rock'){
      return 'Computer Wins'
    }else{
      return 'You win'
    }
  }
}

const playGame = () => {
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

