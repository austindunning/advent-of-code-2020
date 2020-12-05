input = require('./input').getInput();

const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

const passports = input.map((x) => [...x.matchAll(/(\w+):/g)].map((y) => y[1]));

const isValid = (passport) => requiredFields.every((x) => passport.includes(x));

console.log(passports.filter((x) => isValid(x)).length);
