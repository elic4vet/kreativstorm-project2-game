//Welcome message
const styleForWelcomeMessage = 'color:blue; font-family:monospace; font-size: 16px; font-weight: bold;';

const welcomeMessage = 
`%c__________________________________________________________________

        ~~ Welcome to the "Rock, Paper, Scissors game"! ~~
__________________________________________________________________`; 

//Instructions for the game
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

//function that starts all the game :)
function playGame() {
  alert(`Welcome to the "Rock, Paper, Scissors game"! Let's play :)`);
  console.log(welcomeMessage, styleForWelcomeMessage);
  console.log(gameInstruction, styleForGameInstruction);
  game();
}

//variables that are needed in two functions: "game"  and "updateScores"
let playerScore = 0;
let computerScore = 0;

//function which repeat 1 round for 5 times
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
}

//variable that stores the available choices
const choices = ["rock", "paper", "scissors"];

// function which generates a random choice for the computer
function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

//function that will repeat the function validatePlayerSelection till the value that the player enters is correct
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

// function which validates player selection
function validatePlayerSelection() {
  const playerInput = prompt("Enter one of the three words:  rock  paper  scissors");
  return choices.includes(playerInput.toLowerCase().trim()) ? playerInput : null;
}

// function "playRound" that plays a single round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log(`\n%cResult: It's a tie!\n`, "font-size: 13px; font-weight:bold; color:orange");
    return 0;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(`\n%cResult: You win :) ${selectUserWinsMessage()}\n`, "font-size: 13px; font-weight:bold; color:green");
    return 1;
  } else {
    console.log(`\n%cResult: You lose :( ${selectComputerWinsMessage()}\n`, "font-size: 13px; font-weight:bold; color:red");
    return -1;
  }
}

// function which generates a random messages when the player wins
function selectUserWinsMessage() {
  const userWinsMessages = ["Great job, You win!", "Congratulation!", "You did it!", "Success!", "Victory!"];
  return userWinsMessages[Math.floor(Math.random() * userWinsMessages.length)];
}

// function which generates a random messages when the computer wins
function selectComputerWinsMessage() {
  const computerWinsMessages = ["Your IA opponent wins.", "Keep calm and game on.", "Don't give up!", "Maybe next time.", "Try harder."];
  return computerWinsMessages[Math.floor(Math.random() * computerWinsMessages.length)];
}

//function that keeps track and adds points each round
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

playGame();
