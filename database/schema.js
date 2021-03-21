//Require Mongoose
const mongoose = require('mongoose');


//Define a schema
//var Schema = mongoose.Schema;

//title, author, copies must not be NULL
const BookStoreSchema = new mongoose.Schema({
  _id: ObjectID,
  title: !String,
  author: !String,
  copies: !BigInt,
  Customer_Name: String,
  Comment: String,
  rating: BigInt
});

mongoose.model('Bookstore', BookStoreSchema);