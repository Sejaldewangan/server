import Product from "../models/productModel.js";

export const newProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
