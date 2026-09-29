const mongoose = require("mongoose");

let isConnected = false;

const connectDB = async () => {
    if (isConnected && mongoose.connection.readyState === 1) {
        return;
    }

    try {
        await mongoose.connect(process.env.DB_KEY);
        isConnected = true;
        console.log("Database is Connected");
    } catch (error) {
        isConnected = false;
        console.log("Database Connection Error:", error);
        throw error;
    }
};

module.exports = connectDB;