const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema(
  {
<<<<<<< HEAD
    id : {
=======
    bookId : {
>>>>>>> 12a328924386cad35dbb193c1e7ccb02cc423f67
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
<<<<<<< HEAD
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
=======
    },
    rating: {
      type: Number
    },
    ratingCount: {
      type: Number
    },
    numberOfPages: {
      type: Number
>>>>>>> 12a328924386cad35dbb193c1e7ccb02cc423f67
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