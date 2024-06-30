'use strict';
// document.querySelector('.message').textContent = 'Correct Number 🎉';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 23;

let Secretnumber = Math.trunc(Math.random() * 20) + 1;
let Score = 20;
let HighScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// This code for Again button
document.querySelector('.again').addEventListener('click', function () {
  Score = 20;
  Secretnumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = Score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#0d5bc9c1';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!🙅‍♂️';
    displayMessage('No number!🙅‍♂️');

    // When Player wins
  } else if (guess === Secretnumber) {
    displayMessage('Correct Number 🎉');
    // document.querySelector('.message').textContent = 'Correct Number 🎉';
    document.querySelector('.number').textContent = Secretnumber;
    document.querySelector('body').style.backgroundColor = '#60b947';
    document.querySelector('.number').style.width = '30rem';

    if (Score > HighScore) {
      HighScore = Score;
      document.querySelector('.highscore').textContent = HighScore;
    }

    // When Guess is wrong
  } else if (guess !== Secretnumber) {
    if (Score > 1) {
      displayMessage(
        guess > Secretnumber
          ? '🫵 Guess is Too High! 📈'
          : '🫵 Guess is Too Low! 📉'
      );
      Score--;
      document.querySelector('.score').textContent = Score;
    } else {
      // document.querySelector('.message').textContent =
      //   '🫵 Sorry, You Lost the Game 😔';
      displayMessage('🫵 Sorry, You Lost the Game 😔');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//this code for When Guess is too high
// } else if (guess > Secretnumber) {
//   if (Score > 1) {
//     document.querySelector('.message').textContent =
//       '🫵 Guess is Too High! 📈';
//     Score--;
//     document.querySelector('.score').textContent = Score;
//   } else {
//     document.querySelector('.message').textContent =
//       '🫵 Sorry, You Lost the Game 😔';
//     document.querySelector('.score').textContent = 0;
//   }

//   //this code for When Guess is too low
// } else if (guess < Secretnumber) {
//   if (Score > 1) {
//     document.querySelector('.message').textContent = '🫵 Guess is Too Low! 📉';
//     Score--;
//     document.querySelector('.score').textContent = Score;
//   } else {
//     document.querySelector('.message').textContent =
//       '🫵 Sorry, You Lost the Game 😔';
//     document.querySelector('.score').textContent = 0;
//   }
// }