input = require('./input').getInput();

const numYesesFromAnyoneInGroup = input.map((x) => {
  x = x.replace(/\n/g, '').split('');
  return new Set(x).size;
});

console.log(numYesesFromAnyoneInGroup.reduce((a, b) => a + b));
