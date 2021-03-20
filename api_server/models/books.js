//Require Mongoose
const mongoose = require('mongoose');


//Define a schema
//var Schema = mongoose.Schema;

//title, author, copies must not be NULL
const BookStoreSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: String,
  copies: {
      type: Number,
      'default': 0,
      min: 0
  },
  Customer_Name: String,
  Comment: String,
  rating: {
      type: Number,
      'default': 0,
      min: 0,
      max: 5
  }
});

mongoose.model('Bookstore', BookStoreSchema, 'bookstores');