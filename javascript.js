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

computerSelect.addEventListener('click', () => {
  console.log(computerSelection());
});

function playerSelection(){ 
    let playerChoice = prompt("Enter either 'rock', 'paper' or 'scissors' here") 
    return playerChoice.toLocaleLowerCase();
}

playerSelect.addEventListener('click', () => {
  console.log(playerSelection());
});

function playRound(playerSelected, computerSelected){
    return (playerSelected !== "rock" 
         && playerSelected !== "paper" 
         && playerSelected !== "scissors"
           ) ? `You have entered invalid text. You entred ${playerSelected}.`
         : (playerSelected == "rock" && computerSelected == "scissors" 
         || playerSelected == "paper" && computerSelected == "rock"
         || playerSelected == "scissors" && computerSelected == "paper"
           ) ? `You won! ${playerSelected} beats ${computerSelected}` 
         : (computerSelected == "rock" && playerSelected == "scissors" 
         || computerSelected == "paper" && playerSelected == "rock"
         || computerSelected == "scissors" && playerSelected == "paper"
           ) ? `You lost! ${computerSelected} beats ${playerSelected}` 
         : `It's a tie! ${computerSelected} can't beat ${playerSelected}`;
}





