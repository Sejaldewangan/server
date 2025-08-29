import User from "../../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from 'dotenv'

dotenv.config()
export const signin = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "Please fill all the details" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(403).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    return res.status(201).json({
      message: "User registered successfully",
      data: { id: user._id, name: user.name, email: user.email, role: user.role },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all the details" });
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not recognized" });
    }

    // Compare password
    console.log("Secret:", process.env.JWT_SECRATE);
    const isMatch = await bcrypt.compare(user.password,password);
    if (!isMatch) {
       return res.status(401).json({ message: "Invalid credentials" })
    }
    // else{
    // }
    // JWT payload
    const payload = {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
    console.log("Payload:", payload);

const key = process.env.JWT_SECRATE


    // Generate JWT
    const token = jwt.sign(payload,key,{ expiresIn: "10d" });

    // Send token in cookie + response
    res
      .cookie("authToken", token, { httpOnly: true, secure: false }) 
      .status(200)
      .json({
        message: "Logged in successfully",
        token,
        user: { id: user._id, name: user.name, email: user.email, role: user.role },
      });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
