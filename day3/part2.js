const getNoOfTreeWithSlope = require("./part1");
const d1r1 = getNoOfTreeWithSlope({ down: 1, right: 1 })
console.log("d1r1", d1r1)
const d1r3 = getNoOfTreeWithSlope({ down: 1, right: 3 })
console.log("d1r3", d1r3)
const d1r5 = getNoOfTreeWithSlope({ down: 1, right: 5 })
console.log("d1r5", d1r5)
const d1r7 = getNoOfTreeWithSlope({ down: 1, right: 7 })
console.log("d1r7", d1r7)
const d2r1 = getNoOfTreeWithSlope({ down: 2, right: 1 })
console.log("d2r1", d2r1)

const mult = d1r1 * d1r3 * d1r5 * d1r7 * d2r1
console.log("🚀 mult", mult) // 2608962048