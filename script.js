'use strict';
let role = false;
let current = 0;
let scorePlayer0 = 0;
let scorePlayer1 = 0;
function newGame() {
  current = 0;
  scorePlayer0 = 0;
  scorePlayer1 = 0;
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  document.querySelector(`#current--0`).textContent = 0;
  document.querySelector(`#current--1`).textContent = 0;
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  if (role) {
    changePlayer();
  }
  document.querySelector('.btn--hold').disabled = false;
  document.querySelector('.btn--roll').disabled = false;
}
function WinGame() {
  document
    .querySelector(`.player--${Number(role)}`)
    .classList.add('player--winner');
  document.querySelector('.btn--hold').disabled = true;
  document.querySelector('.btn--roll').disabled = true;
}
function Play() {
  let diceNum = Number(Math.trunc(Math.random() * 6) + 1);
  document.querySelector('.dice').src = `dice-${diceNum}.png`;
  if (diceNum === 1) {
    return 0;
  } else {
    return diceNum;
  }
}
function changePlayer() {
  document
    .querySelector(`.player--${Number(role)}`)
    .classList.remove('player--active');
  document
    .querySelector(`.player--${Number(!role)}`)
    .classList.add('player--active');
  role = !role;
}
function rollDice() {
  let cur = Play();
  console.log(typeof cur);
  if (cur === 0) {
    document.querySelector(`#current--${Number(role)}`).textContent =
      current = 0;
    changePlayer();
    // current = 0 ;
  } else {
    current += cur;
    document.querySelector(`#current--${Number(role)}`).textContent = current;
  }
}
function hold() {
  if (role) {
    scorePlayer1 += current;
    document.querySelector('#score--1').textContent = scorePlayer1;
  } else {
    scorePlayer0 += current;
    document.querySelector('#score--0').textContent = scorePlayer0;
  }
  changePlayer();
  current = 0;
}
document.querySelector('.btn--hold').addEventListener('click', hold);
document.querySelector('.btn--roll').addEventListener('click', rollDice);
document.querySelector('.btn--new').addEventListener('click', newGame);
newGame();
