const input = require("./input")

const extractInstruction = (instruction) => {
    const [_, operation, sign, number] = /(acc|nop|jmp) ([+-])(\d+)/.exec(instruction)
    return { operation, sign, number: parseInt(number), isVisited: false }
}

const executeInstructions = (instructions) => {

    //execute instructions
    let currentInstructionIndex = 0
    let acc = 0
    while (currentInstructionIndex < instructions.length && instructions[currentInstructionIndex].isVisited === false) {
        instructions[currentInstructionIndex].isVisited = true
        switch (instructions[currentInstructionIndex].operation) {
            case "acc":
                acc = instructions[currentInstructionIndex].sign === "+" ?
                    acc + instructions[currentInstructionIndex].number :
                    acc - instructions[currentInstructionIndex].number
                currentInstructionIndex += 1;
                break;
            case "jmp":
                if (instructions[currentInstructionIndex].number === 0) currentInstructionIndex += 1;
                else currentInstructionIndex = instructions[currentInstructionIndex].sign === "+" ?
                    currentInstructionIndex + instructions[currentInstructionIndex].number :
                    currentInstructionIndex - instructions[currentInstructionIndex].number
                break;
            case "nop":
                currentInstructionIndex += 1;
                break;
        }
    }
    const isLastInstructionExecuted = instructions[instructions.length - 1].isVisited
    return isLastInstructionExecuted ? acc : 0;
}

const changeInstruction = (instructions, index) => ([
    ...instructions.slice(0, index),
    { ...instructions[index], operation: instructions[index].operation === "nop" ? "jmp" : "nop" },
    ...instructions.slice(index + 1)
])


const modifyAndExecute = (instructions) => {
    let acc = 0
    let index = 0
    while (index < instructions.length && acc === 0) {
        let instructionsCopy = [...instructions].map(instruction => ({ ...instruction, isVisited: false }))
        if (instructionsCopy[index].operation === "jmp" || instructionsCopy[index].operation === "nop") {
            acc = executeInstructions(changeInstruction(instructionsCopy, index))
        }
        index += 1
    }
    return acc;
}

const getAccumulatorValue = (input) => modifyAndExecute(input.split("\n").map(extractInstruction))

module.exports = {
    getAccumulatorValue
}