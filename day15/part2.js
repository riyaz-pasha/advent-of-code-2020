const memoryGame = (input, position = 2020) => {

    const map = new Map(input.map((x, i) => [x, i]));

    let currentNumber;
    let nextNumber = 0;
    for (let i = input.length; i < position; i++) {
        currentNumber = nextNumber;
        nextNumber = map.has(currentNumber) ? i - map.get(currentNumber) : 0;
        map.set(currentNumber, i);
    }

    return currentNumber;
}

// console.log(memoryGame([9, 6, 0, 10, 18, 2, 1], 30000000))

module.exports = {
    memoryGame
}