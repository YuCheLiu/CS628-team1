//Require Mongoose
var mongoose = require('mongoose');


//Define a schema
var Schema = mongoose.Schema;

//title, author, copies must not be NULL
var BookStore = new Schema({
  _id: ObjectID,
  title: !String,
  author: !String,
  copies: !BigInt,
  Customer_Name: String,
  Comment: String,
  rating: BigInt
});