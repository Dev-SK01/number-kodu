// This file contains the all teh error handling functions


// handling the request error;
function handleRequestError(res , message , statusCode) {
    res
    .status(statusCode)
    .send(message);
}

module.exports = handleRequestError;