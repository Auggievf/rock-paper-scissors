console.log('Hellooooooooo RPS Fans! This is your big day!');

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    /*******************************
       0 = rock
       1 = paper
       2 = scissors
    *******************************/
    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt('Please enter Rock, Paper, or Scissors');
    return playerChoice.toLowerCase().trim();
}

function playRound(player, computer) {
    switch(player) {
        case 'rock':
            if (computer === 0) {
                console.log('Rock and Rock:  Tie!')
            } else if (computer === 1) {
                console.log('Paper beats Rock: Computer Wins!')
            } else {
                console.log('Rock beats Scissors: You Win!');
            }
            break;
        case 'paper':
            if (computer === 0) {
                console.log('Paper beats Rock: You Win!');
            } else if (computer === 1) {
                console.log('Paper and Paper: Tie!')
            } else {
                console.log('You Win');
            }
            break;
        case 'scissors':
            if (computer === 0) {
                console.log('Rock beats Scissors: Computer Wins!');
            } else if (computer === 1) {
                console.log('Scissors beats Paper: You Win!')
            } else {
                console.log('Scissors and Scissors: Tie!');
            }
            break;
        default:
            console.log('Looks like you didnt enter a proper response. Rock : Paper: Scissors');
    }
}

function game(games){
    for (let i = 0; i < games; i++) {
        let player = getPlayerChoice();
        let computer = getComputerChoice();
        //console.log(`${player}` + `${computer}`);
        playRound(player, computer);
    }
}

//Play the game with the number of games to be played passed as a parameter
game(3);
