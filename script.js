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

function game() {
    let playerChoice;
    let computerChoice;
    let result;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++)
    {
        while (playerChoice !== 'Rock' && playerChoice !== 'Paper' && playerChoice !== 'Scissors') {
            playerChoice = prompt('Rock, Paper, or Scissors? Make your choice: ');

            playerChoice = playerChoice[0].toUpperCase() + playerChoice.substring[1].toLowerCase();
        }

        computerChoice = computerPlay();

        result = playRound(playerChoice, computerChoice);

        console.log(result);

        if (result === 'Tie!')  {
            playerScore++;
            computerScore++;
        }
        else if (result === `You lose! ${computerChoice} beats ${playerChoice}`)    {
            computerScore++;
        }
        else if (result === `You win! ${playerChoice} beats ${computerChoice}`)     {
            playerScore++;
        }
    }
}