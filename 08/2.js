input = require('./input').getInput();

const instructions = input.map((x, i) => {
  const [, op, arg] = [...x.matchAll(/(\w+) ([-+]\d+)/g)][0];
  return { operation: op, argument: Number(arg), changed: false };
});

let visited = [];
let accumulator = 0;
let oneChanged = false;

let i = 0;
while (i < instructions.length) {
  if (visited.includes(i)) {
    visited = [];
    accumulator = 0;
    oneChanged = false;
    i = 0;
  }

  visited.push(i);

  switch (instructions[i].operation) {
    case 'acc':
      accumulator += instructions[i].argument;
      break;
    case 'jmp':
      if (!oneChanged && !instructions[i].changed) {
        instructions[i].changed = true;
        oneChanged = true;
      } else {
        i += instructions[i].argument;
        continue;
      }
      break;
    case 'nop':
      if (!oneChanged && !instructions[i].changed) {
        instructions[i].changed = true;
        oneChanged = true;
        i += instructions[i].argument;
        continue;
      }
      break;
  }

  i++;
}

console.log(accumulator);
