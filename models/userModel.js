import mongoose from "mongoose";

const newUser = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  role: { type: String, require: true },
});

const module = mongoose.models.User || mongoose.model("User", newUser);
export default module;
