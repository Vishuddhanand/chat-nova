import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

function connectToDB() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("connected to DB")
        })
        .catch((err) => {
            console.log("error connecting to DB", err)
        })

}

export default connectToDB