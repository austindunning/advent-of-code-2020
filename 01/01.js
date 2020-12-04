input = require('./input').getInput();

let values = {};

for (var i = 0; i < input.length; i++) {
    values[input[i]] = i;
}

for (var i = 0; i < input.length; i++) {
    let difference = 2020 - input[i];
    if (values.hasOwnProperty(difference) && values[difference] !== i) {
        console.log(input[i] * difference);
        return;
    }
}
