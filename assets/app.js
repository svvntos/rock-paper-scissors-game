let userScore = 0;
let computerScore = 0;
const userScoreEL = document.getElementById('user-score');
const computerScoreEL = document.getElementById('computer-score');

const scoreboardEL = document.querySelector('.score-board');
const resultEL = document.querySelector('.results > p');

const rockEL = document.getElementById('rock');
const paperEL = document.getElementById('paper');
const scissorsEL = document.getElementById('scissors')






function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const getRandomNumber = Math.floor(Math.random() * 3);

    return choices[getRandomNumber];
}


function convertLetter(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    return "Scissors"
}


function win(userChoice, computerChoice) {
    userScore++;
    userScoreEL.innerHTML = userScore;
    computerScoreEL.innerHTML = computerScore;
    resultEL.innerHTML = `${convertLetter(userChoice)} beats ${convertLetter(computerChoice)}! You WIN!`
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScoreEL.innerHTML = userScore;
    computerScoreEL.innerHTML = computerScore;
    resultEL.innerHTML = `${convertLetter(userChoice)} loses to ${convertLetter(computerChoice)}! You LOSE!`

}

function draw(userChoice, computerChoice) {
    
    resultEL.innerHTML = `${convertLetter(userChoice)} and ${convertLetter(computerChoice)} are the same! DRAW!`
    console.log('DRAW')
}



function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;
    }



}




function main() {
    rockEL.addEventListener('click', function () {




        game('r')
    })

    paperEL.addEventListener('click', function () {





        game('p')
    })

    scissorsEL.addEventListener('click', function () {







        game('s')
    })
}


main();