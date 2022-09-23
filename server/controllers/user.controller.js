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

const logoutUser = async (req, res) => {
  if (req.headers && req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: 'Authorization fail!' });
    }

    const tokens = req.user.tokens;

    const newTokens = tokens.filter(t => t.token !== token);

    await User.findByIdAndUpdate(req.user._id, { tokens: newTokens });
    res.json({ success: true, message: 'You have successfully signed out.' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  // try {
  //   const user = await User.findOne({ email })
  //   return res.json(user);
  // } catch (error) {
  //   return res.status(400).json(error)
  // }

  try {
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        username: user.username,
        email1: user.email,
        token: generateToken(user._id)
      })
    } else {
      throw new Error("Invalid credentials")
    }
  } catch (error) {
    return res.status(400).json({message : error.message})
}
}

const registerUser = async (req, res) => {
  const { username, email, password } = req.body

  try {
    // throw new Error("test!!")
    const user = await User.create({
      username, email, password
    })
    if (user) {
      res.status(201).json({
        _id: user.id,
         username: user.username,
         email: user.email,
         token: generateToken(user._id)
      })
    }

    return res.json(user);
  } catch (error) {
    return res.status(400).json({ ...error, name: error.name, message : error.message})
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
  logoutUser,
  registerUser,
  getLoggedInUser,
  handleCreateUser,
  handleGetAllUsers,
  handleGetUserById,
  handleDeleteUserById,
  handleUpdateUserById,
};