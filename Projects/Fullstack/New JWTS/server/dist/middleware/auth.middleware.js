"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protect = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../models/user.model");
const protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")) {
        try {
            // Get token from header
            token = req.headers.authorization.split(" ")[1];
            // Verify token
            const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            // Get user from token
            const user = await user_model_1.User.findById(decoded.id).select("-password");
            if (!user) {
                res.status(401).json({ message: "Not authorized" });
                return;
            }
            req.user = user;
            next();
        }
        catch (error) {
            res.status(401).json({ message: "Not authorized" });
            return;
        }
    }
    if (!token) {
        res.status(401).json({ message: "Not authorized, no token" });
        return;
    }
};
exports.protect = protect;
