const convertIntoBinary = (boardingIdEncoded) => {
    const binary = boardingIdEncoded.replace(/[FL]/g, 0).replace(/[BR]/g, 1)
    return binary
}

const decodBoardingId = (boardingIdEncoded) => convertIntoBinary(boardingIdEncoded)
    .split("")
    .reverse()
    .reduce((prevValue, currentValue, currentIndex) => prevValue + (parseInt(currentValue) * (2 ** currentIndex)), 0)

const getBoardingIDs = (input) => input.map(decodBoardingId)

const getHighestBoardingID = (input) => input.reduce((prevValue, currentValue) => prevValue > currentValue ? prevValue : currentValue)

module.exports = {
    getBoardingIDs,
    getHighestBoardingID
}