const { getTheCountOfQuestionsAnsweredAsYes } = require("../part1");
const input = require("../input");
const testInput = `abc

a
b
c

ab
ac

a
a
a
a

b`

describe('day5', () => {
    test('testInput => 11', () => {
        expect(getTheCountOfQuestionsAnsweredAsYes(testInput)).toEqual(11)
    });

    test('part1', () => {
        expect(getTheCountOfQuestionsAnsweredAsYes(input)).toEqual(6504)
    });
});