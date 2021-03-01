//GET /textbooks
const textbooksList = (req, res) => {
    res.status(200).json({
        message: 'Successed'
    });
};

//POST /textbooks
const textbooksCreateOne = (req, res) => {
    res.status(200).json({
        message: 'Successed'
    });
};

//GET /textbooks/:textbooksid
const textbooksReadOne = (req, res) => {
    res.status(200).json({
        message: 'Successed'
    });
};

//PUT /textbooks/:textbooksid
const textbooksUpdateOne = (req, res) => {
    res.status(200).json({
        message: 'Successed'
    });
};

//DELETE /textbooks/:textbooksid
const textbooksDeleteOne = (req, res) => {
    res.status(200).json({
        message: 'Successed'
    });
};

module.exports = {
    textbooksList, 
    textbooksCreateOne,
    textbooksReadOne,
    textbooksUpdateOne,
    textbooksDeleteOne
};