function computerSelection(){
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  if (randomNumber == 1){
      return "rock";
  } else if (randomNumber == 2){
      return "paper";
  } else {
      return "scissors";
  }
}

const playerChoices = document.querySelectorAll('button');

let computerPoints = 0;
let playerPoints = 0;

playerChoices.forEach((playerChoice) => {
  playerChoice.addEventListener('click', () => {
    roundResult.textContent = playRound(playerChoice.id, computerSelection());
    givePoints();
    playGame();
  });
});

function resetScore(){
  playerPoints = 0;
  computerPoints = 0;
}

function playGame(){
  if (playerPoints == 5){
    runningScoreAndWinner.textContent = `The player is the winner! The final 
    score is ${playerPoints}-${computerPoints}`
    resetScore();
  } else if (computerPoints == 5){
    runningScoreAndWinner.textContent = `The computer is the winner! The final
    score is ${playerPoints}-${computerPoints}`
    resetScore();
  } else {
    runningScoreAndWinner.textContent = `The score is ${playerPoints}-${computerPoints}`
  }
}

function givePoints(){
  if (/You won/.exec(roundResult.textContent)){
    playerPoints += 1;
  } else if (/You lost/.exec(roundResult.textContent)){
    computerPoints += 1;
  }
}

function playRound(playerSelected, computerSelected){
  if (playerSelected == computerSelected){
    roundResult.style.cssText = 'color: orange;';
    return `It's a tie! ${computerSelected} can't beat ${playerSelected}`; 
  } else if (playerSelected == "rock" && computerSelected == "scissors" 
          || playerSelected == "paper" && computerSelected == "rock"
          || playerSelected == "scissors" && computerSelected == "paper"){
    roundResult.style.cssText = 'color: green;';
    return `You won! ${playerSelected} beats ${computerSelected}`;
  } else {
    roundResult.style.cssText = 'color: red;';
    return `You lost! ${computerSelected} beats ${playerSelected}` 
  }
}

const runningScoreAndWinner = document.querySelector('#score')
const roundResult = document.querySelector('#results');




