'use strict';

require('dotenv').config();

const express = require('express');
const logger = require('./middleware/logger');
const validateQuery = require('./middleware/validator');
const notFoundHandler = require('./error-handlers/404');
const serverErrorHandler = require('./error-handlers/500');
const app = express();

const PORT = process.env.PORT || 3002;

app.use(logger);

app.get('/person', validateQuery, (req, res, next) => {
    let { name } = req.query;
    let object = {
        name: name,
    };
    res.status(200).json(object);
});

app.use('*', notFoundHandler);

app.use(serverErrorHandler);

module.exports = {
    server: app,
    start: () => app.listen(PORT, () => console.log(`Running on port ${PORT}`)),
};
