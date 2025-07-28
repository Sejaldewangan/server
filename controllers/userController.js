import User from "../models/User.js";

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const readAllUsers = async (req, res) => {
  try {
    const allusers = await User.find();
    res.json(allusers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const readUsersById = async (req, res) => {
  try {
    const usersByID = await User.findById(req.params.id);
    if (!usersByID) {
      res.status(400).json({ message: "user not found" });
    }
    return res.json(usersByID);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateUsers = async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body);
    if (!updateUser) {
      return res.status(400).json({ message: "user not found" });
    }
    return res.json(updateUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const delUser = await User.findByIdAndDelete(req.params.id, req.body);
    if (!delUser) {
      res.json({ message: "User not found" });
    }
    return res.json("user deleted succesfully");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
