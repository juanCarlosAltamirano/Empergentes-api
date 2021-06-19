const express = require("express");
const { config } = require("dotenv");
const { connect } = require("./database");
const { coreModel } = require("./core");

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

const port = process.env.port || 8088;
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = {
  app,
};
