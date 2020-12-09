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

const getFirstInvalidNumber = (data, preambleSize) => {
    let invalidNumberIndex = preambleSize
    while (invalidNumberIndex < data.length) {
        const currentPreambleList = data.slice(invalidNumberIndex - preambleSize, invalidNumberIndex)
        const currentNumber = data[invalidNumberIndex]
        if (checkIsCurrentNumerIsSumOfAnyTwoNumber(currentNumber, currentPreambleList)) invalidNumberIndex += 1;
        else break;
    }
    return { invalidNumber: data[invalidNumberIndex], invalidNumberIndex }
}

const getSum = (list) => list.reduce((sum, currentNum) => sum + currentNum, 0)

const removeUntilLessThanSum = (num, list) => {
    const sum = getSum(list)
    let newList = []
    if (sum > num) newList = removeUntilLessThanSum(num, list.slice(1))
    else return list
    return newList
}
const getContiguousSetOfNumbers = (num, list) => {
    let rangeList = [];
    for (let index = 0; index < list.length; index++) {
        const currentNumber = list[index];
        rangeList = removeUntilLessThanSum(num,[...rangeList, currentNumber])
        const sum = getSum(rangeList)
        if (sum === num) return rangeList;
    }
    return []
}
const getEncryptionWeakness = (input, preambleSize) => {
    const data = input.split("\n").map(num => parseInt(num))
    const { invalidNumber, invalidNumberIndex } = getFirstInvalidNumber(data, preambleSize)
    const invalidNumberPreambleList = data.slice(0, invalidNumberIndex);
    const contiguousRange = getContiguousSetOfNumbers(invalidNumber, invalidNumberPreambleList)
    const smallest = Math.min(...contiguousRange)
    const largest = Math.max(...contiguousRange)
    return smallest + largest
}

module.exports = {
    getEncryptionWeakness
}