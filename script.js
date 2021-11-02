let computerPlay = () => {
    let rand = Math.floor(Math.random() * 3);
    if(rand == 0){
        return "rock";
    } else if (rand == 1) {
        return "paper";
    } else if (rand == 2) {
        return "scissors"
    }
}


let playerScore = 0;
let computerScore = 0;

let playRound = (playerSelection, computerSelection) => {
    if(playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log('You win! Rock beats scissors');
        return playerScore++;
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        console.log('You lose! Paper beats rock');
        return computerScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log('You lose! Rock beats scissors')
        return computerScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('You win! Paper beats rock');
        return playerScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        console.log('You lose! Scissors beats paper')
        return computerScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log('You Win! Scissors beats paper');
        return playerScore++;
    } else {
        console.log('Its a draw!')
        return -1;
    }
}


const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    let comp = computerPlay();
  playRound('rock', comp);
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    let comp = computerPlay();
  playRound('paper', comp);
});


const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    let comp = computerPlay();
  playRound('scissors', comp);
});


let game = () => {
    let i = 0;
    let round = 1;
    // for(i=0; i<5; i++){
    //     playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    //     let computerSelection = computerPlay();
    //     playRound(playerSelection, computerSelection);
    //     console.log('The score is: ' + playerScore + 'playerScore & ' + computerScore + 'compScore');
    //     console.log(round++);
    // }
}

game();
