const getDiffs = (list) => {
    let diffOf1 = 0
    let diffOf3 = 1
    let prevNum = 0
    for (let index = 0; index < list.length; index++) {
        const currentNum = list[index];
        const diff = currentNum - prevNum
        if (diff === 1) diffOf1 += 1;
        else if (diff === 3) diffOf3 += 1;
        prevNum = currentNum
    }
    return [diffOf1, diffOf3]
}

const multOf1And3JoltDifferences = (input) => {
    const myAdaptersJoltage = input.split("\n").map(num => parseInt(num)).sort((first, second) => first - second)
    const [diffOf1, diffOf3] = getDiffs(myAdaptersJoltage)
    return diffOf1 * diffOf3
}

module.exports = {
    multOf1And3JoltDifferences
}