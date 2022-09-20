const {
    createBook,
    getAllBooks,
    getBookById,
    deleteBookById,
    updateBookById,
  } = require('../services/book.service');
  
  const handleCreateBook = async (req, res) => {
    console.log('controller: handleCreateBook req.body:', req.body);
  
    try {
      const book = await createBook(req.body);
      return res.json(book);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  
  const handleGetAllBooks = async (req, res) => {
    try {
      const books = await getAllBooks();
      return res.json(books);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  
  const handleGetBookById = async (req, res) => {
    try {
      const book = await getBookById(req.params.id);
      return res.json(book);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  
  const handleDeleteBookById = async (req, res) => {
    try {
      const book = await deleteBookById(req.params.id);
      return res.json(book);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  
  const handleUpdateBookById = async (req, res) => {
    try {
      const book = await updateBookById(req.params.id, req.body);
      return res.json(book);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
 
  module.exports = {
    handleCreateBook,
    handleGetAllBooks,
    handleGetBookById,
    handleDeleteBookById,
    handleUpdateBookById,
  };