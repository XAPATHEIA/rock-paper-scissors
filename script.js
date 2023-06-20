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

function playerSelection() {
    return playerSelectionConversion(prompt("ROCK, PAPER or SCISSORS?"));
} 


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert("TIE!");
        return "tie";
    } else if (playerSelection === 1 && computerSelection === 2) {
        alert("Computer Wins!");
        return "computer";
    } else if (playerSelection === 2 && computerSelection === 1) {
        alert("Player Wins!");
        return "player";
    } else if (playerSelection === 2 && computerSelection === 3) {
        alert("Computer Wins!");
        return "computer";
    } else if (playerSelection === 3 && computerSelection === 2) {
        alert("Player Wins!");
        return "player";
    } else if (playerSelection === 1 && computerSelection === 3) {
        alert("Player Wins!");
        return "player";
    } else if (playerSelection === 3 && computerSelection === 1) {
        alert("Computer Wins!");
        return "computer";
    }
}

let playerScore = 0;
let computerScore = 0;

function game(roundResult) {
    if (playerScore < 3 && computerScore < 3) {
        if (roundResult === "computer") {
            computerScore += 1;
        } else if (roundResult === "player") {
            playerScore += 1;
        }  
    }
}


while (playerScore < 3 && computerScore < 3) {
    game(playRound(playerSelection(), getComputerChoice()));
    if (playerScore === 3) {
        alert("Player Won this Game, Can you win another in a row?")
    } else if (computerScore === 3) {
        alert("Computer Won this Game, Better Luck Next Time!")
    }
}

