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
var rowCount = 0;

function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3) + 1;
  if  (computerChoice === 1) {
    computerChoiceString = "Rock";
  } else if (computerChoice === 2) {
    computerChoiceString = "Paper";
  } else { computerChoiceString = "Scissors";}
  console.log("Computer" + computerChoiceString);
}

function getHumanChoice(weapon) {
  // humanChoice = prompt("Choose your weapons! Rock, Paper or Scissors?");
  humanChoice = weapon;
  if (humanChoice === 1) {
    humanChoiceString = "Rock";
  } else if (humanChoice === 2) {
    humanChoiceString ="Paper";
  } else if (humanChoice === 3) {
    humanChoiceString = "Scissors";
  }
  console.log("Human chose:" + humanChoiceString);
}

// function row() {
//   getComputerChoice();
//   getHumanChoice();
//   if (humanChoice === computerChoice) {
//     console.log("tie");
//     row();
//   } else { }
// }

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

// Here start the DOM scripts

const rock = document.querySelector('#rock');
rock.addEventListener('click',  () => row(1));

const paper = document.querySelector('#paper');
paper.addEventListener('click',  () => row(2));

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click',  () => row(3));

function row(weapon) {
  getComputerChoice();
  getHumanChoice(weapon);
  //If there is a tie nothing should happen
  if (humanChoice === computerChoice) {
    console.log ('tie');
    return;
  } else {
  whoWins();
  rowCount += 1;
  if (rowCount < 3) {
    console.log ('Who won?')
  } else { console.log('end'); }
  }
}

//when a weapon is chosen run a row until 3 rows have passed or until somebody wins

