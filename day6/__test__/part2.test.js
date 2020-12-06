const { getTheCountOfQuestionsAnsweredAsYes } = require("../part2");
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

describe('day6', () => {
    test('testInput => 11', () => {
        expect(getTheCountOfQuestionsAnsweredAsYes(testInput)).toEqual(6)
    });

    test('part2', () => {
        expect(getTheCountOfQuestionsAnsweredAsYes(input)).toEqual(3351)
    });
});