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
  });
});

function givePoints(){
  if (/You won/.exec(roundResult.textContent)){
    playerPoints += 1;
  } else if (/You lost/.exec(roundResult.textContent)){
    computerPoints += 1;
  }
}

function playRound(playerSelected, computerSelected){
    if (playerSelected == computerSelected){
      return `It's a tie! ${computerSelected} can't beat ${playerSelected}`;
    } else if (playerSelected == "rock" && computerSelected == "scissors" 
            || playerSelected == "paper" && computerSelected == "rock"
            || playerSelected == "scissors" && computerSelected == "paper"){
      return `You won! ${playerSelected} beats ${computerSelected}`;
    } else {
      return `You lost! ${computerSelected} beats ${playerSelected}` 
    }
}

const runningScoreAndWinner = document.querySelector('#score')
const roundResult = document.querySelector('#results');




