const input = require("./input")

const passports = input
    .split('\n\n')
    .map(entry => Object.fromEntries(entry.replace(/\n/g, " ").trim().split(' ').map(cell => cell.split(':'))))

const validation = {
    byr: /(19[2-9][0-9]|200[0-2])/,
    iyr: /(20[1][0-9]|2020)/,
    eyr: /(20[2][0-9]|2030)/,
    hgt: /((1[5-8][0-9]|19[0-3])cm|(59|6[0-9]|7[0-6])in)/,
    hcl: /#([0-9a-f]){6}/,
    ecl: /(amb|blu|brn|gry|grn|hzl|oth)/,
    pid: /^\d{9}$/
}

const isValid = (currentField, passport) => validation[currentField].test(passport[currentField])

const passportMandatoryFields = Object.keys(validation)

const hasAllRequiredFields = (passport) =>
    passportMandatoryFields.reduce((hasRequiredFields, currentField) => hasRequiredFields * isValid(currentField, passport), 1)

const validPassportsCount = (passports) => passports.filter(hasAllRequiredFields).length

console.log(validPassportsCount(passports))

module.exports = validPassportsCount


