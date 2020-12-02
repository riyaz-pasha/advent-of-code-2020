const array = require("./input");

const seperateInput = (input) => {
    const [, min, max, char, password] = /(\d+)-(\d+) ([a-z]): ([a-z]+)/.exec(input);
    return { min, max, char, password }
}

const validPassowrds = (input) => {
    const noOfChars = input.password.split("").filter(char => char === input.char).length
    return noOfChars >= input.min && noOfChars <= input.max
}

const noOfValidPasswords = array.map(seperateInput).filter(validPassowrds).length
console.log("noOfValidPasswords", noOfValidPasswords)

// For example, suppose you have the following list:

// 1-3 a: abcde
// 1-3 b: cdefg
// 2-9 c: ccccccccc
// Each line gives the password policy and then the password. The password policy indicates the lowest and highest number of times a given letter must appear for the password to be valid. For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times.

// In the above example, 2 passwords are valid. The middle password, cdefg, is not; it contains no instances of b, but needs at least 1. The first and third passwords are valid: they contain one a or nine c, both within the limits of their respective policies.

// How many passwords are valid according to their policies?