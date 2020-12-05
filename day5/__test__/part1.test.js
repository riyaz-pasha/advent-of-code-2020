const { getBoardingIDs, getHighestBoardingID } = require("../part1");
const input = require("../input").split("\n");
describe('day5', () => {
    test('BFFFBBFRRR seat ID is 567', () => {
        expect(getBoardingIDs(["BFFFBBFRRR"])).toEqual([567])
    });
    test('FFFBBBFRRR seat ID is 119', () => {
        expect(getBoardingIDs(["FFFBBBFRRR"])).toEqual([119])
    });
    test('BBFFBBFRLL seat ID is 820', () => {
        expect(getBoardingIDs(["BBFFBBFRLL"])).toEqual([820])
    });
    test('part1', () => {
        expect(getHighestBoardingID(getBoardingIDs(input))).toEqual(908)
    });
});