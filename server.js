const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

module.exports = app;

const PORT = 4001;

// Parsing middleware
app.use(bodyParser.json());

// Logging middleware
app.use(morgan("dev"));


const apiRouter = require("./server/api");
app.use("/api", apiRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
