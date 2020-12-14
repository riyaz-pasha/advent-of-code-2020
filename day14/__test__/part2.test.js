const { getSumOfAllValuesInMemory } = require("../part2");
const input = require("../input");
const test1 = `mask = 000000000000000000000000000000X1001X
mem[42] = 100
mask = 00000000000000000000000000000000X0XX
mem[26] = 1`

describe('day14', () => {
    test('testInput => 208', () => {
        expect(getSumOfAllValuesInMemory(test1)).toEqual(208)
    });

    test('part2', () => {
        expect(getSumOfAllValuesInMemory(input)).toEqual(4200656704538)
    });
});