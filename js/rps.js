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
    let winner = 0;
    switch(player) {
        case 'rock':
            if (computer === 0) {
                console.log('Rock and Rock:  Tie!');
            } else if (computer === 1) {
                console.log('Paper beats Rock: Computer Wins!');
                winner--;
            } else {
                console.log('Rock beats Scissors: You Win!');
                winner++;
            }
            break;
        case 'paper':
            if (computer === 0) {
                console.log('Paper beats Rock: You Win!');
                winner++;
            } else if (computer === 1) {
                console.log('Paper and Paper: Tie!');
            } else {
                console.log('Scissors beats Paper: Computer Wins!');
                winner--;
            }
            break;
        case 'scissors':
            if (computer === 0) {
                console.log('Rock beats Scissors: Computer Wins!');
                winner--;
            } else if (computer === 1) {
                console.log('Scissors beats Paper: You Win!');
                winner++;
            } else {
                console.log('Scissors and Scissors: Tie!');
            }
            break;
        default:
            console.log('Looks like you didnt enter a proper response. Rock : Paper: Scissors');
    }
    return winner;
}

function game(games){
    let pscore = 0;
    for (let i = 0; i < games; i++) {
        let player = getPlayerChoice();
        let computer = getComputerChoice();
        //console.log(`${player} ${computer}`);
        pscore = pscore + playRound(player, computer);
    }

    //computer always equals 0.
    if (pscore > 0) {
        console.log('You win the whole match!');
    } else if (pscore < 0) {
        console.log('The computer won the match');
    } else {
        console.log('You tied!  There is no direct winner though you could say that you won because you had this experience and the computer will never have any experiences.');
    }
}

//Play the game with the number of games to be played passed as a parameter
game(2);
