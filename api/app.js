const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const thoughtRoutes = require("./routes/thought");

app.use("/thought", thoughtRoutes);
app.get("/", (req, res) => res.send("Welcome to Thoughts.FM"));

module.exports = app;
