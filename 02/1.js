input = require('./input').getInput();

let valid = 0;

input.forEach((x) => {
  const [, min, max, letter, password] = [
    ...x.matchAll(/(\d+)-(\d+) (\w): (\w+)/g),
  ][0];

  const occurences = password.split('').filter((y) => y === letter).length;
  if (occurences >= min && occurences <= max) valid++;
});

console.log(valid);
