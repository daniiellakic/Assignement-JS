//function  computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
    const select = ['rock', 'paper', 'scissors'];
    return select[Math.floor(Math.random() * select.length)];
}

//function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {

    if (computerSelection === playerSelection) {
        console.log("It's a draw!");
        return ("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);

    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        console.log("Rock beats scissors! You lose!");
        return ("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);

    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        console.log("Rock beats scissors! You win!");
        return ("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);

    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        console.log("Scissors beats paper! You lose!");
        return ("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);

    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        console.log("Scissors beats paper! You win!");
        return ("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);

    } else if (computerSelection === "paper" && playerSelection === "rock") {
        console.log("Paper beats rock! You lose!");
        return ("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);

    } else if (computerSelection === "rock" && playerSelection === "paper") {
        console.log("Paper beats rock! You win!");
        return ("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);

    } else {
        console.log("Something went worng, try again!");
    }
}

// Function playerSelection parameter case-insensitive
const playerSelection = prompt("Enter: 'Rock, Paper, Scissors' to start the game!").toLowerCase();

const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));


//repeats rounds until someone wins the game
function game() {
    for (i = 1; playerSelection < 5 && computerSelection < 5; i++) {
        playRound();
    }
}
game();