const getNoOfTreeInSlope = require("./part1");

const getProductOfTreesPathsWithSlope = (input, pathsWithSlope) =>
    pathsWithSlope.reduce((prevProduct, currentPathSlope) => prevProduct * getNoOfTreeInSlope(input, currentPathSlope), 1)

module.exports = getProductOfTreesPathsWithSlope