seatIds = require('./common').getSeatIds();

for (var i = Math.min(...seatIds); i < Math.max(...seatIds); i++) {
  if (!seatIds.includes(i)) console.log(i);
}
