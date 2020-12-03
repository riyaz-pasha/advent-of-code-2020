const TREE = "#";

const getNoOfTreeWithSlope = ({ right, down }) => {
    const input = require("./input").split("\n");
    let x = 0
    let y = 0
    let treesCount = 0
    while (y < input.length) {
        if (input[y].charAt(x) === TREE) {
            treesCount += 1
            input[y] = input[y].substring(0, x) + "🚀" + input[y].substring(x + 1)
        } else {
            input[y] = input[y].substring(0, x) + "0" + input[y].substring(x + 1)
        }
        // console.log(input[y])
        y += down
        x += right
        x = x % input[0].length
    }

    return treesCount
}

module.exports = getNoOfTreeWithSlope