// selecting element
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

let score0El = document.querySelector("#score--0");
let score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

let diceEl = document.querySelector(".dice");
let btnNew = document.querySelector(".btn--new");
let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");

// starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// switch player function()
const switchPlayer = function(){
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
}

// rolling dice functionality
btnRoll.addEventListener("click", function () {
  // 1. generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. display the dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  // 3. check for rolled 1: if true,
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // current0El.textContent = currentScore
  } else {
    // switch to next player
    switchPlayer()
    
  }
});

btnHold.addEventListener("click", function () {
  // 1. add current score to active player's score
  scores[activePlayer] += currentScore;
  // score[1] = scores[1] + currentScore
  document.getElementById(`current--${activePlayer}`).textContent = scores[activePlayer];

  //   check if player score >=100
  // finish game

  // switch to the next player
  switchPlayer()


});
