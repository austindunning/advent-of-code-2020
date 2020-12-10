input = require('./input').getInput();

const containsAddends = (numbers, targetSum) => {
  const numbersObj = {};

  numbers.forEach((x, i) => {
    numbersObj[x] = i;
  });

  for (var i = 0; i < numbers.length; i++) {
    const difference = targetSum - numbers[i];
    if (
      numbersObj.hasOwnProperty(difference) &&
      numbersObj[difference] !== i &&
      difference !== numbers[i]
    ) {
      return true;
    }
  }

  return false;
};

for (var i = 25; i < input.length; i++) {
  const previous25 = input.slice(i - 25, i);
  if (!containsAddends(previous25, input[i])) {
    console.log(input[i]);
    return;
  }
}
