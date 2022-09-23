const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema(
  {
    bookId: {
      type: String
    },
    thumbnail: {
      type: String
    },
    title: {
      type: String
    },
    authors: {
      type: String
    },
    publishedDate: {
      type: String
    },
    averageRating: {
      type: Number
    },
    ratingsCount: {
      type: Number
    },
    pageCount: {
      type: Number
    },
    description: {
      type: String
    }
  },
  { timestamps: true }
);

const Book = mongoose.model('Book', BookSchema);

module.exports = { Book: Book };