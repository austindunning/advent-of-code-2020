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

let shinyGoldContainers = getDirectlyContainingBags(['shiny gold']);
const totalShinyGoldContainers = new Set();
while (shinyGoldContainers.length > 0) {
  shinyGoldContainers.forEach((x) => totalShinyGoldContainers.add(x));
  shinyGoldContainers = getDirectlyContainingBags(shinyGoldContainers);
}

console.log(totalShinyGoldContainers.size);
