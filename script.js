getComputerChoice();
getHumanChoice();

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