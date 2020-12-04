input = require('./input').getInput();

for (var i = 0; i < input.length; i++) {
    for (var j = i + 1; j < input.length; j++) {
        for (var k = j + 1; k < input.length; k++) {
            if (input[i] + input[j] + input[k] === 2020) {
                console.log(input[i] * input[j] * input[k]);
                return;
            }
        }
    }
}
