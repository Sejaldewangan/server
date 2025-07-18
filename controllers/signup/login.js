

import User from '../../models/userModel.js'

import bcrypt from "bcryptjs";

export const signin = async (req,res) => {
    try {
        const {name,email,password,role} =req.body
if (!name || !email || !password ||!role) {
    res.json({message:"please fill all the detailes"})
    return
}
const user = await User.findOne({email})
 

if (user) {
    res.status(403).json({message:"user already exsists"})
    return
}


let hashedPassword 
try {
const salt = await bcrypt.genSalt(10)
    hashedPassword =  bcrypt.hash(password,salt)
    const users = await User.create({name,email,password:hashedPassword,role})
   
    return res.status(201).json({users})
        }
         catch (error) {
            res.json({message:error.message})
        }
    
    
} catch (error) {
   return res.status(400).json({message:"error in hashingpasword"})
}
console.log(hashedPassword);
}