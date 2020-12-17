const express = require('express');
const path = require('path');
const app = express();
app.use(express.json({}));

app.use('/api', require('./api'));

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.use('*', (req, res) => {
    res.sendStatus(404);
});

module.exports = app;
