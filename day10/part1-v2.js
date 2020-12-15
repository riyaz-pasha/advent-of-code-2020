const input = require("./input")

const isCurrentNumerIsSumOfAnyTwoNumber = (invalidNumber, preambleList) =>
    preambleList.some(currentNumber => preambleList.includes(invalidNumber - currentNumber))

const findFirstInvalidNumber = (data, preambleSize) => data.slice(preambleSize)
    .find((number, index) => !isCurrentNumerIsSumOfAnyTwoNumber(number, data.slice(index, index + preambleSize)))

const getFirstInvalidNumber = (input, preambleSize) =>
    findFirstInvalidNumber(input.split("\n").map(num => parseInt(num)), preambleSize)

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
console.log(getFirstInvalidNumber(input, 25))


module.exports = {
    getFirstInvalidNumber
}