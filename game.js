// run a function to start game
// randomly choose who starts
// The player chooses what to play in the row. (computer chooses randonmly )
// After row repeat 3 times
// The player with more wins within 3 rows wins

var computerChoice;
var humanChoice;
var humanScore = 0;
var computerScore = 0;
var turn = Math.floor(Math.random() * 2) + 1;


function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3) + 1;
  console.log(computerChoice);
}

function getHumanChoice() {
  humanChoice = prompt();
  if (humanChoice == "Rock") {
    humanChoice = 1;
  } else if (humanChoice == "Paper") {
    humanChoice = 2
  } else { humanChoice = 3 }
  console.log(humanChoice);
}

function row() {
    for (let i = 1; i <= 3; i++) {
        if (turn === 1) {
            getHumanChoice();
            getComputerChoice();
          } else {
            getComputerChoice();
            getHumanChoice();
          }
    }
    whoWins();
    alert ("Human = "+ humanScore + "Computer = " + computerScore + ".");
}


/* Three possible scenarios:
1) tie; 2) rock crushes scissors; 3) paper covers rock; 4) scissors cut paper */
function whoWins () {
    if (humanChoice == computerChoice) {
      row ();
    } 
    else if (humanChoice == 3 && computerChoice == 2 || computerChoice == 3 && humanChoice == 2) {
      if (humanChoice > computerChoice) {
        humanScore = +1;} else {computerScore = +1;}
      } 
    else if (humanChoice == 1 && computerChoice == 3 || computerChoice == 3 && humanChoice == 1) {
      if (humanChoice < computerChoice) {
        humanScore = +1;} else {computerScore = +1;}
      }
    else if (humanChoice == 1 && computerChoice == 2 || computerChoice == 2 && humanChoice == 1) {
      if (humanChoice > computerChoice) {
        humanScore = +1;} else {computerScore = +1;}
      }
}

row();
