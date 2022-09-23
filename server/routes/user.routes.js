const express = require('express');

const { protect } = require('../middleware/authMiddleware')
const {
  loginUser,
  logoutUser,
  signupUser,
  getLoggedInUser,
  handleCreateUser,
  handleGetAllUsers,
  handleGetUserById,
  handleDeleteUserById,
  handleUpdateUserById,
} = require('../controllers/user.controller');

const router = express.Router();

router.post('/login', loginUser);
router.post('/logout', protect, loginUser);
router.get('/signup', signupUser);
router.get('/me', protect, getLoggedInUser);
router.post('/', handleCreateUser);
router.get('/:id', handleGetUserById);
router.get('/', handleGetAllUsers);
router.delete('/:id', handleDeleteUserById);
router.put('/:id', handleUpdateUserById);

module.exports = { userRouter: router };