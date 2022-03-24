function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];

    let choice = choices[Math.floor(Math.random() * 3)];

    return choice;
}