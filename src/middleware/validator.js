'use strict';

function validateQuery(req, res) {
    let { name } = req.query;
    if (!name) {
        next('Please enter a name query parameter such as: /person?name=Guy');
    } else {
        console.log('name:', name);
    }
    next();
}

module.exports = validateQuery;
