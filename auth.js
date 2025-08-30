import User from "./User.model.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";




export const register =  async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ message: "Email and Password are required" });
    }

    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    
    
    // Create user
    const user = await User.create({
        email,
        password: hashedPassword,
    });
    console.log(User);

    return res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    return res.status(500).json({ message: 'ni chal ra '});
  }
}