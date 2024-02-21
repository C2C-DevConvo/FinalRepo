import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://admin:GFidtnZiHCQ7b46J@cluster0.2isyv0j.mongodb.net/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    }
    catch (error) {
        console.log("MONGODB connection FAILED", error);
        process.exit(1);
    }
}

connectDB();

export default connectDB;
