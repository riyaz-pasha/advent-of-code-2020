const { memoryGame } = require("../part2");
const input = require("../input");

describe('day15', () => {
    test.skip('0,3,6 =>30000000th position is 175594', () => {
        expect(memoryGame([0, 3, 6], 30000000)).toEqual(175594)
    })
    test.skip('1,3,2 =>30000000th position is 2578', () => {
        expect(memoryGame([1, 3, 2], 30000000)).toEqual(2578)
    })
    test.skip('2,1,3 =>30000000th position is 3544142', () => {
        expect(memoryGame([2, 1, 3], 30000000)).toEqual(3544142)
    })
    test.skip('1,2,3 =>30000000th position is 261214', () => {
        expect(memoryGame([1, 2, 3], 30000000)).toEqual(261214)
    })
    test.skip('2,3,1 =>30000000th position is 6895259', () => {
        expect(memoryGame([2, 3, 1], 30000000)).toEqual(6895259)
    })
    test.skip('3,2,1 =>30000000th position is 18', () => {
        expect(memoryGame([3, 2, 1], 30000000)).toEqual(18)
    })
    test.skip('3,1,2 =>30000000th position is 362', () => {
        expect(memoryGame([3, 1, 2], 30000000)).toEqual(362)
    })

    test.only('part2', () => {
        expect(memoryGame(input, 30000000)).toEqual(3745954)
    });
});