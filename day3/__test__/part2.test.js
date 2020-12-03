const getProductOfTreesPathsWithSlope = require("../part2");
const input = require("../input");

describe('day3', () => {
    test('part2', () => {
        expect(getProductOfTreesPathsWithSlope(input, [
            { down: 1, right: 1 },
            { down: 1, right: 3 },
            { down: 1, right: 5 },
            { down: 1, right: 7 },
            { down: 2, right: 1 },
        ])).toEqual(2608962048)
    });
});