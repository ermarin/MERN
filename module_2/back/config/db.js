const mongoose = require('mongoose');
const user = encodeURIComponent('marinerick08');
const pass = encodeURIComponent('NxFCGlCFL3zYjCyh');
const cluster = 'cluster0.d7tz7bc.mongodb.net';

const db = `mongodb+srv://${user}:${pass}@${cluster}/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set('strictQuery', true, 'useNewUrlParser', true);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log('MongoDB is connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;