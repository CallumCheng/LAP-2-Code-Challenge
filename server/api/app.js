const express = require("express");
const app = express();
const cors = require("cors");

const thoughtRoutes = require("./routes/thought");

app.use(cors());

app.use("/", thoughtRoutes);

module.exports = app;
