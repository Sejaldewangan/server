

import express from "express";
import cors from "cors";
import { data } from "./data.js";
import mongoose from "mongoose";
import router from "./routes/userRoute.js"
import productRouter from "./routes/productRoute.js";
const app = express();
const port = 6969;
app.use(express.json());
app.use(cors());
app.use("/demo", (req, res) => {
  res.send("hi it is working");
});
app.use("/api/create",router)
app.use("/product",productRouter)
mongoose.connect('mongodb://localhost:27017/cruddb').then(
console.log("mongoDB connected"),
  app.listen(port, () => {
    console.log(`server is runnning on port ${port} at /demo`);
  })
).catch((err)=>{
console.log(err);

})

