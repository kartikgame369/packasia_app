const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`⚠️ MongoDB Connection Error: ${error.message}`);
    console.log('ℹ️ Running in offline database mode. Configure MONGODB_URI in .env to connect to a real database.');
  }
};

const getStatus = () => isConnected;

module.exports = { connectDB, getStatus };

