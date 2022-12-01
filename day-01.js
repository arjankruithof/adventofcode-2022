const dayNumber = '01';

// load the file
const fs = require('fs');
const path = require('path');
const appData = fs.readFileSync(path.resolve(__dirname, `day-${dayNumber}.txt`), 'utf8').split('\n');

// part 1
const elvesCalories = [];
let currentElfCalories = 0;

for (let i = 0; i < appData.length; i += 1) {
  if (appData[i] !== '') {
    currentElfCalories += parseInt(appData[i], 10);
  } else {
    elvesCalories.push(currentElfCalories);
    currentElfCalories = 0;
  }
}

console.log('part1', Math.max(...elvesCalories));

// part 2
elvesCalories.sort(function(a, b) {
  return b - a;
});

console.log('part2', elvesCalories[0] + elvesCalories[1] + elvesCalories[2]);