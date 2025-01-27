"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserProfile = exports.getUserProfile = exports.loginUser = exports.registerUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../models/user.model");
// Generate JWT
const generateToken = (id) => {
    return jsonwebtoken_1.default.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};
// @desc    Register new user
// @route   POST /api/users/register
// @access  Public
const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // Check if user exists
        const userExists = await user_model_1.User.findOne({ $or: [{ email }, { username }] });
        if (userExists) {
            return res.status(400).json({
                message: "User already exists",
            });
        }
        // Create user
        const user = await user_model_1.User.create({
            username,
            email,
            password,
        });
        if (user) {
            res.status(201).json({
                _id: user._id,
                username: user.username,
                email: user.email,
                profilePic: user.profilePic,
                token: generateToken(user._id),
            });
        }
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
exports.registerUser = registerUser;
// @desc    Authenticate user
// @route   POST /api/users/login
// @access  Public
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Check for user email
        const user = await user_model_1.User.findOne({ email });
        if (user && (await user.comparePassword(password))) {
            res.json({
                _id: user._id,
                username: user.username,
                email: user.email,
                profilePic: user.profilePic,
                token: generateToken(user._id),
            });
        }
        else {
            res.status(401).json({
                message: "Invalid email or password",
            });
        }
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
exports.loginUser = loginUser;
// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = async (req, res) => {
    try {
        const user = await user_model_1.User.findById(req.user._id);
        if (user) {
            res.json({
                _id: user._id,
                username: user.username,
                email: user.email,
                profilePic: user.profilePic,
            });
        }
        else {
            res.status(404).json({
                message: "User not found",
            });
        }
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
exports.getUserProfile = getUserProfile;
// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = async (req, res) => {
    try {
        const user = await user_model_1.User.findById(req.user._id);
        if (user) {
            user.username = req.body.username || user.username;
            user.email = req.body.email || user.email;
            user.profilePic = req.body.profilePic || user.profilePic;
            if (req.body.password) {
                user.password = req.body.password;
            }
            const updatedUser = await user.save();
            res.json({
                _id: updatedUser._id,
                username: updatedUser.username,
                email: updatedUser.email,
                profilePic: updatedUser.profilePic,
                token: generateToken(updatedUser._id),
            });
        }
        else {
            res.status(404).json({
                message: "User not found",
            });
        }
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
exports.updateUserProfile = updateUserProfile;
