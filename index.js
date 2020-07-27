function computerPlay() {
    randNum = Math.floor(Math.random()*3);
    return randNum === 0 ? 'rock'
        : randNum === 1 ? 'paper'
        : 'scissor';
}

function playGame(playerSelection, computerSelection) {
    let lowerPlayerSelection = playerSelection.toLowerCase();
    if (lowerPlayerSelection === computerSelection) {
        return 'Draw!'
    } else if (lowerPlayerSelection === 'rock') {
        if (computerSelection === 'scissor') {
            return 'You Win! Rock beats Scissor';
        } else {
            return 'You Lose! Paper beats Rock';
        }
    } else if (lowerPlayerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'You Win! Paper beats Rock';
        } else {
            return 'You Lose! Scissor beats Paper';
        }
    } else if (lowerPlayerSelection === 'scissor') {
        if (computerSelection === 'paper') {
            return 'You Win! Scissor beats Paper';
        } else {
            return 'You Lose! Rock beats Scissor';
        }
    } else {
        return 'Chose rock, paper or scissor';
    }
}

function game() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Chose the item');
        let computerSelection = computerPlay();
        let result = playGame(playerSelection, computerSelection)
        console.log(result)
        if (result.slice(4, 7) === 'Win') {
            score++;
        }
    }
    if (score >= 3) {
        console.log('You Win!');
    } else {
        console.log('You Lose!');
    }
}


let player = 0;
let computer = 0;
const choises = document.querySelectorAll(".choise");

const playRound = e => {
    const playerSelection = e.target.textContent;
    const computerSelection = computerPlay();
    const result = playGame(playerSelection, computerSelection)
    document.querySelector('.result').textContent = result;
    if (result.slice(4, 7) === 'Win') {
        player++;
    } else if (result !== 'Draw!') {
        computer++;
    }
    document.querySelector('.score').textContent = `${player} : ${computer}`;
}

choises.forEach((button) => {
    button.addEventListener('click', playRound)
})

