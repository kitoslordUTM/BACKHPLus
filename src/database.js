// db.js
import mongoose from 'mongoose';
import { mongodb_Uri } from './config/config';

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://djjuliomex11:5vwygwzAV6lmeXQD@healtydb.kj6sv.mongodb.net/?retryWrites=true&w=majority&appName=HealtyDB");
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1); // Si no se puede conectar, terminamos la aplicación
  }
};

export default connectDB;
