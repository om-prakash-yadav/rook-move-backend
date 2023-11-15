import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

export const MONGO_DB_URL = process.env.MONGO_DB_URL ?? '';