const mongoose = require('mongoose')

//POST "/textbooks/:textbookid/reviews"
const reviewsCreate = (req, res) => {
    res.status(200).json({
        message: 'Successed'
    });
};

//GET /textbooks/:textbookid/reviews/:reviewid
const reviewsReadOne = (req, res) => {
    res.status(200).json({
        message: 'Successed'
    });
};

module.exports = {
    reviewsCreate,
    reviewsReadOne
};