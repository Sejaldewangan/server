import mongoose from "mongoose";

const newUser = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})

const module = mongoose.model("User",newUser)
export default module