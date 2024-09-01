const mongoose = require('mongoose');
const { MongodbURL } = require('../secret');
const connectDB = async (options) => {
    try {
        
        if (mongoose.connection.readyState >= 1) return;
    
        await mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
    
        console.log('MongoDB connected');
      } catch (error) {
        console.error('MongoDB connection error:', error);
      }
};


module.exports = connectDB;