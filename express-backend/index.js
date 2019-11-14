const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const playersRouter = require("./routes/players");

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(cors());

app.use(express.json());


app.use("/players", playersRouter);

app.listen(port, () => {
    console.log('running on port ' + port);
});

module.exports = app;