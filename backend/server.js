const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()
const handleRequestError = require('./error/handleRequestError');
const db = require('./schema');
let dbError = false;

// middlewares for the app
app.use(express.json());

// home route
app.get('/', (req, res) => {
    res.status(500).send(
        {
            error: 'You Hit Home Route',
            suggestion: 'Verify the API endpoint'
        });
});


app.get('/data', (req, res) => {
    const { location } = req.query;
    if (!location) {
        handleRequestError(req, res);
    } else {
        res.status(200).send({ data: location })
    }
});

// except the data path
app.get('*', (req, res) => {
    res.status(500).send(
        {
            error: 'You Hit Wrong path',
            suggestion: 'Verify the API endpoint'
        });
});


app.listen(process.env.PORT || 2501, (err) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log(`Server is Running On PORT ${process.env.PORT || 2500}`)
    }
});

async function connectMongoDBAtlas() {
    try {
        await mongoose.connect(process.env.MONGO_ATLAS_URI);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (err) {
        dbError = true;
    }
}
connectMongoDBAtlas().catch(console.log(dbError));

const data = async () => {
    try {
        const fd = await db.find({});
        console.log(fd.length);
    }catch(err){
        dbError = true;
    }
};

data().catch((err) => console.log(dbError) );

