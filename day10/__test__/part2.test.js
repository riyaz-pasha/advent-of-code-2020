const { getEncryptionWeakness } = require("../part2");
const input = require("../input");
const testInput = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`

describe('day9', () => {
    test('testInput => 62', () => {
        expect(getEncryptionWeakness(testInput,5)).toEqual(62)
    });

    test('part2', () => {
        expect(getEncryptionWeakness(input,25)).toEqual(129444555)
    });
});