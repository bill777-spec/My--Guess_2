'use strict';
//DOM MANIPULATION
/*
console.log(document.querySelector('.message').textContent);

console.log(
  (document.querySelector('.message').textContent = ' correct Number!')
);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 22;
console.log(document.querySelector('.guess').value);
*/

///HANDLING CLICK EVENTS & Game Logic Implementation

let number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';

let score = 20;
let highscore = 0;

//////for cleaner code
// const displayMesssage = function(messsage) {
//   document.querySelector('.message').textContent = message;
// }

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    // displayMesssage('📛No Number'); (cleaner CODE)
    document.querySelector('.message').textContent = '📛No Number';
  } else if (guess > 20 || guess < 1) {
    document.querySelector('.message').textContent =
      'INVALID INPUT💢. SELECT A NUMBER BETWEEN 1 and 20!';
  } else if (guess === number) {
    document.querySelector('.number').textContent = number;
    document.querySelector('.message').textContent = '✔CORRECT!';
    if (score > highscore) highscore = score;
    document.querySelector('.highscore').textContent = highscore;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > number ? '👠Too High' : '👡Too Low';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😭😭😭😭You Lost';
      document.querySelector('.message').textContent = 0;
    }
  }

  ///////BROKEN DOWN CODE
  //else if (guess > number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '👠Too High';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😭😭😭😭You Lost';
  //     document.querySelector('.message').textContent = 0;
  //   }
  // } else if (guess < number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '👡Too Low';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😭😭😭😭You Lost';
  //     document.querySelector('.message').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ';';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
