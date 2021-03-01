const express = require('express');
const router = express.Router();
const ctrlTextbooks = require('../controllers/textbooks');

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

module.exports = router;