const mongoose = require('mongoose');

const StatisticsSchema = new mongoose.Schema({
	timesGotUpInMonth: Number
});

const StatisticsModel = mongoose.model("Statistics", StatisticsSchema);

module.exports = {
StatisticsModel
};
