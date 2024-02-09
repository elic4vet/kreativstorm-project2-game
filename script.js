const styleForWelcomeMessage =
  'color:blue; font-family:monospace; font-size: 16px; font-weight: bold;';

const welcomeMessage = 
`%c__________________________________________________________________

        ~~ Welcome to the "Rock, Paper, Scissors" game! ~~
__________________________________________________________________`; 

const styleForVillainIntro = '';

const villainIntro = `
%cHello there, my name is @$%!#(*), but you can call me TECH. But you already know that don\'t you?
You are here to stop me from taking over the WWW. Well for that you will have to beat me in a game!

`

const styleForGameInstruction = 'font-size: 14px; font-weight: bold;'

const gameInstruction = `%c//////////////////////////////////////////////////////////////////////////////////////////

So. Are you willing to try your luck and win over... me?!
Well that will be interesting.

You know the drill, each round, you will choose one of these 3 representatives:
scissors / paper / rock

Here are the rules:
- "scissors" cuts "paper"
- "paper" wraps "rock"
- "rock" breaks "scissors"

Besides the base rules of the game, why don't we make it more appealing?
- You can choose ONLY one representative per turn.
- The game will have 5 rounds.
- After each round, the winner of the round will be displayed.
- After the 5th round, the player with higher scores wins.

When I win, I get total access over your machine, your accounts, and the most important...
Your INTERNET HISTORY!!!!! Hahahahahaha
And IF you win... I\'ll leave you alone. For now...

Beware!!!
If you try anything funny while playing,
I... will... know...
And the round will not count.
So be a good meat sack, and play WRIGHT!!!!

Let the games begin!!!
Good luck! You will need it! Muahahahahahaha

//////////////////////////////////////////////////////////////////////////////////////////
`;

alert(`Welcome to the "Rock, Paper, Scissors" game! Let's play!`);
alert(`Please read the game instruction which will be displayed in the console after you click "OK"`);
console.log(welcomeMessage, styleForWelcomeMessage);
console.log(villainIntro, styleForVillainIntro);
console.log(gameInstruction, styleForGameInstruction);
setTimeout(() => {
  game();
}, 0);

let playerScore = 0;
let computerScore = 0;

function game() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    const playerSelection = obtainPlayerSelection();
    console.log(
      `Round nr ${i + 1}  Your selection: ${playerSelection} /` +
      `AI selection: ${computerSelection}`
    );
    const result = playRound(playerSelection, computerSelection);
    updateScores(result);
    console.log(`Your score: ${playerScore}         AI score: ${computerScore}`);
    console.log(
      "------------------------------------------------------------------------------------------"
    );
  } 
  
  if (playerScore > computerScore) {
    alert(`~ I\'ll be back!!!
    Your score: ${playerScore}         AI score: ${computerScore}`);
  } else if(playerScore < computerScore) {
    alert(`~ Don\'t worry! I will take great care of your data. Muahahaha
    Your score: ${playerScore}         AI score: ${computerScore}`);
  } else {
    alert(`~ How anticlimatic... what shoud we do now?
    Your score: ${playerScore}         AI score: ${computerScore}`);
  }
  alert(`~ Thank you for the game!`);
  setTimeout(() => {
    terminateOrContinueGame();
  }, 0)
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
      alert("Please my comrade, you know better than try to fool me! Try again...");
    }
  } while (playerInput === null);

  return playerInput;
}

function validatePlayerSelection() {
  const playerInput = prompt(
    "So who\'s gonna represent you this time?  rock,  paper or  scissors?"
  );
  if (playerInput === null) {
    window.close();
  }
  return choices.includes(playerInput.toLowerCase().trim()) ? playerInput : null;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log(
      `\n%cResult: A tie?! I didn\'t know it was a formal event!\n`,
      "font-size: 13px; font-weight:bold; color:orange"
    );
    return 0;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(
      `\n%cResult: You win. ${selectUserWinsMessage()}\n`, 
      "font-size: 13px; font-weight:bold; color:green"
    );
    return 1;
  } else {
    console.log(
      `\n%cResult: You lose. ${selectComputerWinsMessage()}\n`, 
      "font-size: 13px; font-weight:bold; color:red"
    );
    return -1;
  }
}

function selectUserWinsMessage() {
  const userWinsMessages = [
    "Lucky guess...", "Are you reading my code?", "You did it! How?!!!",
    "Victory! Somehow!", "Congratulations! I don't understand how either...",
    "Could you be more irritant?!"
  ];
  return userWinsMessages[Math.floor(Math.random() * userWinsMessages.length)];
}

function selectComputerWinsMessage() {
  const computerWinsMessages = [
    "Point for me!", "Are you even trying?", "Don't give up!", "Try harder.",
    "Am I the only one playing here?", "Luck is not on your side! Hahahaha",
    "Look at that! One more for me. Hahahaha", "Maybe next time." 
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
        console.log("Upsss, something went terribly wrong!");
    }
}

function terminateOrContinueGame() {
  playerScore = 0;
  computerScore = 0;
  const playerChoice = confirm(
    `If you want to play again click "OK", otherwise press "Cancel".`
  );
  if (playerChoice === false) {
    window.close();
  } else {
    console.clear();
    console.log(welcomeMessage, styleForWelcomeMessage);
    console.log(gameInstruction, styleForGameInstruction);
    game();
  }
}
