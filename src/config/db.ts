import mongoose from 'mongoose';

// function connectDB() {
//   mongoose.connect('mongodb://127.0.0.1:27017/todo');
//   console.log("db connected");
// }


const connectDB = async () => {
  const db = process.env.MONGO_URI
  
  if (!db) {
    throw new Error("DB connection url not present");
  }
  try {
      await mongoose.connect(db);

      console.log("MongoDB is connected");
  } catch (err) {
      console.error();
      process.exit(1);
  }
};



export default connectDB;