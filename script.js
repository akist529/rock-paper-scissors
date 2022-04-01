// JAVASCRIPT FILE FOR ROCK PAPER SCISSORS

function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];

    let choice = choices[Math.floor(Math.random() * 3)];

    return choice;
}

function playRound(playerChoice, computerChoice) {
    let playerScore = Number(document.getElementById('player-scoreboard').textContent);
    let computerScore = Number(document.getElementById('computer-scoreboard').textContent);

    let result = document.getElementById('game-result').textContent;

    if (playerChoice === computerChoice) {
        result = 'Tie!';
        return;
    }

    let playerLose = `You lose! ${computerChoice} beats ${playerChoice}`;
    let playerWin = `You win! ${playerChoice} beats ${computerChoice}`;

    if (playerChoice === 'Rock' && computerChoice === 'Paper' 
        || playerChoice === 'Paper' && computerChoice === 'Scissors' 
        || playerChoice === 'Scissors' && computerChoice === 'Rock')
    {
        result = playerLose;
        computerScore++;
    }
    else
    {
        result = playerWin;
        playerScore++;
    }
}

function game() {
    let Games = document.getElementById('Games');
    Games.style.display = 'flex';

    let playerScore = Number(document.getElementById('player-scoreboard').textContent);
    let computerScore = Number(document.getElementById('computer-scoreboard').textContent);

    let howToText = document.getElementById("how-to-play");
    howToText.style.display = "none";

    let rockBtn = document.getElementById("rock-btn");
    let paperBtn = document.getElementById("paper-btn");
    let scisBtn = document.getElementById("scis-btn");

    rockBtn.addEventListener('click', () => playRound('rock', computerPlay));
    paperBtn.addEventListener('click', () => playRound('paper', computerPlay));
    scisBtn.addEventListener('click', () => playRound('scissors', computerPlay));

    if (playerScore === 5) {
        document.getElementById('game-result').textContent = 'You won the match!';
    }
    else if (computerScore === 5) {
        document.getElementById('computer-result').textContent = 'You lost the match...';
    }
}

function howTo() {
    let gameText = document.getElementById("Games");

    gameText.style.display = "none";

    let howToText = document.getElementById("how-to-play");

    howToText.style.display = 'block';
}