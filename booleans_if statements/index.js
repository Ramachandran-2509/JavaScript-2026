
// function voteEligibility(age) {
//     if (age >= 18) {
//         console.log("You are eligible to vote");
//     } 
//     else if (age >= 17   ) {
//         console.log("Invalid age"); 
//     }

//     else {
//         let remainingYears = 18 - age;  
//         console.log(`Wait for ${remainingYears} years to be eligible to vote`);
//     }
// }




// function randomNumber() {
//     let num = Math.random()

//     let computrMove = ""

//     if(num >= 0 && num <= 1/3) {
//        computrMove = 'rock';
//     }
//     else if(num >= 1/3 && num <= 2/3) {
//         computrMove = 'paper';
//     }
//     else if(num >= 2/3 && num <= 1) {
//         computrMove = 'scissors';
//     }
    


//     let userMove = ''

//     if(computrMove === 'rock') {
//         userMove = 'Tie'
//     }
//     else if(computrMove === 'paper') {
//         userMove='you lose.'
//     }
//     else if(computrMove === 'scissors') {
//         userMove = 'You win'
//     }
    
//     alert(`you picked rock. and computer picked ${computrMove}. ${userMove}`)
// }


// function randomNumber2() {
//     let num = Math.random()

//     let computrMove = ""

//     if(num >= 0 && num <= 1/3) {
//        computrMove = 'rock';
//     }
//     else if(num >= 1/3 && num <= 2/3) {
//         computrMove = 'paper';
//     }
//     else if(num >= 2/3 && num <= 1) {
//         computrMove = 'scissors';
//     }
//     console.log(computrMove)


//     let userMove = ''

//     if(computrMove === 'rock') {
//         userMove = 'you win'
//     }
//     else if(computrMove === 'paper') {
//         userMove='tie.'
//     }
//     else if(computrMove === 'scissors') {
//         userMove = 'You lose'
//     }
    
//     alert(`you picked papper. and computer picked ${computrMove}. ${userMove}`)
// }


// function randomNumber3() {
//     let num = Math.random()

//     let computrMove = ""

//     if(num >= 0 && num <= 1/3) {
//        computrMove = 'rock';
//     }
//     else if(num >= 1/3 && num <= 2/3) {
//         computrMove = 'paper';
//     }
//     else if(num >= 2/3 && num <= 1) {
//         computrMove = 'scissors';
//     }
//     console.log(computrMove)


//     let userMove = ''

//     if(computrMove === 'rock') {
//         userMove = 'You lose'
//     }
//     else if(computrMove === 'paper') {
//         userMove='you win.'
//     }
//     else if(computrMove === 'scissors') {
//         userMove = 'tie'
//     }
    
//     alert(`you picked scissors. and computer picked ${computrMove}. ${userMove}`)
// }

 let score = {
    wins: 0,
    losses: 0,
    ties: 0
};

function resetScore() {
    score.wins = 0;
    score.losses = 0;   
    score.ties = 0;

}


function playGame(userMove) {
    let num = Math.random();

    let computerMove = "";

    if (num < 1/3) {
        computerMove = 'rock';
    } else if (num < 2/3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    let result = "";

    if (userMove === computerMove) {
        result = "Tie";
        score.ties++;
    } else if (
        (userMove === 'rock' && computerMove === 'scissors') ||
        (userMove === 'paper' && computerMove === 'rock') ||
        (userMove === 'scissors' && computerMove === 'paper')
    ) {
        result = "You win";
        score.wins++;
    } else {
        result = "You lose";
        score.losses++;
    }

     alert(`You picked ${userMove}. Computer picked ${computerMove}. ${result}
Score → Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

