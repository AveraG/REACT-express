const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

const port = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(cors());

app.use(bodyParser.erlencoded({ estended:true }));
app.use(bodyParser.json());

const playersRouter = require("./routes/players");
app.use("/players", playersRouter);

app.listen(port, () => {
    console.log('running on' + port);
});

module.exports = app;