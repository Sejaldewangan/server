

import express from "express";
import cors from "cors";
import { data } from "./data.js";
import mongoose from "mongoose";
import router from "./routes/userRoute.js"

const port = 6969;
app.use(express.json());
app.use(cors());
app.use("/demo", (req, res) => {
  res.send("hi it is working");
});
app.use("/api/create",router)

mongoose.connect('mongodb://localhost:27017/create').then(
console.log("mongoDB connected"),
  app.listen(port, () => {
    console.log(`server is runnning on port ${port} at /demo`);
  })
).catch((err)=>{
console.log(err);

})

