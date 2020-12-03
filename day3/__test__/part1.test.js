const getNoOfTreeWithSlope = require("../part1");

describe('part1', () => {
    test('right 3 down 1', () => {
        expect(getNoOfTreeWithSlope({ right: 3, down: 1 })).toEqual(252)
    });
});