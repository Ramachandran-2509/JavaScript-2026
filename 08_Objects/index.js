// We have created a simple rock paper scissors game. The playGame function takes the user's move, generates a random computer move, and updates score with wins/losses/ties + points.

// let score = {
//     wins: 0,
//     losses: 0,
//     ties: 0,
//     points: 0 // 3 for a win, 1 for a tie, 0 for a loss
// };

// function resetScore() {
//     score.wins = 0;
//     score.losses = 0;
//     score.ties = 0;
//     score.points = 0;
// }

//   let score = JSON.parse(localStorage.getItem('score')) ?? {
//     wins: 0,
//     losses: 0,
//     ties: 0
// };


let score;

try {
    score = JSON.parse(localStorage.getItem('score')) ?? {
        wins: 0,
        losses: 0,
        ties: 0
    };
} catch (e) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}

//  JSON.parse(localStorage.getItem('score'));

function resetScore() {
    score.wins = 0;
    score.losses = 0;   
    score.ties = 0;

    localStorage.setItem('score', JSON.stringify(score));
}


function playGame(userMove) {
    let num = Math.random();

    let computerMove;

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

    localStorage.setItem('score', JSON.stringify(score));

     alert(`You picked ${userMove}. Computer picked ${computerMove}. ${result}
Score → Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

// Objects are a way to store multiple values in a single variable. They are a collection of key-value pairs, where the key is a string and the value can be any data type. This code adds a points field to the score object and updates points every round.


let property={
    name: "Ram",
    age: 29,
    Role: "React Developer",
    'isActive': true
}

console.log(property); // { name: 'Ram', age: 29, Role: 'React Developer' }
console.log(property.name); // Ram
console.log(property.age);

property.age = 30; // Update age
console.log(property.age); // 30


property.language = "JavaScript"; // Add new property
console.log(property.language);

console.log(property); 


delete property.Role; // Delete Role property
console.log(property); // { name: 'Ram', age: 30, language: 'JavaScript' }


console.log(property['isActive']); // true