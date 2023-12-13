import asyncHandler from "./../middleware/asyncHandler.js";
import User from "./../models/userModel.js";
import  bcryptjs  from 'bcryptjs';
import jwt from 'jsonwebtoken'

// @desc    Login user & get token
// @route   POST api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  try {
    const {email,password} = req.body 
    const user = await User.findOne({email})

    if(!user) {
      res.status(400).send({message:'Invalid user or password'})
    }

    const passCheck = await bcryptjs.compare(password,user.password);
    if(!passCheck) {
      res.status(400).send({message:'Invalid user or password'})
    }

    // create token data
    const tokenData = {
      id: user._id,
      name: user.name,
      email: user.email

    }

    // crete token
    const token = jwt.sign(tokenData,process.env.TOKEN_SECRET,{expiresIn: "1h"})

    res.cookie('token', token, {
      httpOnly: true,
    })

    res.send({message:'Login successful'})
  } catch (error) {
    res.status(400).send({message: "Login error", error: error.message});
  }
});

// @desc    Register user
// @route   POST api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  try {
    const { name,email,password} = req.body 
    const user = await User.findOne({email})
    if (user) {
      return res.status(400).send({message: "User already exists"})
    }

    // Hash password
    const salt = await bcryptjs.genSalt(10)
    const hasedPassword = await bcryptjs.hash(password,salt)

    // Create User 
    const newUser = new User({
      name,
      email,
      password: hasedPassword
    })

    const savedUser = await newUser.save()


    res.send({message: "User created successfully",success: true, savedUser})

  } catch (error) {
    res.status(400).send({message: "Sign up error", error: error.message});
  }
});

// @desc    Logout user / clear cookie
// @route   POST api/users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user");
});

// @desc    Get user profile
// @route   GET api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

// @desc    Update user profile
// @route   PUT api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

// @desc    Get users
// @route   GET api/users
// @access  Private / Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get users");
});

// @desc    Get users by ID
// @route   GET api/users/:id
// @access  Private / Admin
const getUserByID = asyncHandler(async (req, res) => {
  res.send("get user by id");
});

// @desc    Update user
// @route   PUT api/users/:id
// @access  Private / Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});

// @desc    Delete users
// @route   DELETE api/users/:id
// @access  Private / Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete user");
});

export {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserByID,
  deleteUser,
  updateUser,
};
