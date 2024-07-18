const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const handleRequestError = require('./error/errorHandler');
const { connectMongoDBAtlas, dbConnectionError } = require('./db/connectMongoAtlas');
const { dbConnectionErrorMsg, dbFindErrorMsg, locationParameterErrorMsg } = require('./error/errorMessages');
const {dbFindError , findLocation}  = require('./db/dbQueries');

// middlewares for the app
app.use(express.json());
// cors enabled for sharing
app.use(cors());

// MongoDb Atas Connection
connectMongoDBAtlas();

// home route
app.get('/', (req, res) => {
// sending if the user hit home 
    res.status(401).send(
        {
            error: 'You Hit Home Route',
            suggestion: 'Verify the API endpoint'
        });
});


app.get('/data', async (req, res) => {
    // checking the if the any error is there in database
    if (dbConnectionError || dbFindError) {
        dbConnectionError ? handleRequestError(res, dbConnectionErrorMsg, 500) : handleRequestError(res,dbFindErrorMsg,500);
    } else {
        const { location } = req.query;
        // checking the location parameter is there
        if (!location) {
            handleRequestError(res, locationParameterErrorMsg, 400);
        } else {
            // sending the actual response
            const locationData = await findLocation(location);
            res.status(200).send(locationData);
        }
    }
});

// except the data path
app.get('*', (req, res) => {
// sending if the use hit no routes
    res.status(401).send(
        {
            error: 'You Hit Wrong path',
            suggestion: 'Verify the API endpoint'
        });
});


app.listen(process.env.PORT || 2500, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(`Server is Running On PORT ${process.env.PORT || 2500}`);
    }
});



