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

//Declare function game with 2 parameters containing two variables, playerPoints and computerPoints
//Create for loop that loops 5 times and create variable i
//Create variable roundResult containing a function call for playRound 
//that also takes in two parameters, playerSelection and computerSelection
//if roundResult contains "invalid text"
//decrement variable i
//else if roundResult contains "You won" 
//increment variable playerPoints
//else if roundResult contains "You lost"
//increment variable computerPoints 
//write roundResult to console
//end off loop
//if playerPoints is higher than computerPoints
//write "The player won. The final score is {playerPoints}-{computerPoints}"
//else if computerPoints is higher than playerPoints
//write "The computer won. The final score is {computerPoints}-{playerPoints}"
//Call the function game with two parameters, 0 and 0



