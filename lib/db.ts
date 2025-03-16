import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

export async function connectToDatabase() {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("🟢 Already connected to MongoDB");
      return;
    }

    console.log("🔄 Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI,{dbName: "portfolio-website"});
    console.log("✅ Successfully connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
}
