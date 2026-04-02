let score = JSON.parse(localStorage.getItem('score'))




function resetGame() {

        score.wins = 0,

        score.losses = 0,

        score.ties = 0

 

        resetScore()

 

}

 

// document.querySelector('.js-reset')

//     .innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

 

function playGame(userMove) {

 

    let num = Math.random()

 

    let computerMove = ''

 

    if (num < 1 / 3) {

        computerMove = 'rock'

    }

    else if (num < 2 / 3) {

        computerMove = 'paper'

    }

    else {

        computerMove = 'scissors'

    }

 

    let result = ''

 

    if (userMove === computerMove) {

        result = 'Tie'

        score.ties += 1

    }

    else if (

        (userMove === 'rock' && computerMove === 'scissors') ||

        (userMove === 'paper' && computerMove === 'rock') ||

        (userMove === 'scissors' && computerMove === 'paper')) {

        result = 'You Win'

        score.wins += 1

    }

    else {

        result = 'You Lose'

        score.losses += 1

    }

 

    localStorage.setItem('score', JSON.stringify(score))

 

    updateScoreElement()

 

    document.querySelector('.js-result')

        .innerHTML = `${result}`;

 

    document.querySelector('.js-moves')

        .innerHTML = `You played ${userMove}. Computer played ${computerMove}.`;

 

    // alert(`You played ${userMove}. Computer played ${computerMove}. ${result}!

    // Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`)

}

 

function updateScoreElement() {

   

   

    document.querySelector('.js-score')

        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

}

 

function resetScore() {

    document.querySelector('.js-result')

        .innerHTML = ``;

 

    document.querySelector('.js-moves')

        .innerHTML = ``;

 

    document.querySelector('.js-score')

        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

}