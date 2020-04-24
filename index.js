const //imports
    fetch = require("node-fetch"),
    express = require("express"),
    app = express();

app.set('trust proxy');

app.get("/ip", (req, res) => {

    res.json(req.ip);

});

app.get("/", (req, res) => {
    res.send("Pino says hello");
});

const listener = app.listen(3000, () => {
    console.log(`IP-Server listening on port ${listener.address().port}`);
});
