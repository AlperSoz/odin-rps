getComputerChoice();

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