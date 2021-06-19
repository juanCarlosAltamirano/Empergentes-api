const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const coreSchema = new Schema({
  isSit: { type: Boolean, default: true },
  updated: { type: Date, default: Date.now },
});

// Compile model from schema
const coreModel = mongoose.model("core", coreSchema);

module.exports = {
  coreModel,
};
