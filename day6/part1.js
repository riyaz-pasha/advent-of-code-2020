const getCountOfYes = (groupResponse) => new Set(groupResponse.replace(/\n/g, "").split("")).size

const getTheCountOfQuestionsAnsweredAsYes = (input) => input.split("\n\n")
    .map(getCountOfYes)
    .reduce((sum, currentValue) => sum + currentValue, 0)

module.exports = {
    getTheCountOfQuestionsAnsweredAsYes
}