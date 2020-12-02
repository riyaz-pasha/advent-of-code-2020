const array = require("./input");

const seperateInput = (input) => {
    const min = parseInt(input.match(/\d+(?=-)/g)[0])
    const max = parseInt(input.match(/(?<=-)\d+/g)[0])
    const char = input.match(/\w(?=:)/g)[0]
    const password = input.match(/(?<=: )\w+/g)[0]
    return { min, max, char, password }
}

const validPassowrds = (input) => {
    const isFirstPositionValid = input.password.charAt(input.min - 1) === input.char
    const isLastPositionValid = input.password.charAt(input.max - 1) === input.char
    return (isFirstPositionValid && !isLastPositionValid)
        || (!isFirstPositionValid && isLastPositionValid)
}

const noOfValidPasswords = array.map(seperateInput).filter(validPassowrds).length
console.log("noOfValidPasswords", noOfValidPasswords)




// 1-3 a: abcde is valid: position 1 contains a and position 3 does not.
// 1-3 b: cdefg is invalid: neither position 1 nor position 3 contains b.
// 2-9 c: ccccccccc is invalid: both position 2 and position 9 contain c.