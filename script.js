// JAVASCRIPT FILE FOR ROCK PAPER SCISSORS

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
    let result;
    let playerScore = 0;
    let computerScore = 0;
    let gameCount = 0;

    let howToText = document.getElementById("how-to-play");
    howToText.style.display = "none";

    let gameText = document.getElementById("Games");

    gameText.style.display = "flex";

    for (let i = 0; i < 5; i++)
    {
        let playerChoice;
        let computerChoice;
        gameCount++;

        while (playerChoice !== 'Rock' && playerChoice !== 'Paper' && playerChoice !== 'Scissors') {
            playerChoice = prompt('Rock, Paper, or Scissors? Make your choice: ');

            playerChoice = playerChoice[0].toUpperCase() + playerChoice.substring(1).toLowerCase();
        }

        computerChoice = computerPlay();

        result = playRound(playerChoice, computerChoice);

        console.log(result);

        if (result === 'Tie!')  {
            playerScore++;
            computerScore++;
            document.getElementById(`Game${gameCount}`).textContent = "Tie!";
        }
        else if (result === `You lose! ${computerChoice} beats ${playerChoice}`)    {
            computerScore++;
            document.getElementById(`Game${gameCount}`).textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
        }
        else if (result === `You win! ${playerChoice} beats ${computerChoice}`)     {
            playerScore++;
            document.getElementById(`Game${gameCount}`).textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        }
    }

    (playerScore > computerScore) ? console.log('You won the match!') : console.log('You lost the match...');

    (playerScore > computerScore) ? document.getElementById("outcome").textContent = "You won the match!" : document.getElementById("outcome").textContent = "You lost the match...";
}

function howTo() {
    let gameText = document.getElementById("Games");

    gameText.style.display = "none";

    let howToText = document.getElementById("how-to-play");

    howToText.style.display = 'block';
}