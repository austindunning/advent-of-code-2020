input = require('./input').getInput();

const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

const passportFields = input.map((x) =>
  [...x.matchAll(/(\w+):/g)].map((y) => y[1])
);

const isValid = (passportFields, requiredFields) =>
  requiredFields.every((x) => passportFields.includes(x));

console.log(passportFields.filter((x) => isValid(x, requiredFields)).length);