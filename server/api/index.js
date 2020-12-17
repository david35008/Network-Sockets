const api = require('express').Router();

api.use('/long-polling', require('./longPolling'));

module.exports = api;
