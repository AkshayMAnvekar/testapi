const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const noteRoutes = require('../routes/note');
const userRoutes = require('../routes/user');
require('dotenv').config()
const url = process.env.MONGOLAB_URI;

const app = express();
app.disable("X-Powered-By")

mongoose.connect(
  url,
  {
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useCreateIndex: true
  })
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use('/api/note', noteRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;
