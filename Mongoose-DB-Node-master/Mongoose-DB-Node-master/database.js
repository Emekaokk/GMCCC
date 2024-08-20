// db.js
const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

module.exports = mongoose;
