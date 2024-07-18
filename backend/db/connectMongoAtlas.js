const mongoose = require('mongoose');
let dbConnectionError = false;

// connect the mongodb atlas cloud
const connectMongoDBAtlas = async () => {
    try {
        await mongoose.connect(process.env.MONGO_ATLAS_URI);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("successfully connected to MongoDB!");
    } catch (err) {
        // setting if error occur while connection
        dbConnectionError = true;
        console.log(err);
    }
};


module.exports = {connectMongoDBAtlas , dbConnectionError};