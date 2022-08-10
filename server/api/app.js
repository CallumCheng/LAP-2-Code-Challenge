const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const thoughtRoutes = require("./routes/thought");

app.use("/thought", thoughtRoutes);
app.get("/", (req, res) => res.send("Welcome to Thoughts.FM"));

module.exports = app;
