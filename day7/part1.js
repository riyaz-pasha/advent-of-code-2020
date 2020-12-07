const convertToObject = (info) => {
    if (info.includes("no")) return;
    const [_, quantity, bagName] = /(\d+) (.*)/g.exec(info)
    return { [bagName]: quantity }
}

const extractBagsCanHold = (bagInfo) => {
    const [bagName, ...contains] = bagInfo.replace(new RegExp(/(contain|,|\.)/, "g"), "")
        .split(/bags?/g)
    const bagsContains = contains
        .filter(str => str !== "")
        .reduce((prevObject, currentValue) => ({ ...prevObject, ...convertToObject(currentValue.trim()) }), {})
    return { [bagName.trim()]: bagsContains }
}

const findKeysWhichHasValue = (bagsInfo, bagName) => {
    return Object.keys(bagsInfo)
        .filter(name => Object.keys(bagsInfo[name]).includes(bagName))
}

function getBagsCount(bagsInfo, bagName) {
    const bags = findKeysWhichHasValue(bagsInfo, bagName)
    return bags
        .reduce((allBagsThatCanHold, bagName) => [...allBagsThatCanHold, ...getBagsCount(bagsInfo, bagName)], bags);
}

const getNoOfBagColorsThatCanHold = (input) => {
    const bagName = "shiny gold"
    const bagsInfo = input.split("\n")
    .reduce((prevObject, currentValue) => ({ ...prevObject, ...extractBagsCanHold(currentValue) }), {})
    const count = new Set(getBagsCount(bagsInfo, bagName)).size
    return count
}

module.exports = {
    getNoOfBagColorsThatCanHold
}