'use strict';

function logger(req, res) {
    console.log(`Request: ${req.method}`);
}

module.exports = logger;
