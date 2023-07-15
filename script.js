'use.script';

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`hard work pays off`);
// }

// console.log(typeof "apek");
// console.log(typeof 4);

// const ageSita = 2095 - 2078;
// const ageRam = 2056 - 2034;
// console.log(ageSita, ageRam);

// console.log(ageSita * 2, ageRam / 2);

// let wholeWorld = true;
// if ((wholeWorld = true)) console.log("its right");

// let wholeWorld = true;
// wholeWorld = "false";
// const a = "hello";
// const b = "world";
// console.log(a + " " + b);

// const printForecast = fuction(arr);

// document.querySelector('.number').textContent = 15;
// document.querySelector('.question-mark').textContent = 5;
// document.querySelector('.box').value;

// document.querySelector('.guessing').textContent = 'correct';
// document.querySelector('.question-mark').textContent = 5;

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (guessing) {
  document.querySelector('.guessing').textContent = guessing;
};

document.querySelector('.checking').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector('.guessing').textContent = '😒 No number';
    displayMessage('😒 No number');
  } else if (guess === number) {
    // document.querySelector('.guessing').textContent = '🎉 Congratulations!!';
    displayMessage('🎉 Congratulations!!');

    document.querySelector('body').style.backgroundColor =
      ' rgba(127, 255, 212, 0.406)';
    document.querySelector('.question-mark').style.width = '5rem';
    document.querySelector('.question-mark').textContent = number;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    ////when guess is wrong////
  } else if (guess != number) {
    if (score > 1) {
      // document.querySelector('.guessing').textContent =
      //   guess > number ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > number ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.guessing').textContent =
      //   '🤷‍♀️  Bro,you lost the game';
      displayMessage('🤷‍♀️  Bro,you lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  // Toooo lowww
  //   } else if (guess < number) {
  //     if (score > 1) {
  //       document.querySelector('.guessing').textContent = '📉 Too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.guessing').textContent =
  //         '🤷‍♀️  Bro,you lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     // Toooo highh
  //   } else if (guess > number) {
  //     if (score > 1) {
  //       document.querySelector('.guessing').textContent = '📈 Too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.guessing').textContent =
  //         '🤷‍♀️  Bro,you lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document
  .querySelector('.btn-play-again')
  .addEventListener('click', function () {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.guessing').textContent = 'Start guessing....';
    displayMessage('Start guessing....');
    document.querySelector('.score').textContent = score;
    document.querySelector('.question-mark').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor =
      'rgba(132, 132, 227, 0.436)';
    document.querySelector('.question-mark').style.width = '5rem';
  });
