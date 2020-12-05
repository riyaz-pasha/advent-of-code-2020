const input = require("./input")

const BINARY = 2

const convertIntoBinary = (boardingIdEncoded) => boardingIdEncoded.replace(/[FL]/g, 0).replace(/[BR]/g, 1)

const decodBoardingId = (boardingIdEncoded) => parseInt(convertIntoBinary(boardingIdEncoded), BINARY)

const getBoardingIDs = (input) => input.map(decodBoardingId)

const getHighestBoardingID = (input) => Math.max(...getBoardingIDs(input))

console.log("🚀 getHighestBoardingID", getHighestBoardingID(input.split("\n"))) //908

module.exports = {
    getBoardingIDs,
    getHighestBoardingID
}