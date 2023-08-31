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

function game(playerPoints, computerPoints){
  let roundResult = "";
  for (let i = 0; i < 5; i++){
    roundResult = playRound(playerSelection(), computerSelection());
    (/invalid text/.exec(roundResult)) ? i-- : (/You won/.exec(roundResult)) ?
    playerPoints++ : (/You lost/.exec(roundResult)) ? computerPoints++ : "";    
    console.log(roundResult);
  }
  (playerPoints > computerPoints) ? 
  console.log(`The player won. The final score is ${playerPoints}-${computerPoints}` ) :
  (computerPoints > playerPoints) ?
  console.log(`The computer won. The final score is ${computerPoints}-${playerPoints}` ) :
  console.log(`It's a tie. The finel score is ${computerPoints}-${playerPoints}`);
}
game(0, 0);



