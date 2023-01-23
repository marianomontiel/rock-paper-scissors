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
  if (computerChoice === 1) {
    computerChoiceString = "Rock";
    computerWeapon.src = 'https://b.fssta.com/uploads/application/wwe/headshots/dwayne-the-rock-johnson.png';
    computer.appendChild(computerWeapon);
  } else if (computerChoice === 2) {
    computerChoiceString = "Paper";
    humanWeapon.src = 'https://nationaltoday.com/wp-content/uploads/2021/08/National-Toilet-Paper-Day-640x514.jpg';
    human.appendChild(humanWeapon);
  } else { computerChoiceString = "Scissors";
    humanChoiceString = "Scissors";
    humanWeapon.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c400c049-dc69-4144-970e-0f94b3c1d10b/d5xfe9a-a5f39a64-3e02-4b20-a092-a3c8500fc65c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M0MDBjMDQ5LWRjNjktNDE0NC05NzBlLTBmOTRiM2MxZDEwYlwvZDV4ZmU5YS1hNWYzOWE2NC0zZTAyLTRiMjAtYTA5Mi1hM2M4NTAwZmM2NWMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mXlQaXe1JLxXMBUczD0csxRsFEUzCapSCG-NTXqYszA';
    human.appendChild(humanWeapon);
 }
  console.log("Computer" + computerChoiceString);
}

const players = document.querySelector('.players');
const human = document.querySelector('.human');
const humanWeapon = document.createElement('img');
humanWeapon.setAttribute('style', 'height: 300px');
const computer = document.querySelector('.computer');
const computerWeapon = document.createElement('img');
computerWeapon.setAttribute('style', 'height: 300px');

function getHumanChoice(weapon) {
  // humanChoice = prompt("Choose your weapons! Rock, Paper or Scissors?");
  humanChoice = weapon;
  if (humanChoice === 1) {
    humanChoiceString = "Rock";
    humanWeapon.src = 'https://b.fssta.com/uploads/application/wwe/headshots/dwayne-the-rock-johnson.png';
    human.appendChild(humanWeapon);
  } else if (humanChoice === 2) {
    humanChoiceString = "Paper";
    humanWeapon.src = 'https://nationaltoday.com/wp-content/uploads/2021/08/National-Toilet-Paper-Day-640x514.jpg';
    human.appendChild(humanWeapon);
    
  } else if (humanChoice === 3) {
    humanChoiceString = "Scissors";
    humanWeapon.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c400c049-dc69-4144-970e-0f94b3c1d10b/d5xfe9a-a5f39a64-3e02-4b20-a092-a3c8500fc65c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M0MDBjMDQ5LWRjNjktNDE0NC05NzBlLTBmOTRiM2MxZDEwYlwvZDV4ZmU5YS1hNWYzOWE2NC0zZTAyLTRiMjAtYTA5Mi1hM2M4NTAwZmM2NWMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mXlQaXe1JLxXMBUczD0csxRsFEUzCapSCG-NTXqYszA';
    human.appendChild(humanWeapon);
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

