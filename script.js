// function for getting a random integer
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

// gets random integer between 1 and 3 and assigns to a variable
getComputerChoice = () => getRndInteger(1, 4);


function playerSelection(choice) {
    if (choice === "rock") {
        return 1;
    } else if (choice == "paper") {
        return 2;
    } else if (choice == "scissors") {
        return 3;
    }
}

let computerChoiceInRound = null;

function playRound(playerSelection, computerSelection) {
    console.log("Player chose " + playerSelection);
    console.log("Computer chose " + computerSelection);
    computerChoiceInRound = computerSelection;
    if (playerSelection === computerSelection) {
        return "tie";
    } else if (playerSelection === 1 && computerSelection === 2) {
        return "computer";
    } else if (playerSelection === 2 && computerSelection === 1) {
        return "player";
    } else if (playerSelection === 2 && computerSelection === 3) {
        return "computer";
    } else if (playerSelection === 3 && computerSelection === 2) {
        return "player";
    } else if (playerSelection === 1 && computerSelection === 3) {
        return "player";
    } else if (playerSelection === 3 && computerSelection === 1) {
        return "computer";
    }
}

let playerScore = 0;
let computerScore = 0;

function game(roundResult) {
        if (roundResult === "computer") {
            console.log("Point went to Computer")
            computerScore += 1;
        } else if (roundResult === "player") {
            console.log("Point went to Player")
            playerScore += 1;
        }  else if (roundResult === "tie") {
            console.log("It was a tie")
        }
        gameUpdateElements()
        console.log("Score is now - Computer: " + computerScore + "  Player: " + playerScore);
}

function scoreChecker() {
    if (playerScore === 3) {
        alert("Player Won this Game, Can you win another in a row?")
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 3) {
        alert("Computer Won this Game, Better Luck Next Time!")
        playerScore = 0;
        computerScore = 0;
    }
}


/* DOM Manipulation begins here */

/* Obtaining buttons from the rps-choices div, then selecting them all to add 
an event listener */
const buttonContainer = document.getElementById("rps-choices");
const gameButtons = buttonContainer.querySelectorAll("button");


// Variables that will be used to adjust the score in real time
const playerDisplayScore = document.querySelector("#player-score");
const computerDisplayScore = document.querySelector("#computer-score");

// Variable used to manipulate the result of the round
const resultOfRound = document.querySelector("#round-end");


function gameUpdateElements() {
    playerDisplayScore.textContent = `Player: ${playerScore}`;
    computerDisplayScore.textContent = `Computer: ${computerScore}`;
    resultOfRound.textContent = `Player chose ${event.currentTarget.className}\nComputer chose ${computerChoiceInRound}`;
}



gameButtons.forEach(button => {
    button.addEventListener("click", event => {
        scoreChecker(game(playRound(playerSelection(event.currentTarget.className), getComputerChoice())));
    });
});

