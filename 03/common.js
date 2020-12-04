input = require('./input').getInput();

exports.getTreeCoordinates = () => {
    const trees = [];
    for (var y = 0; y < input.length; y++) {
        for (var x = 0; x < input[y].length; x++) {
            if (input[y][x] === '#') trees.push(`${x},${y}`);
        }
    }
    return trees;
}

exports.getSlopeCoordinates = (rise, run) => {
    let [x, y] = [0, 0];
    const coordinates = [];
    while (y <= input.length) {
        x += run;
        y += rise;
        if (x >= input[0].length)
            x -= input[0].length;

        coordinates.push(`${x},${y}`);
    }
    return coordinates;
}

exports.getNumberOfTreesEncountered = (treeCoordinates, slopeCoordinates) =>
    slopeCoordinates.filter(x => treeCoordinates.includes(x)).length;
