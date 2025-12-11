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
    let humanChoice;

    //keep user input 
    let i = 0;
    do{
        //if isn't valid show an error message and try again
        if(i>0){
            alert("[ERROR] input not valid, try again!");
        }

        humanChoice = prompt("Enter your game's choice ('rock', 'paper', 'scissors')", "");
        humanChoice = humanChoice.toLowerCase();
        i++;
    }while(!(humanChoice == "scissors" || humanChoice == "paper" || humanChoice == "rock"));
    
    //return choice
    return humanChoice;
}




//scores variables
let computerScore = 0;
let humanScore = 0;

//function that shows points scored during game session
let checkPoints = numRound => {
    alert("ROUND NUMBER " + numRound + "\n" +
        "---Human score---: " + humanScore + "\n" +
        "---Computer score---: " + computerScore
    );
}


//Logic to play a round
let playRound = (event) => {
    console.log("[ROUND START]");

    let humanChoice = event.target.className;
    let computerChoice = getComputerChoice();

    //if human choice is "rock", then verify computer choice to announce winner
    if(humanChoice=="rock"){
        if(computerChoice=="rock"){
            alert("[DRAW] both chose rock option");

        }else if(computerChoice=="paper"){
            alert("[YOU LOSE] computer are better than humans folks! :(");
            computerScore++;

        }else{
            alert("[YOU WIN] congrats dude :)");
            humanScore++;
        }
    }

    //if human choice is "scissors", then verify computer choice to announce winner
    else if(humanChoice=="paper"){
        if(computerChoice=="rock"){
            alert("[YOU WIN] congrats dude :)");
            humanScore++;

        }else if(computerChoice=="paper"){
            alert("[DRAW] both chose rock option");

        }else{
            alert("[YOU LOSE] computer are better than humans folks! :(");
            computerScore++;
        }
    }

    //if human choice is "paper", then verify computer choice to announce winner
    else if(humanChoice=="scissors"){
        if(computerChoice=="rock"){
            alert("[YOU LOSE] computer are better than humans folks! :(");
            computerScore++;

        }else if(computerChoice=="paper"){
            alert("[YOU WIN] congrats dude :)");
            humanScore++;

        }else{
            alert("[DRAW] both chose rock option");
        }
    }

    //if human choice is broken (it shouldn't cause we defensive programmed input) print error
    else{
        alert("WTF HAVE U CHOSEN DUDE");
    }
}


//seleziono i 3 button
const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", playRound));