const input = require("./input")
const { getBoardingIDs } = require("./part1")

const boardingIDsSorted = (input) => getBoardingIDs(input).sort(function (a, b) { return a - b })

const getMissingId = (input) => {
    const sortedBoardingIDs = boardingIDsSorted(input)
    const firstNumber = sortedBoardingIDs[0]
    return sortedBoardingIDs
        .reduce((prevValue, currentValue) => prevValue + 1 === currentValue ? currentValue : prevValue, firstNumber) + 1
}

module.exports = getMissingId