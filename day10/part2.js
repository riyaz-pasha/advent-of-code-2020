const possiblitiesWithCurrentNumber = (list, currentNum, currentNumIndex) => {
    const count = [1, 2, 3].filter(num => list.includes(currentNum + num) && [1, 2, 3].includes(list[currentNumIndex + 1] - currentNum))
    console.log(`🚀 ${currentNum} count`, count)
}
const getNoOfCombinations = (list) =>
    list.reduce((prevCount, currentNum, currentNumIndex) => prevCount + possiblitiesWithCurrentNumber(list, currentNum, currentNumIndex), 0)


const multOf1And3JoltDifferences = (input) => {
    const myAdaptersJoltage = input.split("\n").map(num => parseInt(num)).sort((first, second) => first - second)
    const combinations = getNoOfCombinations([0, ...myAdaptersJoltage, myAdaptersJoltage[myAdaptersJoltage.length - 1]])
    return combinations
}
const test1 = `16
10
15
5
1
11
7
19
6
12
4`
console.log(multOf1And3JoltDifferences(test1))
const test2=`28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`
console.log(multOf1And3JoltDifferences(test2))
module.exports = {
    multOf1And3JoltDifferences
}

