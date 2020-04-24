const //imports
    fetch = require("node-fetch"),
    express = require("express"),
    app = express();

app.set('trust proxy');

app.get("/ip", (req, res) => {

    console.log(1)

});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
