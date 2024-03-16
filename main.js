const CHOICE_MAPPING = { 0: "Rock", 1: "Paper", 2: "Scissors" };

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function playRound() {
  let userChoice = 0;
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(`You played ${CHOICE_MAPPING[userChoice]}.`);
  console.log(`Computer played ${CHOICE_MAPPING[computerChoice]}.`);

  if (userChoice === computerChoice) {
    console.log("Draw!");
    return 0;
  } else if (!userChoice && computerChoice === 1) {
    return -1;
  } else if (userChoice === 1 && computerChoice === 2) {
    return -1;
  } else if (userChoice === 2 && !computerChoice) {
    return -1;
  } else {
    return 1;
  }
}

function playGame() {
  console.log("--- NEW GAME ---");
  let userScore = 0;
  for (let i = 0; i < 5; i++) {
    let outcome = playRound();
    if (outcome > 0) {
      console.log("You won this round!");
    } else if (!outcome) {
      console.log("You drew round!");
    } else {
      console.log("You lost this round!");
    }
    userScore += playRound();
    console.log();
  }

  if (userScore > 0) {
    console.log(`You scored ${userScore}, you won the game!`);
  } else if (!userScore) {
    console.log(`You scored ${userScore}, you drew the game!`);
  } else {
    console.log(`You scored ${userScore}, you lost the game!`);
  }
  console.log();
}

playGame();
