const input = require("./input")

const extractInstruction = (instruction) => {
    const [_, operation, sign, number] = /(acc|nop|jmp) ([+-])(\d+)/.exec(instruction)
    return { operation, sign, number: parseInt(number), isVisited: false }
}

const executeInstructions = (instructions) => {
    let currentInstructionIndex = 0
    let acc = 0
    while (instructions[currentInstructionIndex].isVisited === false) {
        instructions[currentInstructionIndex].isVisited = true
        switch (instructions[currentInstructionIndex].operation) {
            case "acc":
                acc = instructions[currentInstructionIndex].sign === "+" ?
                    acc + instructions[currentInstructionIndex].number :
                    acc - instructions[currentInstructionIndex].number
                currentInstructionIndex += 1;
                break;
            case "jmp":
                currentInstructionIndex = instructions[currentInstructionIndex].sign === "+" ?
                    currentInstructionIndex + instructions[currentInstructionIndex].number :
                    currentInstructionIndex - instructions[currentInstructionIndex].number

                break;
            case "nop":
                currentInstructionIndex += 1;
                break;
        }
    }
    return acc;
}

const getAccumulatorValue = (input) => executeInstructions(input.split("\n").map(extractInstruction))

module.exports = {
    getAccumulatorValue
}