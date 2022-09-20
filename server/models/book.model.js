const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema(
  {
    bookId : {
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
    rating: {
      type: Number
    },
    ratingCount: {
      type: Number
    },
    numberOfPages: {
      type: Number
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