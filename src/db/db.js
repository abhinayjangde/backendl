import mongoose from "mongoose";
process.loadEnvFile();

const db = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.DB_URL}`);
    console.log("Database is connected at :", connectionInstance.connection.host);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default db;
