const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema(
  {
    id : {
      type:String
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
    },
    likes: {
      type: String,
      required: [true, '{PATH} is required.'],
    }
  },
  { timestamps: true } // adds createdAt and updatedAt.
);

const Book = mongoose.model('Book', BookSchema);

module.exports = { Book: Book };