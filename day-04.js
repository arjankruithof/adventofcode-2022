const startTime = new Date().getTime();
const dayNumber = '04';

// load the file
const fs = require('fs');
const path = require('path');
const appData = fs.readFileSync(path.resolve(__dirname, `day-${dayNumber}.txt`), 'utf8').split('\n');

const priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

// part 1
let totalPart1 = 0;
let totalPart2 = 0;

for (let i = 0; i < appData.length; i += 1) {
  const assignments = appData[i].split(',');
  const assignment1 = assignments[0].split('-').map(Number);
  const assignment2 = assignments[1].split('-').map(Number);

  if (
    (assignment1[0] >= assignment2[0] && assignment1[1] <= assignment2[1]) ||
    (assignment2[0] >= assignment1[0] && assignment2[1] <= assignment1[1])
  ) {
    totalPart1 += 1;
  }

  if (
    (assignment1[0] > assignment2[0] && assignment1[0] < assignment2[1]) ||
    (assignment1[1] > assignment2[0] && assignment1[1] < assignment2[1]) ||
    (assignment2[0] > assignment1[0] && assignment2[0] < assignment1[1]) ||
    (assignment2[1] > assignment1[0] && assignment2[1] < assignment1[1]) ||
    assignment1[0] === assignment2[0] ||
    assignment1[1] === assignment2[0] ||
    assignment1[0] === assignment2[1] ||
    assignment1[1] === assignment2[1]
  ) {
    totalPart2 += 1;
  }
}

console.log('part1', totalPart1);
console.log('part2', totalPart2);

// show runtime for fun
console.log('runtime', `${new Date().getTime() - startTime}ms`);