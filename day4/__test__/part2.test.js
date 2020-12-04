const validPassportsCount = require("../part2");
const input = require("../input");

describe('day4', () => {
    test('part2', () => {
        expect(validPassportsCount(input.split("\n\n"))).toEqual(109)
    });
});