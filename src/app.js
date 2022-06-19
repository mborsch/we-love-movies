if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require("cors");
const moviesRouter = require("./movies/movies.router");
const reviewsRouter = require("./reviews/reviews.router");

const app = express();

app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);
module.exports = app;
