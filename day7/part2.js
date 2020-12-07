const convertToObject = (info) => {
    if (info.includes("no")) return;
    const [_, quantity, bagName] = /(\d+) (.*)/g.exec(info)
    return { [bagName]: parseInt(quantity) }
}

const extractBagsCanHold = (bagInfo) => {
    const [bagName, ...contains] = bagInfo.replace(new RegExp(/(contain|,|\.)/, "g"), "")
        .split(/bags?/g)
    const bagsContains = contains
        .filter(str => str !== "")
        .reduce((prevObject, currentValue) => ({ ...prevObject, ...convertToObject(currentValue.trim()) }), {})
    return { [bagName.trim()]: bagsContains }
}

function getBagsCount(bagsInfo, bagName) {
    const sum = Object.values(bagsInfo[bagName]).reduce((sum, currentValue) => sum + currentValue, 0);
    const totalSum = Object.keys(bagsInfo[bagName])
        .reduce((count, name) => count + bagsInfo[bagName][name] * getBagsCount(bagsInfo, name), sum);
    return totalSum;
}

const getNoOfBagColorsThatCanHold = (input) => {
    const bagName = "shiny gold"
    const bagsInfo = input.split("\n")
        .reduce((prevObject, currentValue) => ({ ...prevObject, ...extractBagsCanHold(currentValue) }), {})
    const count = getBagsCount(bagsInfo, bagName)
    return count
}

module.exports = {
    getNoOfBagColorsThatCanHold
}