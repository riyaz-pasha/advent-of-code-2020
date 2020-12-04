const validPassportsCount = require("../part1");
const input = require("../input").split("\n\n");
describe('day4', () => {
    test('part1', () => {
        expect(validPassportsCount(input)).toEqual(182)
    });
});