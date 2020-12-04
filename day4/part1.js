const hasAllRequiredFields = (passport) =>
    ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]
        .reduce((hasFields, currentField) => hasFields * passport.includes(currentField), 1)
const validPassportsCount = (input) => input.filter(hasAllRequiredFields).length

module.exports = validPassportsCount