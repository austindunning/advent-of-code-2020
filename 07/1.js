input = require('./input').getInput();

const bags = {};

input.forEach((x) => {
  const [outermost, ...contents] = [...x.matchAll(/(\w+\s\w+)\sbag/g)].map(
    (y) => y[1]
  );
  bags[outermost] = contents;
});

const getDirectlyContainingBags = (colours) => {
  return colours
    .map((x) => Object.keys(bags).filter((y) => bags[y].includes(x)))
    .flat();
};

let containingBags = getDirectlyContainingBags(['shiny gold']);
let total = [...containingBags];
while (containingBags.length > 0) {
  containingBags = getDirectlyContainingBags(containingBags);
  total = total.concat(containingBags);
}

console.log(new Set(total).size);
