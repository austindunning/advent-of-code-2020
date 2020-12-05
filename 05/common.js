input = require('./input').getInput();

const getRowOrColumn = (arr, instructions) => {
  instructions.forEach((x) => {
    if (['B', 'R'].includes(x)) {
      arr.splice(0, arr.length / 2);
    } else {
      arr.splice(arr.length / 2);
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
