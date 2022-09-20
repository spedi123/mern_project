const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: [true, '{PATH} is required.'],
      minlength: [1, '{PATH} must be at least {MINLENGTH} characters.'],
    },
  },
  { timestamps: true } // adds createdAt and updatedAt.
);

/* 
Register schema with mongoose and provide a string to name the collection. This
also returns a reference to our model that we can use for DB operations.
*/
const Comment = mongoose.model('Comment', CommentSchema);

// Always exporting an object even when we only have one thing to export
// makes it easy to add more exports later if ever needed without breaking
// any code that imports from this file.
module.exports = { Comment: Comment };