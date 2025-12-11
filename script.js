//---BUSINESS LOGIC---

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


//scores variables
let userScore = 0;
let computerScore = 0;


//Logic to play a round
let playRound = (event) => {

    let humanChoice = event.target.className;
    let computerChoice = getComputerChoice();

    let winnerAnn;

    //if human choice is "rock", then verify computer choice to announce winner
    if(humanChoice=="rock"){
        if(computerChoice=="rock"){
            winnerAnn = "DRAW both made the same choose";

        }else if(computerChoice=="paper"){
            winnerAnn = "YOU LOSE computer are better than humans folks!";
            computerScore++;

        }else{
            winnerAnn = "YOU WIN congrats dude :)";
            userScore++;
        }
    }

    //if human choice is "scissors", then verify computer choice to announce winner
    else if(humanChoice=="paper"){
        if(computerChoice=="rock"){
            winnerAnn = "YOU WIN congrats dude :)";
            userScore++;

        }else if(computerChoice=="paper"){
            winnerAnn = "DRAW both chose rock option";

        }else{
            winnerAnn = "YOU LOSE computer are better than humans folks! :(";
            computerScore++;
        }
    }

    //if human choice is "paper", then verify computer choice to announce winner
    else if(humanChoice=="scissors"){
        if(computerChoice=="rock"){
            winnerAnn = "YOU LOSE computer are better than humans folks! :(";
            computerScore++;

        }else if(computerChoice=="paper"){
            winnerAnn = "YOU WIN congrats dude :)";
            userScore++;

        }else{
            winnerAnn = "DRAW both chose rock option";
        }
    }

    //if human choice is broken (it shouldn't cause we defensive programmed input) print error
    else{
        alert("WTF HAVE U CHOSEN DUDE");
    }

    if(computerScore == 5 || userScore == 5){
        winnerAnn = computerScore == 5 ? "GAME OVER :(" : "CONGRATULATIONS :)";
        const restartBtn  = document.createElement("button");
        restartBtn.textContent = "RESTART"; 

        const buttons = document.querySelectorAll("button");
        buttons.forEach(button => button.style.display = "none");

        div.appendChild(restartBtn);

        restartBtn.addEventListener("click", () => {
            h1.textContent = "";
            para.textContent = "";
            userScore = 0;
            computerScore = 0;
            buttons.forEach(button => button.style.display = "");
            restartBtn.remove();
        });
    }

    h1.textContent = winnerAnn;
    para.textContent = `USER SCORE: ${userScore} ---- COMPUTER SCORE: ${computerScore}`;
}

//---DOM MANIPULATION---

//seleziono i 3 button
const buttons = document.querySelectorAll("img");
buttons.forEach(button => button.addEventListener("click", playRound));

//creo un <div> element che mostrerà il punteggio della partita
const div = document.createElement("div");

//creo un <h1> element
const h1 = document.createElement("h1");
h1.style.textAlign = "center";

//creo un <p> element
const para = document.createElement("p");
para.style.textAlign = "center";

//aggiungo il <div> element al body
document.body.appendChild(div);

//faccio l'append del <p> a <div>
div.appendChild(h1);
div.appendChild(para);




