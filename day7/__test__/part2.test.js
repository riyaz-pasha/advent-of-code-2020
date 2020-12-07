const { getNoOfBagColorsThatCanHold } = require("../part2");
const input = require("../input");
const testInput = `shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain 2 dark yellow bags.
dark yellow bags contain 2 dark green bags.
dark green bags contain 2 dark blue bags.
dark blue bags contain 2 dark violet bags.
dark violet bags contain no other bags.`

describe('day6', () => {
    test('testInput => 11', () => {
        expect(getNoOfBagColorsThatCanHold(testInput)).toEqual(126)
    });

    test('part2', () => {
        expect(getNoOfBagColorsThatCanHold(input)).toEqual(58175)
    });
});