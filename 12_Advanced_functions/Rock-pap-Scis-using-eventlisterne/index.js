// let score = JSON.parse(localStorage.getItem("score"));

// function resetGame() {
//     ((score.wins = 0), (score.losses = 0), (score.ties = 0));

//     resetScore();
// }

// // document.querySelector('.js-reset')

// //     .innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

// function playGame(userMove) {
//     let num = Math.random();

//     let computerMove = "";

//     if (num < 1 / 3) {
//         computerMove = "rock";
//     } else if (num < 2 / 3) {
//         computerMove = "paper";
//     } else {
//         computerMove = "scissors";
//     }

//     let result = "";

//     if (userMove === computerMove) {
//         result = "Tie";

//         score.ties += 1;
//     } else if (
//         (userMove === "rock" && computerMove === "scissors") ||
//         (userMove === "paper" && computerMove === "rock") ||
//         (userMove === "scissors" && computerMove === "paper")
//     ) {
//         result = "You Win";

//         score.wins += 1;
//     } else {
//         result = "You Lose";

//         score.losses += 1;
//     }

//     localStorage.setItem("score", JSON.stringify(score));



//     document.querySelector(".js-result").innerHTML = `${result}`;

//     document.querySelector(".js-moves").innerHTML =
//         `You played ${userMove}. Computer played ${computerMove}.`;


//     updateScoreElement();    

//     // alert(`You played ${userMove}. Computer played ${computerMove}. ${result}!

//     // Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`)
// }

// function updateScoreElement() {
//     document.querySelector(".js-score").innerHTML =
//         `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
// }

// function resetScore() {
//     document.querySelector(".js-result").innerHTML = ``;

//     document.querySelector(".js-moves").innerHTML = ``;

//     document.querySelector(".js-score").innerHTML =
//         `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
// }


// updated version code


// local storage to store the score of the game, so that it can be retrieved even after the page is refreshed. If there is no score in local storage, it initializes the score with wins, losses, and ties set to 0.
let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0
};

// reset game function
function resetGame() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;

    localStorage.setItem("score", JSON.stringify(score));

    resetScore();
}



// computer move function 

let isAutoPlaying = false;
let intervalId;
function autoPlay (){

    let stopPlaying = document.querySelector(".js-autopaly").innerHTML;

     if(stopPlaying === "Auto Play"){
        document.querySelector(".js-autopaly").innerHTML = "Stop Playing";
     } 
     else{
            document.querySelector(".js-autopaly").innerHTML = "Auto Play";
        }

    if(!isAutoPlaying){
        intervalId=setInterval(() => {
        const moves = ["rock", "paper", "scissors"];
        const user = moves[Math.floor(Math.random() * moves.length)];
        playGame(user);
        isAutoPlaying=true
    }, 1000);
    }else{
        clearInterval(intervalId);
        isAutoPlaying=false
    }   
}


document.querySelector(".js-rock").addEventListener("click", playGame.bind(null, "rock"));
document.querySelector(".js-paper").addEventListener("click", playGame.bind(null, "paper"));
document.querySelector(".js-scissors").addEventListener("click", playGame.bind(null, "scissors"));

// play game function, which is called when the user clicks on one of the buttons (rock, paper, or scissors). It generates a random move for the computer, determines the result of the game, updates the score, and updates the HTML elements to display the result and the moves played.
function playGame(userMove) {
//    let computerMove = pickComputerMove(); // return computer move and result of the game
let num = Math.random();
    let computerMove = "";

    if (num < 1 / 3) {
        computerMove = "rock";
    } else if (num < 2 / 3) {
        computerMove = "paper";
    } else {
        computerMove = "scissors";
    }

    let result = "";

    if (userMove === computerMove) {
        result = "Tie";
        score.ties++;
    } else if (
        (userMove === "rock" && computerMove === "scissors") ||
        (userMove === "paper" && computerMove === "rock") ||
        (userMove === "scissors" && computerMove === "paper")
    ) {
        result = "You Win";
        score.wins++;
    } else {
        result = "You Lose";
        score.losses++;
    }
    localStorage.setItem("score", JSON.stringify(score));

    document.querySelector(".js-result").innerHTML = result;

    document.querySelector(".js-moves").innerHTML =
        `You played ${userMove}. Computer played ${computerMove}.`;

    updateScoreElement();
}

function updateScoreElement() {
    document.querySelector(".js-score").innerHTML =
        `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function resetScore() {
    document.querySelector(".js-result").innerHTML = "";
    document.querySelector(".js-moves").innerHTML = "";
    updateScoreElement();
}