import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import {module} from './routes/userRouts.js'
 
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); 
app.use('/api/users', module);


mongoose.connect('mongodb://localhost:27017/cruddb' ).then(() => {
  console.log('MongoDB Connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.log(err));
