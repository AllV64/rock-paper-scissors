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

function playerSelection(){ 
    let playerChoice = prompt("Enter either 'rock', 'paper' or 'scissors' here") 
    return playerChoice.toLocaleLowerCase();
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

const roundResult = document.querySelector('#results');




