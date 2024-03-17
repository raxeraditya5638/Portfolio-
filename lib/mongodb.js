import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    const Connect = await mongoose.connect(process.env.MONGODB_URI);
    if (!Connect) {
      console.log("not connected database uri");
      return;
    }
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};
