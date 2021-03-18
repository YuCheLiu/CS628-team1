const mongoose = require('mongoose')
const books = mongoose.model('Bookstore');
//GET /textbooks
const textbooksList = async (req, res) => {
    try {
        let bookList = await books.find().limit(10);
        return res.bookList;
    } catch (err){
        return res.status(404).json(err);
    };
};

//POST /textbooks
const textbooksCreateOne = (req, res) => {
    books.create({
        //ISBN: req.body.ISBN,
        //publisher: req.body.publisher,
        //year: req.body.year,
        //category: req.body.category,
        title: req.body.title,
        author: req.body.author,
        copies: req.body.copies,
        rating: req.body.raing
    }, (err, textbook) => {
        if (err) {
            return res.status(404).json(err);
        } else {
            return res.status(201).json(textbook);
        };
    });
};

//GET /textbooks/:textbooksid
const textbooksReadOne = (req, res) => {
    books
        .findById(req.params.textbookid)
        .exec((err, textbook) => {
            if (err) {
                return res.status(400).json(err);
            } else if (!textbook) {
                return res.status(404).json({
                    "message": "Textbook not found"
                });
            } else {
                return res.status(200).json(textbook);
            };
        });
};

//PUT /textbooks/:textbooksid
const textbooksUpdateOne = (req, res) => {
    books
        .findById(req.params.textbookid)
        .exec((err, textbook) => {
            if (err) {
                return res.status(400).json(err);
            } else if (!textbook) {
                return res.status(404).json({
                    "message": "No textbook found"
                }); 
            } else {
                //textbook.ISBN = req.body.ISBN,
                textbook.title = req.body.title,
                //textbook.publisher = req.body.publisher,
                textbook.author = req.body.author,
                textbook.copies = req.body.copies,
                textbook.Customer_Name = req.body.Customer_Name,
                textbook.rating = req.body.rating
                textbook.save((err, newBook) => {
                    if (err){
                        return res.status(400).json(err);
                    } else {
                        return res.status(200).json(newBook);
                    };
                });
            };
        });
};

//DELETE /textbooks/:textbooksid
const textbooksDeleteOne = (req, res) => {
    books.findByIdAndRemove(req.params.textbookid, (err) => {
        if (err) {
            return res.status(400).json(err);
        } else {
            return res.status(200).json(null);
        };
    });
};

module.exports = {
    textbooksList, 
    textbooksCreateOne,
    textbooksReadOne,
    textbooksUpdateOne,
    textbooksDeleteOne
};