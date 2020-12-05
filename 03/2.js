common = require('./common');

const slopes = [
  [1, 1],
  [1, 3],
  [1, 5],
  [1, 7],
  [2, 1],
];

const numTreesEncounteredBySlope = slopes.map((x) =>
  common.getNumTreesEncountered(...x)
);

console.log(numTreesEncounteredBySlope.reduce((a, b) => a * b));
