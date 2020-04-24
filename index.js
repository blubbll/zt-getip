const //imports
    fetch = require("node-fetch"),
    express = require("express"),
    app = express();

app.set('trust proxy');

//get current ip
app.get("/ip", (req, res) => {
    res.json({
        ip: req.ip.split("::ffff:")[1]
    });
});

app.get("/", (req, res) => {
    res.send("Pino says hello");
});

const listener = app.listen(3000, () => {
    console.log(`IP-Server listening on port ${listener.address().port}`);
});
