const shortPollingApi = require('express').Router();

let counter = 0;
shortPollingApi.get("/", (req, res, next) => {
    counter++
    res.send(`Short Polling Response number ${counter}`)
})

module.exports = shortPollingApi;