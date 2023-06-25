import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.DB);
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
