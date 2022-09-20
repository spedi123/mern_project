const { User } = require('../models/user.model');

const createUser = async (data) => {
  console.log('service: createUser');

  // Use the mongoose model to interact with the database.
  const user = await User.create(data);
  return user;
};

const getAllUsers = async () => {
  const users = await User.find();
  return users;
};

const getUserById = async (id) => {
  const user = await User.findById(id);
  return user;
};

const deleteUserById = async (id) => {
  const user = await User.findByIdAndDelete(id);
  return user;
};

const updateUserById = async (id, data) => {
  const user = await User.findByIdAndUpdate(id, data, {
    // Re-run validations.
    runValidators: true,
    // Return the updated user.
    new: true,
  });

  return user;
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById
};