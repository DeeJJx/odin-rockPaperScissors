const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

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
        const content1 = document.createElement('div');
        content1.textContent = 'You win! Rock beats scissors';
        container.appendChild(content1);
        return playerScore++;
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        const content2 = document.createElement('div');
        content2.textContent = 'You lose! Paper beats rock';
        container.appendChild(content2);
        return computerScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        const content3 = document.createElement('div');
        content3.textContent = 'You lose! Rock beats scissors';
        container.appendChild(content3);
        return computerScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        const content4 = document.createElement('div');
        content4.textContent = 'You win! Paper beats rock';
        container.appendChild(content4);
        return playerScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        const content5 = document.createElement('div');
        content5.textContent = 'You lose! Scissors beats paper';
        container.appendChild(content5);
        return computerScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        const content6 = document.createElement('div');
        content6.textContent = 'You Win! Scissors beats paper';
        container.appendChild(content6);
        return playerScore++;
    } else {
        const content7 = document.createElement('div');
        content7.textContent = 'its a draw!';
        container.appendChild(content7);
        return -1;
    }
}


const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    let comp = computerPlay();
    playRound('rock', comp);

    if(playerScore === 5){
        alert('Game over, you win!')
    } else if (computerScore === 5) {
        alert('Game over, you lose!')
    }
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    let comp = computerPlay();
    playRound('paper', comp);

    if(playerScore === 5){
        alert('Game over, you win!')
    } else if (computerScore === 5) {
        alert('Game over, you lose!')
    }
});


const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    let comp = computerPlay();
  playRound('scissors', comp);
  if(playerScore === 5){
    alert('Game over, you win!')
} else if (computerScore === 5) {
    alert('Game over, you lose!')
}
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
