const express = require('express');
const router = express.Router();
const ctrlTextbooks = require('../controllers/textbooks');
const ctrlReviews = require('../controllers/reviews');

//Create routers according to URL
router
    .route('/textbooks')
    .get(ctrlTextbooks.textbooksList)
    .post(ctrlTextbooks.textbooksCreateOne);

router
    .route('/textbooks/:textbookid')
    .get(ctrlTextbooks.textbooksReadOne)
    .put(ctrlTextbooks.textbooksUpdateOne)
    .delete(ctrlTextbooks.textbooksDeleteOne);

//review
router
    .route("/textbooks/:textbookid/reviews")
    .post(ctrlReviews.reviewsCreate);

router
    .route("/textbooks/:textbookid/reviews/:reviewid")
    .get(ctrlReviews.reviewsReadOne)

module.exports = router;