const express = require("express");
const { config } = require("dotenv");
const { connect } = require("./database");

config();
const app = express();

app.get("/", (req, res) => res.send("Api is working"));

app.get("/api", (req, res) => res.send());

connect();

const port = process.env.port || 8088;
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = {
  app,
};
