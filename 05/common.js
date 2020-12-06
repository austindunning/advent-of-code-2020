input = require('./input').getInput();

const getRowOrColumn = (arr, instructions) => {
  instructions.forEach((x) => {
    const halfIndex = arr.length / 2;
    if (['B', 'R'].includes(x)) {
      arr.splice(0, halfIndex);
    } else {
      arr.splice(halfIndex);
    }
  });
  return arr[0];
};

exports.getSeatIds = () =>
  input.map((x) => {
    x = x.split('');
    const row = getRowOrColumn([...Array(128).keys()], x.splice(0, 7));
    const column = getRowOrColumn([...Array(8).keys()], x);
    return row * 8 + column;
  });
