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
router.get('/mybooks', handleGetAllBooks);
router.get('/:id', handleGetBookById);
router.delete('/mybooks/:id/delete', handleDeleteBookById);
router.put('/:id', handleUpdateBookById);

module.exports = { bookRouter: router };