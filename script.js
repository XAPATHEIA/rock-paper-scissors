// function for getting a random integer
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

// gets random integer between 1 and 3 and assigns to a variable
getComputerChoice = () => getRndInteger(1, 4);

// assigning variables outside the function call so as to be utilised when manipulating DOM elements
let computerChoiceInRound = null;
let playerChoiceInRound = null;
let playerScore = 0;
let computerScore = 0;
let winnerOfRound = 0;

function playerSelectionConversion(choice) {
    if (choice === "rock") {
        return 1;
    } else if (choice == "paper") {
        return 2;
    } else if (choice == "scissors") {
        return 3;
    }
}

function computerConversion(choice) {
    if (choice === 1) {
        return 'rock';
    } else if (choice === 2) {
        return 'paper';
    } else if (choice === 3) {
        return 'scissors';
    }
}

function playRound(player, computer) {
    console.log("Player chose " + player);
    console.log("Computer chose " + computer);
    computerChoiceInRound = computer;
    if (player === computer) {
        winnerOfRound = "tie";
        return "tie";
    } else if (player === 1 && computer === 2) {
        winnerOfRound = "computer";
        return "computer";
    } else if (player === 2 && computer === 1) {
        winnerOfRound = "player";
        return "player";
    } else if (player === 2 && computer === 3) {
        winnerOfRound = "computer";
        return "computer";
    } else if (player === 3 && computer === 2) {
        winnerOfRound = "player";
        return "player";
    } else if (player === 1 && computer === 3) {
        winnerOfRound = "player";
        return "player";
    } else if (player === 3 && computer === 1) {
        winnerOfRound = "computer";
        return "computer";
    }
}



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
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 3) {
        playerScore = 0;
        computerScore = 0;
    }
}


/* DOM Manipulation begins here */


// Function to capitalize first letter of a string.
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}


/* Obtaining buttons from the rps-choices div, then selecting them all to add 
an event listener */
const buttonContainer = document.getElementById("rps-choices");
const gameButtons = buttonContainer.querySelectorAll("button");


// Variables that will be used to adjust the score in real time
const playerDisplayScore = document.querySelector("#player-score");
const computerDisplayScore = document.querySelector("#computer-score");

// Variables used to display the choices of the round
const playerResult = document.querySelector("#player-choice");
const computerResult = document.querySelector("#computer-choice");

// Variable to hold winner of the round
const displayRoundWinner = document.querySelector("#winner-of-round");

function roundEnd(inputWinner) {
    if (computerScore === 3 || playerScore === 3) {
        playerResult.textContent = "";
        computerResult.textContent = "";
        displayRoundWinner.textContent = `${capitalize(winnerOfRound)} won this game! Choose Rock - Paper - Scissors to start a new game!`;
        return
    } else if (winnerOfRound === 'tie') {
        displayRoundWinner.textContent = `This round was a tie.`;
    } else {
        displayRoundWinner.textContent = `The winner of this round was ${capitalize(winnerOfRound)}!`;
    }
}


function gameUpdateElements() {
    playerDisplayScore.textContent = `Player: ${playerScore}`;
    computerDisplayScore.textContent = `Computer: ${computerScore}`;
    playerResult.textContent = `Player chose ${event.currentTarget.id}.` 
    computerResult.textContent = `Computer chose ${computerConversion(computerChoiceInRound)}.`;
    roundEnd(winnerOfRound);
}

function transitionClass(elementClass) {
    element = document.getElementById(elementClass);
    element.className = (`${elementClass}-hover`);
}

function transitionClassBack(elementClass) {
    element = document.getElementById(elementClass);
    element.className = elementClass.replace("-hover", "");
}

function clickEvent(elementClass) {
    element = document.getElementById(elementClass);
    element.className = (`${elementClass}-clicked`);

}

gameButtons.forEach(button => {
    button.addEventListener("click", event => {
        scoreChecker(game(playRound(playerSelectionConversion(event.currentTarget.id), getComputerChoice())));
        clickEvent(event.currentTarget.id);
    })
    button.addEventListener('mouseover', event => {
        transitionClass(event.currentTarget.id);
    })
    button.addEventListener('mouseout', event => {
        transitionClassBack(event.currentTarget.id);
    })
});

