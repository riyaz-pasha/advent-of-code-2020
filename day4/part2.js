const input = require("./input")

const isValidPassport = (passport) => {
    try {
        const byr = parseInt(passport.match(/(?<=byr:)\w+/g)[0])
        if (byr < 1920 || byr > 2002) return false;

        const iyr = parseInt(passport.match(/(?<=iyr:)\w+/g)[0])
        if (iyr < 2010 || iyr > 2020) return false;

        const eyr = parseInt(passport.match(/(?<=eyr:)\w+/g)[0])
        if (eyr < 2020 || eyr > 2030) return false;

        const hgt = passport.match(/(?<=hgt:)\w+/g)[0]
        if (!hgt.includes("cm") && !hgt.includes("in")) {
            return false;
        }
        if (hgt.includes("cm")) {
            const hgtInCm = parseInt(hgt.slice(0, hgt.length - 2))
            if (hgtInCm < 150 || hgtInCm > 193) return false;

        } else if (hgt.includes("in")) {
            const hgtInIN = parseInt(hgt.slice(0, hgt.length - 2))
            if (hgtInIN < 59 || hgtInIN > 76) return false;

        }



        const hcl = passport.match(/(?<=hcl:)#\w+/g)[0]
        if (!hcl.startsWith("#") && hcl.length !== 7) return false

        const ecl = passport.match(/(?<=ecl:)\w+/g)[0]
        if (!["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(ecl)) return false

        const pid = passport.match(/(?<=pid:)\w+/g)[0]
        if (!pid.startsWith("0") && pid.length !== 9) return false

        return true
    } catch (error) {
        return false
    }
}
const validPassportsCount = (input) => input.filter(isValidPassport).length

module.exports = validPassportsCount