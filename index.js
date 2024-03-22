const result = document.querySelector("#outcome");
const score = document.querySelector("#score");
const div = document.querySelector("#buttons");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

/**
 * Random selection of rock, paper, or scissors.
 * @returns {string} rock, paper, or scissors.
 */
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
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

rock.addEventListener("click", () => {
  let outcome = playRound("rock", getComputerChoice());
  result.textContent = "";
  result.textContent = outcome[0];
});

paper.addEventListener("click", () => {
  let outcome = playRound("paper", getComputerChoice());
  result.textContent = "";
  result.textContent = outcome[0];
});

scissors.addEventListener("click", () => {
  let outcome = playRound("scissors", getComputerChoice());
  result.textContent = "";
  result.textContent = outcome[0];
});

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
