const { getAccumulatorValue } = require("../part1");
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

describe('day7', () => {
    test('testInput => 5', () => {
        expect(getAccumulatorValue(testInput)).toEqual(5)
    });

    test('part1', () => {
        expect(getAccumulatorValue(input)).toEqual(1217)
    });
});