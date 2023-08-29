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
//declare function playerSelection with 0 parameters 
//create variable playerChoice which asks the user to type either rock, paper or scissors 
//return variable playerChoice with lowercase letters
