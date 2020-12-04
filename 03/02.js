common = require('./common')

const slopes = [
    [1, 1],
    [1, 3],
    [1, 5],
    [1, 7],
    [2, 1]
];

const treesEncounteredBySlope = slopes.map(x => {
    const treeCoordinates = common.getTreeCoordinates();
    const slopeCoordinates = common.getSlopeCoordinates(...x);
    return common.getNumberOfTreesEncountered(treeCoordinates, slopeCoordinates);
});

const result = treesEncounteredBySlope.reduce((a, b) => a * b);

console.log(result);
