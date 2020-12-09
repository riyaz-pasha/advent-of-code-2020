const checkIsCurrentNumerIsSumOfAnyTwoNumber = (num, preambleList) => {
    for (let firstNumberIndex = 0; firstNumberIndex < preambleList.length - 1; firstNumberIndex++) {
        const firstNum = preambleList[firstNumberIndex];
        for (let secondNumberIndex = firstNumberIndex + 1; secondNumberIndex < preambleList.length; secondNumberIndex++) {
            const seconfNum = preambleList[secondNumberIndex];
            if (firstNum + seconfNum === num) {
                return true
            }
        }
    }
    return false
}

const getFirstInvalidNumber = (input, preambleSize) => {
    const data = input.split("\n").map(num => parseInt(num))
    let invalidNumberIndex = preambleSize

    while (invalidNumberIndex < data.length) {
        const currentPreambleList = data.slice(invalidNumberIndex - preambleSize, invalidNumberIndex)
        const currentNumber = data[invalidNumberIndex]
        if (checkIsCurrentNumerIsSumOfAnyTwoNumber(currentNumber, currentPreambleList)) invalidNumberIndex += 1;
        else break;
    }
    return data[invalidNumberIndex]
}

// console.log(getFirstInvalidNumber(testInput, 5))

module.exports = {
    getFirstInvalidNumber
}