const { updateRating, createRating } = require("./calculations");
const {PATH_TO_RATING_FILE,WEIGHT} = require("./config");
const makeRatingFile = require("./rating-file");

module.exports = {
    PATH_TO_RATING_FILE,
    WEIGHT,
    makeRatingFile,
    updateRating,
    createRating
}