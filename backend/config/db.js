const mongoose = require('mongoose');
const dns = require('dns');

// Fix for Node.js "querySrv ECONNREFUSED" when resolving MongoDB Atlas SRV records
// Node.js c-ares DNS resolver can fail on Windows, local ISPs, and certain AWS network configurations.
// Setting reliable DNS servers ensures SRV records resolve seamlessly.
try {
  dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);
} catch (err) {
  // Continue if environment restricts setting DNS servers
}

let isConnected = false;

// Direct shard replica set fallback URI if SRV lookup fails in restrictive environments (e.g., AWS VPC/firewall)
const FALLBACK_DIRECT_URI = "mongodb://packasiapackaging:KARtik%40369@ac-tzji7w8-shard-00-00.m22bvtn.mongodb.net:27017,ac-tzji7w8-shard-00-01.m22bvtn.mongodb.net:27017,ac-tzji7w8-shard-00-02.m22bvtn.mongodb.net:27017/Users?ssl=true&replicaSet=atlas-110vu6-shard-0&authSource=admin&retryWrites=true&w=majority";

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || FALLBACK_DIRECT_URI;
  try {
    const conn = await mongoose.connect(uri);
    isConnected = true;
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // If SRV DNS lookup fails, automatically retry with direct shard replica set
    if (uri.startsWith('mongodb+srv:') && (error.message.includes('querySrv') || error.message.includes('ECONNREFUSED'))) {
      console.warn('⚠️ SRV DNS resolution failed. Retrying with direct replica set connection...');
      try {
        const conn = await mongoose.connect(FALLBACK_DIRECT_URI);
        isConnected = true;
        console.log(`✅ MongoDB Connected via Direct Shards: ${conn.connection.host}`);
        return;
      } catch (fallbackError) {
        console.error(`⚠️ Fallback Connection Error: ${fallbackError.message}`);
      }
    }
    console.error(`⚠️ MongoDB Connection Error: ${error.message}`);
    console.log('ℹ️ Running in offline database mode. Configure MONGODB_URI in .env to connect to a real database.');
  }
};

const getStatus = () => isConnected;

module.exports = { connectDB, getStatus };

