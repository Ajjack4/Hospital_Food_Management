import mongoose from "mongoose";

type ConnectionObject = {
  isConnected: boolean;  // Changed from number to boolean
};

const Connection: ConnectionObject = {
  isConnected: false,  // Initialize isConnected to false
};

async function dbConnect(): Promise<void> {
  if (Connection.isConnected) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    // Check if the MONGODB_URI is set
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not set");
    }

    // Connect to MongoDB using the connection string
    const db = await mongoose.connect(process.env.MONGODB_URI);

    // Update isConnected to true if the connection is successful
    Connection.isConnected = db.connections[0].readyState === 1;  // 1 means connected
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    process.exit(1);  // Exit the process if the connection fails
  }
}

export default dbConnect;
