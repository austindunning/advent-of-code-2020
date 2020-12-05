input = require('./input').getInput();

const valid = input.filter((x) => {
  const [, min, max, letter, password] = [
    ...x.matchAll(/(\d+)-(\d+) (\w): (\w+)/g),
  ][0];
  const occurences = password.split('').filter((y) => y === letter).length;
  return occurences >= min && occurences <= max;
});

console.log(valid.length);
