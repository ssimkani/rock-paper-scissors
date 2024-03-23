const resetDiv = document.querySelector("#reset");
const final = document.querySelector("#final");
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

/**
* updates the score after the user clicks rock, paper, or scissors. The live score is
displayed and after 5 rounds, the final outcome is determined. A reset button appears after the
final outcome which if clicked, the score and all of the text is reset. 
* @param {int} won 
* @param {int} lost
*/

function updateScore(roundsWon, roundsLost) {
  score.textContent = `Score:\nPlayer: ${roundsWon}\nComputer: ${roundsLost}`;
  if (roundsWon + roundsLost === 5) {
    if (roundsWon > roundsLost) {
      final.textContent = `You won ${roundsWon} round(s).\nComputer won ${roundsLost} round(s).\nYou won!`;
    } else {
      final.textContent = `You won ${roundsWon} round(s).\nComputer won ${roundsLost} round(s).\nYou lost.`;
    }
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    resetDiv.appendChild(resetButton);

    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;

    resetButton.addEventListener("click", () => {
      playerWon = 0;
      computerWon = 0;
      score.textContent = "";
      final.textContent = "";
      result.textContent = "";
      resetButton.remove();
      rock.disabled = false;
      paper.disabled = false;
      scissors.disabled = false;
    });
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
    updateScore(playerWon, computerWon);
  });
});
