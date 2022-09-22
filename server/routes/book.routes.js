const express = require('express');
const { protect } = require('../middleware/authMiddleware')
const {
  handleCreateBook,
  handleGetAllBooks,
  handleGetBookById,
  handleDeleteBookById,
  handleUpdateBookById,
} = require('../controllers/book.controller');

const router = express.Router();
router.post('/', protect, handleCreateBook);
router.get('/:id', handleGetBookById);
router.get('/', handleGetAllBooks);
router.delete('/:id', handleDeleteBookById);
router.put('/:id', handleUpdateBookById);

module.exports = { bookRouter: router };