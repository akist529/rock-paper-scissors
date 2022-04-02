// JAVASCRIPT FILE FOR ROCK PAPER SCISSORS

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];

    let choice = choices[Math.floor(Math.random() * 3)];

    return choice;
}

function playRound(playerChoice, computerChoice) {
    let playerScore = Number(document.getElementById('player-scoreboard').textContent);
    let computerScore = Number(document.getElementById('computer-scoreboard').textContent);

    if (playerChoice === computerChoice) {
        document.getElementById('game-result').textContent = 'Tie!';
        return;
    }
    
    console.log(computerChoice);

    let playerLose = `You lose! ${computerChoice} beats ${playerChoice}`;
    let playerWin = `You win! ${playerChoice} beats ${computerChoice}`;

    if (
        (playerChoice === 'rock' && computerChoice === 'paper')
        || (playerChoice === 'paper' && computerChoice === 'scissors') 
        || (playerChoice === 'scissors' && computerChoice === 'rock'))
    {
        computerScore++;
        document.getElementById('computer-scoreboard').textContent = computerScore;

        if (Number(document.getElementById('computer-scoreboard').textContent) === 5) {
            document.getElementById('game-result').textContent = 'You lost the match...';
            reset();
            return;
        }
        
        document.getElementById('game-result').textContent = playerLose;
    }
    else
    {
        playerScore++;
        document.getElementById('player-scoreboard').textContent = playerScore;

        if (Number(document.getElementById('player-scoreboard').textContent) === 5) {
            document.getElementById('game-result').textContent = 'You won the match!';
            reset();
            return;
        }

        document.getElementById('game-result').textContent = playerWin;
    }
}

function game() {
    let howToText = document.getElementById("how-to-play");
    howToText.style.display = "none";

    let games = document.getElementById('games');
    games.style.display = 'flex';

    document.getElementById("rock-btn").addEventListener("click", function()
    { playRound('rock', computerPlay()) });
    document.getElementById("paper-btn").addEventListener("click", function()
    { playRound('paper', computerPlay()) });
    document.getElementById("scis-btn").addEventListener("click", function()
    { playRound('scissors', computerPlay()) });
}

function howTo() {
    let gameText = document.getElementById("games");

    gameText.style.display = "none";

    let howToText = document.getElementById("how-to-play");

    howToText.style.display = 'block';
}

function reset() {
    document.getElementById('player-scoreboard').textContent = 0;
    document.getElementById('computer-scoreboard').textContent = 0;
}