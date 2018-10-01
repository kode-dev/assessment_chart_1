const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

// Set up the test server
app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(cors({credentials: true, origin: true}));

const PORT = 3000;

const SCALE = 10000;

let TS = 0;

app.get('/item', function(req, res, next) {
    try {
        TS += 100;
        res.send({
            value: Math.floor(Math.random() * 10000),
            ts: TS
        });
    }
    catch (error) {
        next(error);
    }
});

app.listen(PORT, () => {
    console.log(`Web server listening on: ${PORT}`);
});

module.exports = app;
