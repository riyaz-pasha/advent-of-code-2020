const extractRangesFromRules = (rules) => rules.reduce((ranges, currentLine) => {
    const [_, firstRange, secondRange] = /\w+: (\d+-\d+) or (\d+-\d+)/.exec(currentLine);

    ranges.push(firstRange.split("-").map(Number))
    ranges.push(secondRange.split("-").map(Number))

    return ranges
}, [])

const isValuesWithInRange = (ranges, value) => ranges.find(([min, max]) => min <= value && value <= max)

const ticketScanningErrorRate = (input) => {
    const [rulesForTicketFields, numbersOnMyTicket, numbersOnNearbyTickets] = input.split("\n\n")
    const ranges = extractRangesFromRules(rulesForTicketFields.split("\n")).sort((a, b) => a[0] - b[0])

    const nearbyTicketsValues = numbersOnNearbyTickets.split("\n").slice(1,)
        .reduce((values, eachRow) => [...values, ...eachRow.split(",").map(Number)], [])
        .sort((a, b) => a - b)

    const invalidValues = nearbyTicketsValues.filter((value) => !isValuesWithInRange(ranges, value))
    return invalidValues.reduce((sum, currentNum) => sum + currentNum, 0)
}


module.exports = {
    ticketScanningErrorRate
}
