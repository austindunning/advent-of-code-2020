input = require('./input').getInput();

exports.getTrees = () => {
  const trees = [];
  for (var y = 0; y < input.length; y++) {
    for (var x = 0; x < input[y].length; x++) {
      if (input[y][x] === '#') trees.push(`${x},${y}`);
    }
  }
  return trees;
}

exports.getNumTreesEncountered = (trees, rise, run) => {
  let [slopeX, slopeY] = [0, 0];
  const coordinates = [];
  while (slopeY <= input.length) {
    slopeX += run;
    slopeY += rise;
    if (slopeX >= input[0].length) slopeX -= input[0].length;

    coordinates.push(`${slopeX},${slopeY}`);
  }

  return coordinates.filter((x) => trees.includes(x)).length;
};
