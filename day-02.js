const dayNumber = '02';

// load the file
const fs = require('fs');
const path = require('path');
const appData = fs.readFileSync(path.resolve(__dirname, `day-${dayNumber}.txt`), 'utf8').split('\n');
let score = 0;

const values = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3,
};

// part 1
for (let i = 0; i < appData.length; i += 1) {
  const move = appData[i].split(' ');
  const movePlayer1 = values[move[0]];
  const movePlayer2 = values[move[1]];

  score += movePlayer2;

  if (movePlayer1 === movePlayer2) { // equal
    score += 3;
  } else if ( // player 1 wins
    movePlayer1 === 1 && movePlayer2 === 3 ||// rock vs scissors
    movePlayer1 === 2 && movePlayer2 === 1 ||// paper vs rock
    movePlayer1 === 3 && movePlayer2 === 2 // scissor vs paper
  ) {
    score += 0;
  } else { // player 2 wins
    score += 6;
  }
}

console.log('part 1', score);

// part 2
score = 0;
for (let i = 0; i < appData.length; i += 1) {
  const move = appData[i].split(' ');
  const movePlayer1 = values[move[0]];
  const movePlayer2 = values[move[1]];

  switch(movePlayer2) {
    case 1: // lose
      switch(movePlayer1) {
        case 1: // rock vs scissors
          score += 3;
          break;
        case 2: // paper vs rock
          score += 1;
          break;
        case 3: // scissors vs paper
          score += 2;
          break;
      }
      break;
    case 2: // draw
      score += 3;
      score += movePlayer1;
      break;
    case 3: // win
      score += 6;
      switch(movePlayer1) {
        case 1: // rock vs paper
          score += 2;
          break;
        case 2: // paper vs scissors
          score += 3;
          break;
        case 3: // scissors vs rock
          score += 1;
          break;
      }
    default:
      break;
  }
}

console.log('part 2', score);
