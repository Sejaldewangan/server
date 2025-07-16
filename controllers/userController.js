
import User from '../models/User.js'



export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};



export const readAllUsers = async (req,res) => {
  try {
    const allusers =await User.find()
    res.json(allusers)
  } catch (error) {
    res.status(400).json({message:error.message})
  }
}