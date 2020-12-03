const input = require("./input").split("\n");
const right = 3
const down = 1
let x = 0
let y = 0
let count = 0

while (y < input.length) {
    if (input[y].charAt(x) === "#") {
        count += 1
        input[y] = input[y].substring(0, x) + "🚀" + input[y].substring(x + 1)
    } else {
        input[y] = input[y].substring(0, x) + "0" + input[y].substring(x + 1)
    }
    console.log(input[y])
    y += down
    x += right
    x = x % input[0].length
}
console.log("count", count) //252