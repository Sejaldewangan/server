import mongoose from "mongoose";

const productschema = new mongoose.Schema(
  {
    productName: String,
    productType: String,
    productPrice: Number,
  },
  { timestamps: true }
);

const module = mongoose.model("Product", productschema);

export default module;
