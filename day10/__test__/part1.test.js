const { multOf1And3JoltDifferences } = require("../part1");
const input = require("../input");
const test1 = `16
10
15
5
1
11
7
19
6
12
4`
const test2=`28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`
describe('day10', () => {
    test('testInput1 => 35', () => {
        expect(multOf1And3JoltDifferences(test1)).toEqual(35)
    });test('testInput1 => 220', () => {
        expect(multOf1And3JoltDifferences(test2)).toEqual(220)
    });

    test('part1', () => {
        expect(multOf1And3JoltDifferences(input)).toEqual(2272)
    });
});