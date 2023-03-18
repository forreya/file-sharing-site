import mongoose from "mongoose";

const connectDatabase = async () => {
  const URI = process.env.MONGO_URI
  const connection = mongoose.connection
  
  try {
    await mongoose.connect(URI!)
    console.log('Database connection successful.')
  } catch (error: any) {
    // catch any errors that occur during the initial connection
    console.log('There was an error: '+ error.message)
  }

  // handle any errors that occur after the connection has been established
  connection.on("Error", () => console.log('Connection failed.'))
}

export default connectDatabase;

