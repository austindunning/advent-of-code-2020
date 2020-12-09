input = require('./input').getInput();

const visited = [];
let accumulator = 0;

let i = 0;
while (i < input.length) {
  if (visited.includes(i)) {
    console.log(accumulator);
    return;
  }

  visited.push(i);

  let [, operation, argument] = [...input[i].matchAll(/(\w+) ([-+]\d+)/g)][0];
  argument = Number(argument);

  if (operation === 'acc') {
    accumulator += argument;
  } else if (operation === 'jmp') {
    i += argument;
    continue;
  }

  i++;
}
