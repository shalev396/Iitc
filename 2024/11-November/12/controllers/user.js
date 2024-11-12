import User from "../models/user.js";

//new user
export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

//all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    for (let i = 0; i < users.length; i++) {
      console.log(users[i].fullName);
    }
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

//user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    console.log(user.toText);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};
//update user by id
export const updateUserById = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).send();
  } catch (error) {
    res.status(500).send(`make sure all data and id are valid ${error}`);
  }
};
//delete user by id
export const deleteUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(`make sure all data and id are valid ${error}`);
  }
};
