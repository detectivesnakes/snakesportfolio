// imports
const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

// app
const app = express();

// db connection

// middlewares
app.use(cors({ origin: true, credentials: true }));
app.use(morgan("dev"));

// routes

// ports
const port = process.env.PORT || 8080; // backend port

// listener
const server = app.listen(port, () =>
  console.log(`Server is running on ${port}`)
);
