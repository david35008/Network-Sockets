const longPollingApi = require('express').Router();

const LIMIT = 20;
const DELAY = 1000;
let connections = []
let counter = 0;

longPollingApi.get("/", (req, res, next) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8")
    res.setHeader("Transfer-Encoding", "chunked")
    connections.push(res)
    if (counter >= 20) {
        connections = [];
        connections.push(res)
        console.log('Restart long-polling');
        counter = 0;
        setTimeout(run, DELAY)
    }
})

function run() {
    // console.log(counter)
    if (++counter > LIMIT) {
        connections.map(res => {
            res.write("END\n")
            res.end()
        })
        connections = [];
    } else {
        connections.map((res, i) => {
            res.write(`Hello user ${i + 1}! Response: ${counter} \n`)
        })
        setTimeout(run, DELAY)
    }
}

setTimeout(run, DELAY)

module.exports = longPollingApi;