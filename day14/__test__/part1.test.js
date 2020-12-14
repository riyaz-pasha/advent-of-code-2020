const { getSumOfAllValuesInMemory } = require("../part1");
const input = require("../input");
const test1 = `mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
mem[8] = 11
mem[7] = 101
mem[8] = 0`
describe('day14', () => {
    test('testInput1 => 165', () => {
        expect(getSumOfAllValuesInMemory(test1)).toEqual(165)
    })

    test('part1', () => {
        expect(getSumOfAllValuesInMemory(input)).toEqual(7440382076205)
    });
});