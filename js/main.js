let userScore = 0;
let cpuScore = 0;
const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");
const scoreBoard_div = document.getElementById(".score-board")
const restart = document.getElementById("restart");
const result = document.getElementById ("result")
const modal = document.querySelector("modal");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getCpuChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function play(userChoice) {
  const cpuChoice = getCpuChoice();
  switch (userChoice + cpuChoice) {
    case 'rock scissors':
    case 'paper rock':
    case 'scissors paper':
      console.log("user wins");
      console.log(userChoice, cpuChoice);
      break;
    case 'rock paper':
    case 'paper scissors':
    case 'scissors rock':
      console.log("user loses");
      console.log(userChoice, cpuChoice);
      break;
    default: 
      console.log("it's a draw");
  }
}


function main() {

  console.log("main");
  rock_div.addEventListener('click', function() {
    play('rock');
  })
  
  paper_div.addEventListener('click', function() {
    play('paper');
  })
  
  scissors_div.addEventListener('click', function() {
    play('scissors');
  })
}


rock_div.addEventListener('click', function() {
  play('rock');
})

// play();