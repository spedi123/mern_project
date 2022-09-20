const { Book } = require('../models/book.model');

const createBook = async (data) => {
  console.log('service: createBook');
  const book = await Book.create(data);
  return book;
};

const getAllBooks = async () => {
  const books = await Book.find();
  return books;
};

const getBookById = async (id) => {
  const book = await Book.findById(id);
  return book;
};

const deleteBookById = async (id) => {
  const book = await Book.findByIdAndDelete(id);
  return book;
};

const updateBookById = async (id, data) => {
  const book = await Book.findByIdAndUpdate(id, data, {
    runValidators: true,
    new: true,
  });

  return book;
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  deleteBookById,
  updateBookById
};