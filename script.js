let computerScore = 0;
let humanScore = 0;
let amountTied = 0;
let round = 1;

playGame(5);

function playGame(n) {
  for (let i = 0; i < n; i++) {
    playRound();
    round++;
  }

  if (humanScore === computerScore) {
    console.log(
      `You tied! You both won ${humanScore} rounds and tied ${amountTied}.`
    );
  } else if (humanScore > computerScore) {
    console.log(
      `You won the game! You won ${humanScore} rounds, tied ${amountTied} rounds and lost ${computerScore} rounds.`
    );
  } else {
    console.log(
      `You lost the game :( You won ${humanScore} rounds, tied ${amountTied} rounds and lost ${computerScore} rounds.`
    );
  }
}

function playRound() {
  // Get computer's choice
  let computerChoice = getComputerChoice();
  // Get human's choice
  let humanChoice = getHumanChoice();

  // Logic for tie
  if (humanChoice === computerChoice) {
    amountTied++;
  }
  // Logic for win
  else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
  }
  // Logic for loss
  else {
    computerScore++;
  }
}

function getHumanChoice() {
  let choice = prompt(`Round ${round}: Pick rock paper or scissors.`).toLowerCase();

  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    console.log(`Invalid choice. Please try again.`)
    getHumanChoice();
  }
}

function getComputerChoice() {
  const n = Math.random() * 100;
  if (n < 33) {
    return "rock";
  }
  if (n > 33 && n < 66) {
    return "paper";
  } else {
    return "scissors";
  }
}
