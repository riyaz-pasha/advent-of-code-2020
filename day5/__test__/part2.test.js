const getMissingId = require("../part2");
const input = require("../input").split("\n");

describe('day5', () => {
    test('part2', () => {
        expect(getMissingId(input)).toEqual(619)
    });
});