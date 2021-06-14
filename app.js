const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Api is working"));

const port = process.env.port || 8088;
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = {
  app,
};
