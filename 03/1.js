common = require('./common');

const trees = common.getTrees();

const result = common.getNumTreesEncountered(trees, 1, 3);

console.log(result);
