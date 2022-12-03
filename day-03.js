const startTime = new Date().getTime();
const dayNumber = '03';

// load the file
const fs = require('fs');
const path = require('path');
const appData = fs.readFileSync(path.resolve(__dirname, `day-${dayNumber}.txt`), 'utf8').split('\n');

const priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

// part 1
let total = 0;

for (let i = 0; i < appData.length; i += 1) {
  const compartmentLength = appData[i].length / 2;
  const compartment1 = appData[i].slice(0, compartmentLength);
  const compartment2 = appData[i].slice(compartmentLength, compartmentLength * 2);

  const itemsCompartment1 = compartment1.split('');
  let doubleItem = '';

  itemsCompartment1.forEach(item => {
    if (compartment2.indexOf(item) > -1) {
      doubleItem = item;
    };
  });

  total += (priorities.indexOf(doubleItem) + 1);
}

console.log('part 1', total);

// part 2
total = 0;

for (let i = 0; i < appData.length; i += 6) {
  const group1 = [appData[i], appData[i + 1], appData[i + 2]];
  const group2 = [appData[i + 3], appData[i + 4], appData[i + 5]];

  const group1items = group1[0].split('');
  const group2items = group2[0].split('');

  let doubleItem = '';

  group1items.forEach(item => {
    if (group1[1].indexOf(item) > -1 && group1[2].indexOf(item) > -1) {
      doubleItem = item;
    };
  });

  total += (priorities.indexOf(doubleItem) + 1);

  group2items.forEach(item => {
    if (group2[1].indexOf(item) > -1 && group2[2].indexOf(item) > -1) {
      doubleItem = item;
    };
  });

  total += (priorities.indexOf(doubleItem) + 1);
}

console.log('part 2', total);


// show runtime for fun
console.log('runtime', `${new Date().getTime() - startTime}ms`);