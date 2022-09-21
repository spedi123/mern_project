const express = require('express');

const {
  handleCreateComment,
  handleGetAllComments,
  handleGetCommentById,
  handleDeleteCommentById,
  handleUpdateCommentById,
} = require('../controllers/comment.controller');

const router = express.Router();

router.post('/', handleCreateComment);
router.get('/:id', handleGetCommentById);
router.get('/', handleGetAllComments);
router.delete('/:id', handleDeleteCommentById);
router.put('/:id', handleUpdateCommentById);

module.exports = { commentRouter: router };