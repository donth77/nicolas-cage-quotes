"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const boolParser = require("express-query-boolean");
const {
  getRandomQuotes,
  getRandomQuotesForYear
} = require("./getRandomQuotes");
const schema = require("./schema.json");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(boolParser());

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
});

app.all("*", (req, res, next) => {
  console.log(`${dateFormatter.format(new Date())} - request for ${req.path}`);
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/quotes/:num?", (req, res) => {
  if (req.query.year && !req.query.movie) {
    res.send(
      getRandomQuotesForYear(
        parseInt(req.params.num, 10) || 1,
        req.query.year,
        req.query.info
      )
    );
    return;
  }
  res.send(
    getRandomQuotes(
      parseInt(req.params.num, 10) || 1,
      req.query.movie,
      req.query.info
    )
  );
});

app.get("/schema", (req, res) => {
  res.set("Cache-Control", "max-age=172800, stale-while-revalidate=3600");
  res.json(schema);
});

app.listen(port, () => {
  console.log("Server running on port", port);
});
