'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No Number Entered!');
  } else if (guess === randomNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = randomNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('body').style.backgroundColor = 'Green';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(
        guess > randomNumber ? 'Guess is too high!' : 'Guess is too low!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  //   document.querySelector('.highscore').textContent = 0;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
