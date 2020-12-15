const { memoryGame } = require("../part1");
const input = require("../input");
const test1 = `mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
mem[8] = 11
mem[7] = 101
mem[8] = 0`
describe('day15', () => {
    test('0,3,6 =>2020th position is 436', () => {
        expect(memoryGame([0, 3, 6])).toEqual(436)
    })
    test('1,3,2 =>2020th position is 1', () => {
        expect(memoryGame([1, 3, 2])).toEqual(1)
    })
    test('2,1,3 =>2020th position is 10', () => {
        expect(memoryGame([2, 1, 3])).toEqual(10)
    })
    test('1,2,3 =>2020th position is 27', () => {
        expect(memoryGame([1, 2, 3])).toEqual(27)
    })
    test('2,3,1 =>2020th position is 78', () => {
        expect(memoryGame([2, 3, 1])).toEqual(78)
    })
    test('3,2,1 =>2020th position is 438', () => {
        expect(memoryGame([3, 2, 1])).toEqual(438)
    })
    test('3,1,2 =>2020th position is 1836', () => {
        expect(memoryGame([3, 1, 2])).toEqual(1836)
    })

    test('part1', () => {
        expect(memoryGame(input)).toEqual(1238)
    });
});