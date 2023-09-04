// TODO:
//     : Simplify last function call
//     : Wrap entire game in another function call so as to ask user if they wish
//       to play another game.



// function for getting a random integer
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

// gets random integer between 1 and 3 and assigns to a variable
getComputerChoice = () => getRndInteger(1, 4);

// converts player choice into the appropriate number
function playerSelectionConversion(choice) {
    let formattedChoice = choice.toLocaleUpperCase();
    console.log(formattedChoice)

    if (formattedChoice == "ROCK" ) {
        return 1;
    } else if (formattedChoice == "PAPER") {
        return 2;
    } else if (formattedChoice == "SCISSORS") {
        return 3;
    }
}

/*
function playerSelection() {
    return playerSelectionConversion(prompt("ROCK, PAPER or SCISSORS?"));
} 
*/

function playerSelection(choice) {
    if (choice === "rock") {
        return 1;
    } else if (choice == "paper") {
        return 2;
    } else if (choice == "scissors") {
        return 3;
    }
}


function playRound(playerSelection, computerSelection) {
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
            computerScore += 1;
        } else if (roundResult === "player") {
            playerScore += 1;
        }  
}

/* Function to wrap entire game around
function toggleGame() {
    var play = True;
    while (play) {
        console.log("this is working");
        }
    }
}
*/


while (playerScore !== 0 && computerScore !== 0) {
    game(playRound(playerSelection(), getComputerChoice()));
    if (playerScore === 1) {
        alert("Player Won this Game, Can you win another in a row?")
    } else if (computerScore === 1) {
        alert("Computer Won this Game, Better Luck Next Time!")
    }
}


/* DOM Manipulation begins here */

/* Obtaining buttons from the rps-choices div, then selecting them all to add 
an event listener */
const buttonContainer = document.getElementsByClassName("rps-choices");
const gameButtons = document.querySelectorAll("button");

/* Defining a function to handle the click event
function buttonHandler(event) {
    console.log(event.currentTarget.className);
}
*/

gameButtons.forEach(button => {
    button.addEventListener("click", event => {
        playerSelection(event.currentTarget.className);
    });
});


/* Adding a separate variable to each button so each event can be treated separately
rockButton = document.querySelector(".rock");
paperButton = document.querySelector(".paper");
scissorButton = document.querySelector(".scissors");
*/

/* Adding event listener to main PLAY button
const startGame = document.querySelector(".start-button");
startGame.addEventListener('click', toggleGame);
*/