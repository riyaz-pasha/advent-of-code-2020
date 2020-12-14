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

const applyMask = (mask, binary) => {
    let allPossibleAddresses = [binary]
    for (let index = 0; index < mask.length; index++) {
        const bit = mask[index];
        if (bit === "0") continue;
        else if (bit === "1") {
            allPossibleAddresses = [
                ...allPossibleAddresses.map((address) => `${address.substring(0, index)}1${address.substring(index + 1)}`)
            ]
            continue
        }
        else {
            allPossibleAddresses = [
                ...allPossibleAddresses.map((address) => `${address.substring(0, index)}0${address.substring(index + 1)}`),
                ...allPossibleAddresses.map((address) => `${address.substring(0, index)}1${address.substring(index + 1)}`)
            ]
        }
    }
    return allPossibleAddresses
}

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

            const binary = convertToBinary(memAddress)

            const possibleMomoryLocations = applyMask(currentBitMask, binary)
            const possibleMomoryLocationsWithValues = possibleMomoryLocations.reduce((all, currentAddr) => ({ ...all, [parseInt(currentAddr, 2)]: parseInt(decimalValue) }), {})

            mem = {
                ...mem,
                ...possibleMomoryLocationsWithValues
            }
        }
    }
    return Object.values(mem).reduce((sum, currentVal) => sum + currentVal, 0)
}

module.exports = {
    getSumOfAllValuesInMemory
}