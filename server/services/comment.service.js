const { Comment } = require('../models/comment.model');

const createDestination = async (data) => {
  console.log('service: createDestination');

  // Use the mongoose model to interact with the database.
  const comment = await Comment.create(data);
  return comment;
};

const getAllDestinations = async () => {
  const comments = await Comment.find();
  return comments;
};

const getDestinationById = async (id) => {
  const comment = await Comment.findById(id);
  return comment;
};

const deleteDestinationById = async (id) => {
  const comment = await Comment.findByIdAndDelete(id);
  return comment;
};

const updateDestinationById = async (id, data) => {
  const comment = await Comment.findByIdAndUpdate(id, data, {
    // Re-run validations.
    runValidators: true,
    // Return the updated comment.
    new: true,
  });

  return comment;
};

// Export all the service functions in an object.
module.exports = {
  createDestination,
  getAllDestinations,
  getDestinationById,
  deleteDestinationById,
  updateDestinationById,
};