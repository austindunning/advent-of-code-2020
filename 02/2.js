input = require('./input').getInput();

const valid = input.filter((x) => {
  const [, index1, index2, letter, password] = [
    ...x.matchAll(/(\d+)-(\d+) (\w): (\w+)/g),
  ][0];
  return (password[index1 - 1] === letter) ^ (password[index2 - 1] === letter);
});

console.log(valid.length);
