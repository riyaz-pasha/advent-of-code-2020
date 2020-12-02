const array = require("./input");

for (let index = 0; index < array.length - 1; index++) {
    const num1 = array[index];
    for (let secondNumberIndex = index + 1; secondNumberIndex < array.length; secondNumberIndex++) {
        const num2 = array[secondNumberIndex];
        if (num1 + num2 === 2020) console.log(num1, num2, num1 * num2)
    }
}