const startTime = new Date().getTime();
const dayNumber = '07';

// load the file
const fs = require('fs');
const path = require('path');
const appData = fs.readFileSync(path.resolve(__dirname, `day-${dayNumber}.txt`), 'utf8').split('\n');

const sizes = { '/': 0 };
const currentPaths = ['/'];
let solution = 0;

for (let i = 1; i < appData.length; i += 1) {
  const line = appData[i];

  // $ cd: keep track of the path
  if (line.indexOf('$ cd') === 0) {
    // go deeper
    if (line.indexOf('..') === -1) {
      currentPaths.push(`${currentPaths.at(-1)}${line.replace('$ cd ', '')}/`);
      sizes[currentPaths.at(-1)] = 0;
    // move folder up
    } else {
      currentPaths.pop();
    }
  }

  // it starts with a number, so it's a file => add file size to all items in currentPaths
  if (parseInt(line.split(' '), 10) > 0) {
    for (let j = 0; j < currentPaths.length; j += 1) {
      sizes[currentPaths[j]] += parseInt(line.split(' '), 10);
    }
  }
}

// get sizes < 100000
for (const [key, value] of Object.entries(sizes)) {
  if (key !== '/' && value < 100000) {
    solution += value;
  }
}

console.log('Part 1', solution);

// part 2
const spaceNeeded = 70000000 - 30000000;
const spaceTaken = sizes['/'];
const needToRemove = spaceTaken - spaceNeeded;
const folderSizes = [];

for (const [key, value] of Object.entries(sizes)) {
  if (key !== '/' && value > needToRemove) {
    folderSizes.push(value);
  }
}

console.log('Part 2', Math.min(...folderSizes));

// show runtime for fun
console.log('runtime', `${new Date().getTime() - startTime}ms`);