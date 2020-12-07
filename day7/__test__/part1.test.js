const { getNoOfBagColorsThatCanHold } = require("../part1");
const input = require("../input");
const testInput = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`

describe('day7', () => {
    test('testInput => 4', () => {
        expect(getNoOfBagColorsThatCanHold(testInput)).toEqual(4)
    });

    test('part1', () => {
        expect(getNoOfBagColorsThatCanHold(input)).toEqual(139)
    });
});