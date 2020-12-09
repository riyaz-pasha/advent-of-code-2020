const isCurrentNumerIsSumOfAnyTwoNumber = (invalidNumber, preambleList) =>
    preambleList.some(currentNumber => preambleList.includes(invalidNumber - currentNumber))

const getFirstInvalidNumber = (input, preambleSize) => {
    const data = input.split("\n").map(num => parseInt(num))

    for (let invalidNumberIndex = preambleSize; invalidNumberIndex < data.length; invalidNumberIndex++) {
        const currentPreambleList = data.slice(invalidNumberIndex - preambleSize, invalidNumberIndex)
        const currentNumber = data[invalidNumberIndex]
        if (!isCurrentNumerIsSumOfAnyTwoNumber(currentNumber, currentPreambleList)) return data[invalidNumberIndex];

    }
}

const testInput = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`
console.log(getFirstInvalidNumber(testInput, 5))


module.exports = {
    getFirstInvalidNumber
}