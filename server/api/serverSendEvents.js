const sseRouter = require("express").Router();
const eventEmitter = require("../helpers/eventEmitter");

sseRouter.use(require("../middleware/serverSentEvents"));
// get all data
sseRouter.get("/", (req, res) => {
    eventEmitter.on("newData", (data) => {
        const notificationsData = {
            name: "There is new data on the server",
            message: data,
        };
        res.sendEventStreamData(notificationsData);
    });
});

sseRouter.post("/", (req, res) => {
    eventEmitter.emit("newData", req.body.message);
    res.sendStatus(200)
});


module.exports = sseRouter;
