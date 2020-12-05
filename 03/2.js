common = require('./common');

const slopes = [
  [1, 1],
  [1, 3],
  [1, 5],
  [1, 7],
  [2, 1],
];

const trees = common.getTrees();

const numTreesEncounteredBySlope = slopes.map((x) =>
  common.getNumTreesEncountered(trees, ...x)
);

const result = numTreesEncounteredBySlope.reduce((a, b) => a * b);

console.log(result);
