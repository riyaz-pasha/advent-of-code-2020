const array = require("./input");

for (let firstNumberIndex = 0; firstNumberIndex < array.length - 2; firstNumberIndex++) {
    const num1 = array[firstNumberIndex];
    for (let secondNumberIndex = firstNumberIndex + 1; secondNumberIndex < array.length - 1; secondNumberIndex++) {
        const num2 = array[secondNumberIndex];
        for (let thirdNumberIndex = secondNumberIndex + 1; thirdNumberIndex < array.length; thirdNumberIndex++) {
            const num3 = array[thirdNumberIndex];
            if (num1 + num2 + num3 === 2020) console.log(num1, num2, num3, num1 * num2 * num3)
        }
    }
}