import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "mern-todo",
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.log("MongoDB Connection Error", err);
  }
};
