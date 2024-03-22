const result = document.querySelector("#outcome");
const score = document.querySelector("#score");
const div = document.querySelector("#buttons");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const choices = ["rock", "paper", "scissors"];
/**
 * Random selection of rock, paper, or scissors.
 * @returns {string} rock, paper, or scissors.
 */
function getComputerChoice() {
  const Index = parseInt(Math.random() * choices.length);
  return choices[Index];
}

/**
 * Determines the winner of each round.
 * @param {string} the players choice.
 * @param {string} the computers choice.
 * @returns {object} an array of who won the round. 1 if player won and 0 if player lost.
 */
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return [
      `Player: ${playerSelection}\nComputer: ${computerSelection}\nThis round was a draw.`,
    ];
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return [
      `Player: ${playerSelection}\nComputer: ${computerSelection}\nYou lost this round. ${computerSelection} beats ${playerSelection}.`,
      0,
    ];
  } else {
    return [
      `Player: ${playerSelection}\nComputer: ${computerSelection}\nYou won this round! ${playerSelection} beats ${computerSelection}.`,
      1,
    ];
  }
}

function updateScore(won, lost) {
  if (won + lost === 5) {
    if (won > lost) {
      score.textContent = `You won ${won} round(s).\nComputer won ${lost} round(s).\nYou won!`;
    } else {
      score.textContent = `You won ${won} round(s).\nComputer won ${lost} round(s).\nYou lost.`;
    }
  } else {
    score.textContent = `Score:\nPlayer: ${won}\nComputer: ${lost}`;
  }
}

let playerWon = 0;
let computerWon = 0;

choices.forEach((element) => {
  document.getElementById(element).addEventListener("click", () => {
    let outcome = playRound(element, getComputerChoice());
    result.textContent = outcome[0];
    if (outcome[1] === 0) {
      computerWon += 1;
    } else if (outcome[1] === 1) {
      playerWon += 1;
    }
  });
});

if (playerWon > computerWon) {
  score.textContent = `You won ${playerWon} round(s).\nComputer won ${computerWon} round(s).\nYou won!`;
} else {
  score.textContent = `You won ${playerWon} round(s).\nComputer won ${computerWon} round(s).\nYou lost.`;
}
/**if (playerWon > computerWon) {
  score.textContent = `You won ${playerWon} round(s).\nComputer won ${computerWon} round(s).\nYou won!`;
} else {
  score.textContent = `You won ${playerWon} round(s).\nComputer won ${computerWon} round(s).\nYou lost.`;
}

// Plays five rounds of rock, paper, scissors and determines the overall winner.
/**
 * function playGame() {
  alert("Welcome to Rock, Paper, Scissors!\nYou will play best of 5 rounds.");
  let again = "y";
  let playerWon = 0;
  let computerWon = 0;
  while (again.toLowerCase() === "y") {
    while (playerWon + computerWon < 5) {
      playerChoice = prompt("Enter rock, paper, or scissors.");
      computerChoice = getComputerChoice();
      let outcome = playRound(
        playerChoice.toLowerCase().trim(),
        computerChoice
      );
      alert(outcome[0]);
      if (outcome[1] === 0) {
        computerWon += 1;
      } else if (outcome[1] === 1) {
        playerWon += 1;
      } else {
        continue;
      }
    }
    if (playerWon > computerWon) {
      alert(
        `You won ${playerWon} round(s).\nComputer won ${computerWon} round(s).\nYou won!`
      );
    } else {
      alert(
        `You won ${playerWon} round(s).\nComputer won ${computerWon} round(s).\nYou lost.`
      );
    }
    again = prompt("Would you like to play again? (y/n)");
    if (again === "y") {
      playerWon = 0;
      computerWon = 0;
    } else {
      break;
    }
  }
  alert("Bye!");
}

playGame();
 */
