const {
  createComment,
  getAllComments,
  getCommentById,
  deleteCommentById,
  updateCommentById
} = require('../services/comment.service');

const handleCreateComment = async (req, res) => {
  console.log('controller: handleCreateComment req.body:', req.body);

  try {
    const comment = await createComment(req.body);
    return res.json(comment);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const handleGetAllComments = async (req, res) => {
  try {
    const comments = await getAllComments();
    return res.json(comments);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const handleGetCommentById = async (req, res) => {
  try {
    const comment = await getCommentById(req.params.id);
    return res.json(comment);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const handleDeleteCommentById = async (req, res) => {
  try {
    const comment = await deleteCommentById(req.params.id);
    return res.json(comment);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const handleUpdateCommentById = async (req, res) => {
  try {
    const comment = await updateCommentById(req.params.id, req.body);
    return res.json(comment);
  } catch (error) {
    return res.status(400).json(error);
  }
};

// Not needed on exam, used to seed lot's of data into the DB so we can travel
const handleCreateManyComments = async (req, res) => {
  try {
    if (Array.isArray(req.body) === false) {
      throw new Error('The request body must be an array.');
    }

    const settledOutcomes = await createManyComments(req.body);
    return res.json(settledOutcomes);
  } catch (error) {
    return res.status(400).json(error);
  }
};

// Export an object of our controller methods so they can be added to routes.
module.exports = {
  handleCreateComment,
  handleGetAllComments,
  handleGetCommentById,
  handleDeleteCommentById,
  handleUpdateCommentById,
};