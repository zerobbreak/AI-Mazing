import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if(!process.env.MONGODB_URI) return console.log("MongoDB Url not found");
    if(isConnected) return console.log("Already connected to MongoDB");

    try {
        if (process.env.MONGODB_URI) {
            await mongoose.connect(process.env.MONGODB_URI);
        } else {
            throw new Error("MongoDB URI is not defined");
        }
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error);
    }
}