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

let computerSelected = "";
computerSelect.addEventListener('click', () => {
  computerSelected = (computerSelection());
});

function playerSelection(){ 
    let playerChoice = prompt("Enter either 'rock', 'paper' or 'scissors' here") 
    return playerChoice.toLocaleLowerCase();
}

let playerSelected = "";
playerSelect.addEventListener('click', () => {
  playerSelected = playerSelection();
});

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

function validateChoices(){
  if (playerSelected == "" || computerSelected == ""){
    roundMessage = "One of the opponents has not chosen anything";
  } else if (playerSelected !== "rock" 
          && playerSelected !== "paper" 
          && playerSelected !== "scissors"){
    roundMessage = `You have entered invalid text. You entred ${playerSelected}.`;
  }
  return roundMessage;
}

let roundMessage = "";
startRound.addEventListener('click', () => {
  if (playerSelected == "" || computerSelected == ""){
    roundMessage = "One of the opponents has not chosen anything";
  } else if (playerSelected !== "rock" 
          && playerSelected !== "paper" 
          && playerSelected !== "scissors"){
    roundMessage = `You have entered invalid text. You entred ${playerSelected}.`;
  } else {
    roundMessage = (playRound(playerSelected, computerSelected));
  }
  return roundMessage;
});



