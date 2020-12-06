const getCountOfYes = (groupResponse) => {
    const individualResponses = groupResponse.split(/\n/g)
    const countOfMembers = individualResponses.length
    const firstPersonResponse = individualResponses[0]
    const commonAnswersCount = firstPersonResponse.split("").reduce((noOfQuestionsAnsweredYes, currentQuestion) =>
        groupResponse.match(new RegExp(currentQuestion, "g")).length === countOfMembers
            ? noOfQuestionsAnsweredYes + 1
            : noOfQuestionsAnsweredYes
        , 0)
    return commonAnswersCount
}

const getTheCountOfQuestionsAnsweredAsYes = (input) => input.split("\n\n")
    .map(getCountOfYes)
    .reduce((sum, currentValue) => sum + currentValue, 0)

module.exports = {
    getTheCountOfQuestionsAnsweredAsYes
}