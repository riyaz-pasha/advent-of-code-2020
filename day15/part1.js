
const memoryGame = (input, position = 2020) => {
    let latestValues = [...input]
    for (let index = input.length - 1; index < position; index++) {
        const currentNumber = latestValues[index];
        const currentNumberPreviousIndex = latestValues.slice(0, index).lastIndexOf(currentNumber);
        if (currentNumberPreviousIndex === -1) latestValues.push(0)
        else latestValues.push(index - currentNumberPreviousIndex);
    }

    return latestValues[position - 1]
}

console.log(memoryGame([0, 3, 6]))

module.exports = {
    memoryGame
}