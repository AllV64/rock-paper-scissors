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

//declare function playGame with 2 parameters, containing the variables playerSelected and computerSelected
function playGame(playerSelected, computerSelected){
    return (playerSelected !== "rock" 
         || playerSelected !== "paper" 
         || playerSelected !== "scissors"
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
//else if the playerSelected is an option that wins over what computerSelected is
//return string "You won! {playerSelected} beats {computerSelected}"
//else if the computerSelected is an option that wins over what playerSelected is
//return string "You lost! {computerSelected} beats {userSelected}"
//else if the computerSelected and playerSelected is the same
//return string "It's a tie! {computerSelected} can't beat {playerSelected}"
}