const mongoose = require("mongoose");

const connectionToDB = async () => {
    try {
        const  { connection } = await mongoose.connect(
            process.env.MONGO_URI
        )
        if(connection) {
            console.log(`Connection to MongoDB: ${connection.host}`);
            return connection;
        }
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
} 

module.exports = connectionToDB;