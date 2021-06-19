const mongoose = require('mongoose');

const StatisticsSchema = new mongoose.Schema({
	timesGotUpInMonth: Number
});

const statisticsModel = mongoose.model("statistics", StatisticsSchema);

module.exports = {
    statisticsModel
};
