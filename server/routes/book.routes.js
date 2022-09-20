const express = require('express');

const {
  handleCreateBook,
  handleGetAllBooks,
  handleGetBookById,
  handleDeleteBookById,
  handleUpdateBookById,
} = require('../controllers/book.controller');

const router = express.Router();
router.post('/', handleCreateBook);
router.get('/:id', handleGetBookById);
router.get('/', handleGetAllBooks);
router.delete('/:id', handleDeleteBookById);
router.put('/:id', handleUpdateBookById);

module.exports = { bookRouter: router };