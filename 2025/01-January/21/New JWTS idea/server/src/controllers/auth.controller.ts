import { Request, Response } from "express";
import { User } from "../models/User";
import { generateToken } from "../middleware/auth";

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser) {
      return res.status(400).json({
        error: "User with this email or username already exists",
      });
    }

    // Create new user
    const user = new User({
      username,
      email,
      password,
    });

    await user.save();

    // Generate token
    const token = generateToken(user._id);

    res.status(201).json({
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    res.status(400).json({ error: "Error creating user" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Check password
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate token
    const token = generateToken(user._id);

    res.json({
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    res.status(400).json({ error: "Error logging in" });
  }
};

export const getProfile = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: "Error fetching profile" });
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["username", "email", "bio", "avatar"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).json({ error: "Invalid updates" });
  }

  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    updates.forEach((update) => {
      if (req.body[update] !== undefined) {
        (user as any)[update] = req.body[update];
      }
    });

    await user.save();
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: "Error updating profile" });
  }
};
