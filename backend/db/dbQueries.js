const db = require('./schema');
const {locationNotFoundError} = require('../error/errorMessages')
let dbFindError = false;

 async function findLocation (location) {
    try {
        const data= await db.find({nearLocation : location});
        if(!data.length){
            // sending error message if the no data found
            console.log(locationNotFoundError);
            return locationNotFoundError;
        }else{
            // returning the data
            return data;
        }
    }catch(err){
        // setting if the error occurs
        dbFindError = true;
        console.log(err);
    }
};


module.exports = {dbFindError , findLocation}