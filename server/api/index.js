const api = require('express').Router();

api.use('/long-polling', require('./longPolling'));
api.use('/short-polling', require('./shortPoling'));

module.exports = api;
