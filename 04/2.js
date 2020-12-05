input = require('./input').getInput();

const requiredFields = {
  byr: /\b(19[2-8][0-9]|199[0-9]|200[0-2])\b/,
  iyr: /\b(201[0-9]|2020)\b/,
  eyr: /\b(202[0-9]|2030)\b/,
  hgt: /\b(1[5-8][0-9]|19[0-3])cm\b|\b(59|6[0-9]|7[0-6])in\b/,
  hcl: /#[a-zA-Z0-9]{6}\b/,
  ecl: /\bamb|blu|brn|gry|grn|hzl|oth\b/,
  pid: /\b\d{9}\b/,
};

const passports = input.map((x) => {
  const fields = {};
  [...x.matchAll(/(\w+):(\S+)/g)].forEach((y) => {
    const [, key, value] = y;
    fields[key] = value;
  });
  return fields;
});

const isValid = (passport) =>
  Object.entries(requiredFields).every(
    (x) => Object.keys(passport).includes(x[0]) && x[1].test(passport[x[0]])
  );

console.log(passports.filter((x) => isValid(x)).length);
