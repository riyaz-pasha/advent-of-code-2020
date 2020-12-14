const convertToBinary = (decimal) => {
    let decimalValue = parseInt(decimal)
    let binary = ""
    while (decimalValue) {
        binary = (decimalValue % 2) + binary
        decimalValue = parseInt(decimalValue / 2)
    }
    const binaryWithPadding = ("0".repeat(36 - binary.length)) + binary;
    return binaryWithPadding;
}

const applyMask = (mask, binary) => mask.split("")
    .reduce((newValue, currentDigit, currentIndex) => newValue + (currentDigit === "X" ? binary[currentIndex] : mask[currentIndex]), "")

const getSumOfAllValuesInMemory = (input) => {
    const data = input.split("\n")
    let currentBitMask = ""
    let mem = {}
    for (let index = 0; index < data.length; index++) {
        const currentLine = data[index];
        if (currentLine.startsWith("mask")) {
            currentBitMask = currentLine.match(/(?<=mask = ).*/)[0]
        }
        else {
            const [_, memAddress, decimalValue] = /mem\[(\d+)\] = (\d+)/.exec(currentLine)

            const binary = convertToBinary(decimalValue)

            const decimalValueAfterApplyingMask = parseInt(applyMask(currentBitMask, binary), 2)

            mem = { ...mem, [memAddress]: decimalValueAfterApplyingMask }
        }
    }
    return Object.values(mem).reduce((sum, currentVal) => sum + currentVal, 0)
}

module.exports = {
    getSumOfAllValuesInMemory
}