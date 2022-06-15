'use strict';


const express = require('express');
const app = express();

// const logger = require('./middleware/logger');
const validateQuery = require('./middleware/validator');
const notFoundHandler = require('./error-handlers/404');
const serverErrorHandler = require('./error-handlers/500');

const PORT = process.env.PORT || 3002;

// app.use(logger);

app.get('/person', validateQuery, (req, res) => {
    let { name } = req.query;
    let object = {
        name: name,
    };
    res.status(200).json(object);
});

app.use('*', notFoundHandler);

app.use(serverErrorHandler);

function start() {
    app.listen(PORT, () => console.log(`Running on port ${PORT}`));
}

module.exports = {
    server: app,
    start: start
};
