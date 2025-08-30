
import express from 'express'
import connectDB from './db.js'
import { configDotenv } from 'dotenv'
import router from './routes.js'

const app  = express()

configDotenv()

app.use(express.json())
app.use('/',router)
app.get('/test', (req,res)=>{ 
res.send("test successful")
} )


app.listen(4000, ()=>{ 
    connectDB()
    console.log('sucessfull connected');
    
})