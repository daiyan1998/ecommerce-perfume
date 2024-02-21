import { generateToken } from "../utils/generateToken.js";
import asyncHandler from "./../middleware/asyncHandler.js";
import User from "./../models/userModel.js";
import bcryptjs from "bcryptjs";

// @desc    Login user & get token
// @route   POST api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      res.status(400).send({ message: "Invalid user or password" });
    }

    const passCheck = await bcryptjs.compare(password, user.password);
    if (!passCheck) {
      res.status(400).send({ message: "Invalid user or password" });
    }

    // create token
    generateToken(res, user._id);

    res.status(200).send({ message: "Login successful" });
  } catch (error) {
    res.status(400).send({ message: "Login error", error: error.message });
  }
});

// @desc    Register user
// @route   POST api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(400);
      throw new Error("User already exists");
    }

    // Hash password
    const salt = await bcryptjs.genSalt(10);
    const hasedPassword = await bcryptjs.hash(password, salt);

    // Create User
    const user = await User.create({
      name,
      email,
      password: hasedPassword,
    });

    if (user) {
      generateToken(res, user._id);
      res.send({
        message: "User created successfully",
        success: true,
        user,
      });
    }
  } catch (error) {
    res.status(400).send({ message: "Sign up error", error: error.message });
  }
});

// @desc    Logout user / clear cookie
// @route   POST api/users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logged out successfully" });
});

// @desc    Get user profile
// @route   GET api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Update user profile
// @route   PUT api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  console.log(user);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
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
