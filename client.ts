const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  isSit: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

// Compile model from schema
var SomeModel = mongoose.model("SomeModel", SomeModelSchema);
