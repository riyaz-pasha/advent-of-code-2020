const extractQuantity = (info) => {
    if (info.includes("no")) return;
    const [_, quantity, color] = /(\d+) (\w+ \w+) bags?/g.exec(info)
    return { [color]: parseInt(quantity) }
}

const extractRule = (line) => {
    const [, color, colorsInside] = /(\w+ \w+) bags contain (.*)\./.exec(line)
    const colorsInit = colorsInside
        .split(", ")
        .reduce((prevColors, currentColor) => ({ ...prevColors, ...extractQuantity(currentColor) }), {})
    return { [color]: colorsInit }
}

const getRules = (input) => input.split("\n")
    .reduce((prevRules, currentLine) => ({ ...prevRules, ...extractRule(currentLine) }), {})

const findKeysWhichHasValue = (color, rules) => {
    const bagsWhichHasCurrentColor = Object.keys(rules).filter(name => Object.keys(rules[name]).includes(color))
    return bagsWhichHasCurrentColor
}

const getBagsCount = (color, rules) => {
    const bagsWithCurrentColor = findKeysWhichHasValue(color, rules)
    return bagsWithCurrentColor
        .reduce((allBagsThatCanHold, currentColor) => [...allBagsThatCanHold, ...getBagsCount(currentColor, rules)], bagsWithCurrentColor);
}

const getNoOfBagColorsThatCanHold = (input) => {
    const bagName = "shiny gold"
    const rules = getRules(input)
    const count = new Set(getBagsCount(bagName, rules)).size
    return count
}

module.exports = {
    getNoOfBagColorsThatCanHold
}