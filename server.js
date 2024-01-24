const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

require('dotenv').config()
console.log(process.env)

module.exports = app;

// Parsing middleware
app.use(bodyParser.json());

// Logging middleware
app.use(morgan("dev"));


const apiRouter = require("./server/api");
app.use("/api", apiRouter);

app.listen(() => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
