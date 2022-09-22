const { User } = require('../models/user.model');
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const JWT_SECRET = require("dotenv").config();
const {
  createUser,
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById
} = require('../services/user.service');

const loginUser = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  // try {
  //   const user = await User.findOne({ email })
  //   return res.json(user);
  // } catch (error) {
  //   return res.status(400).json(error)
  // }
  

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      userName: user.userName,
      email1: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400).json('error: Invalid credentials')
  }
}

const signupUser = async (req, res) => {
  const { userName, email, password } = req.body

  try {
    const user = await User.create({
      userName, email, password
    })
    return res.josn(user);
  } catch (error) {
    return res.status(400).json(error)
  }
  
  // if (user) {
  //   res.status(201).json({
  //     _id: user.id,
  //     userName: user.userName,
  //     email: user.email,
  //     token: generateToken(user._id)
  //   })
  // } else {
  //   res.status(400).json('error: Invalid user data')
  // }
}

const getLoggedInUser = async (req, res) => {
  res.status(200).json(req.user)
}

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  })
}

const handleCreateUser = async (req, res) => {
  console.log('controller: handleCreateUser req.body:', req.body);

  try {
    const user = await createUser(req.body);
    return res.json(user);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const handleGetAllUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    return res.json(users);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const handleGetUserById = async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    return res.json(user);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const handleDeleteUserById = async (req, res) => {
  try {
    const user = await deleteUserById(req.params.id);
    return res.json(user);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const handleUpdateUserById = async (req, res) => {
  try {
    const user = await updateUserById(req.params.id, req.body);
    return res.json(user);
  } catch (error) {
    return res.status(400).json(error);
  }
};


// Export an object of our controller methods so they can be added to routes.
module.exports = {
  loginUser,
  signupUser,
  getLoggedInUser,
  handleCreateUser,
  handleGetAllUsers,
  handleGetUserById,
  handleDeleteUserById,
  handleUpdateUserById,
};