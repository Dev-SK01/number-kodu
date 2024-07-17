function handleRequestError(req, res) {
    if (!req.query) {
        res
            .status(400)
            .send({
                error: 'Query parmeter not found',
                suggestion: 'Request with query parameter'
            });
    };
    if (!req.query.location) {
        res
            .status(400)
            .send({
                error: 'Location parameter not found',
                suggestion: 'Request with correct Query parameter'
            });
    }
}

module.exports = handleRequestError;