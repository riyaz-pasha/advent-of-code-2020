const getNoOfTreeInSlope = require("../part1");
const input = require("../input");

describe('day3', () => {
    test('part1', () => {
        expect(getNoOfTreeInSlope(input, { right: 3, down: 1 })).toEqual(252)
    });
});