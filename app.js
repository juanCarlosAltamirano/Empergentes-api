const express = require("express");
const { config } = require("dotenv");
const { connect } = require("./database");
const { coreModel } = require("./core");
const { StatisticsModel } = require("./StatisticsModel");
const asyncHandler = require('express-async-handler')

config();
const app = express();

app.get("/", (req, res) => res.send("Api is working"));

app.post("/api", (req, res, next) => {
  coreModel.create({}, (err) => {
    if (err) {
      return res.status(500);
    }
    return res.status(200);
  });
  res.send();
});


connect();

app.get("/statistics", asyncHandler(async(req, res, next) => {
  const element = await StatisticsModel.find();
  console.log("Element", element);
  res.sendStatus(202);
}));


const port = process.env.port || 8088;
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = {
  app,
};
