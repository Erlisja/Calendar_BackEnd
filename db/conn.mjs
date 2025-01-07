import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// Global configuration 

const mongoURI = process.env.ATLAS_URI; 
const db = mongoose.connection;

// connect to mongoose
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
})

export default db;
