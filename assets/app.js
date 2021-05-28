const userScore = 0;
const computerScore = 0;
const userScoreEL = document.getElementById('user-score');
const computerScoreEL = document.getElementById('computer-score');

const scoreboardEL = document.querySelector('.score-board');
const resultEL = document.querySelector('.results');

const rockEL = document.getElementById('rock');
const paperEL = document.getElementById('paper');
const scissorsEL = document.getElementById('scissors')






function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const getRandomNumber = Math.floor(Math.random()*3);

    return choices[getRandomNumber];
}




function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            console.log('user wins');
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            console.log('user losses');
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            console.log('DRAW')
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