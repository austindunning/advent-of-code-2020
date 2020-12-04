common = require('./common')

const treeCoordinates = common.getTreeCoordinates();
const slopeCoordinates = common.getSlopeCoordinates(1, 3);

console.log(common.getNumberOfTreesEncountered(treeCoordinates, slopeCoordinates));
