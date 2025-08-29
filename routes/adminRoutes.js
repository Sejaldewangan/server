import { authenticateCheck } from "../middlewares/authMiddleware.js";
import Router from 'express'

export  const aR = Router()

aR.get("/test",authenticateCheck,(req,res)=>{
    res.json("test is ok ,so good")
})
