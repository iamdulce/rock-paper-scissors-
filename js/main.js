let userScore = 0;
let cpuScore = 0;
let closeBtn;
const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");
// const scoreBoard_div = document.getElementById(".score-board")
const restart = document.getElementById("restart");
const result = document.getElementById ("result")
const modal = document.querySelector(".modal");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


function getCpuChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}


function win(cpuChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result.innerHTML = `
    <span class="close"></span><div><div><h1 class="text-win">You win!</h1><p>Computer choose <strong>${cpuChoice}</strong></p><div><img src="./images/${cpuChoice}.png"/></div>`; 
  modal.style.display = 'block';
}

function lose(cpuChoice){
  cpuScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result.innerHTML = `
  <span class="close"></span> <div><div><h1 class="text-lose">You lost</h1><p>Computer choose <strong>${cpuChoice}</strong></p><div>
    <img src="./images/${cpuChoice}.png"/></div>`; 
  modal.style.display = 'block'
}

function draw(cpuChoice){
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result.innerHTML = `
  <span class="close"></span><div><div><h1>It's a draw</h1><p>You both choose <strong>${cpuChoice}</strong></p><div><img src="./images/${cpuChoice}.png"/></div>`;
  modal.style.display = 'block'
}


function play(userChoice) {
  const cpuChoice = getCpuChoice();
  switch (userChoice + cpuChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      win(cpuChoice);
      break;
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      lose(cpuChoice);
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      draw(cpuChoice);
      break;
  }
}


function main() {
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


function clearModal(e){
  closeBtn = document.querySelector('.close');

  if(e.target == modal) {
    modal.style.display = "none"
  }
  else if(closeBtn){
    closeBtn.addEventListener('click', function(){
      modal.style.display = "none"
    });
  }
}


function restartGame(){
  userScore = 0;
  cpuScore = 0;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
}

restart.addEventListener('click', restartGame);
window.addEventListener('click', clearModal);
main ();