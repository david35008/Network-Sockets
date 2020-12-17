const app = require('./app');
const port = 8080;
const websocket = require('./api/websocket')

app.listen(port, () => {
    console.log(`Example streaming app listening at http://localhost:${port}`);
});
const webSocketsServerPort = 8081
websocket.listen(webSocketsServerPort, () => {
    console.log(`Example websocket app listening at http://localhost:${webSocketsServerPort}`);
});
