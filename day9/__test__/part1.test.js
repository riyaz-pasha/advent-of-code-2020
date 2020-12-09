const { getFirstInvalidNumber } = require("../part1");
const input = require("../input");
const testInput = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`

describe('day9', () => {
    test('testInput => 127', () => {
        expect(getFirstInvalidNumber(testInput,5)).toEqual(127)
    });

    test('part1', () => {
        expect(getFirstInvalidNumber(input,25)).toEqual(1124361034)
    });
});