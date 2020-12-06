input = require('./input').getInput();

const numYesesFromEveryoneInGroup = input.map((x) => {
  x = x.split('\n');
  if (x.length === 1) return x[0].length;

  const [first, ...rest] = x.map((y) => y.split(''));
  return first.filter((y) => rest.every((z) => z.includes(y))).length;
});

console.log(numYesesFromEveryoneInGroup.reduce((a, b) => a + b));
