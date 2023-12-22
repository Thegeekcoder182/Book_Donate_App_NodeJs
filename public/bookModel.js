const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  year: {
    type: Date,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  user: {
    name: String,
    email: String,
    phone: String,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
