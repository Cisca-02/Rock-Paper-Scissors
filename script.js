//scores variables
let computerScore = 0;
let humanScore = 0;

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
    return computerChoice;
}

//Logic to get human choice
let getHumanChoice = () => {
    //keep user input 
    let humanChoice = prompt("Enter your game's choice ('rock', 'paper', 'scissors')").toLowerCase();

    //check if input is valid
    if(humanChoice == "scissors" || humanChoice == "paper" || humanChoice == "rock"){
        //if is valid, console print success message and return choice
        console.log("Your choice " + humanChoice + " has been stored");
        return humanChoice;
    }else{
        //if isn't valid show an error message and try again
        alert("[ERROR] input not valid, try again!");
        getHumanChoice();
    }
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();