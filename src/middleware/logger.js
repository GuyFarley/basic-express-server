'use strict';

function logger(req, res, next) {
    console.log(`Request: ${req.method}`);
}

module.exports = logger;
