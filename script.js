//function  computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
}

//function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Tie! you both picked ${playerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper";
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// Function playerSelection parameter case-insensitive
const playerSelection = prompt("Enter: 'Rock, Paper, Scissors' to stard the game!").toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))

//repeats rounds until someone wins the game
function game() {
    for (i = 1; playerSelection < 5 && computerSelection < 5; i++) {
        playRound();
    }
}
game();