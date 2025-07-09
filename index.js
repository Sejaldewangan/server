const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRouts');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // Body parser
app.use('/api/users', userRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/cruddb' ).then(() => {
  console.log('MongoDB Connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.log(err));
