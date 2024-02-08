const styleForWelcomeMessage = 'color:blue; font-family:monospace; font-size: 16px; font-weight: bold;';

const welcomeMessage = 
`%c__________________________________________________________________

        ~~ Welcome to the "Rock, Paper, Scissors game"! ~~
__________________________________________________________________`; 

const styleForGameInstruction = 'font-size: 14px; font-weight: bold;'

const gameInstruction = `
%c///////////////////////////////////////////////////////////////////////////

Willing to try your luck and win over your AI opponent … ? Let\'s begin!

Here are the rules:
- "scissors" cuts "paper"
- "paper" wraps "rock"
- "rock" breaks "scissors"

Each round, you will be asked to choose and enter JUST one among these 3 words:
scissors / paper / rock

- There are 5 rounds.
- After each round a result is displayed.
- A player with a higher, final score wins.

Warning!
If you make a mistake while playing, the round repeats itself.

Good luck!

///////////////////////////////////////////////////////////////////////////
`;

console.log(welcomeMessage, styleForWelcomeMessage);
console.log(gameInstruction, styleForGameInstruction);
alert(`Welcome to the "Rock, Paper, Scissors game"! Let's play :)`);
setTimeout(() => {
  game();
}, 0);

let playerScore = 0;
let computerScore = 0;

function game() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    const playerSelection = obtainPlayerSelection();
    console.log(`Round nr ${i+1}  Your selection: ${playerSelection} / AI selection: ${computerSelection}`);
    const result = playRound(playerSelection, computerSelection);
    updateScores(result);
    console.log(`Your score: ${playerScore}         AI score: ${computerScore}`);
    console.log("------------------------------------------------------------------------------------------");
  }
  alert(`~ Thank you for the game!
  Your score: ${playerScore}         AI score: ${computerScore}`);
  setTimeout(() => {
    terminateOrContinueGame();
  },0)
}

const choices = ["rock", "paper", "scissors"];

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function obtainPlayerSelection() {
  let playerInput = null;
  
  do {
    playerInput = validatePlayerSelection();
    if (playerInput === null) {
      alert("You entered a wrong value! Try again.");
    }
  } while (playerInput === null);

  return playerInput;
}

function validatePlayerSelection() {
  const playerInput = prompt("Enter one of the three words:  rock  paper  scissors");
  if (playerInput === null) {
    window.close();
  }
  return choices.includes(playerInput.toLowerCase().trim()) ? playerInput : null;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log(`\n%cResult: It's a tie!\n`, "font-size: 13px; font-weight:bold; color:orange");
    return 0;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(`\n%cResult: You win :) ${selectUserWinsMessage()}\n`,
    "font-size: 13px; font-weight:bold; color:green");
    return 1;
  } else {
    console.log(`\n%cResult: You lose :( ${selectComputerWinsMessage()}\n`,
    "font-size: 13px; font-weight:bold; color:red");
    return -1;
  }
}

function selectUserWinsMessage() {
  const userWinsMessages = [
    "Great job", "Congratulation!", "You did it!", "Success!", "Victory!",
    "Hooooray!", "Well done!", "You got it!"
  ];
  return userWinsMessages[Math.floor(Math.random() * userWinsMessages.length)];
}

function selectComputerWinsMessage() {
  const computerWinsMessages = [
    "Your IA opponent wins.", "Keep calm and game on.", "Don't give up!",
    "Maybe next time.", "Try harder.", "No worries.", "Maybe next time."
  ];
  return computerWinsMessages[Math.floor(Math.random() * computerWinsMessages.length)];
}

function updateScores(result) {
  switch (result) {
      case 0:
        break;
      case 1:
        playerScore++;
        break;
      case -1:
        computerScore++;
        break;
      default:
        console.log("Upsss, sth went terribly wrong!");
    }
}

function terminateOrContinueGame() {
  const playerChoice = confirm(`If you want to play again click "OK", otherwise press "Cancel".`);
  if (playerChoice === false) {
    window.close();
  } else {
    console.clear();
    console.log(welcomeMessage, styleForWelcomeMessage);
    console.log(gameInstruction, styleForGameInstruction);
    game();
    alert(`~ Thank you for the game!
    Your score: ${playerScore}         AI score: ${computerScore}`);
  }
}
