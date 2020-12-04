input = require('./input').getInput();

let valid = 0;

input.forEach(x => {
    const [, index1, index2, letter, password] = [...x.matchAll(/(\d+)-(\d+) (\w): (\w+)/g)][0];
    if (password[index1 - 1] === letter ^ password[index2 - 1] === letter) valid++;
});

console.log(valid);
