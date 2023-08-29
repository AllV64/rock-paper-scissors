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
//if the playerSelected is not rock, paper or scissors
//return string "You have entered invalid text, you entered {playerSelected"}
//else if the playerSelected is an option that wins over what computerSelected is
//return string "You won! {playerSelected} beats {computerSelected}"
//else if the computerSelected is an option that wins over what playerSelected is
//return string "You lost! {computerSelected} beats {userSelected}"
//else if the computerSelected and playerSelected is the same
//return string "It's a tie! {computerSelected} can't beat {playerSelected}"