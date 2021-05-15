var express = require("express");
var cookieParser = require("cookie-parser");
var cors = require("cors");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var fetch = require("./controller/fetch-cron");

var app = express();
fetch();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use(cookieParser());

app.use("/", indexRouter);

module.exports = app;
