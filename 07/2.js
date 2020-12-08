input = require('./input').getInput();

const bags = {};

input.forEach((x) => {
  const [outermost, ...contents] = [
    ...x.matchAll(/(\d*)\s?(\w+\s\w+)\sbag/g),
  ].map((y) => {
    return { colour: y[2], count: y[1] };
  });

  bags[outermost.colour] = {};
  contents.forEach((y) => {
    if (!y.count) return;

    bags[outermost.colour][y.colour] = Number(y.count);
  });
});

const getDirectlyContainingBags = (colours) => {
  return colours.map((x) => bags[x]);
};
