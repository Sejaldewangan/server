import User from "../../models/userModel.js";
import jwt from  'jsonwebtoken'
import cookieparser from 'cookieparser'
import bcrypt from "bcryptjs";

export const signin = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
      res.json({ message: "please fill all the detailes" });
      return;
    }
    const user = await User.findOne({ email });

    if (user) {
      res.status(403).json({ message: "user already exsists" });
      return;
    }

    let hashedPassword;
    try {
      const salt = await bcrypt.genSalt(10);
      hashedPassword =await bcrypt.hash(password, salt);
      const users = await User.create({
        name,
        email,
        password: hashedPassword,
        role,
      });

      console.log(hashedPassword);
      

      return res.status(201).json({ users });
    } catch (error) {
      res.json({ message: error.message });
    }
  } catch (error) {
    return res.status(400).json({ message: "error in hashingpasword" });
  }
  console.log(hashedPassword);
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
        res.status(400).json({ message: "Please Fill out all theb detailes" });
        return;
    }
    let user = await User.findOne({ email });
    if (!user) {
        res.status(404).json({ message: "User does not recognized " });
        return;
    }
    console.log(req.body.password);
    console.log(password);
    
     const isMatch = await bcrypt.compare(password, user.password);
const payload = {_id:user._id,
  name:user.name,
  email:user.email
}
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    } 
        else {
          const token = jwt.sign(process.env.JWT_SECRATE,payload,{expiresIn:"10d"})
      res.status(201).json({ message: "logged in successfully",user }).cookie(token)

    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
