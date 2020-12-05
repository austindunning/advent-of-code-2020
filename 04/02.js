input = require('./input').getInput();

const requiredFieldPatterns = {
  byr: /\d{4}/,
  iyr: /\d{4}/,
  eyr: /\d{4}/,
  hgt: /\d+cm|in/,
  hcl: /#[a-zA-Z0-9]{8}/,
  ecl: /amb|blu|brn|gry|grn|hzl|oth/,
  pid: /\d{9}/,
};

const isWithinRange = (value, min, max) => {
  return value >= min && value <= max;
};

const validateRange = (name, value, unit) => {
  switch (name) {
    case 'byr':
      return isWithinRange(value, 1920, 2002);
    case 'iyr':
      return isWithinRange(value, 2010, 2020);
    case 'eyr':
      return isWithinRange(value, 2020, 2030);
    case 'hgt':
      if (unit === 'cm') return isWithinRange(value, 150, 193);
      else return isWithinRange(value, 59, 76);
  }
};

const passportFields = input.map((x) => {
  const fields = {};
  [...x.matchAll(/(\w+):(\S+)/g)].forEach((y) => {
    const [, key, value] = y;
    fields[key] = value;
  });
  return fields;
});

console.log(passportFields);
