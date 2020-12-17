const api = require('express').Router();

api.use('/long-polling', require('./longPolling'));
api.use('/short-polling', require('./shortPoling'));
api.use('/sse', require('./serverSendEvents'));

module.exports = api;
