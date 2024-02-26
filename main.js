const CHOICE_MAPPING = {0 : "Rock", 1 : "Paper", 2 : "Scissors"};

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound() {
    let userChoice = parseInt(prompt("Select your choice (0: Rock, 1: Paper, 2: Scissors)..."));
    let computerChoice = getComputerChoice();
    console.log(`You played ${CHOICE_MAPPING[userChoice]}.`);
    console.log(`Computer played ${CHOICE_MAPPING[computerChoice]}.`);

    if (userChoice === computerChoice) {
        console.log("Draw!");
    }
    else if ((!userChoice) && (computerChoice===1)){
        console.log("You lost!")
    }
    else if ((userChoice===1) && (computerChoice===2)){
        console.log("You lost!")
    }
    else if ((userChoice===2) && (!computerChoice)){
        console.log("You lost!")
    }
    else {
        console.log("You won!")
    }
    console.log();
}


while (true) {
    playRound()
}