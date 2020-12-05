seatIds = require('./common')
  .getSeatIds()
  .sort((a, b) => a - b);

let i = Math.min(...seatIds);

for (var j = 0; j < seatIds.length; j++) {
  if (seatIds[j] !== i) {
    console.log(i);
    return;
  }

  i++;
}
