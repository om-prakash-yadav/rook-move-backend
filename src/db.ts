import mongoose from "mongoose";
import { MONGO_DB_URL } from "./constants";

export const connect = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_DB_URL as string, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useNewUrlParser: true,
    });
    console.log("Connected to MongoDB 🚀");
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error) {
      const errorMessage = error.toString();
      process.exit(1);
    }
  }
};

export const disconnect = async (): Promise<void> => {
  await mongoose.connection.close();
};
