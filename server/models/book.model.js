const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, '{PATH} is required.'],
      minlength: [2, '{PATH} must be at least {MINLENGTH} characters.'],
    },
    author: {
      type: String,
      required: [true, '{PATH} is required.'],
      minlength: [5, '{PATH} must be at least {MINLENGTH} characters.'],
    },
    published: {
      type: String,
      required: [true, '{PATH} is required.'],
    },
    numberOfPages: {
      type: Number,
      required: [true, '{PATH} is required.'],
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