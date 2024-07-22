// this file contains all error messages

const queryErrorMsg= {
    error: 'Query parameter not found',
    suggestion: 'Request with query parameter'
};

const locationParameterErrorMsg = {
    error: 'Location parameter not found',
    suggestion: 'Request with correct Query parameter'
} ;

const dbConnectionErrorMsg = {
    error : 'Internal database Connection Error',
    suggestion : 'Contact Adminstration'
};

const dbFindErrorMsg = {
    error: 'Internal database operation error',
    suggestion : 'Contact Adminstration'

};
const locationNotFoundError = {
    error : 'No vehicles found',
    suggestion : 'we are trying to add more...'
}
module.exports = {dbConnectionErrorMsg ,queryErrorMsg,dbFindErrorMsg,locationParameterErrorMsg , locationNotFoundError};