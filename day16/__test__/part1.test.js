const { ticketScanningErrorRate } = require("../part1");
const input = require("../input");

const testInput = `class: 1-3 or 5-7
row: 6-11 or 33-44
seat: 13-40 or 45-50

your ticket:
7,1,14

nearby tickets:
7,3,47
40,4,50
55,2,20
38,6,12`
describe('day16', () => {
    test('test input error rate 71', () => {
        expect(ticketScanningErrorRate(testInput)).toEqual(71)
    })

    test('part1', () => {
        expect(ticketScanningErrorRate(input)).toEqual(20231)
    });
});