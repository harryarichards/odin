const CHOICE_MAPPING = { 0: "Rock", 1: "Paper", 2: "Scissors" };

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

var userScore = 0;
var computerScore = 0;

const btn = document.querySelector("#buttons");
console.log(btn);
function playRound(e) {
  let userChoice = e.target.getAttribute("id");
  if (userChoice === "rock") {
    userChoice = 0;
  } else if (userChoice === "paper") {
    userChoice = 1;
  } else {
    userChoice = 2;
  }
  let computerChoice = getComputerChoice();
  document.querySelector(
    "#user"
  ).innerText = `You played ${CHOICE_MAPPING[userChoice]}.`;
  document.querySelector(
    "#computer"
  ).innerText = `Computer played ${CHOICE_MAPPING[computerChoice]}.`;

  if (userChoice === computerChoice) {
  } else if (!userChoice && computerChoice === 1) {
    computerScore++;
  } else if (userChoice === 1 && computerChoice === 2) {
    computerScore++;
  } else if (userChoice === 2 && !computerChoice) {
    computerScore++;
  } else {
    userScore++;
  }
  document.querySelector("#user-score").innerText = `User Score: ${userScore}`;
  document.querySelector(
    "#computer-score"
  ).innerText = `Computer Score: ${computerScore}`;
}
btn.addEventListener("click", playRound);
