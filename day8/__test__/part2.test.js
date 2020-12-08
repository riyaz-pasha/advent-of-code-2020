const { getAccumulatorValue } = require("../part2");
const input = require("../input");
const testInput = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`

describe('day6', () => {
    test('testInput => 11', () => {
        expect(getAccumulatorValue(testInput)).toEqual(8)
    });

    test('part2', () => {
        expect(getAccumulatorValue(input)).toEqual(501)
    });
});