function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];

    let choice = choices[Math.floor(Math.random() * 3)];

    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie!';
    }

    let playerLose = `You lose! ${computerSelection} beats ${playerSelection}`;
    let playerWin = `You win! ${playerSelection} beats ${computerSelection}`;

    switch (playerSelection) {
        case 'Rock':
            return (computerSelection === 'Paper') ? playerLose : playerWin;
        case 'Paper':
            return (computerSelection === 'Scissors') ? playerLose: playerWin;
        case 'Scissors':
            return (computerSelection === 'Rock') ? playerLose: playerWin;
    }
}