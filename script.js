//Logic to get computer choice 
let getComputerChoice = () => {
    //keep a random number between 1-100
    let randomNum = Math.floor(Math.random()*100) + 1;
    let computerChoice;
    //if random number is less than 33, the computer choice is "rock"
    if(randomNum<33){
        computerChoice = "rock";
    }
    //if random number is between 33 and 66 the computer choice is "paper" 
    else if(randomNum>=33 && randomNum<66){
        computerChoice = "paper";
    }
    //if random number is equal or more than 66, the computer choice is "scissors"
    else{
        computerChoice = "scissors";
    }
}

