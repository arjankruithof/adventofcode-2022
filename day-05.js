const startTime = new Date().getTime();
const dayNumber = '05';

// load the file
const fs = require('fs');
const path = require('path');
const appData = fs.readFileSync(path.resolve(__dirname, `day-${dayNumber}.txt`), 'utf8').split('\n\n');

// parse the data
const cratesInput = appData[0].split("\n").reverse();
const crates = Array.from(Array(10), () => []);

for (let i = 1; i < cratesInput.length; i += 1) {
  const row = cratesInput[i].match(/.{1,4}/g);

  for (let r = 0; r < row.length; r += 1) {
    let crate = row[r].replace('[','').replace(']','').replaceAll(' ','');
    if (crate.length) {
      crates[r].push(crate);
    }
  };
}

const instructions = appData[1].split('\n');

// get the solution
function getSolution(part) {
  let solution = '';

  for (let i = 0; i < instructions.length; i += 1) {
    const instruction = instructions[i].replace('move ','').replace('from ','').replace('to ','').split(' ').map(Number);

    const items = crates[instruction[1] - 1].slice(instruction[0] * -1);
    const itemsToMove = part === 1 ? items : items.reverse();

    crates[instruction[1] - 1] = crates[instruction[1] - 1].slice(0, instruction[0] * -1)
    crates[instruction[2] - 1] = crates[instruction[2] - 1].concat(itemsToMove);
  }

  for (let i = 0; i < crates.length; i += 1) {
    if (crates[i].length) {
      solution += crates[i][crates[i].length - 1];
    }
  }

  return solution;
}

console.log(getSolution(1));
console.log(getSolution(2));

// show runtime for fun
console.log('runtime', `${new Date().getTime() - startTime}ms`);