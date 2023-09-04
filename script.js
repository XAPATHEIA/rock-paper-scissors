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
    console.log("i'm here");
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
        if (playerScore === 3) {
            alert("Player Won this Game, Can you win another in a row?")
        } else if (computerScore === 3) {
            alert("Computer Won this Game, Better Luck Next Time!")
        }
        else if (roundResult === "computer") {
            computerScore += 1;
        } else if (roundResult === "player") {
            playerScore += 1;
        }  
}

/* Function to wrap entire game around
function toggleGame() {
    var play = true;
    while (play) {
        if (currentChoice !== 0) {
            while (playerScore !== 3 && computerScore !== 3) {
                console.log("i'm here");
                game(playRound(playerSelection(), getComputerChoice()));
            }
            play = false;
        }
    }
}
*/

/* DOM Manipulation begins here */

/* Obtaining buttons from the rps-choices div, then selecting them all to add 
an event listener */
const buttonContainer = document.getElementById("rps-choices");
const gameButtons = buttonContainer.querySelectorAll("button");

/* Defining a function to handle the click event
function buttonHandler(event) {
    console.log(event.currentTarget.className);
}
*/

gameButtons.forEach(button => {
    button.addEventListener("click", event => {
        game(playRound(playerSelection(event.currentTarget.className), getComputerChoice()));
    });
});


/* Adding a separate variable to each button so each event can be treated separately
rockButton = document.querySelector(".rock");
paperButton = document.querySelector(".paper");
scissorButton = document.querySelector(".scissors");
*/

