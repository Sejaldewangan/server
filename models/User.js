import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
}, { timestamps: true });

const  module = mongoose.model('User', userSchema);
export default module