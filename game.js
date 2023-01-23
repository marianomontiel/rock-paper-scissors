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
  switch (computerChoice) {
    case 1:
      computerChoiceString = "Rock";
      computerWeapon.src = './images/rock.jpg';
      computer.appendChild(computerWeapon);
      break;
    case 2:
      computerChoiceString = "Paper";
      computerWeapon.src = './images/paper.jpg';
      computer.appendChild(computerWeapon);
      break;
    case 3:
      computerChoiceString = "Scissors";
      computerWeapon.src = './images/scissors.jpg';
      computer.appendChild(computerWeapon);
      break;
  }
  console.log("Computer" + computerChoiceString);
}

const players = document.querySelector('.players');
const human = document.querySelector('.human');
const humanWeapon = document.createElement('img');
humanWeapon.setAttribute('style', 'height: 300px; width: 300px; object-fit: contain; border: 1px solid red');
const computer = document.querySelector('.computer');
const computerWeapon = document.createElement('img');
computerWeapon.setAttribute('style', 'height: 300px; width: 300px; object-fit: contain');

function getHumanChoice(weapon) {
  // humanChoice = prompt("Choose your weapons! Rock, Paper or Scissors?");
  humanChoice = weapon;
  switch (humanChoice) {
    case 1:
      humanChoiceString = "Rock";
      humanWeapon.src = './images/rock.jpg';
      human.appendChild(humanWeapon);
      break;
    case 2:
      humanChoiceString = "Paper";
      humanWeapon.src = './images/paper.jpg';
      human.appendChild(humanWeapon);
      break;
    case 3:
      humanChoiceString = "Scissors";
      humanWeapon.src = './images/scissors.jpg';
      human.appendChild(humanWeapon);
      break;
  }
  console.log("Human chose:" + humanChoiceString);
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
rock.addEventListener('click', () => row(1));

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => row(2));

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => row(3));

const start = document.querySelector('.start');
start.addEventListener('click', () => resetGame());

//Select body and add div for win/lose
const body = document.querySelector('body');
console.dir(body.lastElementChild);
const div = document.createElement('div');
div.setAttribute('id', 'theDiv');
div.setAttribute('style', 'padding: 30px');
const weapons = document.querySelector('.weapons');

function row(weapon) {
  if (rowCount === 3) { return; }
  getComputerChoice();
  getHumanChoice(weapon);
  //If there is a tie nothing should happen
  if (humanChoice === computerChoice) {
    console.log('tie');
    return;
  } else {
    whoWins();
    rowCount += 1;
    if (rowCount < 3) {
    } else if (humanScore > computerScore) {
      div.textContent = 'You win!';
      body.appendChild(div);
      body.removeChild(weapons);
    } else {
      div.textContent = 'You loose!';
      body.appendChild(div);
      body.removeChild(weapons);
    }
  }
}

function resetGame() {
  rowCount = 0;
  computerScore = 0;
  humanScore = 0;
  const body = document.querySelector('body');
  const theDiv = document.querySelector('#theDiv');
  body.removeChild(theDiv);
  body.appendChild(weapons);
}

//when a weapon is chosen run a row until 3 rows have passed or until somebody wins

