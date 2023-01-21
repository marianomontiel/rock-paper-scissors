// run a function to start game
// randomly choose who starts
// The player chooses what to play in the row. (computer chooses randonmly )
// After row repeat 3 times
// The player with more wins within 3 rows wins

var computerChoice;
var humanChoice;
var humanScore = 0;
var computerScore = 0;
var computerChoiceString;
var humanChoiceString;


function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3) + 1;
  if  (computerChoice === 1) {
    computerChoiceString = "Rock";
  } else if (computerChoice === 2) {
    computerChoiceString = "Paper";
  } else { computerChoiceString = "Scissors";}
  console.log("Computer" + computerChoiceString);
}

function getHumanChoice() {
  humanChoice = prompt("Choose your weapons! Rock, Paper or Scissors?");
  humanChoice = humanChoice.toUpperCase();
  if (humanChoice === "ROCK") {
    humanChoice = 1;
    humanChoiceString = "Rock";
  } else if (humanChoice === "PAPER") {
    humanChoice = 2;
    humanChoiceString ="Paper";
  } else if (humanChoice === "SCISSORS") {
    humanChoice = 3;
    humanChoiceString = "Scissors";
  } else {
    console.log("Ups you made a typo please try again.");
    getHumanChoice();
  }
  console.log("Human chose:" + humanChoiceString);
}

function row() {
  getComputerChoice();
  getHumanChoice();

  if (humanChoice === computerChoice) {
    console.log("tie");
    row();
  } else { }
}

function play() {
  for (let i = 0; i < 3; i++) {
    row();
    whoWins();
  }
  alert("Human = " + humanScore + "Computer = " + computerScore + ".");
}


/* Three possible scenarios:
1) tie; 2) rock crushes scissors; 3) paper covers rock; 4) scissors cut paper */
function whoWins() {
  if (humanChoice === 3 && computerChoice === 2 || computerChoice === 3 && humanChoice === 2) {
    if (humanChoice > computerChoice) {
      humanScore += 1;
    } else { computerScore += 1; }
  }
  else if (humanChoice === 1 && computerChoice === 3 || computerChoice === 1 && humanChoice === 3) {
    if (humanChoice < computerChoice) {
      humanScore += 1;
    } else { computerScore += 1; }
  }
  else if (humanChoice === 2 && computerChoice === 1 || computerChoice === 2 && humanChoice === 1) {
    if (humanChoice > computerChoice) {
      humanScore += 1;
    } else { computerScore += 1; }
  }
  console.log("Human " + humanScore + "Computer " + computerScore);
}

// play();
