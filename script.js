let computerScore = 0;
let humanScore = 0;

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

playRound(humanChoice, computerChoice);

function playRound(humanChoice, computerChoice) {
    // Logic for tie
    if (humanChoice === computerChoice) {
        console.log(`You tie! You both chose ${humanChoice} `)
    }
    // Logic for win
    else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}. `)
        humanScore++;
    } 
    // Logic for loss
    else {
        console.log(`You lose. ${computerChoice} beats ${humanChoice}. `)
        computerScore++;
    }
    console.log(`Player: ${humanScore} Computer: ${computerScore}`)
}

function getHumanChoice() {
    let choice = prompt('Pick rock paper or scissors.').toLowerCase()

    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice;
    } else {
        getHumanChoice();
    }
}

function getComputerChoice() {
    const n = Math.random() * 100;
    console.log(n);
    if (n < 33) {
        console.log('rock');
        return 'rock';
    }
    if (n > 33 && n < 66) {
        console.log('paper');
        return 'paper';
    } else {
        console.log('scissors');
        return 'scissors';
    }
}