const startTime = new Date().getTime();
const dayNumber = '06';

// load the file
const fs = require('fs');
const path = require('path');
const appData = fs.readFileSync(path.resolve(__dirname, `day-${dayNumber}.txt`), 'utf8');

// get the solution
function getSolution(length) {
  let solution = '';

  for (let i = 0; i < appData.length; i += 1) {
    const current = appData.slice(i, i + length);
    if ([...new Set(current)].length === length) {
      solution = i + (length);
      break;
    }
  }

  return solution;
}

console.log('part 1', getSolution(4));
console.log('part 2', getSolution(14));

// show runtime for fun
console.log('runtime', `${new Date().getTime() - startTime}ms`);